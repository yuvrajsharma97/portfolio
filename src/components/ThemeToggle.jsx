import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className="p-2 bg-gray-800 text-white rounded-full focus:outline-none hover:bg-gray-700 focus:ring-2 focus:ring-violet-400 transition">
      {isDarkMode ? (
        <span role="img" aria-label="Sun icon">
          🌞
        </span>
      ) : (
        <span role="img" aria-label="Moon icon">
          🌙
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;
