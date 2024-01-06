import { useEffect, useState } from 'react';
import recentPostsGet from '../apis/recent.posts.get';
import FetchDT from '../types/fetch';
import PostsGetDT from '../types/posts.get';
import RecentPostsGetDT from '../types/recent.posts.get';

const useRecentPostsGet = (
    param: { autoload: boolean } = { autoload: true },
): FetchDT<RecentPostsGetDT> => {
    const [loading, set_loading] = useState(false);
    const [data, set_data] = useState<PostsGetDT | null>(null);

    const load = async () => {
        set_loading(true);

        const response = await recentPostsGet();
        set_data(response);

        set_loading(false);
    };

    useEffect(() => {
        if (param.autoload) {
            load();
        }
    }, [param.autoload]);

    return { loading, load, data };
};

export default useRecentPostsGet;
