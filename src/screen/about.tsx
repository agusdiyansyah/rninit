import React from 'react';
import { Text, View } from 'react-native';
import useFavoriteController from '../controllers/favorite.controller';

const AboutScreen = (): React.JSX.Element => {
    const controller = useFavoriteController();

    return (
        <View>
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
