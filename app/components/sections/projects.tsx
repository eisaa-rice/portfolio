"use client";

import { motion } from "motion/react";

import SectionHeader from "../ui/sectionHeader";

const projects = [
  {
    title: "hack dearborn",
    emoji: "👾",
    desc: "the webpage and mobile app for uofm - dearborn's annual hackathon.",
    link: "https://www.hackdearborn.org/",
    skills: ["React", "React Native", "Supabase"],
  },
  {
    title: "bhm summit",
    emoji: "👨🏿‍💻",

    desc: "information hub for a 2025 black history month conference held in detroit.",
    img: "/images/bhm.png",
    link: "https://gdg-summit-webiste.vercel.app/",
    skills: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "iwd summit",
    emoji: "👩🏼‍💻",

    desc: "information hub for a 2024 international women's day conference held in detroit.",
    img: "/images/iwd.png",
    link: "https://www.iwdsummit.com/",
    skills: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "code conductor",
    emoji: "🤖",
    desc: "an interactive platform where anyone can design and visualize algorithms.",
    img: "/images/cc.png",
    link: "https://www.codeconductor.org/",
    skills: ["React", "TypeScript", "Material UI"],
  },
];

const Project = ({
  title,
  emoji,
  desc,
  link,
  skills,
}: {
  title: string;
  emoji: string;
  desc: string;
  link: string;
  skills: string[];
}) => {
  return (
    <motion.a
      className="flex flex-col
      border rounded-lg p-4
      border-neutral-200 dark:border-neutral-800
      hover:border-black dark:hover:border-white"
      // this is being overriden
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover="link"
      initial={{ scale: 1 }}
      variants={{
        link: { scale: 1.025, cursor: "pointer" },
      }}
    >
      <div className="flex justify-between mb-2">
        <p className="text-5xl -ml-1">{emoji}</p>

        <motion.p
          className="text-xl"
          initial={{ opacity: 0.25, scale: 1, x: 0, y: 0 }}
          variants={{ link: { opacity: 1, scale: 1.05, x: 2, y: -2 } }}
        >
          ↗
        </motion.p>
      </div>

      <h3 className="font-medium text-xl">{title}</h3>

      <p className="mt-2 pb-6">{desc}</p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {skills.map((skill, i) => (
          <p
            key={i}
            className="text-xs text-neutral-400 px-2 py-1
            rounded-full border border-neutral-200 dark:border-neutral-800"
          >
            {skill}
          </p>
        ))}
      </div>
    </motion.a>
  );
};

const Projects = () => {
  return (
    <section id="projects">
      <SectionHeader emoji="💻" title="projects" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {projects.map((mp, i) => (
          <Project
            key={i}
            title={mp.title}
            emoji={mp.emoji}
            desc={mp.desc}
            link={mp.link}
            skills={mp.skills}
          />
        ))}
      </div>

      <p className="mt-12 mx-auto text-center text-neutral-500 italic">
        see in-progress projects and more details on my{" "}
        <a
          className="font-bold hover:font-black"
          href="https://github.com/eisaa-rice"
          target="_blank"
        >
          github
        </a>
        .
      </p>
    </section>
  );
};

export default Projects;
