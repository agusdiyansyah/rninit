import { BASE_URL } from '@env';
import axios, { AxiosError, AxiosResponse, CanceledError } from 'axios';
import { Alert } from 'react-native';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common.Accept = 'application/json';

const AxiosConf = {
    interceptor: () => {
        axios.interceptors.request.use(config => {
            // const token = local_data().global.token;
            // if (token != '') {
            //     config.headers.Authorization = `Bearer ${token}`;
            // }

            return config;
        });

        axios.interceptors.response.use(
            (response: AxiosResponse) => response,
            (error: AxiosError) => {
                if (error instanceof CanceledError) {
                    console.log(error);
                }
                // const logout = useProsesLogout();

                switch (error.response?.status) {
                    // unauthorize | sesi login habis
                    case 401:
                        // window.location.href = 'landing';
                        break;

                    // forbiden | tidak memiliki permission
                    case 403:
                        // logout.submit();
                        // window.location.replace('/meriamkarbit/landing');
                        Alert.prompt(
                            'Mohon maaf, anda tidak memiliki akses untuk melakukan aksi tersebut',
                        );
                        break;

                    default:
                        break;
                }

                throw error;
            },
        );
    },
};

export default AxiosConf;
