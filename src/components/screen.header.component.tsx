import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { sizes, spacing } from '../common/constant/theme';

const ScreenHeaderComponent = (param: {
    mainTitle: string;
    secondTitle: string;
}): React.JSX.Element => {
    return (
        <View style={styles.container}>
            <Text style={styles.mainTitle}>{param.mainTitle}</Text>
            <Text style={styles.secondTitle}>{param.secondTitle}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: spacing.l,
        paddingVertical: spacing.l,
    },
    mainTitle: {
        fontSize: sizes.title,
        fontWeight: 'bold',
    },
    secondTitle: {
        fontSize: sizes.title,
    },
});

export default ScreenHeaderComponent;
