export const getFromStorage = (name = '') => {
  const data = localStorage.getItem(name);

  if (data) return JSON.parse(data);
  return false;
};

export const setToStorage = (name = '', state) => {
  localStorage.setItem(name, JSON.stringify(state));
};
