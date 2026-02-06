import { useEffect, useState } from 'react';

interface ReturnType<T> {
  data: T[];
  loading: boolean;
  error?: string;
}

export const useFetch = <T>(url: string): ReturnType<T> => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>('');

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError(err.message))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { loading, error, data };
};
