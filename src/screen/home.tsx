import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import images from 'common/constant/images';
import { sizes } from 'common/constant/theme';
import { body, caption, subHead, title } from 'common/constant/typhography';
import useColor from 'common/hooks/use.color';
import Buttons from 'components/buttons';
import Icons from 'components/icons';
import { RootStackParamType } from 'components/navigation/type';
import useHomeController from 'controllers/home.controller';
import React, { Fragment } from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';

type HomeType = {
    navigation: NativeStackNavigationProp<RootStackParamType, 'Home'>;
};

const HomeScreen: React.FC<HomeType> = () => {
    const color = useColor();
    const controller = useHomeController();

    return (
        <SafeAreaView>
            <View>
                <ScrollView style={{ backgroundColor: color.background.main }}>
                    {/* popular post */}
                    <View
                        style={{
                            paddingBottom: 15,
                            borderBottomColor: color.systemGrayscale.gray5,
                            borderBottomWidth: 0.2,
                        }}>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: 15,
                            }}>
                            <Text style={[subHead.medium, { color: color.label.secondary }]}>Popular posts</Text>
                            <Pressable
                                onPress={() => {}}
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    gap: 8,
                                }}>
                                <Text style={[body.semiBold, { color: color.systemColor.blue }]}>See all</Text>
                                <View style={{ marginTop: 3 }}>
                                    <Icons.Chevron.Right size={15} color={color.systemColor.blue} />
                                </View>
                            </Pressable>
                        </View>

                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {controller.posts.data?.type === 'success' &&
                                controller.posts.data.payload.map((e, i, arr) => (
                                    <View
                                        key={i}
                                        style={{
                                            height: sizes.width / 2,
                                            width: sizes.width / 2,
                                            backgroundColor: color.systemColor.indigo,
                                            borderRadius: 16,
                                            padding: 15,
                                            marginLeft: 15,
                                            marginRight: arr.length - 1 === i ? 15 : 0,
                                            flex: 1,
                                            justifyContent: 'space-between',
                                        }}>
                                        <View>
                                            <Text
                                                style={[
                                                    title.primary,
                                                    {
                                                        color: 'white',
                                                        marginBottom: 5,
                                                    },
                                                ]}>
                                                {e.title}
                                            </Text>
                                            <Text style={[body.regular, { color: 'white' }]}>{e.subtitle}</Text>
                                        </View>

                                        <Text style={[caption.small, { color: 'black' }]}>{e.author}</Text>
                                    </View>
                                ))}
                        </ScrollView>
                    </View>

                    {/* promo */}
                    <View
                        style={{
                            paddingVertical: 15,
                            borderBottomColor: color.systemGrayscale.gray5,
                            borderBottomWidth: 0.2,
                        }}>
                        <View
                            style={{
                                flex: 1,
                                alignItems: 'flex-start',
                                paddingHorizontal: 15,
                                paddingBottom: 15,
                            }}>
                            <Buttons.XS title={'Promo'} color={color.systemColor.orange} />
                        </View>

                        <View
                            style={{
                                flex: 1,
                                alignItems: 'center',
                            }}>
                            <Text style={[title.primary, { color: color.label.primary }]}>Promo header</Text>
                            <Text style={[body.regular, { color: color.label.secondary }]}>Short text description</Text>
                            <Image style={{ marginTop: -40 }} source={images.Saly1IMG} />
                        </View>
                    </View>

                    {/* recent post */}
                    <View
                        style={{
                            paddingTop: 15,
                        }}>
                        {/* navigate to all recent post */}
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingHorizontal: 15,
                                paddingBottom: 15,
                            }}>
                            <Text style={[subHead.medium, { color: color.label.secondary }]}>Recent posts</Text>
                            <Pressable
                                onPress={() => {}}
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    gap: 8,
                                }}>
                                <Text style={[body.semiBold, { color: color.systemColor.blue }]}>See all</Text>
                                <View style={{ marginTop: 3 }}>
                                    <Icons.Chevron.Right size={15} color={color.systemColor.blue} />
                                </View>
                            </Pressable>
                        </View>
                        {/* top recent post */}
                        {controller.recent_posts.data?.type === 'success' && (
                            <Fragment>
                                <View
                                    style={{
                                        paddingBottom: 15,
                                        paddingHorizontal: 15,
                                    }}>
                                    <View
                                        style={{
                                            backgroundColor: color.systemColor.teal,
                                            borderRadius: 16,
                                            padding: 15,
                                            height: 180,
                                            flex: 1,
                                            justifyContent: 'space-between',
                                        }}>
                                        <View style={{ width: sizes.width / 2 - 50 }}>
                                            <Text
                                                style={[
                                                    title.large,
                                                    {
                                                        color: color.background.main,
                                                        marginBottom: 8,
                                                    },
                                                ]}>
                                                {controller.recent_posts.data.payload[0].title}
                                            </Text>
                                            <Text style={[body.regular, { color: color.background.main }]}>{controller.recent_posts.data.payload[0].subtitle}</Text>
                                        </View>
                                        <Text style={[caption.small, { color: color.label.primary }]}>{controller.recent_posts.data.payload[0].author}</Text>
                                        <View
                                            style={{
                                                position: 'absolute',
                                                right: 0,
                                                bottom: 0,
                                            }}>
                                            <Image style={{ width: 150, height: 150 }} source={images.Saly9IMG} />
                                        </View>
                                    </View>
                                </View>
                                {/* other recent post */}
                                <View>
                                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                        {controller.recent_posts.data.payload.slice(1).map((e, i, arr) => (
                                            <View
                                                key={i}
                                                style={{
                                                    padding: 15,
                                                    borderRadius: 16,
                                                    marginLeft: 15,
                                                    marginRight: arr.length - 2 === i ? 15 : 0,
                                                    width: 195,
                                                    height: 190,
                                                    flex: 1,
                                                    justifyContent: 'space-between',
                                                    backgroundColor: color.background.surface2,
                                                }}>
                                                <View>
                                                    <Text style={[title.primary, { color: color.label.primary, marginBottom: 8 }]}>{e.title}</Text>
                                                    <Text
                                                        style={[
                                                            body.regular,
                                                            {
                                                                color: color.label.secondary,
                                                            },
                                                        ]}>
                                                        {e.subtitle}
                                                    </Text>
                                                </View>

                                                <Text style={[caption.small, { color: color.label.primary }]}>{e.author}</Text>
                                            </View>
                                        ))}
                                    </ScrollView>
                                </View>
                            </Fragment>
                        )}
                    </View>

                    <View style={{ paddingBottom: 80 }} />
                </ScrollView>

                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: 15,
                    }}>
                    <Buttons.MD title={'Call To Action'} color={color.systemColor.blue} />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
