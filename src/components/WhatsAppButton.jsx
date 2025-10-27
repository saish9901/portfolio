import React from "react";
import { BiLogoWhatsapp } from "react-icons/bi";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const whatsappNumber = "7264871749"; 
  const message = "Hello! I would like to know more about your services."; 

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 2 }}
    >
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition duration-300"
        aria-label="Chat on WhatsApp"
      >
        <BiLogoWhatsapp className="text-3xl" />
      </a>
    </motion.div>
  );
};

export default WhatsAppButton;
