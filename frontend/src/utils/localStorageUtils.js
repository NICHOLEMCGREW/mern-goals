// localStorageUtils.js

// Key for storing goals in localStorage
const GOALS_STORAGE_KEY = 'goals';

// Function to save goals to localStorage
export const saveGoalsToLocalStorage = (goals) => {
  localStorage.setItem(GOALS_STORAGE_KEY, JSON.stringify(goals));
};

// Function to retrieve goals from localStorage
export const getGoalsFromLocalStorage = () => {
  const storedGoals = localStorage.getItem(GOALS_STORAGE_KEY);
  return storedGoals ? JSON.parse(storedGoals) : null;
};
