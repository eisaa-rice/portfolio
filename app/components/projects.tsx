"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "hack dearborn 3",
    desc: "the webpage and mobile app for UofM - Dearborn's 3rd annual hackathon.",
    img: "/images/hd3.png",
    link: "https://www.hackdearborn.org/",
    skills: ["React", "React Native", "Supabase"],
  },
  {
    title: "code conductor",
    desc: "an interactive platform where anyone can design and visualize custom algorithms.",
    img: "/images/cc.png",
    link: "https://www.iwdsummit.com/",
    skills: ["React", "TypeScript", "Material UI"],
  },
  {
    title: "bhm summit",
    desc: "information hub for a 2025 black history month conference held in detroit.",
    img: "/images/bhm.png",
    link: "https://gdg-summit-webiste.vercel.app/",
    skills: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "iwd summit",
    desc: "information hub for a 2024 women’s day conference held in detroit.",
    img: "/images/iwd.png",
    link: "https://www.codeconductor.org/",
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
      className="w-72 h-[500px] border border-gray-300 rounded-3xl
    flex flex-col overflow-hidden"
    >
      <div className="relative h-72 w-72 bg-white">
        <Image
          className="rounded-tl-3xl rounded-tr-3xl"
          src={img}
          alt={title}
          fill={true}
          objectFit="cover"
        />
      </div>

      <div
        className="flex flex-col p-4 h-[212px] mt-auto mb-0
      border-t border-gray-300"
      >
        <a
          className="font-bold text-xl mb-3"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>

        <p className="text-gray-400 text-lg">{desc}</p>

        <div className="flex flex-wrap justify-between mt-auto">
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
      <p
        className="text-3xl text-gray-800 font-medium text-center
        border-b border-gray-300 w-fit mx-auto px-6 pb-2"
      >
        💻 projects
      </p>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between mt-12 flex-wrap">
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
