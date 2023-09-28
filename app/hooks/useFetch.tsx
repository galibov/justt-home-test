import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url: string, params: any) => {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(url, { params });
                setData(response.data);
            } catch (error: Error | any) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url, JSON.stringify(params)]);

    return { data, error, loading };
};
