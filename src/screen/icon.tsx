import { body, caption, subHead, title } from 'common/constant/typhography';
import Icons from 'components/icons';
import React from 'react';
import { Text, View } from 'react-native';

const IconScreen: React.FC = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', gap: 5 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={[title.hero]}>Hero</Text>
                    <Text style={[title.large]}>Large</Text>
                    <Text style={[title.primary]}>Primary</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={[subHead.semiBold]}>Semi Bold</Text>
                    <Text style={[subHead.medium]}>Medium</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={[body.semiBold]}>Semi Bold</Text>
                    <Text style={[body.regular]}>Regular</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={[caption.medium]}>Medium</Text>
                    <Text style={[caption.regular]}>Regular</Text>
                    <Text style={[caption.small]}>Small</Text>
                    <Text style={[caption.label]}>Label</Text>
                    <Text style={[caption.tabBar]}>Tab Bar</Text>
                </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text>Essentials</Text>
                    <Icons.Essentials.Home />
                    <Icons.Essentials.Chat />
                    <Icons.Essentials.Profile />
                    <Icons.Essentials.Doc />
                    <Icons.Essentials.Navigation />
                    <Icons.Essentials.Search />
                    <Icons.Essentials.Following />
                    <Icons.Essentials.Follower />
                    <Icons.Essentials.Setting />
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text>Action</Text>
                    <Icons.Action.Add />
                    <Icons.Action.Remove />
                    <Icons.Action.Clear />
                    <Icons.Action.Close />
                    <Icons.Action.Create />
                    <Icons.Action.Edit />
                    <Icons.Action.Like />
                    <Icons.Action.Share />
                    <Icons.Action.StartChat />
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text>Status</Text>
                    <Icons.Status.Pending />
                    <Icons.Status.Approved />
                    <Icons.Status.Rejected />
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text>Arrow</Text>
                    <Icons.Arrow.Left />
                    <Icons.Arrow.Right />
                    <Icons.Arrow.Up />
                    <Icons.Arrow.Down />
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text>Chevron</Text>
                    <Icons.Chevron.Left />
                    <Icons.Chevron.Right />
                    <Icons.Chevron.Up />
                    <Icons.Chevron.Down />
                </View>
            </View>
        </View>
    );
};

export default IconScreen;
