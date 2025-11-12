import React from "react";
// import image from "/public/images/image.jpg";
import image from "/public/images/hero.webp";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="home"
      className="px-8 flex min-h-screen w-full items-center justify-center py-40 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={image}
            className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-500 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px] grayscale hover:grayscale-0"
            alt=""
          />
        </motion.div>

        <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        
        className="flex max-w-[600px] flex-col items-center justofy-center gap-3 text-center">
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-5xl font-semibold transition-all duration-300">
            Saish Naik
          </h1>
          <h3 className="text-[#dbdbdb] font-semibold ">
            Front-End Web Developer
          </h3>
          <p className="text-lg text-gray-400 leading-7 md:text-base text-pretty">
            <b>Hi, I’m Saish Naik — a passionate Front-End Web Developer dedicated to crafting visually engaging, responsive, and user-focused websites.</b> <br/>  <br/>
            I specialize in transforming ideas into engaging digital experiences through clean code and modern design. With over a year of front-end development experience, I’ve built WordPress websites, designed intuitive app interfaces, and created impactful brand visuals. My goal is to blend creativity and technology to deliver products that look great and perform seamlessly.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
