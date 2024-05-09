import { useEffect, useState } from "react";

export default function useFetch<T>(url: string): {
  data: T | null;
  error: Error | null;
} {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(setData)
      .catch(setError);
  }, [url]);

  return { data, error };
}
