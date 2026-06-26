import React from "react";
import { experiences } from "../data/portfolioData";

const Experience = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-violet-500 underline mb-10">
        Work & Education Timeline
      </h2>

      <div className="relative border-l-4 border-violet-500 ml-4 pl-6 space-y-10">
        {experiences.map((exp, index) => (
          <div key={index} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[38px] top-0 w-6 h-6 bg-violet-500 rounded-full border-2 border-white dark:border-gray-700 shadow-md group-hover:scale-110 transition-transform duration-300"></div>

            {/* Glassmorphic Experience Block */}
            <div
              className="backdrop-blur-lg bg-white/30 dark:bg-gray-700/40 border border-white/30 dark:border-gray-600
                p-5 rounded-xl shadow-lg transition hover:shadow-2xl">
              <p className="text-sm text-gray-500 dark:text-gray-300 mb-1">
                {exp.date}
              </p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {exp.title}
              </h3>
              <p className="text-gray-800 dark:text-gray-200 text-sm mt-2 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
