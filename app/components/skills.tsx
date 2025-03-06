"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const languages = [
  { skill: "C++", src: "/svgs/c++.svg", style: { width: 30 }, rotate: "2deg" },
  {
    skill: "C#",
    src: "/svgs/csharp.svg",
    style: { width: 25 },
    rotate: "-3deg",
  },

  { skill: "Java", src: "/svgs/java.svg", style: {}, rotate: "-2deg" },
  {
    skill: "Python",
    src: "/svgs/python.svg",
    style: { marginTop: 7.5 },
    rotate: "-2deg",
  },

  { skill: "HTML", src: "/svgs/html.svg", style: {}, rotate: "1deg" },
  { skill: "CSS", src: "/svgs/css.svg", style: { width: 25 }, rotate: "2deg" },
  {
    skill: "JavaScript",
    src: "/svgs/javascript.svg",
    style: { borderRadius: 2.5 },
    rotate: "-3deg",
  },
  {
    skill: "TypeScript",
    src: "/svgs/typescript.svg",
    style: { borderRadius: 2.5 },
    rotate: "3deg",
  },

  { skill: "SQL", src: "/svgs/sql.svg", style: {}, rotate: "-1deg" },
];

const frameworks = [
  { skill: "React", src: "/svgs/react.svg", style: {}, rotate: "1deg" },
  {
    skill: "React Native",
    src: "/svgs/react-native.svg",
    style: { height: 30 },
    rotate: "3deg",
  },
  { skill: "Next.js", src: "/svgs/nextjs.svg", style: {}, rotate: "1deg" },

  {
    skill: "Tailwind CSS",
    src: "/svgs/tailwind.svg",
    style: {},
    rotate: "-1deg",
  },
  {
    skill: "Framer Motion",
    src: "/svgs/framer-motion.svg",
    style: {},
    rotate: "-2deg",
  },

  { skill: "Node.js", src: "/svgs/nodejs.svg", style: {}, rotate: "1deg" },
];

const tools = [
  { skill: "Git", src: "/svgs/git.svg", style: {}, rotate: "2deg" },
  { skill: "GitHub", src: "/svgs/github.svg", style: {}, rotate: "3deg" },

  { skill: "MySQL", src: "/svgs/mysql.svg", style: {}, rotate: "-1deg" },

  { skill: "Docker", src: "/svgs/docker.svg", style: {}, rotate: "2deg" },
  {
    skill: "AWS",
    src: "/svgs/aws.svg",
    style: { marginTop: 5 },
    rotate: "-2deg",
  },
];

export const Skill = ({
  skill,
  src,
  style,
  rotate,
}: {
  skill: string;
  src: string;
  style?: React.CSSProperties;
  rotate: string;
}) => {
  return (
    <motion.p
      style={{ rotate: rotate }}
      className="inline-flex flex-shrink-0 items-center justify-center 
      text-gray-500 rounded-xl py-2 px-3 gap-2 h-[40px] text-sm
      border border-gray-300 font-light"
      whileHover="skill"
    >
      {skill}

      <Image style={style} src={src} alt={skill} height={20} width={20} />
    </motion.p>
  );
};

const Skills = () => {
  return (
    <div id="skills" className="flex flex-col justify-center w-full p-2">
      <p
        className="text-3xl text-gray-800 font-medium
        border-b border-gray-300 w-fit pr-6 pb-2"
      >
        🛠️ skills
      </p>

      <div
        className="flex flex-col justify-center mt-4 pb-6 gap-12
      lg:grid lg:grid-cols-3 lg:grid-rows-1"
      >
        <div className="row-start-1 row-end-2 col-start-1 col-end-2">
          <p className="text-lg font-normal text-gray-400 mb-4 lg:text-center">
            languages 🔣
          </p>

          <div className="flex flex-wrap gap-2 items-center justify-center px-2">
            {languages.map((language, index) => (
              <Skill
                key={index}
                skill={language.skill}
                src={language.src}
                style={language.style}
                rotate={language.rotate}
              />
            ))}
          </div>
        </div>

        <div className="row-start-1 row-end-2 col-start-2 col-end-3">
          <p className="text-lg font-normal text-gray-400 mb-4 lg:text-center">
            frameworks 🚧
          </p>

          <div className="flex flex-wrap gap-2 items-center justify-center px-2">
            {frameworks.map((framework, index) => (
              <Skill
                key={index}
                skill={framework.skill}
                src={framework.src}
                style={framework.style}
                rotate={framework.rotate}
              />
            ))}
          </div>
        </div>

        <div className="row-start-1 row-end-2 col-start-3 col-end-4">
          <p className="text-lg font-normal text-gray-400 mb-4 lg:text-center">
            tools ⛏️
          </p>

          <div className="flex flex-wrap gap-2 items-center justify-center px-2">
            {tools.map((tool, index) => (
              <Skill
                key={index}
                skill={tool.skill}
                src={tool.src}
                style={tool.style}
                rotate={tool.rotate}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
