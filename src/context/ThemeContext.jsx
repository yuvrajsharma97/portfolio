import React, { createContext, useContext, useState, useEffect } from "react";

// Create a Context for managing theme (dark/light mode)
const ThemeContext = createContext();

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// Provider component to wrap the entire application and manage the theme state
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);


  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev); // Toggle the previous value
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
