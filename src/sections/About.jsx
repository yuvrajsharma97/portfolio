import React from "react";
import { about } from "../data/portfolioData";

const About = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-8">
      {/* Profile Image with Glow Background */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-pink-500 rounded-xl blur-lg opacity-70 group-hover:opacity-90 transition duration-500"></div>

        <img
          src={about.profileImage}
          alt={`${about.name} profile picture`}
          className="relative z-10 h-48 w-48 object-cover rounded-md shadow-xl border-2 border-white dark:border-gray-800"
          loading="lazy"
        />
      </div>

      {/* Text Content */}
      <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
          Hi, I&apos;m {about.name}
        </h2>
        <p className="text-gray-800 dark:text-gray-300 leading-relaxed text-md max-w-lg">
          {about.fullBio.map((para, i) => (
            <React.Fragment key={i}>
              {para}
              {i < about.fullBio.length - 1 && <><br /><br /></>}
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
};

export default About;
