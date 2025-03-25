import React from "react";

// Socials Component
const Socials = () => {
  const socialMediaLinks = [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/yuvrajsharma97",
      image: "/assets/images/linkedin.svg",
    },
    {
      platform: "GitHub",
      url: "https://github.com/yuvrajsharma97",
      image: "/assets/images/github.svg",
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/i_m_yuvraj_s",
      image: "/assets/images/twitter.svg",
    },
  ];

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold text-center text-violet-500 mb-8 underline">
        Socials
      </h2>

      {/* Socials Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {socialMediaLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-4 border-2 border-violet-500 rounded-lg shadow-md 
            bg-white dark:bg-gray-800 transition hover:scale-105 hover:opacity-90">
            {/* Social Icon */}
            <img
              src={social.image}
              alt={social.platform}
              className="h-12 w-12 mb-2 rounded-sm p-1"
              style={{ backgroundColor: "#f7f7f7" }}
            />

            {/* Social Platform Name */}
            <p className="text-gray-800 dark:text-gray-300 text-sm font-medium">
              {social.platform}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Socials;
