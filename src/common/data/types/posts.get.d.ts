type ResponseSuccess = {
    id: number;
    title: string;
    subtitle: string;
    author: string;
}[];
type ResponseError = {
    message: string | unknown;
};

type PostsGetDT =
    | { type: 'success'; payload: ResponseSuccess }
    | { type: 'error'; payload: ResponseError }
    | null;

export default PostsGetDT;
