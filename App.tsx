import React from 'react';
import MainNavigator from './src/common/components/navigation/main.navigator';
import AxiosConf from './src/common/configs/axios';

AxiosConf.interceptor();

const App = (): React.JSX.Element => {
    return <MainNavigator />;
};

export default App;
