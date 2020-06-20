import { useEffect } from 'react';

export const getFromStorage = (name = '') => {
  const data = localStorage.getItem(name);

  if (data) return JSON.parse(data);
  return [];
};

export const useLocalStorage = (name = '', tasks) => {
  useEffect(() => {
    localStorage.setItem(name, JSON.stringify(tasks));
  }, [tasks, name]);
};
