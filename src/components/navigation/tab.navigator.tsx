import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useRef} from 'react';
import {Animated, StyleSheet} from 'react-native';
import {IconsType} from '../../common/constant/icons';
import {colors, sizes} from '../../common/constant/theme';
import FavoriteScreen from '../../screen/favorite';
import HomeScreen from '../../screen/home';
import SearchScreen from '../../screen/search';
import IconComponent from '../icon.component';
import {TabStackParamType} from './type';

const Tab = createBottomTabNavigator<TabStackParamType>();
const tabs: {
  name: IconsType;
  screen: ({navigation}: {navigation?: any}) => React.JSX.Element;
}[] = [
  {
    name: 'Home',
    screen: HomeScreen,
  },
  {
    name: 'Search',
    screen: SearchScreen,
  },
  {
    name: 'Favorite',
    screen: FavoriteScreen,
  },
];

const TabNavigator = (): React.JSX.Element => {
  const offsetAnimation = useRef(new Animated.Value(0)).current;

  const tabBarIconContent = (focused: boolean, name: IconsType) => (
    <IconComponent
      icon={name}
      size={35}
      style={{
        tintColor: focused ? colors.primary : colors.gray,
      }}
    />
  );

  return (
    <>
      <Tab.Navigator
        initialRouteName={'Home'}
        screenOptions={{
          headerShown: true,
          tabBarShowLabel: false,
        }}>
        {tabs.map((e, i: number) => (
          <Tab.Screen
            key={i}
            name={e.name as keyof TabStackParamType}
            component={e.screen}
            options={{
              tabBarIcon: ({focused}) => tabBarIconContent(focused, e.name),
              lazy: true,
            }}
            listeners={{
              focus: () =>
                Animated.spring(offsetAnimation, {
                  toValue: i * (sizes.width / tabs.length),
                  useNativeDriver: true,
                }).start(),
            }}
          />
        ))}
      </Tab.Navigator>

      <Animated.View
        style={{
          ...styles.indicator,
          transform: [{translateX: offsetAnimation}],
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  indicator: {
    position: 'absolute',
    width: 15,
    height: 2,
    left: sizes.width / 3 / 2.23,
    bottom: 7,
    backgroundColor: colors.primary,
    zIndex: 100,
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default TabNavigator;
