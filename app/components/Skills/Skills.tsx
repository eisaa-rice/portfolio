"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import "./Skills.css";

interface SkillProps {
  skills: {
    src: string;
    alt: string;
    height: number;
    width: number;
    style?: React.CSSProperties;
  };
}
const Skill: React.FC<SkillProps> = ({
  skills: { src, alt, height, width, style },
}) => {
  return (
    <div className="flex items-center justify-center flex-shrink-0 h-[100px] w-[100px] bg-white rounded-full shadow-sm">
      <div className="absolute">
        <Image
          src={src}
          alt={alt}
          height={height}
          width={width}
          style={style}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const skills = [
    {
      src: "/c++.svg",
      alt: "C++",
      height: 90,
      width: 90,
      yDelay: 0,
      rotateDelay: 0,
    },
    {
      src: "/csharp.svg",
      alt: "C#",
      height: 82.5,
      width: 82.5,
      yDelay: 1.74,
      rotateDelay: 0.5,
    },
    {
      src: "/java.svg",
      alt: "Java",
      height: 75,
      width: 75,
      yDelay: 0.29,
      rotateDelay: 1.07,
      style: { marginBottom: 5 },
    },
    {
      src: "/python.svg",
      alt: "Python",
      height: 70,
      width: 70,
      yDelay: 2,
      rotateDelay: 0.42,
      style: { marginTop: 15 },
    },
    {
      src: "/html.svg",
      alt: "HTML",
      height: 60,
      width: 60,
      yDelay: 0.78,
      rotateDelay: 0.91,
      style: { marginTop: 10 },
    },
    {
      src: "/css.svg",
      alt: "CSS",
      height: 67.5,
      width: 67.5,
      yDelay: 1.44,
      rotateDelay: 0.24,
      style: { marginTop: 10 },
    },
    {
      src: "/javascript.svg",
      alt: "Javascript",
      height: 65,
      width: 65,
      yDelay: 0.15,
      rotateDelay: 1.45,
      style: { borderRadius: 5, marginBottom: 2 },
    },
    {
      src: "/typescript.svg",
      alt: "Typescript",
      height: 65,
      width: 65,
      yDelay: 1.21,
      rotateDelay: 0.44,
      style: { borderRadius: 5, marginBottom: 2 },
    },

    {
      src: "/react.svg",
      alt: "React.js",
      height: 75,
      width: 75,
      yDelay: 0.8,
      rotateDelay: 1.35,
    },
    {
      src: "/react-native.svg",
      alt: "React Native",
      height: 90,
      width: 90,
      yDelay: 1.9,
      rotateDelay: 0.72,
      style: { marginBottom: 10 },
    },
    {
      src: "/tailwind.svg",
      alt: "Tailwind CSS",
      height: 80,
      width: 80,
      yDelay: 0.57,
      rotateDelay: 1.16,
    },
    {
      src: "/nodejs.svg",
      alt: "Node.js",
      height: 80,
      width: 80,
      yDelay: 1.58,
      rotateDelay: 0.37,
    },
    {
      src: "/framer-motion.svg",
      alt: "Framer Motion",
      height: 60,
      width: 60,
      yDelay: 0.3,
      rotateDelay: 1.45,
    },

    {
      src: "/git.svg",
      alt: "Git",
      height: 75,
      width: 75,
      yDelay: 0.3,
      rotateDelay: 1.45,
    },
    {
      src: "/github.svg",
      alt: "GitHub",
      height: 75,
      width: 75,
      yDelay: 1.68,
      rotateDelay: 0.67,
    },
  ];

  return (
    <div
      className="flex flex-wrap items-center justify-around w-full max-w-[1200px] mb-96 mx-auto gap-y-12 
      gap-x-6 xs:gap-16 sm:gap-20 xl:gap-32"
    >
      {skills.map((skill, index) => (
        <Skill key={index} skills={skill} />
      ))}
    </div>
  );
};

export default Skills;
