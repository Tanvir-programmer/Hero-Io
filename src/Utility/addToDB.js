const addToDB = (key, value) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

const getFromDB = (key) => {
  if (typeof window !== "undefined") {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
  return null;
};

const removeFromDB = (key) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

export { addToDB, getFromDB, removeFromDB };
