import React from "react";
import Image from "next/image";

import "./Skills.css";

interface SkillProps {
  title: string;
  icons: { path: string; label: string }[];
}
const Skill: React.FC<SkillProps> = ({ title, icons }) => {
  return (
    <div className="skill">
      <p className="text-xl font-semibold text-center my-6">{title}</p>

      <div className="flex flex-row justify-center items-center flex-wrap gap-10">
        {icons.map(({ path, label }, index) => (
          <Image
            key={index}
            className="flex flex-row justify-center items-center"
            height={48}
            width={48}
            src={path}
            alt={label}
          />
        ))}
      </div>
    </div>
  );
};

function Skills() {
  const languages = [
    { label: "C++", path: "/c++.svg" },
    { label: "Java", path: "/java.svg" },
    { label: "Python", path: "/python.svg" },
    { label: "HTML", path: "/html.svg" },
    { label: "CSS", path: "/css.svg" },
    { label: "JavaScript", path: "/javascript.svg" },
    { label: "TypeScript", path: "/typeScript.svg" },
  ];

  const frameworks = [
    { label: "React", path: "/react.svg" },
    { label: "React Native", path: "/react-native.svg" },
    { label: "Next.js", path: "/nextjs.svg" },
    { label: "Tailwind CSS", path: "/tailwind-css.svg" },
  ];

  const technologies = [
    { label: "Git", path: "/git.svg" },
    { label: "GitHub", path: "/github.svg" },
    { label: "Node.js", path: "/nodejs.svg" },
    { label: "Docker", path: "/docker.svg" },
  ];

  return (
    <div className="skills">
      <div>
        <p className="text-4xl font-bold text-center">
          i&apos;ve used these before
        </p>

        <Image
          className="secondary-underline hidden sm:block sm:mx-auto"
          src="/images/underline-one.png"
          alt=""
          width={500}
          height={300}
        />
      </div>

      <div className="flex flex-col items-center justify-center lg:justify-evenly lg:flex-row gap-12 lg:gap-12 mt-16 lg:mt-0">
        <Skill title="languages" icons={languages} />

        <Skill title="frameworks" icons={frameworks} />

        <Skill title="technologies" icons={technologies} />
      </div>
    </div>
  );
}

export default Skills;
