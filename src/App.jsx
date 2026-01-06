import React, { useEffect } from "react";
import BentoBox from "./components/BentoBox";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

const AppContent = () => {
  const { isDarkMode } = useTheme();

  const resumeLink = "/assets/documents/resume_yuvraj_sharma.pdf";

  // Initialize AOS on mount
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, [isDarkMode]);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDarkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}>
      {/* Top Controls */}
      <div className="absolute top-4 right-4 z-50 flex gap-3 items-center">
        <ThemeToggle />

        {/* <a
          href={resumeLink}
          target="_blank"
          download
          title="Download Resume"
          className={`px-4 py-2 rounded-md text-sm font-semibold shadow-md transition duration-300 hover:scale-105
            ${
              isDarkMode
                ? "bg-white text-violet-500 hover:bg-gray-100"
                : "bg-violet-500 text-white hover:bg-violet-600"
            }`}>
          Download Resume
        </a> */}
      </div>

      {/* Notifications */}
      <ToastContainer
        position="top-center"
        theme={isDarkMode ? "dark" : "light"}
      />

      {/* Main Layout */}
      <div className="container mx-auto py-12 px-6">
        <BentoBox />
      </div>
    </div>
  );
};

export default App;
