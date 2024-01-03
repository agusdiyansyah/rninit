import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// type SearchScreenType = NativeStackNavigationProp<TabStackParamType, 'Search'>;

const SearchScreen = (): React.JSX.Element => {
    return (
        <View style={style.container}>
            <Text>Search page</Text>
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

export default SearchScreen;
