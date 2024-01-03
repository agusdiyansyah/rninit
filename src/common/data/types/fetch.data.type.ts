export type FetchDataType<T> = {
    load: () => Promise<void>;
    loading: boolean;
    data: T;
};
