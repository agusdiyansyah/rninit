import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { sizes, spacing } from '../common/constant/theme';
import IconComponent from './icon.component';

const MainHeaderComponent = ({ title }: { title: string }): React.JSX.Element => {
    const insets = useSafeAreaInsets();

    return (
        <View style={{ ...styles.container, marginTop: insets.top }}>
            <IconComponent icon={'Hamburger'} onPress={() => {}} />
            <Text style={styles.title}>{title}</Text>
            <IconComponent icon={'Notification'} onPress={() => {}} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: spacing.l,
    },
    title: {
        fontSize: sizes.h3,
        fontWeight: 'bold',
    },
});

export default MainHeaderComponent;
