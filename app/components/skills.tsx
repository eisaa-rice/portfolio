"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const languages = [
  { skill: "C++", src: "/svgs/c++.svg", style: { width: 30 }, rotate: "2deg" },
  { skill: "C#", src: "/svgs/csharp.svg", style: {}, rotate: "-3deg" },

  { skill: "Java", src: "/svgs/java.svg", style: {}, rotate: "-2deg" },
  {
    skill: "Python",
    src: "/svgs/python.svg",
    style: { marginTop: 7.5 },
    rotate: "-2deg",
  },

  { skill: "HTML", src: "/svgs/html.svg", style: {}, rotate: "1deg" },
  { skill: "CSS", src: "/svgs/css.svg", style: { width: 30 }, rotate: "2deg" },
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
  { skill: "React.js", src: "/svgs/react.svg", style: {}, rotate: "1deg" },
  {
    skill: "React Native",
    src: "/svgs/react-native.svg",
    style: { height: 35 },
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
    <p
      style={{ rotate: rotate }}
      className="inline-flex flex-shrink-0 p-3 gap-3 items-center justify-center
      bg-white shadow-sm rounded-xl text-lg"
    >
      {skill}

      <Image src={src} alt={skill} height={25} width={25} style={style} />
    </p>
  );
};

const Skills = () => {
  return (
    <div id="skills" className="flex flex-col justify-center w-full">
      <motion.p
        className="text-3xl font-bold"
        initial={{ rotate: "-2deg", transformOrigin: "bottom left" }}
        whileInView={{
          rotate: ["-2deg", "0deg", "-1deg", "0deg"],
          transition: { ease: "backIn", duration: 0.4, delay: 0.25 },
        }}
        viewport={{ once: true }}
      >
        🛠️ i&apos;ve worked with these before
      </motion.p>

      <div className="flex flex-col justify-center mt-12">
        <div className="row-start-1 row-end-2 col-start-1 col-end-2">
          <p className="text-2xl font-normal">languages 🔣</p>

          <div className="flex flex-wrap gap-12 items-center justify-center py-12 px-2">
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

        <div className="row-start-1 row-end-2 col-start-2 col-end-3 mt-4">
          <p className="text-2xl font-normal">frameworks 🚧</p>

          <div className="flex flex-wrap gap-12 items-center justify-center py-12 px-2">
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
          <p className="text-2xl font-normal">tools ⛏️</p>

          <div className="flex flex-wrap gap-12 items-center justify-center py-12 px-2">
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
