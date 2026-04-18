import React from 'react'
import { Link } from 'react-router-dom'
import { projectsData } from '../Data/ProjectData'
import { motion } from "motion/react";
import { BsGithub } from "react-icons/bs";

 export const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="flex flex-col items-center gap-8 md:flex-row md:gap-24"
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
    >
      <img
        src={project.image}
        className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 object-fill md:w-[300px]"
        alt=""
      />

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="text-xl font-semibold">{project.title}</div>
          <p className="text-gray-400">{project.description}</p>
          <div className="flex gap-3">
            <a className="link-btn hover:bg-[#ffffff36]" target="blank" href={project.link}>Visit project</a>
            {project.githubLink && (
              <a className="link-btn hover:bg-[#ffffff36]" target="blank" href={project.githubLink}>
                <BsGithub size={20} />
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-5">
          {project.technologies.map((tech, index) => (
            <span key={index} className="rounded-lg bg-black p-3">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  const firstFourProjects = projectsData.slice(0, 4);
  
  return (
    <div id='projects' className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:py-[12rem] py-[6rem]">
      <h1 className="text-4xl font-light text-white md:text-6xl">
        My Work/Projects
      </h1>

      <div className="flex w-full max-w-[1000px] flex-col gap-20 text-white">
        {firstFourProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <div>
        <Link to="/projects">
          <button className="text-white px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg opacity-80 transition-all duration-300 hover:opacity-100 font-semibold inline-block w-fit">
            View more
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Projects