"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import "./Projects.css";

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
        className="cedarville text-4xl text-center font-light mb-24 px-20"
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
    </div>
  );
};

export default Projects;
