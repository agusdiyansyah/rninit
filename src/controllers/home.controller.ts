import usePostsGet from 'common/data/hooks/use.posts.get';

const useHomeController = () => {
    const posts = usePostsGet();

    return { posts };
};

export default useHomeController;
