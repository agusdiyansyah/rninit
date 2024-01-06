import axios from 'axios';
import RecentPostsGetDT from '../types/recent.posts.get';

const recentPostsGet = async (): Promise<RecentPostsGetDT> => {
    try {
        const response = await axios.get('recent_posts');
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

export default recentPostsGet;
