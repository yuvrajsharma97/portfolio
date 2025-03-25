import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();
  const [emailValid, setEmailValid] = useState(true);

  const validateEmail = (email) => {
    // Simple email pattern (RFC 5322-compatible for basic validation)
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleEmailChange = (e) => {
    const isValid = validateEmail(e.target.value);
    setEmailValid(isValid);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!emailValid) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const toastId = toast.loading("Sending your message...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.update(toastId, {
            render: "Message sent successfully! 🎉",
            type: "success",
            isLoading: false,
            autoClose: 5000,
            closeButton: true,
          });
          form.current.reset();
          setEmailValid(true); // reset state
        },
        (error) => {
          toast.update(toastId, {
            render: "Failed to send message. Try again.",
            type: "error",
            isLoading: false,
            autoClose: 5000,
            closeButton: true,
          });
          console.error("EmailJS Error:", error.text);
        }
      );
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white dark:bg-gray-800 rounded-lg p-6 space-y-6 transition">
        {/* Name */}
        <div className="flex flex-col">
          <label
            htmlFor="user_name"
            className="text-gray-800 dark:text-gray-300 mb-1">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            required
            className="p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-violet-500 focus:shadow-xl transition shadow-md hover:shadow-xl"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label
            htmlFor="user_email"
            className="text-gray-800 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            required
            onChange={handleEmailChange}
            className={`p-2 rounded-md border ${
              emailValid
                ? "border-gray-300 dark:border-gray-600 focus:ring-violet-500"
                : "border-red-500 focus:ring-red-500"
            } bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-1 focus:shadow-xl transition shadow-md hover:shadow-xl`}
          />
          {!emailValid && (
            <span className="text-sm text-red-500 mt-1">
              Please enter a valid email address.
            </span>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="text-gray-800 dark:text-gray-300 mb-1">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="5"
            required
            className="p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-violet-500 focus:shadow-xl transition shadow-md hover:shadow-xl"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <input
            type="submit"
            value="Send"
            className="px-6 py-2 bg-violet-500 text-white font-semibold rounded-md shadow-md hover:bg-violet-600 hover:scale-105 transition duration-300 cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
