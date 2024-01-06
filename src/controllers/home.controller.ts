import usePostsGet from 'common/data/hooks/use.posts.get';
import useRecentPostsGet from 'common/data/hooks/use.recent.posts.get';

const useHomeController = () => {
    const posts = usePostsGet();
    const recent_posts = useRecentPostsGet();

    return {
        posts,
        recent_posts,
    };
};

export default useHomeController;
