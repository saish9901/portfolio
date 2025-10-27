import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { SiFiverr } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  const menuOpen = () => {
    setisOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-800 bg-black/70 px-8 py-6 text-white backdrop-blur-md md:justify-evenly transition-all ease-out">
      <div className="">
        <a
          href="/"
          className="flex justify-center items-center gap-2 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
        >
        <img src="\images\logo.png" alt="" className="w-[3.5rem]" />
         <span className="text-2xl hidden md:inline">saishnaik.dev</span> 
        </a>
      </div>

      <ul className="hidden md:flex gap-10">
        <a
          href="#home"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Home</li>
        </a>

        <a
          href="#tech"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Tech</li>
        </a>

        <a
          href="#projects"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Projects</li>
        </a>

        <a
          href="#contact"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Contact</li>
        </a>
      </ul>

      <ul className="hidden md:flex gap-5 items-center">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-[#1DBF73] hover:opacity-100">
          <a target="_blank" href="https://www.fiverr.com/s/6YoPzqA">
            <SiFiverr className="text-[35px]"/>
          </a>
        </li>

        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
          <a target="_blank" href="https://www.linkedin.com/in/saish-naik-731801119/">
            <BsLinkedin />
          </a>
        </li>

        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-pink-500 hover:opacity-100">
          <a target="_blank" href="https://www.instagram.com/sxish_911/">
            <BsInstagram />
          </a>
        </li>

        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-gray-500 hover:opacity-100">
          <a target="_blank" href="https://github.com/sknaikv">
            <BsGithub />
          </a>
        </li>
      </ul>

      {isOpen ? (
        <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
      ) : (
        <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
      )}

      {/* {isOpen && ( */}
      <div
        className={`fixed right-0 top-[85px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-1 border-gray-600 bg-black/90 p-12 transition-all duration-300 ease-in ${
          isOpen ? "translate-x-[0%]" : "translate-x-[100%]"
        }`}
      >
        <ul className="flex flex-col gap-5">
          <a
            href="/"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            <li>Home</li>
          </a>

          <a
            href="#tech"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            <li>Tech</li>
          </a>

          <a
            href="#projects"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            <li>Projects</li>
          </a>

          <a
            href="#contact"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            <li>Contact</li>
          </a>
        </ul>

        <ul className="grid grid-cols-2 gap-4">
          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100 m-auto">
            <a href="https://www.fiverr.com/s/6YoPzqA">
              <SiFiverr className="text-[35px]"/>
            </a>
          </li>

          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100 m-auto">
            <a href="https://www.linkedin.com/in/saish-naik-731801119/">
              <BsLinkedin />
            </a>
          </li>

          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-pink-500 hover:opacity-100 m-auto">
            <a href="https://www.instagram.com/sxish_911/">
              <BsInstagram />
            </a>
          </li>

          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-gray-500 hover:opacity-100 m-auto">
            <a href="https://github.com/sknaikv">
              <BsGithub />
            </a>
          </li>
        </ul>
      </div>
      {/* )} */}
    </nav>
  );
};

export default Navbar;
