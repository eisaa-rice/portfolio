"use client";

import Image from "next/image";
import { motion } from "motion/react";

import SectionHeader from "../ui/sectionHeader";

const projects = [
  {
    title: "🍵 brew buzz",
    desc: "mobile app for local coffee shops integrated with clover's point-of-sales system.",
    img: "/images/bb.png",
    link: "https://umdearborn.edu/cecs/life-cecs/events/senior-design-day",
    skills: ["React Native", "Express", "PostgreSQL"],
  },
  {
    title: "👾 hack dearborn",
    desc: "the webpage and mobile app for uofm - dearborn's annual hackathon.",
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
    title: "🗣️ conference websites",
    desc: "information hub for a 2025 black history month conference held in detroit.",
    img: "/images/bhm.png",
    link: "https://gdg-summit-webiste.vercel.app/",
    skills: ["React", "JavaScript", "Tailwind CSS"],
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <SectionHeader emoji="💻" title="projects" />
    </section>
  );
};

export default Projects;
