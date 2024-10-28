import { useState } from "react";

export default function useFetching(
  callback: (data: string) => Promise<void>
): [(data: string) => Promise<void>, boolean, string] {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetching(data: string) {
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
