import { useState, useEffect } from "react";

const getLocalStorage = (key, initialValue) => {
  const storedItem = localStorage.getItem(key);

  if (storedItem) return JSON.parse(storedItem);

  return typeof initialValue === "function" ? initialValue() : initialValue;
};

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => getLocalStorage(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
