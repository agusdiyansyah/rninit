import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import images from 'common/constant/images';
import { subHead } from 'common/constant/typhography';
import useColor from 'common/hooks/use.color';
import Icons from 'components/icons';
import React, { ReactNode } from 'react';
import { Image, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ChatsScreen from 'screen/chats';
import HomeScreen from 'screen/home';
import IconScreen from 'screen/icon';
import { RootStackParamType } from './type';

const Tab = createBottomTabNavigator<RootStackParamType>();

const MainNavigator = (): React.JSX.Element => {
    const color = useColor();
    const tabBarLabelStyle = {
        marginTop: 0,
        marginBottom: 5,
    };
    const tabBarIcon = (props: {
        focused: boolean;
        children: 'home' | 'chats' | 'posts';
    }): ReactNode => {
        const colorIcon = props.focused ? color.systemColor.blue : color.systemGrayscale.gray2;
        const icon = {
            home: <Icons.Essentials.Home size={18} color={colorIcon} />,
            chats: <Icons.Essentials.Chat size={18} color={colorIcon} />,
            posts: <Icons.Essentials.Doc size={18} color={colorIcon} />,
        };

        return icon[props.children];
    };

    const headerRightHome = (): ReactNode => (
        <View
            style={{
                width: 36,
                height: 36,
                backgroundColor: color.label.primary,
                borderRadius: 36,
                marginRight: 15,
            }}>
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Image style={{ width: 25, height: 25 }} source={images.FaceIMG} />
            </View>
        </View>
    );

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName={'Home'}
                    screenOptions={{
                        tabBarStyle: {
                            backgroundColor: color.background.surface2,
                            elevation: 0, // for Android
                            shadowOffset: {
                                width: 0,
                                height: 0, // for iOS
                            },
                        },
                    }}>
                    <Tab.Screen
                        name={'Home'}
                        component={HomeScreen}
                        options={{
                            unmountOnBlur: true,
                            title: 'Home',
                            headerStyle: {
                                backgroundColor: color.background.surface1,
                            },
                            headerRight: headerRightHome,
                            headerTitleStyle: [subHead.semiBold, { color: color.label.primary }],
                            tabBarIcon: ({ focused }) => tabBarIcon({ focused, children: 'home' }),
                            tabBarLabelStyle,
                            tabBarActiveTintColor: color.systemColor.blue,
                            tabBarInactiveTintColor: color.systemGrayscale.gray2,
                        }}
                    />
                    <Tab.Screen
                        name={'Chats'}
                        component={ChatsScreen}
                        options={{
                            title: 'Chats',
                            // unmountOnBlur: true,
                            tabBarIcon: ({ focused }) => tabBarIcon({ focused, children: 'chats' }),
                            tabBarLabelStyle,
                            tabBarActiveTintColor: color.systemColor.blue,
                            tabBarInactiveTintColor: color.systemGrayscale.gray2,
                        }}
                    />
                    <Tab.Screen
                        name={'Icon'}
                        component={IconScreen}
                        options={{
                            title: 'My posts',
                            tabBarIcon: ({ focused }) => tabBarIcon({ focused, children: 'posts' }),
                            tabBarLabelStyle,
                            tabBarActiveTintColor: color.systemColor.blue,
                            tabBarInactiveTintColor: color.systemGrayscale.gray2,
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default MainNavigator;
