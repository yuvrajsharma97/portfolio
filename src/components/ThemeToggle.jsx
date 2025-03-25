import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme(); // Get dark mode state and toggle function

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-800 text-white rounded-full focus:outline-none hover:bg-gray-700">
      {isDarkMode ? (
        <span role="img" aria-label="sun">
          🌞
        </span>
      ) : (
        <span role="img" aria-label="moon">
          🌙
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;
