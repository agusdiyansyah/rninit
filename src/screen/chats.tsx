import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import images from 'common/constant/images';
import { sizes } from 'common/constant/theme';
import { body } from 'common/constant/typhography';
import useColor from 'common/hooks/use.color';
import Icons from 'components/icons';
import { RootStackParamType } from 'components/navigation/type';
import React from 'react';
import {
    Image,
    ImageRequireSource,
    Pressable,
    SafeAreaView,
    ScrollView,
    Text,
    View,
} from 'react-native';

type ChatsType = {
    navigation: NativeStackNavigationProp<RootStackParamType, 'Chats'>;
};

const ChatsScreen: React.FC<ChatsType> = () => {
    const color = useColor();

    const chats: { title: string; subtitle: string; icon: ImageRequireSource }[] = [
        {
            icon: images.SkullIMG,
            title: 'John Doe',
            subtitle: 'Text message preview long text in two strokes',
        },
        {
            icon: images.AlienIMG,
            title: 'Samuel Smith',
            subtitle: 'Text message preview',
        },
        {
            icon: images.RobotIMG,
            title: 'John Doe',
            subtitle: 'Text message preview long text',
        },
        {
            icon: images.ClownIMG,
            title: 'Samuel Smith',
            subtitle: 'Text message preview',
        },

        {
            icon: images.TenguIMG,
            title: 'John Doe',
            subtitle: 'Text message preview long text in two strokes',
        },
        {
            icon: images.AlienIMG,
            title: 'Samuel Smith',
            subtitle: 'Text message preview',
        },
        {
            icon: images.RobotIMG,
            title: 'John Doe',
            subtitle: 'Text message preview long text',
        },
        {
            icon: images.ClownIMG,
            title: 'Samuel Smith',
            subtitle: 'Text message preview',
        },
    ];

    return (
        <SafeAreaView>
            <View>
                <ScrollView
                    style={{
                        backgroundColor: color.background.main,
                        minHeight: sizes.height - 130,
                    }}>
                    {chats.map((e, i) => (
                        <View
                            key={i}
                            style={{
                                gap: 15,
                                flex: 1,
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                                padding: 15,
                                width: sizes.width,
                            }}>
                            <View
                                style={{
                                    flex: 1,
                                }}>
                                <View
                                    style={{
                                        width: 36,
                                        height: 36,
                                        borderRadius: 36,
                                        backgroundColor: color.label.primary,
                                    }}>
                                    <View
                                        style={{
                                            width: 36,
                                            height: 36,
                                            flex: 1,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                        <Image style={{ width: 24, height: 24 }} source={e.icon} />
                                    </View>
                                </View>
                            </View>

                            <View style={{ flex: 2, flexGrow: 10 }}>
                                <View>
                                    <Text style={[body.semiBold, { color: color.label.primary }]}>
                                        {e.title}
                                    </Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <Text style={[body.regular, { color: color.label.secondary }]}>
                                        {e.subtitle}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </ScrollView>

                <View style={{ position: 'absolute', bottom: 0, right: 0 }}>
                    <Pressable
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 50,
                            margin: 15,
                            backgroundColor: color.systemColor.blue,
                        }}>
                        <View
                            style={{
                                width: 50,
                                height: 50,
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <Icons.Action.StartChat size={18} color={color.background.main} />
                        </View>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ChatsScreen;
