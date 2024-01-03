import { useEffect, useState } from 'react';
import * as Users from '../apis/get.users.data';
import { FetchDataType } from '../types/fetch.data.type';

const useGetUsers = (
    param: { autoload: boolean } = { autoload: true },
): FetchDataType<Users.DataType | null> => {
    const [loading, set_loading] = useState(false);
    const [data, set_data] = useState<Users.DataType | null>(null);

    const load = async () => {
        set_loading(true);

        const response = await Users.getUsers();
        console.log('Load Users');

        set_data(response);

        set_loading(false);
    };

    useEffect(() => {
        if (param.autoload) {
            load();
        }
    }, [param.autoload]);

    return { loading, data, load };
};

export default useGetUsers;
