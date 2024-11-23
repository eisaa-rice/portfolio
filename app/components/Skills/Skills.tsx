"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const Skill = ({
  name,
  src,
  style,
}: {
  name: string;
  src: string;
  style?: React.CSSProperties; // question mark means optional prop
}) => {
  return (
    <p
      className="font-extralight px-4 py-3 bg-white rounded-xl shadow-sm
      text-lg inline-flex items-center gap-2 flex-shrink-0"
    >
      {name}
      <Image src={src} alt={name} height={25} width={25} style={style} />
    </p>
  );
};

const Skills = () => {
  const languages = [
    { name: "C++", src: "/svgs/c++.svg", style: { width: 30 } },
    { name: "C#", src: "/svgs/csharp.svg", style: {} },

    { name: "Java", src: "/svgs/java.svg", style: {} },
    { name: "Python", src: "/svgs/python.svg", style: { marginTop: 7.5 } },

    { name: "HTML", src: "/svgs/html.svg", style: {} },
    { name: "CSS", src: "/svgs/css.svg", style: { width: 30 } },
    {
      name: "JavaScript",
      src: "/svgs/javascript.svg",
      style: { borderRadius: 2.5 },
    },
    {
      name: "TypeScript",
      src: "/svgs/typescript.svg",
      style: { borderRadius: 2.5 },
    },

    { name: "SQL", src: "/svgs/sql.svg", style: {} },
  ];

  const frameworks = [
    { name: "React.js", src: "/svgs/react.svg", style: {} },
    {
      name: "React Native",
      src: "/svgs/react-native.svg",
      style: { height: 35 },
    },
    { name: "Next.js", src: "/svgs/nextjs.svg", style: {} },

    { name: "Tailwind CSS", src: "/svgs/tailwind.svg", style: {} },
    { name: "Framer Motion", src: "/svgs/framer-motion.svg", style: {} },

    { name: "Node.js", src: "/svgs/nodejs.svg", style: {} },
  ];

  const tools = [
    { name: "Git", src: "/svgs/git.svg", style: {} },
    { name: "GitHub", src: "/svgs/github.svg", style: {} },

    { name: "MySQL", src: "/svgs/mysql.svg", style: {} },

    { name: "Docker", src: "/svgs/docker.svg", style: {} },
    { name: "AWS", src: "/svgs/aws.svg", style: { marginTop: 5 } },
  ];

  return (
    <div
      className="flex flex-col items-center justify-center px-2
      w-[320px] xs:w-[450px] sm:w-[600px] lg:w-[750px] xl:w-[1150px] 2xl:w-[1400px]"
    >
      <p className="text-3xl text-center mb-24">
        I&apos;ve worked with these before.
      </p>

      <div
        className="flex flex-col items-center xl:items-start justify-center w-full gap-y-16 gap-x-6
        xl:grid xl:grid-rows-1 xl:grid-cols-3"
      >
        <div className="lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-2">
          <p
            className="font-light text-center mb-4
          text-2xl text-gray-600"
          >
            Languages
          </p>

          <div className="flex flex-wrap gap-5 items-center justify-center">
            {languages.map((language, index) => (
              <Skill
                key={index}
                name={language.name}
                src={language.src}
                style={language.style}
              />
            ))}
          </div>
        </div>

        <div className="lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3">
          <p
            className="font-light text-center mb-4
          text-2xl text-gray-600"
          >
            Frameworks
          </p>

          <div className="flex flex-wrap gap-5 items-center justify-center">
            {frameworks.map((framework, index) => (
              <Skill
                key={index}
                name={framework.name}
                src={framework.src}
                style={framework.style}
              />
            ))}
          </div>
        </div>

        <div className="lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-4">
          <p
            className="font-light text-center mb-4
          text-2xl text-gray-600"
          >
            Tools
          </p>

          <div className="flex flex-wrap gap-5 items-center justify-center">
            {tools.map((tool, index) => (
              <Skill
                key={index}
                name={tool.name}
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
