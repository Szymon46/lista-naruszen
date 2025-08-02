import { useState, useEffect } from "react";

export function useLocalStorage<T>(initState: T, key: string) {
  const [value, setValue] = useState<T>(function () {
    const storedValue = localStorage.getItem(key);

    return storedValue ? JSON.parse(storedValue) : initState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [key, value]
  );

  return {value, setValue};
}
