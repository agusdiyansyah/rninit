import axios from 'axios';
import PostsGetDT from '../types/posts.get';

const postsGet = async (): Promise<PostsGetDT> => {
    try {
        const response = await axios.get('posts');
        return { type: 'success', payload: response.data };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return { type: 'error', payload: { message: error.message } };
        } else {
            console.log(error);
            return { type: 'error', payload: { message: error } };
        }
    }
};

export default postsGet;
