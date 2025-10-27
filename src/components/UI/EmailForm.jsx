// ContactForm.js
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState(""); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vhsxlf6",
        "template_0z4cjfm",
        form.current,
        "yM9jAKcBNGuMu7z0R"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage("Message sent successfully!");
          setStatusType("success");
        },
        (error) => {
          console.log(error.text);
          setStatusMessage("An error occurred. Please try again.");
          setStatusType("error");
        }
      );

    e.target.reset();

    setTimeout(() => {
      setStatusMessage("");
      setStatusType("");
    }, 5000);
  };

  return (
    <div className="emaildiv w-[100%] flex flex-col items-center mb-12">
      <form
        className="flex flex-col w-[90%] md:w-[60%] sm:w-[100%]"
        ref={form}
        onSubmit={sendEmail}
      >
        <label>Name</label>
        <input type="text" name="name" required />

        <label>Email</label>
        <input type="email" name="email" required />

        <label>Mobile</label>
        <input type="number" name="mobile" required />

        <label>Message</label>
        <textarea name="message" required />

        <button
          className="text-nowrap rounded-lg border border-indigo-600 bg-black mt-6 px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2  hover:shadow-xl hover:shadow-indigo-600"
          type="submit"
        >
          Send
        </button>
      </form>

      {statusMessage && (
        <p
          className={`mt-4 text-lg font-medium ${
            statusType === "success" ? "text-green-700 transition-all ease-out animate-pulse font-bold" : "text-red-600 font-bold transition-all ease-out"
          }`}
        >
          {statusMessage}
        </p>
      )}
    </div>
  );
};

export default ContactForm;
