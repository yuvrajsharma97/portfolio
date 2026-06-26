import React from "react";
import { skills as skillsData } from "../data/portfolioData";

const Skills = () => {

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Skills Section */}
      <div className="space-y-10">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category}>
            {/* Section Title */}
            <h3 className="text-2xl font-semibold text-violet-500 underline mb-4">
              {category}
            </h3>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-4 border-2 border-violet-500 rounded-lg shadow-md 
                  bg-white dark:bg-gray-800 transition hover:scale-105 hover:opacity-90">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="h-12 w-12 mb-2 rounded-sm p-1"
                    style={{ backgroundColor: "#f7f7f7" }}
                    loading="lazy"
                  />
                  <p className="text-gray-800 dark:text-gray-300 text-sm font-medium">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
