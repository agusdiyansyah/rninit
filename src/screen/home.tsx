import { BASE_URL } from '@env';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { RootStackParamType } from '../components/navigation/type';

type ScreenType = NativeStackNavigationProp<RootStackParamType>;

const HomeScreen = ({ navigation }: { navigation: ScreenType }): React.JSX.Element => {
    return (
        <View style={style.container}>
            <Text>Home screen</Text>
            <Text>{BASE_URL}</Text>
            <Button title={'About page'} onPress={() => navigation.navigate('About')} />
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreen;
