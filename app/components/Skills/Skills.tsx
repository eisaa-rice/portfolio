import React from "react";
import Image from "next/image";

import "./Skills.css";

interface SkillProps {
  title: string;
}
const Skill: React.FC<SkillProps> = ({ title }) => {
  return (
    <div className="skill">
      <p>{title}</p>

      <div></div>
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
          width={450}
          height={300}
        />
      </div>

      <div>
        <Skill title="languages" />

        <Skill title="frameworks" />

        <Skill title="technologies" />
      </div>
    </div>
  );
}

export default Skills;
