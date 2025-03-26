import React from "react";

const experiences = [
  {
    date: "Sep 2023 – Oct 2024",
    title: "MSc Computer Science – University of Sussex, UK",
    description:
      "Modules: Algorithmic Data Science, Python Programming, Systems for Information Management, MSc Individual Project. Built a ticket booking app using Next.js (frontend) and Python (backend), and developed Computer Science Roadmaps entirely with Next.js.",
  },
  {
    date: "Sep 2022 – Aug 2023",
    title: "Front-End Web Developer – Getepay.in, India",
    description:
      "Built a high-performance banking web app using React.js and React Hook Form. Removed 300+ redundant lines of code and integrated REST APIs and payment gateways, reducing load times by 30%.",
  },
  {
    date: "Jan 2021 – Aug 2022",
    title: "Front-End Web Developer – Ayushi DMCC Software, UAE (Remote)",
    description:
      "Developed and deployed 20+ fully responsive websites using React, WordPress, and Bootstrap. Integrated 5+ payment gateways including Razorpay and CCAvenue to enable smooth transactions for 1,000+ users/month.",
  },
  {
    date: "Sep 2020 – Dec 2020",
    title: "Web Developer Intern – PixelOMedia, India",
    description:
      "Delivered 15+ custom WordPress sites and 10+ HTML/CSS/JS templates. Managed full project lifecycle with 98% code quality and 100% on-time delivery, aligning projects to client goals.",
  },
];

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
