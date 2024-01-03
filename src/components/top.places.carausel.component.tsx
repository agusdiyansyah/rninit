import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, shadow, sizes, spacing } from '../common/constant/theme';

const CARD_WIDTH = sizes.width - 100;
const CARD_HEIGHT = 200;
const CARD_WIDTH_SPACING = CARD_WIDTH + spacing.l;

const TopPlacesCarauselComponent = (param: {
    list: { id: number; title: string; image: any; location: string }[];
}): React.JSX.Element => {
    return (
        <FlatList
            data={param.list}
            horizontal
            snapToInterval={CARD_WIDTH_SPACING}
            decelerationRate={'fast'}
            showsHorizontalScrollIndicator={false}
            keyExtractor={i => i.id.toString()}
            renderItem={({ item, index }) => (
                <TouchableOpacity
                    style={[
                        styles.touchableOpacity,
                        { marginRight: index === param.list.length - 1 ? spacing.l : 0 },
                    ]}>
                    <View style={[styles.card, shadow.dark]}>
                        <View style={styles.imageBox}>
                            <Image style={styles.image} source={item.image} />
                        </View>

                        <View style={styles.titleBox}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.location}>{item.location}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )}
        />
    );
};

const styles = StyleSheet.create({
    touchableOpacity: {
        marginLeft: spacing.l,
    },
    card: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginVertical: 10,
    },
    imageBox: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: sizes.radius,
        overflow: 'hidden',
    },
    image: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        resizeMode: 'cover',
    },
    titleBox: {
        position: 'absolute',
        top: CARD_HEIGHT - 80,
        left: 16,
    },
    title: {
        fontSize: sizes.h3,
        fontWeight: 'bold',
        color: colors.white,
    },
    location: {
        fontSize: sizes.h3,
        color: colors.white,
    },
});

export default TopPlacesCarauselComponent;
