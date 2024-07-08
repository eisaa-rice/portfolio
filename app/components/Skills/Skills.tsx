import React from "react";
import Image from "next/image";

import "./Skills.css";

interface SkillProps {
  title: string;
}
const Skill: React.FC<SkillProps> = ({ title }) => {
  return (
    <div className="skill">
      <p className="text-xl font-semibold text-center my-6">{title}</p>

      <div className="relative">
        <div className="absolute p-6"></div>

        <Image
          className="absolute hidden lg:block lg:w-[300px]"
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

      <div className="flex flex-col items-center justify-center lg:justify-evenly lg:flex-row gap-12 lg:gap-6 mt-16">
        <Skill title="languages" />

        <Skill title="frameworks" />

        <Skill title="technologies" />
      </div>
    </div>
  );
}

export default Skills;
