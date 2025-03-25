import React from "react";

const About = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-8">
      {/* Profile Image with Funky Background */}
      <div className="relative group">
        {/* Glow background behind image */}
        <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-pink-500 rounded-xl blur-lg opacity-70 group-hover:opacity-90 transition duration-500"></div>

        {/* Actual Image */}
        <img
          src="/assets/images/profile.jpg"
          alt="Profile"
          className="relative z-10 h-48 w-48 object-cover rounded-md shadow-xl border-white dark:border-gray-800"
        />
      </div>

      {/* Text Content */}
      <div className="text-center sm:text-left flex flex-col items-center">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
          Hi, I'm Yuvraj Sharma
        </h2>
        <p className="text-gray-800 dark:text-gray-300 leading-relaxed text-md max-w-lg">
          I'm a passionate Full Stack MERN developer with 3+ years of hands-on
          experience. I specialize in building responsive, user-centric web apps
          with React and Node.js. <br /> <br />I enjoy solving real-world
          problems and turning ideas into scalable solutions. With a focus on
          clean code and reusability, I love crafting seamless UIs. Always
          exploring new tech, I'm a coffee-fueled coder on a mission to build
          cool things.
        </p>
      </div>
    </div>
  );
};

export default About;
