import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTheme } from "../context/ThemeContext";

const Card = ({ image, title, titleLink, description, link }) => {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="drop-shadow-2xl" data-aos="zoom-in">
      <div
        className={`max-w-full lg:mx-[2rem] rounded-lg border shadow-lg backdrop-blur-md transition overflow-hidden ${
          isDarkMode
            ? "bg-white/10 border-violet-500 text-white"
            : "bg-[#f7f7f7] border-violet-500 text-violet-800"
        }`}>
        {/* Image */}
        <div className="p-3">
          <img
            src={image}
            alt={title}
            className="rounded-lg border-2 border-violet-500 shadow-md object-cover w-full h-auto"
            width={300}
            height={200}
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h5
            className={`text-2xl font-bold text-center mb-2 ${
              isDarkMode ? "text-white" : "text-violet-700"
            }`}>
            {title}
          </h5>

          <p
            className={`text-sm text-center mb-4 ${
              isDarkMode ? "text-gray-400" : "text-violet-600"
            }`}>
            {description}
          </p>

          {/* Links */}
          <div className="flex justify-center gap-4">
            <a
              href={titleLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-24 text-center py-1 border border-violet-500 rounded-md text-sm font-medium transition duration-300 hover:bg-violet-500 hover:text-white ${
                isDarkMode ? "text-white" : "text-violet-700"
              }`}>
              Live
            </a>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-24 text-center py-1 border border-violet-500 rounded-md text-sm font-medium transition duration-300 hover:bg-violet-500 hover:text-white ${
                isDarkMode ? "text-white" : "text-violet-700"
              }`}>
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
