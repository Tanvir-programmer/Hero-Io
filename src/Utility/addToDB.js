// File: ../Utility/addToDB.js

const addToDB = (key, value) => {
  // Saves data as a JSON string to localStorage
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

const getFromDB = (key) => {
  if (typeof window !== "undefined") {
    const item = localStorage.getItem(key);
    // Returns the parsed array/object, or null if the key doesn't exist
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
