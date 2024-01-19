import { body, caption } from 'common/constant/typhography';
import React from 'react';
import { Pressable, StyleProp, Text, TextStyle, ViewStyle } from 'react-native';

type ButtonType = {
    onPress?: () => void;
    titleStyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    title: string;
    color: string;
};

export default {
    XS: (prop: ButtonType): React.JSX.Element => {
        return (
            <Pressable
                style={() => [
                    {
                        borderRadius: 4,
                        height: 24,
                        paddingHorizontal: 10,
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: prop.color,
                    },
                    prop.containerStyle,
                ]}
                onPress={prop.onPress}>
                <Text style={[caption.label, { color: '#fff' }, prop.titleStyle]}>
                    {prop.title}
                </Text>
            </Pressable>
        );
    },
    MD: (prop: ButtonType): React.JSX.Element => {
        return (
            <Pressable
                style={() => [
                    {
                        borderRadius: 12,
                        height: 50,
                        paddingHorizontal: 10,
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: prop.color,
                    },
                    prop.containerStyle,
                ]}
                onPress={prop.onPress}>
                <Text style={[body.semiBold, { color: '#fff' }, prop.titleStyle]}>
                    {prop.title}
                </Text>
            </Pressable>
        );
    },
};
