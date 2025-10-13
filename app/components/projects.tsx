"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "🍵 brew buzz",
    desc: "mobile app for local coffee shops integrated with Clover POS.",
    img: "/images/bb.png",
    link: "",
    skills: ["React Native", "Express", "PostgreSQL"],
  },
  {
    title: "👾 hack dearborn",
    desc: "the webpage and mobile app for UofM - Dearborn's annual hackathon.",
    img: "/images/hd3.png",
    link: "https://www.hackdearborn.org/",
    skills: ["React", "React Native", "Supabase"],
  },
  {
    title: "🤖 code conductor",
    desc: "an interactive platform where anyone can design and visualize algorithms.",
    img: "/images/cc.png",
    link: "https://www.codeconductor.org/",
    skills: ["React", "TypeScript", "Material UI"],
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

const Project = ({
  title,
  desc,
  img,
  link,
  skills,
}: {
  title: string;
  desc: string;
  img: string;
  link: string;
  skills: string[];
}) => {
  return (
    <div
      className="w-full border border-gray-300 rounded-3xl
    flex flex-col overflow-hidden"
    >
      <div className="relative h-52 w-full flex-shrink-0 bg-white">
        <Image className="object-cover" src={img} alt={title} fill={true} />
      </div>

      <div className="flex flex-col p-4 border-t border-gray-300">
        <motion.a
          className="w-full flex flex-col mb-2"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover="link"
        >
          <div className="flex items-center justify-between">
            <p className="text-xl text-gray-800 font-medium inline-flex flex-col">
              {title}

              <motion.span
                className="h-px w-full bg-gray-500 -mt-1"
                initial={{ scaleX: 0, transformOrigin: "left" }}
                variants={{
                  link: {
                    scaleX: 1,
                    transition: { duration: 0.2, ease: "linear" },
                  },
                }}
              />
            </p>

            <motion.div
              initial={{ x: 0, y: 0 }}
              variants={{
                link: {
                  x: 2,
                  y: -2,
                  transition: { duration: 0.2, ease: "linear" },
                },
              }}
            >
              <Image
                src="/svgs/external-link.svg"
                alt={title}
                height={25}
                width={25}
              />
            </motion.div>
          </div>
        </motion.a>

        <p className="text-gray-500">{desc}</p>

        <div className="flex flex-wrap justify-start gap-2 pt-4 mt-auto">
          {skills.map((s, i) => (
            <div
              key={i}
              className="text-gray-400 text-sm 
              rounded-full border border-gray-300 px-2 py-1"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col justify-center w-full">
      <p className="text-3xl border-b border-gray-300 w-fit pr-6 pb-2 mb-8">
        💻 projects
      </p>

      <div
        className="flex flex-col gap-y-6 sm:gap-4 md:gap-8
        sm:grid sm:grid-cols-2"
      >
        {projects.map((p, i) => (
          <Project
            key={i}
            title={p.title}
            desc={p.desc}
            img={p.img}
            link={p.link}
            skills={p.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
