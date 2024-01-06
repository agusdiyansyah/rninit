type FetchDT<T> = {
    load: () => Promise<void>;
    loading: boolean;
    data: T;
};

export default FetchDT;
