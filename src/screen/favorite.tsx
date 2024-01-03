import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { sizes } from '../common/constant/theme';
import useFavoriteController from '../controllers/favorite.controller';

const FavoriteScreen = (): React.JSX.Element => {
    const controller = useFavoriteController();

    return (
        <View>
            <ScrollView
                ref={controller.scrolController.scrollViewRef}
                showsVerticalScrollIndicator={false}
                onMomentumScrollEnd={controller.scrolController.handleOnMomentumScrollEnd}
                onScroll={controller.scrolController.handleOnScroll}>
                {/* refresh offset */}
                <View
                    style={{
                        height: controller.scrolController.offsetHeight,
                        backgroundColor: '#151518',
                    }}>
                    {/* &nbsp */}
                </View>
                {/* animation container */}
                <View
                    style={{
                        height: controller.scrolController.animationHeight,
                        backgroundColor: '#151518',
                        flex: 1,
                        alignItems: 'center',
                    }}>
                    {controller.scrolController.show_animation && (
                        <Image
                            source={{
                                uri: 'https://media.giphy.com/media/xTkcEQACH24SMPxIQg/giphy.gif',
                                height: controller.scrolController.animationHeight,
                                width: controller.scrolController.animationHeight,
                            }}
                        />
                    )}
                </View>

                <View style={{ minHeight: sizes.height }}>
                    <Text>refresh : {controller.refresh_top ? 'YA' : 'TIDAK'}</Text>

                    <View style={[style.container]}>
                        {!controller.users.loading &&
                            controller.users.data?.type === 'success' &&
                            controller.users.data.payload.map((e, i) => (
                                <View key={i} style={{ paddingVertical: 5 }}>
                                    <Text>{e.email}</Text>
                                </View>
                            ))}
                        {!controller.posts.loading &&
                            controller.posts.data?.type === 'success' &&
                            controller.posts.data.payload.map((e, i) => (
                                <View key={i} style={{ paddingVertical: 5 }}>
                                    <Text style={{ fontWeight: '500' }}>{e.title}</Text>
                                </View>
                            ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});

export default FavoriteScreen;
