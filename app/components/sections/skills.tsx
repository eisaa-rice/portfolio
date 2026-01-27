"use client";

import Image from "next/image";
import { motion } from "motion/react";

import SectionHeader from "../ui/sectionHeader";

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

  { skill: "Node.js", src: "/svgs/nodejs.svg", style: {} },
  { skill: "Express", src: "/svgs/express.svg", style: {} },
];

const tools = [
  { skill: "Git", src: "/svgs/git.svg", style: {} },
  { skill: "GitHub", src: "/svgs/github.svg", style: {} },

  { skill: "MySQL", src: "/svgs/mysql.svg", style: {} },
  { skill: "PostgreSQL", src: "/svgs/postgresql.svg", style: {} },

  { skill: "Docker", src: "/svgs/docker.svg", style: {} },
  {
    skill: "AWS",
    src: "/svgs/aws.svg",
    style: { marginTop: 5 },
  },
  {
    skill: "Postman",
    src: "/svgs/postman.svg",
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
      className="inline-flex shrink-0 items-center justify-center 
      rounded-lg py-2 px-3 gap-2 h-10 text-sm
      border border-neutral-200 dark:border-neutral-800 font-light"
      whileHover="skill"
    >
      {skill}

      <Image style={style} src={src} alt={skill} height={20} width={20} />
    </motion.p>
  );
};

const Skills = () => {
  return (
    <section id="skills">
      <SectionHeader
        emoji="🛠️"
        title="skills"
        emojiStyle={{ marginLeft: "-0.25rem" }}
      />

      <div
        className="flex flex-col justify-center pb-6 gap-12
        lg:grid lg:grid-cols-3 lg:grid-rows-1"
      >
        <div className="row-start-1 row-end-2 col-start-1 col-end-2">
          <h3 className="text-xl mb-4 font-medium">languages 🔣</h3>

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
          <h3 className="text-xl mb-4 font-medium">frameworks 🚧</h3>

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
          <h3 className="text-xl mb-4 font-medium">tools ⛏️</h3>

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
    </section>
  );
};

export default Skills;
