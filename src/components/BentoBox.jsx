import React, { useState } from "react";
import Modal from "./Modal";
import { useTheme } from "../context/ThemeContext";
import Card from "./Card";
import SkillsCard from "./SkillCard";
import {
  About,
  Projects,
  Skills,
  Contact,
  Socials,
  Experience,
} from "../sections/SectionExport";
import {
  featuredProjects,
  featuredSkills,
  featuredExperiences,
  about,
} from "../data/portfolioData";

const BentoBox = () => {
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isDarkMode } = useTheme();

  const openModal = (section) => {
    setModalContent(section);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  const projectsDatasmmd = [featuredProjects[0]];

  const sectionClass = `relative p-8 rounded-xl border-2 border-violet-500 shadow-1xl transition duration-700 ease-in-out`;

  const overlayClass =
    "absolute inset-0 rounded-xl bg-white/5 dark:bg-black/10 pointer-events-none";

  const contentClass =
    "relative z-10 h-full flex flex-col items-center justify-around";

  const buttonClass =
    "px-4 py-2 bg-violet-500 text-white font-semibold rounded-lg hover:bg-violet-600 transition duration-300 hover:shadow-lg cursor-pointer";

  return (
    <div className="min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 overflow-hidden">
      {/* PROJECTS (untouched) */}
      <div
        data-aos="zoom-in"
        className={`${sectionClass} lg:col-span-2 lg:row-span-2 ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-violet-50 text-gray-900"
        }`}>
        <div className={overlayClass}></div>
        <div className={contentClass}>
          <h2 className="text-2xl text-violet-500 font-semibold underline">
            Projects
          </h2>

          <div className="hidden lg:flex lg:flex-row lg:items-center my-4">
            {featuredProjects.map((project, index) => (
              <Card key={index} {...project} />
            ))}
          </div>

          <div className="lg:hidden sm:flex md:flex-wrap justify-center my-4">
            {projectsDatasmmd.map((project, index) => (
              <Card key={index} {...project} />
            ))}
          </div>

          <div className="flex justify-center">
            <button
              onClick={() =>
                openModal({ title: "Projects", content: <Projects /> })
              }
              className={buttonClass}>
              More Projects
            </button>
          </div>
        </div>
      </div>

      {/* SKILLS */}
      <div
        data-aos="zoom-in"
        className={`${sectionClass} lg:row-span-2 ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-violet-50 text-gray-900"
        }`}>
        <div className={overlayClass}></div>
        <div className={contentClass}>
          <h2 className="text-2xl text-violet-500 font-semibold underline">
            Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {featuredSkills.map((skill, index) => (
              <SkillsCard key={index} {...skill} />
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={() =>
                openModal({ title: "Skills", content: <Skills /> })
              }
              className={buttonClass}>
              View More
            </button>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div
        data-aos="zoom-in"
        className={`${sectionClass} ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-violet-50 text-gray-900"
        }`}>
        <div className={overlayClass}></div>
        <div className={contentClass}>
          <h2 className="text-2xl text-violet-500 font-semibold underline">
            Contact
          </h2>
          <p className="text-lg mt-2 text-center px-2">
            Got a project or just want to say hello? <br /> Let’s build
            something amazing together 🚀
          </p>
          <div className="flex justify-center mt-4">
            <button
              onClick={() =>
                openModal({ title: "Contact", content: <Contact /> })
              }
              className={buttonClass}>
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* SOCIALS */}
      <div
        data-aos="zoom-in"
        className={`${sectionClass} ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-violet-50 text-gray-900"
        }`}>
        <div className={overlayClass}></div>
        <div className={contentClass}>
          <h2 className="text-2xl text-violet-500 font-semibold underline">
            Socials
          </h2>
          <p className="text-lg text-center px-2 my-3">
            Connect with me for insights, projects, and tech updates.
          </p>
          <div className="flex justify-center mt-4">
            <button
              onClick={() =>
                openModal({ title: "Socials", content: <Socials /> })
              }
              className={buttonClass}>
              View More
            </button>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div
        data-aos="zoom-in"
        className={`${sectionClass} lg:col-span-2 lg:row-span-2 ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-violet-50 text-gray-900"
        }`}>
        <div className={overlayClass}></div>
        <div className={contentClass}>
          <h2 className="text-2xl text-violet-500 font-semibold underline">
            About
          </h2>
          <p className="text-lg mt-2 text-center px-2">
            {about.shortBio}
          </p>
          <div className="flex justify-center mt-4">
            <button
              onClick={() => openModal({ title: "About", content: <About /> })}
              className={buttonClass}>
              More About Me
            </button>
          </div>
        </div>
      </div>

      {/* EXPERIENCE */}
      <div
        data-aos="zoom-in"
        className={`${sectionClass} lg:col-span-2 lg:row-span-2 ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-violet-50 text-gray-900"
        }`}>
        <div className={overlayClass}></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-between gap-6">
          <h2 className="text-2xl font-semibold text-violet-500 underline decoration-2">
            Experience
          </h2>

          <div className="space-y-4 text-base sm:text-lg w-full max-w-md">
            {featuredExperiences.map((exp, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl border shadow-lg backdrop-blur-md transition ${
                  isDarkMode
                    ? "bg-white/10 border-violet-500 text-white"
                    : "bg-[#f7f7f7] border-violet-500 text-violet-800"
                }`}>
                <span className="font-semibold block">
                  {exp.icon} {exp.title}
                </span>
                <span
                  className={`text-sm block ${
                    isDarkMode ? "text-gray-400" : "text-violet-600"
                  }`}>
                  {exp.subtitle}
                </span>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={() =>
                openModal({ title: "Experience", content: <Experience /> })
              }
              className={buttonClass}>
              Work Timeline
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {modalContent && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={modalContent.title}
          animation={isModalOpen ? "zoom-in" : "zoom-out"}>
          {modalContent.content}
        </Modal>
      )}
    </div>
  );
};

export default BentoBox;
