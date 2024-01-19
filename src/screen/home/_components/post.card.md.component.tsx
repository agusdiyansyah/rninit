import { sizes } from 'common/constant/theme';
import { body, caption, title } from 'common/constant/typhography';
import useColor from 'common/hooks/use.color';
import React from 'react';
import { Text, View } from 'react-native';

type PostCardMDType = {
    marginLeft?: number;
    marginRight?: number;
    title: string;
    subtitle: string;
    author: string;
    titleColor?: string;
    subtitleColor?: string;
    authorColor?: string;
    backgroundColor: string;
};

const PostCardMDComponent = (param: PostCardMDType): React.JSX.Element => {
    const color = useColor();

    return (
        <View
            style={{
                padding: 15,
                borderRadius: 16,
                marginLeft: param.marginLeft ?? 0,
                marginRight: param.marginRight ?? 0,
                width: sizes.width / 2,
                height: sizes.width / 2,
                flex: 1,
                justifyContent: 'space-between',
                backgroundColor: param.backgroundColor,
            }}>
            <View>
                <Text style={[title.primary, { color: param.titleColor ?? color.label.primary, marginBottom: 8 }]}>{param.title}</Text>
                <Text style={[body.regular, { color: param.subtitleColor ?? color.label.secondary }]}>{param.subtitle}</Text>
            </View>

            <Text style={[caption.small, { color: param.authorColor ?? color.label.primary }]}>{param.author}</Text>
        </View>
    );
};

export default PostCardMDComponent;
