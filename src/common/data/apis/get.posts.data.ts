import axios, { AxiosError } from 'axios';

type ResponseSuccess = {
    title: string;
}[];
type ResponseError = {
    message: string;
};

export type DataType =
    | { type: 'success'; payload: ResponseSuccess }
    | { type: 'error'; payload: ResponseError };

export const getPostData = async (): Promise<DataType> => {
    try {
        return new Promise(async resolve => {
            setTimeout(async () => {
                const response = await axios.get('albums');
                resolve({ type: 'success', payload: response.data as ResponseSuccess });
            }, 2000);
        });
    } catch (error) {
        const err = error as AxiosError;
        return { type: 'error', payload: { message: err.message } };
    }
};
