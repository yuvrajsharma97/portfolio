import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();
  const [emailValid, setEmailValid] = useState(true);

  const validateEmail = (email) => {
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
          setEmailValid(true);
        },
        (error) => {
          toast.update(toastId, {
            render: "Failed to send message. Please try again.",
            type: "error",
            isLoading: false,
            autoClose: 5000,
            closeButton: true,
          });
          if (import.meta.env.DEV) {
            console.error("EmailJS Error:", error.text);
          }
        }
      );
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form
        ref={form}
        onSubmit={sendEmail}
        className=" text-white rounded-lg space-y-6 transition "
        aria-label="Contact form">
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="user_name" className="text-white mb-1 font-medium">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            autoComplete="name"
            required
            placeholder="Enter your name"
            aria-required="true"
            className="p-2 rounded-md border border-[#444] bg-[#1E293B] text-white focus:outline-none focus:ring-1 focus:ring-violet-500 shadow-md hover:shadow-xl transition"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="user_email" className="text-white mb-1 font-medium">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            autoComplete="email"
            onChange={handleEmailChange}
            required
            placeholder="Enter your email address"
            aria-invalid={!emailValid}
            aria-required="true"
            className={`p-2 rounded-md border ${
              emailValid
                ? "border-[#444] focus:ring-violet-500"
                : "border-red-500 focus:ring-red-500"
            } bg-[#1E293B] text-white focus:outline-none focus:ring-1 shadow-md hover:shadow-xl transition`}
          />
          {!emailValid && (
            <span className="text-sm text-red-500 mt-1">
              Please enter a valid email address.
            </span>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label htmlFor="message" className="text-white mb-1 font-medium">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="5"
            required
            placeholder="Write your message here..."
            aria-required="true"
            className="p-2 rounded-md border border-[#444] bg-[#1E293B] text-white focus:outline-none focus:ring-1 focus:ring-violet-500 shadow-md hover:shadow-xl transition"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <input
            type="submit"
            value="Send"
            className="px-6 py-2 bg-violet-500 text-white font-semibold rounded-md shadow-md hover:bg-violet-600 hover:scale-105 transition duration-300 cursor-pointer"
            aria-label="Send message"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
