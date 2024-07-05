import React from "react";
import Image from "next/image";

import "./Skills.css";

interface SkillProps {
  title: string;
}
const Skill: React.FC<SkillProps> = ({ title }) => {
  return (
    <div className="skill">
      <p className="text-center">{title}</p>

      <div className="relative">
        <div className="absolute p-6">
          <p>A</p>
          <p>B</p>
          <p>C</p>
          <p>D</p>
        </div>

        <Image
          // md:w-[300px] lg:w-[300px]
          className="absolute"
          src="/images/rectangle.png"
          alt=""
          width={900}
          height={900}
        />
      </div>
    </div>
  );
};

function Skills() {
  return (
    <div className="skills">
      <div>
        <p className="text-4xl font-bold text-center md:text-start">
          i&apos;ve used these before
        </p>

        <Image
          className="secondary-underline hidden sm:block sm:mx-auto md:mx-0"
          src="/images/underline.png"
          alt=""
          width={500}
          height={300}
        />
      </div>

      <div className="flex items-center justify-center md:justify-evenly flex-col md:flex-row gap-12 mt-16">
        <Skill title="languages" />

        <Skill title="frameworks" />

        <Skill title="technologies" />
      </div>
    </div>
  );
}

export default Skills;
