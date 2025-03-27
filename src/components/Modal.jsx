import React, { useEffect, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Modal = ({ isOpen, onClose, title, children, animation }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      Aos.refresh();
      modalRef.current?.focus();
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div
        className="fixed inset-0 flex items-center justify-center z-50 px-4 py-6 overflow-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title">
        <div
          ref={modalRef}
          tabIndex="-1"
          data-aos={animation}
          className="p-6 md:p-8 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-2/3 max-h-[90vh] overflow-y-auto custom-scrollbar focus:outline-none border border-violet-500 text-white"
          style={{ backgroundColor: "#101828" }} // ✅ Forced background color
        >
          {/* Modal Header */}
          <div className="flex justify-between items-center border-b border-violet-500 pb-2">
            <h2
              id="modal-title"
              className="text-xl font-semibold text-violet-500">
              {title}
            </h2>
            <button
              onClick={onClose}
              aria-label="Close Modal"
              className="text-gray-300 hover:text-white text-2xl focus:outline-none">
              &times;
            </button>
          </div>

          {/* Modal Body */}
          <div className="text-gray-300 mt-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
