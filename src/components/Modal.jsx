import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Modal = ({ isOpen, onClose, title, children, animation }) => {
  // Reinitialize AOS on modal open to trigger the animation
  useEffect(() => {
    if (isOpen) {
      AOS.refresh(); // Refresh AOS to trigger animations when modal opens
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div
        data-aos={animation} // Apply zoom-in or zoom-out animation
        className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-2/3 max-h-[90vh] overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-xl font-semibold dark:text-violet-500">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-600 cursor-pointer dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-2xl">
            &times;
          </button>
        </div>

        {/* Modal Content with Custom Scrollbar */}
        <div className="text-gray-800 dark:text-gray-300 overflow-y-auto min-h-96 p-4 custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
