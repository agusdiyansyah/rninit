import axios, { AxiosError } from 'axios';

type ResponseSuccess = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}[];
type ResponseError = {
    message: string;
};

export type DataType =
    | { type: 'success'; payload: ResponseSuccess }
    | { type: 'error'; payload: ResponseError };

export const getUsers = async (): Promise<DataType> => {
    try {
        return new Promise(async resolve => {
            setTimeout(async () => {
                const response = await axios.get('users');
                resolve({ type: 'success', payload: response.data as ResponseSuccess });
            }, 1000);
        });
    } catch (error) {
        const err = error as AxiosError;
        return { type: 'error', payload: { message: err.message } };
    }
};
