import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Card = ({ image, title, titleLink, description, link /*, stack */ }) => {
  useEffect(() => {
    Aos.init(); // AOS animations
  }, []);

  return (
    <div className="drop-shadow-2xl" data-aos="zoom-in">
      <div
        className="max-w-full lg:mx-[2rem] rounded-lg border border-violet-500 shadow-lg backdrop-blur-md overflow-hidden 
        bg-white/10 text-white transition">
        {/* Image */}
        <div className="p-3">
          <img
            src={image}
            alt={title || "Project Image"}
            className="rounded-lg border-2 border-violet-500 shadow-md object-cover w-full h-auto"
            width={300}
            height={200}
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col items-center text-center">
          <h5 className="text-xl sm:text-2xl font-bold mb-2 text-white">
            {title}
          </h5>

          <p className="text-sm sm:text-base mb-4 text-gray-400">
            {description}
          </p>

      
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 justify-center mb-3">
            {stack?.map((tech, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 border border-violet-500 rounded-full">
                {tech}
              </span>
            ))}
          </div>
         

          {/* Links */}
          <div className="flex justify-center gap-4">
            <a
              href={titleLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-24 text-center py-1 border border-violet-500 rounded-md text-sm font-medium transition duration-300 hover:bg-violet-500 hover:text-white text-white">
              Live
            </a>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-24 text-center py-1 border border-violet-500 rounded-md text-sm font-medium transition duration-300 hover:bg-violet-500 hover:text-white text-white">
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
