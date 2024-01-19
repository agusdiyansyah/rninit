import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamType } from 'common/components/navigation/type';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type PostsType = {
    navigation: NativeStackNavigationProp<RootStackParamType, 'Posts'>;
};

const PostsScreen: React.FC<PostsType> = () => {
    return (
        <SafeAreaView>
            <View>
                <ScrollView>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis vel enim, architecto, dolore distinctio mollitia non
                        quis, soluta nulla fuga veritatis. Quia dolorum blanditiis iure, ut esse temporibus nemo expedita.
                    </Text>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default PostsScreen;
