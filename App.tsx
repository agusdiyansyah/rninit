import React from 'react';
import AxiosConf from './src/common/configs/axios';
import MainNavigator from './src/components/navigation/main.navigator';

AxiosConf.interceptor();

const App = (): React.JSX.Element => {
    return <MainNavigator />;
};

export default App;
