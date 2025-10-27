import React from "react";
import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoWordpress,
} from "react-icons/bi";
import { motion } from "framer-motion";

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      id="tech"
      className="flex min-h-[100vh] w-full flex-col items-center justify-center gap-16 md:gap-32 md:py-[12rem] py-[6rem] "
    >
      <h1 className="text-4xl font-light text-[#dbdbdb] md:text-6xl">
        Technologies
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <BiLogoHtml5 className="cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <BiLogoCss3 className="cursor-pointer text-[80px] text-blue-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <BiLogoJavascript className="cursor-pointer text-[80px] text-yellow-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <BiLogoReact className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <BiLogoTailwindCss className="cursor-pointer text-[80px] text-sky-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <BiLogoWordpress className="cursor-pointer text-[80px] text-gray-300 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
      </div>

      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-10 p-5"
      >
        <p className="md:text-2xl text-xl text-[#e4e4e4] text-center w-[90%] md:w-[50%] leading-9">
          Here are the technologies I work with to bring ideas to life—ranging
          from HTML, CSS, and JavaScript to modern frameworks and libraries. I
          also specialize in crafting dynamic and custom websites using
          WordPress, delivering seamless functionality and design.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Tech;
