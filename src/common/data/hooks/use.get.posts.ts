import { useEffect, useState } from 'react';
import * as Posts from '../apis/get.posts.data';
import { FetchDataType } from '../types/fetch.data.type';

const useGetPosts = (
    param: { autoload: boolean } = { autoload: true },
): FetchDataType<Posts.DataType | null> => {
    const [loading, set_loading] = useState(false);
    const [data, set_data] = useState<Posts.DataType | null>(null);

    const load = async () => {
        set_loading(true);

        const response = await Posts.getPostData();
        console.log('Load Posts');

        set_data(response);

        set_loading(false);
    };

    useEffect(() => {
        if (param.autoload) {
            load();
        }
    }, [param.autoload]);

    return { loading, load, data };
};

export default useGetPosts;
