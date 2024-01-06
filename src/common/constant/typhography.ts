import { Dimensions, StyleSheet } from 'react-native';

const { fontScale } = Dimensions.get('window');
const convertFontSize = (size: number): number => size / fontScale;
const defaultFontStyle = {
    color: 'black',
};

export const fontFamsSelector = (
    fams:
        | 'Montserrat-Black'
        | 'Montserrat-BlackItalic'
        | 'Montserrat-Bold'
        | 'Montserrat-BoldItalic'
        | 'Montserrat-ExtraBold'
        | 'Montserrat-ExtraBoldItalic'
        | 'Montserrat-ExtraLight'
        | 'Montserrat-ExtraLightItalic'
        | 'Montserrat-Italic'
        | 'Montserrat-Light'
        | 'Montserrat-LightItalic'
        | 'Montserrat-Medium'
        | 'Montserrat-MediumItalic'
        | 'Montserrat-Regular'
        | 'Montserrat-SemiBold'
        | 'Montserrat-SemiBoldItalic'
        | 'Montserrat-Thin'
        | 'Montserrat-ThinItalic',
) => fams;

export const title = StyleSheet.create({
    hero: {
        ...defaultFontStyle,
        fontFamily: fontFamsSelector('Montserrat-Bold'),
        fontSize: convertFontSize(32),
        lineHeight: convertFontSize(36),
    },
    large: {
        ...defaultFontStyle,
        fontFamily: fontFamsSelector('Montserrat-Bold'),
        fontSize: convertFontSize(24),
        lineHeight: convertFontSize(28),
    },
    primary: {
        ...defaultFontStyle,
        fontFamily: fontFamsSelector('Montserrat-Bold'),
        fontSize: convertFontSize(20),
        lineHeight: convertFontSize(28),
    },
});

export const subHead = StyleSheet.create({
    semiBold: {
        ...defaultFontStyle,
        fontFamily: fontFamsSelector('Montserrat-SemiBold'),
        fontSize: convertFontSize(18),
        lineHeight: convertFontSize(24),
    },
    medium: {
        ...defaultFontStyle,
        fontFamily: fontFamsSelector('Montserrat-Medium'),
        fontSize: convertFontSize(18),
        lineHeight: convertFontSize(24),
    },
});

export const body = StyleSheet.create({
    semiBold: {
        ...defaultFontStyle,
        fontFamily: fontFamsSelector('Montserrat-SemiBold'),
        fontSize: convertFontSize(18),
        lineHeight: convertFontSize(24),
    },
    regular: {
        ...defaultFontStyle,
        fontFamily: fontFamsSelector('Montserrat-Medium'),
        fontSize: convertFontSize(17),
        lineHeight: convertFontSize(22),
    },
});

export const caption = StyleSheet.create({
    medium: {
        ...defaultFontStyle,
        fontFamily: fontFamsSelector('Montserrat-Medium'),
        fontSize: convertFontSize(14),
        lineHeight: convertFontSize(18),
    },
    regular: {
        ...defaultFontStyle,
        fontFamily: fontFamsSelector('Montserrat-Regular'),
        fontSize: convertFontSize(14),
        lineHeight: convertFontSize(18),
    },
    small: {
        ...defaultFontStyle,
        fontFamily: fontFamsSelector('Montserrat-Regular'),
        fontSize: convertFontSize(12),
        lineHeight: convertFontSize(14),
    },
    label: {
        ...defaultFontStyle,
        fontFamily: fontFamsSelector('Montserrat-Medium'),
        fontSize: convertFontSize(10),
        lineHeight: convertFontSize(14),
    },
    tabBar: {
        ...defaultFontStyle,
        fontFamily: fontFamsSelector('Montserrat-Medium'),
        fontSize: convertFontSize(10),
        lineHeight: convertFontSize(12),
    },
});
