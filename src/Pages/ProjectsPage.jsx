import React, { useEffect } from 'react'
import { projectsData } from '../Data/ProjectData'
import { motion } from "motion/react";
import { BsGithub } from "react-icons/bs";
import { ProjectCard } from '../components/Projects';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <h1 className='md:pt-[8rem] pt-[8rem] text-4xl font-light text-white md:text-6xl'>All Projects</h1>
      
      <div className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 py-[4rem] text-white">
        {projectsData.map(project => (
          <div key={project.id} className="project-card">
            <ProjectCard project={project} />
          </div>
        ))}
      <div>
        <Link to="/" className="link-btn hover:bg-[#ffffff36]">Back to Home</Link>
      </div>
      </div>

    </>
  )
}

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default ProjectsPage