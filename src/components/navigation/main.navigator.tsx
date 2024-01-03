import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StatusBar} from 'react-native';
import AboutScreen from '../../screen/about';
import TabNavigator from './tab.navigator';
import {RootStackParamType} from './type';

const Stack = createNativeStackNavigator<RootStackParamType>();

const MainNavigator = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator initialRouteName={'Root'}>
        <Stack.Screen
          name={'Root'}
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name={'About'} component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
