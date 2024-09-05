"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import "./Projects.css";

interface ProjectProps {
  title: string;
  link: string;
  desc: string;
  skills: string[];
}
const Project: React.FC<ProjectProps> = ({ title, link, desc, skills }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      className="block sm:h-[350px] sm:w-[350px] mx-auto mt-10 p-10 rounded-3xl"
      initial={{ scale: 0.9 }}
      whileHover={{
        scale: 1,
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
            <p className="px-3 py-1 rounded-xl text-center text-sm font-bold">
              {skill}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.a>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "hack dearborn 3 app",
      link: "https://www.hackdearborn.org/",
      desc: "Aenean per posuere mauris vivamus habitant lectus vestibulum scelerisque ullamcorper. Per id curabitur cursus cras quam eu vestibulum leo. At arcu egestas commodo litora vivamus commodo ultricies.",
      skills: ["React Native", "Typescript", "Storybook", "Supabase"],
    },
    {
      title: "international women's day summit website",
      link: "https://www.iwdsummit.com/",
      desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Nulla quam quisque purus a aptent sit. At tortor habitant hac blandit quis. Duis iaculis sapien aenean lacinia fermentum euismod class cras.",
      skills: ["React.js", "Tailwind CSS", "Javascript"],
    },
    {
      title: "code conductor",
      link: "https://www.codeconductor.org/",
      desc: "Sollicitudin suscipit ipsum bibendum enim eget nunc neque duis. Quis nisl lectus mus turpis dui cubilia neque ultricies placerat. Finibus risus taciti, integer phasellus maecenas dictum quis fames.",
      skills: ["React.js", "Typescript", "Git / Github"],
    },
  ];

  return (
    <div className="projects sm:px-20 py-32">
      <motion.p
        className="text-4xl text-center font-light mb-24 px-20"
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.45,
          duration: 0.35,
        }}
        viewport={{ once: true }}
      >
        here&apos;s what i&apos;ve done
      </motion.p>

      <div className="sm:grid sm:grid-flow-col">
        {projects.map((project, index) => (
          <div key={index}>
            <Project {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
