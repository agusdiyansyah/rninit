import React from 'react';
import { Image, ImageStyle, StyleProp, StyleSheet, TouchableOpacity } from 'react-native';
import icons, { IconsType } from '../common/constant/icons';

type IconComponentType = {
    onPress?: () => void;
    icon: IconsType;
    style?: StyleProp<ImageStyle>;
    size?: number;
};

const IconComponent = ({
    size = 32,
    onPress,
    icon,
    style,
}: IconComponentType): React.JSX.Element => {
    const image = (
        <Image
            source={icons[icon as keyof typeof icons]}
            style={[styles({ size: size }).image, style]}
        />
    );

    if (onPress) {
        return <TouchableOpacity onPress={onPress}>{image}</TouchableOpacity>;
    }
    return image;
};

const styles = (prop: { size: number }) =>
    StyleSheet.create({
        image: {
            width: prop.size,
            height: prop.size,
            resizeMode: 'cover',
        },
    });

export default IconComponent;
