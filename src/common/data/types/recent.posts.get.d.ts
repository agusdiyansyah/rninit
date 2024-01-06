type ResponseSuccess = {
    id: number;
    title: string;
    subtitle: string;
    author: string;
}[];
type ResponseError = {
    message: string | unknown;
};

type RecentPostsGetDT =
    | { type: 'success'; payload: ResponseSuccess }
    | { type: 'error'; payload: ResponseError }
    | null;

export default RecentPostsGetDT;
