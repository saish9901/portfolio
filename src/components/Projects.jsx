import React from "react";
import image1 from "/public/images/grocery.png";
import image2 from "/public/images/hr.png";
import image3 from "/public/images/image.png";
import image4 from "/public/images/Screenshot 2025-09-02 132756.png";
import { motion } from "motion/react";

const projectData = [
  {
    image: image3,
    title: "Holiday Cottages Website - Scotland",
    description:
      "As a Freelanced Web Developer at WHN Next, I created a dynamic Holiday Cottage website using WordPress. This project demonstrated my ability to leverage CMS tools to design responsive layouts, integrate plugins, and ensure seamless user experiences for online bookings and inquiries.",
    technologies: ["CSS", "JS", "Wordpress"],
    link: "https://saltydogholidays.co.uk/"
  },
  {
    image: image4,
    title: "Bartender Website Project",
    description:
      "As a Freelanced Web Developer at WHN Next, I developed a visually appealing bartender website using WordPress. This project highlighted my expertise in crafting responsive designs, customizing themes, and optimizing user interfaces to showcase services effectively and attract potential clients.",
    technologies: ["CSS", "JS", "Wordpress"],
    link: "https://theidealbartendergoa.com/"
  },
  {
    image: image1,
    title: "Cloned Grocery Website Project",
    description:
      "As an intern at KGN Technologies Pvt. Ltd., I cloned a fully responsive grocery website using HTML, CSS, and JavaScript. This project highlights my expertise in front-end development, including design replication and interactivity implementation. Check out the live project here, showcasing my skills in creating user-friendly web interfaces.",
    technologies: ["HTML", "CSS", "JS"],
    link: "https://sknaikv.github.io/grocery_site/index.html"
  },
  {
    image: image2,
    title: "H.R. & Factories Consultant Website Project",
    description:
      "During my internship at KGN Technologies Pvt. Ltd., I contributed to developing a professional website for H.R. & Factories Consultant. This project focused on creating a user-friendly interface using HTML, CSS, and JavaScript to deliver a responsive and informative platform tailored to client needs.",
    technologies: ["HTML", "CSS", "JS"],
    link: "https://sknaikv.github.io/vi-testing2/"
  },
];

const ProjectCard = ({ project }) => {
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
          <a className="link-btn" target="blank" href={project.link}>Visit project</a>
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
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:py-[12rem] py-[6rem]"
    >
      <h1 className="text-4xl font-light text-white md:text-6xl">
        My Work/Projects
      </h1>

      <div className="flex w-full max-w-[1000px] flex-col gap-20 text-white">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
