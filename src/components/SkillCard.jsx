import React from "react";

const SkillsCard = ({ image, description }) => {
  return (
    <div
      className="border border-violet-500 m-2 rounded-lg p-3 hover:shadow-md hover:shadow-violet-300 transition duration-300 ease-in-out"
      style={{ backgroundColor: "#f7f7f7" }}
      data-aos="flip-right">
      <img
        src={image}
        alt={description}
        width={64} // Adjust the width according to your design
        height={64} // Adjust the height according to your design
        className="rounded-lg shadow-sm shadow-indigo-500/40"
      />
    </div>
  );
};

export default SkillsCard;
