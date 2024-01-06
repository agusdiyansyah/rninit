import { useEffect, useState } from 'react';
import postsGet from '../apis/posts.get';
import FetchDT from '../types/fetch';
import PostsGetDT from '../types/posts.get';

const usePostsGet = (param: { autoload: boolean } = { autoload: true }): FetchDT<PostsGetDT> => {
    const [loading, set_loading] = useState(false);
    const [data, set_data] = useState<PostsGetDT | null>(null);

    const load = async () => {
        set_loading(true);

        const response = await postsGet();
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

export default usePostsGet;
