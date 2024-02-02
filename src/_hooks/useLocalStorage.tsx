import { useState, useEffect } from "react";

/**
 * Custom hook for managing values in local storage.
 * 
 * @param key - The key to use for storing the value in local storage.
 * @param initialValue - The initial value to use if no value is found in local storage. Defaults to an empty string.
 * @returns A tuple containing the current value and a function to update the value.
 */
const useLocalStorage = (key: string, initialValue?: any) => {
  const getStorageValue = (key: string, initialValue?: any) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue || '';
  };

  const [value, setValue] = useState(getStorageValue(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;