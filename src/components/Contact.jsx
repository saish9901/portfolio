import React from "react";
import { BiSolidMobile } from "react-icons/bi";
import { BsEnvelope, BsMailbox, BsPhone, BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex min-w-full items-center justify-center md:py-[1rem] py-[1rem]"
    >
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14 ">
        <h1 className="text-center text-5xl md:text-7xl">
          <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h1>

        <p className="text-center text-lg font-semibold text-gray-400">
          Let’s Make Something Great Together
        </p>

        
        
      </div>
    </div>
  );
};

export default Contact;
