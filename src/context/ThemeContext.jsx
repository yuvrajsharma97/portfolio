import React, { createContext, useContext, useState, useEffect } from "react";

// Create a Context for managing theme (dark/light mode)
const ThemeContext = createContext();

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// Provider component to wrap the entire application and manage the theme state
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage (default to true if no preference)
    const storedPreference = localStorage.getItem("isDarkMode");
    return storedPreference === null ? true : storedPreference === "true";
  });

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      localStorage.setItem("isDarkMode", next);
      return next;
    });
  };

  useEffect(() => {
    // Sync the initial value if localStorage was updated externally
    const stored = localStorage.getItem("isDarkMode");
    if (stored !== null && stored !== String(isDarkMode)) {
      setIsDarkMode(stored === "true");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
