import React from "react";

const SkillsCard = ({ image, description }) => {
  return (
    <div
      className="border border-violet-500 m-1 rounded-lg p-3 hover:shadow-md hover:shadow-violet-300 transition duration-300 ease-in-out flex flex-col items-center"
      style={{ backgroundColor: "#f7f7f7" }}
      data-aos="flip-right">
      {/* Icon */}
      <img
        src={image}
        alt={description || "Skill Icon"}
        width={64}
        height={64}
        loading="lazy"
      />
    </div>
  );
};

export default SkillsCard;
