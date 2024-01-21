import { useEffect, useState } from "react";

//github.com/vaskort/custom-hook-test/blob/develop/src/hooks/useFetchedData.test.js#L6
// just for learning how to test custom hooks
https: const API_URL = "http://localhost:3000/";

export const useFetchedData = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(API_URL, {
          signal: abortController.signal,
        });

        const json = await response.json();
        setData(json);
      } catch (e: unknown) {
        setError((e as Error).message || "something wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, []);

  return { data, loading, error };
};
