import { useState } from "react";

export default function useFetching(
  callback: (data: string | null) => Promise<void>
): [(data: string | null) => Promise<void>, boolean, string] {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetching(data: string | null) {
    try {
      setIsLoading(true);
      await callback(data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return [fetching, isLoading, error];
}
