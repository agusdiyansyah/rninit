import images from 'common/constant/images';
import { ImageRequireSource } from 'react-native';

const useChatsController = () => {
    const lists: { title: string; subtitle: string; icon: ImageRequireSource }[] = [
        {
            icon: images.SkullIMG,
            title: 'John Doe',
            subtitle: 'Text message preview long text in two strokes',
        },
        {
            icon: images.AlienIMG,
            title: 'Samuel Smith',
            subtitle: 'Text message preview',
        },
        {
            icon: images.RobotIMG,
            title: 'John Doe',
            subtitle: 'Text message preview long text',
        },
        {
            icon: images.ClownIMG,
            title: 'Samuel Smith',
            subtitle: 'Text message preview',
        },

        {
            icon: images.TenguIMG,
            title: 'John Doe',
            subtitle: 'Text message preview long text in two strokes',
        },
        {
            icon: images.AlienIMG,
            title: 'Samuel Smith',
            subtitle: 'Text message preview',
        },
        {
            icon: images.RobotIMG,
            title: 'John Doe',
            subtitle: 'Text message preview long text',
        },
        {
            icon: images.ClownIMG,
            title: 'Samuel Smith',
            subtitle: 'Text message preview',
        },
    ];

    return {
        lists,
    };
};

export default useChatsController;
