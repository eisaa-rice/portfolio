"use client";

import { motion } from "motion/react";

import SectionHeader from "../ui/sectionHeader";

const mainProjects = [
  {
    title: "🍵 brew buzz",
    desc: "mobile app for local coffee shops integrated with clover's point-of-sales system.",
    link: "",
    skills: ["React Native", "Express", "PostgreSQL"],
  },
  {
    title: "👾 hack dearborn",
    desc: "the webpage and mobile app for uofm - dearborn's annual hackathon.",
    link: "https://www.hackdearborn.org/",
    skills: ["React", "React Native", "Supabase"],
  },
  {
    title: "👨🏿‍💻 bhm summit",
    desc: "information hub for a 2025 black history month conference held in detroit.",
    img: "/images/bhm.png",
    link: "https://gdg-summit-webiste.vercel.app/",
    skills: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "👩🏼‍💻 iwd summit",
    desc: "information hub for a 2024 international women's day conference held in detroit.",
    img: "/images/iwd.png",
    link: "https://www.iwdsummit.com/",
    skills: ["React", "JavaScript", "Tailwind CSS"],
  },
];

const MainProject = ({
  title,
  desc,
  link,
  skills,
}: {
  title: string;
  desc: string;
  link: string;
  skills: string[];
}) => {
  return (
    <motion.a
      className="border border-neutral-300 rounded-lg
      min-h-48"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.025, cursor: "pointer" }}
    >
      <p>{title}</p>
    </motion.a>
  );
};

const subProjects = [
  // {
  //   // IN PROGRESS
  //   title: "🎲 yahtzee",
  //   desc: "classic yahtzee dice game built in c# using windows forms.",
  //   link: "https://github.com/eisaa-rice/yahtzee",
  //   skills: ["C#", "WinForms"],
  // },
  {
    title: "🧮 assembly calculator",
    desc: "calculator that supports boolean and algebraic operations on hexadecimal integers, written in assembly.",
    link: "https://github.com/eisaa-rice/assembly-calculator",
    skills: ["MASM"],
  },
  {
    title: "🖥️ cpu process management simulation",
    desc: "cpu job processing simulator built in c++ to model how a processor handles and schedules incoming tasks.",
    link: "https://github.com/eisaa-rice/cpu-process-management-simulation",
    skills: ["C++"],
  },
];

const SubProject = ({
  title,
  desc,
  link,
  skills,
}: {
  title: string;
  desc: string;
  link: string;
  skills: string[];
}) => {
  return (
    <div>
      <motion.a
        className="flex justify-between font-medium mb-1"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover="link"
      >
        <span className="inline-flex flex-col">
          {title}
          <motion.span
            className="h-px w-full bg-neutral-400"
            initial={{ width: "0%" }}
            variants={{
              link: {
                width: "100%",
              },
            }}
          />
        </span>

        <motion.span
          initial={{ opacity: 0.25, scale: 1, x: 0, y: 0 }}
          variants={{ link: { opacity: 1, scale: 1.05, x: 2, y: -2 } }}
        >
          ↗
        </motion.span>
      </motion.a>

      <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
        <p>{desc}</p>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <p
              key={i}
              className="text-xs text-neutral-400
              rounded-full border border-neutral-200 px-2 py-1"
            >
              {skill}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects">
      <SectionHeader emoji="💻" title="projects" />

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12">
        {mainProjects.map((mp, i) => (
          <MainProject
            key={i}
            title={mp.title}
            desc={mp.desc}
            link={mp.link}
            skills={mp.skills}
          />
        ))}
      </div>

      <div className="flex flex-col gap-6">
        {subProjects.map((sp, i) => (
          <SubProject
            key={i}
            title={sp.title}
            desc={sp.desc}
            link={sp.link}
            skills={sp.skills}
          />
        ))}
      </div>

      <p className="mt-12 mx-auto text-center italic">
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
