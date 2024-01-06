import colors from 'common/constant/colors';
import { useEffect, useState } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';

const useColor = () => {
    const [theme, set_theme] = useState<ColorSchemeName>();

    useEffect(() => {
        const subscription = Appearance.addChangeListener(({ colorScheme }) => {
            set_theme(colorScheme);
        });

        return () => subscription.remove();
    }, []);

    return colors[theme === 'dark' ? 'dark' : 'light'];
};

export default useColor;
