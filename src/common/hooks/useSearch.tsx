import { useState, useEffect } from "react";

import { toast } from "react-toastify";

type UseSearchProps<T> = {
  fetchData: (query: string) => Promise<T[]>;
  debounceDelay?: number;
};

type UseSearchReturn<T> = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  results: T[];
  loading: boolean;
  error: string | null;
};

export function useSearch<T>({
  fetchData,
  debounceDelay = 300,
}: UseSearchProps<T>): UseSearchReturn<T> {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (query.trim() === "") {
        setResults([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      fetchData(query)
        .then((data) => {
          setResults(data);
          setLoading(false);
        })
        .catch((err) => {
          const errorMessage = err.message || "Une erreur est survenue.";
          setError(errorMessage);
          setLoading(false);
          toast.error(errorMessage); 
        });
    }, debounceDelay);

    return () => clearTimeout(handler);
  }, [query, fetchData, debounceDelay]);

  return { query, setQuery, results, loading, error };
}