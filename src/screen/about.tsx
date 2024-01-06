import { RouteProp } from '@react-navigation/native';
import { RootStackParamType } from 'components/navigation/type';
import React from 'react';
import { Text, View } from 'react-native';
import useFavoriteController from '../controllers/favorite.controller';

type AboutType = {
    route: RouteProp<RootStackParamType, 'About'>;
};

const AboutScreen: React.FC<AboutType> = props => {
    const param = props.route.params;
    const controller = useFavoriteController();

    return (
        <View>
            <Text>{param?.id}</Text>
            {controller.users.loading ? (
                <Text>Loading ...</Text>
            ) : (
                controller.users.data?.type === 'success' &&
                controller.users.data.payload.map((e, i) => <Text key={i}>{e.email}</Text>)
            )}
        </View>
    );
};

export default AboutScreen;
