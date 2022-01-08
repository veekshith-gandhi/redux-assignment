export const loadData = (key) => {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value;
  } catch (error) {
    return null;
  }
};

export const saveData = (key, value) => {
  console.log(key, value);
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return 1;
  } catch (error) {
    return -1;
  }
};
