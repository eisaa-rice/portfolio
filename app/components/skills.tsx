"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const languages = [
  { skill: "C++", src: "/svgs/c++.svg", style: { width: 30 } },
  {
    skill: "C#",
    src: "/svgs/csharp.svg",
    style: { width: 25 },
  },

  { skill: "Java", src: "/svgs/java.svg", style: {} },

  { skill: "HTML", src: "/svgs/html.svg", style: {} },
  { skill: "CSS", src: "/svgs/css.svg", style: { width: 25 } },
  {
    skill: "JavaScript",
    src: "/svgs/javascript.svg",
    style: { borderRadius: 2.5 },
  },
  {
    skill: "TypeScript",
    src: "/svgs/typescript.svg",
    style: { borderRadius: 2.5 },
  },
  {
    skill: "Python",
    src: "/svgs/python.svg",
    style: { marginTop: 7.5 },
  },
  { skill: "SQL", src: "/svgs/sql.svg", style: {} },
];

const frameworks = [
  { skill: "React", src: "/svgs/react.svg", style: {} },
  {
    skill: "React Native",
    src: "/svgs/react-native.svg",
    style: { height: 30 },
  },

  {
    skill: "Tailwind CSS",
    src: "/svgs/tailwind.svg",
    style: {},
  },
  {
    skill: "Framer Motion",
    src: "/svgs/framer-motion.svg",
    style: {},
  },

  { skill: "Node.js", src: "/svgs/nodejs.svg", style: {} },
];

const tools = [
  { skill: "Git", src: "/svgs/git.svg", style: {} },
  { skill: "GitHub", src: "/svgs/github.svg", style: {} },

  { skill: "MySQL", src: "/svgs/mysql.svg", style: {} },

  { skill: "Docker", src: "/svgs/docker.svg", style: {} },
  {
    skill: "AWS",
    src: "/svgs/aws.svg",
    style: { marginTop: 5 },
  },
];

export const Skill = ({
  skill,
  src,
  style,
}: {
  skill: string;
  src: string;
  style?: React.CSSProperties;
}) => {
  return (
    <motion.p
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
      <p className="text-2xl border-b border-gray-300 w-fit pr-6 pb-2 mb-8">
        🛠️ skills
      </p>

      <div
        className="flex flex-col justify-center pb-6 gap-12
      lg:grid lg:grid-cols-3 lg:grid-rows-1"
      >
        <div className="row-start-1 row-end-2 col-start-1 col-end-2">
          <p className="text-xl text-gray-700 mb-4">languages 🔣</p>

          <div className="flex flex-wrap gap-2">
            {languages.map((language, index) => (
              <Skill
                key={index}
                skill={language.skill}
                src={language.src}
                style={language.style}
              />
            ))}
          </div>
        </div>

        <div className="row-start-1 row-end-2 col-start-2 col-end-3">
          <p className="text-xl text-gray-700 mb-4">frameworks 🚧</p>

          <div className="flex flex-wrap gap-2">
            {frameworks.map((framework, index) => (
              <Skill
                key={index}
                skill={framework.skill}
                src={framework.src}
                style={framework.style}
              />
            ))}
          </div>
        </div>

        <div className="row-start-1 row-end-2 col-start-3 col-end-4">
          <p className="text-xl text-gray-700 mb-4">tools ⛏️</p>

          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <Skill
                key={index}
                skill={tool.skill}
                src={tool.src}
                style={tool.style}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
