import React from "react";

// ProjectCard Component (Stacked Layout)
const ProjectCard = ({
  image,
  title,
  description,
  titleLink,
  link,
  stack = [],
}) => {
  return (
    <div
      className="relative w-full p-3 rounded-xl border-2 border-violet-500 shadow-lg cursor-pointer hover:scale-105 hover:opacity-90 transition duration-500 ease-in-out 
      bg-violet-50 text-gray-900 dark:bg-gray-800 dark:text-white flex flex-col sm:flex-row items-center flex-wrap overflow-hidden">
      {/* Image */}
      <div className="w-full sm:w-2/5">
        <img
          src={image}
          alt={title || "Project screenshot"}
          className="rounded-lg border border-violet-500 object-cover w-full h-auto max-h-60 sm:max-h-64"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="w-full sm:w-3/5 px-4 py-4 flex flex-col justify-center min-h-full">
        <h3 className="text-xl font-semibold text-violet-500 break-words">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mt-2 break-words">
          {description}
        </p>

        {/* Optional Stack Tags */}
        {stack.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {stack.map((tech, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 border border-violet-500 rounded-full text-violet-700 dark:text-violet-300">
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="mt-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <a
            href={titleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-white bg-violet-500 rounded-md font-semibold hover:bg-violet-600 transition text-center">
            Live Site
          </a>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-white bg-gray-600 rounded-md font-semibold hover:bg-gray-700 transition text-center">
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

// Projects Component (Stacked Layout)
const Projects = () => {
  const projectsData = [
    {
      image: "/assets/images/loyaltyos.jpg",
      title: "LoyaltyOS - Digital Loyalty Program SaaS",
      description:
        "A comprehensive B2B SaaS platform enabling UK businesses to run digital loyalty programs using QR codes. Features include flexible reward systems (visit/spend/hybrid), role-based dashboards for admins/store owners/customers, real-time visit approval workflows, automated point redemption with unique codes, and advanced analytics with CSV/PDF export. Built with Next.js 15 and MongoDB, showcasing modern full-stack architecture with multi-tenancy and JWT authentication.', full-stack architecture with multi-tenancy and JWT authentication.",
      titleLink: "https://loyalty-saas-two.vercel.app",
      link: "https://github.com/yuvrajsharma97/loyalty-saas",
      stack: [
        "Next.js 15",
        "React 19",
        "MongoDB",
        "Mongoose",
        "NextAuth.js",
        "Tailwind CSS",
        "DaisyUI",
        "Zod",
        "Resend",
        "QRCode",
        "Lucide React",
        "bcryptjs",
        "Vercel",
      ],
    },
    {
      image: "/assets/images/csrImage.jpg",
      title: "C.S.R. Website",
      description:
        "An interactive web application designed to help users discover their ideal computer science career path through a detailed personalized quiz. Features domain-specific roadmaps (Frontend, Backend, Full Stack) with curated free learning resources, confetti animations for quiz completion, and a contact form with EmailJS integration. Built with Next.js and styled using Tailwind CSS and DaisyUI for a modern, responsive experience.",
      titleLink: "https://computer-science-roadmaps.vercel.app/",
      link: "https://github.com/yuvrajsharma97/Computer-Science-Roadmaps",
      stack: [
        "Next.js",
        "React.js",
        "Tailwind CSS",
        "DaisyUI",
        "EmailJS",
        "React Context API",
        "React Icons",
        "React Toastify",
        "React Confetti",
        "Animate.css",
        "TW Elements",
        "Vercel",
      ],
    },
    {
      image: "/assets/images/getfit.jpg",
      title: "GetFit",
      description:
        "A full-stack fitness tracking platform featuring personalized onboarding, 1000+ exercise library with ExerciseDB API integration, live workout session tracking with real-time progress monitoring, customizable workout routines, and comprehensive health metrics dashboard tracking steps, calories, water intake, and sleep. Built with React and Firebase showcasing modern state management with Context API and real-time Firestore database synchronization.",
      titleLink: "https://workouttrack.vercel.app/",
      link: "https://github.com/yuvrajsharma97/workouttrack",
      stack: [
        "React.js",
        "Firebase",
        "Firestore",
        "Firebase Authentication",
        "Vite",
        "Tailwind CSS",
        "DaisyUI",
        "ExerciseDB API",
        "React Router",
        "React Icons",
        "Axios",
        "Context API",
      ],
    },
    {
      image: "/assets/images/pomodoroImage.jpg",
      title: "Pomodoro Timer",
      description:
        "A productivity tool that uses the Pomodoro Technique to help users manage their time effectively.",
      titleLink: "https://pomodoro-timer.vercel.app/",
      link: "https://github.com/yuvrajsharma97/pomodoro-timer",
      stack: ["React", "Tailwind CSS"],
    },
  ];

  return (
    <div className="p-6">
      <div className="flex flex-col space-y-6">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
