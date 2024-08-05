import React from "react";
import { motion } from "framer-motion";

import "./Projects.css";

interface ProjectProps {
  title: string;
  desc: string;
  skills: string[];
  delay: number[];
}
const Project: React.FC<ProjectProps> = ({ title, desc, skills, delay }) => {
  return (
    <motion.div
      className="project"
      whileHover={{
        scale: 1.05,
        rotate: 3,
        transition: { stiffness: 300, damping: 20 },
        // outline: "1px solid black", // Applying outline style
      }}
    >
      <motion.p
        className="text-xl font-semibold text-center mb-10"
        whileHover={{ textDecoration: "underline" }}
      >
        {title}
      </motion.p>

      <p className="text-center text-lg font-light mb-0 mt-auto">{desc}</p>

      <div className="flex flex-wrap flex-row justify-center items-center gap-x-6 gap-y-6 sm:gap-y-2 mt-12 mb-0">
        {skills.map((skill, index) => (
          <motion.div key={index}>
            <p className="yuh px-3 py-1 rounded-xl text-center text-sm font-medium">
              {skill}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "hack dearborn 3 app",
      desc: "Aenean per posuere mauris vivamus habitant lectus vestibulum scelerisque ullamcorper. Per id curabitur cursus cras quam eu vestibulum leo. At arcu egestas commodo litora vivamus commodo ultricies.",
      skills: ["React Native", "Typescript", "Storybook", "Supabase"],
      delay: [0.1, 0.2, 0.3, 0.4],
    },
    {
      title: "international women's day summit website",
      desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Nulla quam quisque purus a aptent sit. At tortor habitant hac blandit quis. Duis iaculis sapien aenean lacinia fermentum euismod class cras.",
      skills: ["React.js", "Tailwind CSS", "Javascript"],
      delay: [0.1, 0.2, 0.3],
    },
    {
      title: "code conductor",
      desc: "Sollicitudin suscipit ipsum bibendum enim eget nunc neque duis. Quis nisl lectus mus turpis dui cubilia neque ultricies placerat. Finibus risus taciti, integer phasellus maecenas dictum quis fames.",
      skills: ["React.js", "Typescript", "Git / Github"],
      delay: [0.1, 0.2, 0.3],
    },
  ];

  return (
    <div className="projects">
      <p className="text-4xl text-center mb-20">
        here&apos;s what i&apos;ve done
      </p>

      <div className="flex flex-row flex-wrap justify-center items-start p-4 gap-6">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
