import { useEffect, useRef, useState } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView } from 'react-native';
import useGetPosts from '../common/data/hooks/use.get.posts';
import useGetUsers from '../common/data/hooks/use.get.users';

const useFavoriteController = () => {
    const [refresh_top, set_refresh_top] = useState(false);
    const [refresh_bottom, set_refresh_bottom] = useState(false);

    const users = useGetUsers({ autoload: true });
    const posts = useGetPosts({ autoload: true });
    const scrolController = useScrollViewController({
        refreshTop: refresh_top,
        refreshBottom: refresh_bottom,
        onTopRefresh: () => loadAllData(),
        onBottomRefresh: () => loadBottomData(),
    });

    const loadAllData = async () => {
        set_refresh_top(true);
        return await Promise.all([users.load(), posts.load()]).then(() => {
            set_refresh_top(false);
        });
    };

    const loadBottomData = async () => {
        set_refresh_bottom(true);
        return await Promise.resolve(posts.load()).then(() => {
            set_refresh_bottom(false);
        });
    };

    return {
        users,
        posts,
        refresh_top,
        loadAllData,
        scrolController,
    };
};

const useScrollViewController = <OnTopRefreshType, OnBottomRefreshType>({
    offsetHeight = 100,
    animationHeight = 50,
    refreshTop,
    refreshBottom,
    onTopRefresh,
    onBottomRefresh,
}: {
    offsetHeight?: number;
    animationHeight?: number;
    refreshTop: boolean;
    refreshBottom: boolean;
    onTopRefresh: () => Promise<OnTopRefreshType>;
    onBottomRefresh?: (() => Promise<OnBottomRefreshType>) | undefined;
}) => {
    // state

    const [show_animation, set_show_animation] = useState(true);
    // ref
    const scrollViewRef = useRef<ScrollView>(null);
    const tinggiKomponen = offsetHeight + animationHeight;

    const scrollToY = (y: number) => {
        scrollViewRef.current?.scrollTo({ x: 0, y });
    };

    const isCloseToBottom = ({
        layoutMeasurement,
        contentOffset,
        contentSize,
    }: NativeScrollEvent) => {
        const paddingToBottom = 120;
        return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
    };

    const handleOnMomentumScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (
            refreshTop === false &&
            e.nativeEvent.contentOffset.y < tinggiKomponen &&
            e.nativeEvent.contentOffset.y > 0
        ) {
            scrollToY(tinggiKomponen);
        }

        // is top
        if (e.nativeEvent.contentOffset.y === 0) {
            const a = new Date();
            console.log('Mulai ', a.getSeconds());

            onTopRefresh().then(() => {
                const d = new Date();
                console.log('Selesai ', d.getSeconds());
            });
        }

        // is bottom
        if (isCloseToBottom(e.nativeEvent)) {
            onBottomRefresh && onBottomRefresh();
        }
    };

    const handleOnScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        // console.log(e.nativeEvent.contentOffset.y);

        if (e.nativeEvent.contentOffset.y >= tinggiKomponen && !isCloseToBottom(e.nativeEvent)) {
            set_show_animation(false);
        }
    };

    useEffect(() => {
        if (refreshTop === false) {
            scrollToY(tinggiKomponen);
        } else {
            scrollToY(offsetHeight);
            set_show_animation(true);
        }
    }, [refreshTop, tinggiKomponen, offsetHeight]);

    return {
        show_animation,
        set_show_animation,
        handleOnMomentumScrollEnd,
        handleOnScroll,
        scrollToY,
        scrollViewRef,
        offsetHeight,
        animationHeight,
        tinggiKomponen,
    };
};

export default useFavoriteController;
