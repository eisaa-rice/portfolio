"use client";

import React from "react";
import Image from "next/image";

import "./Experience.css";

interface JobProps {
  col: string;
  title: string;
  desc: string;
  row: string;
}
const Job: React.FC<JobProps> = ({ col, title, desc, row }) => {
  return (
    <div
      className={"job flex flex-col justify-center items-center p-4"}
      style={{ gridRow: row, gridColumn: col }}
    >
      <p className="text-center font-bold">{title}</p>

      <p className="text-center">{desc}</p>
    </div>
  );
};

const Experience: React.FC = () => {
  const workExperience: JobProps[] = [
    {
      title: "volunteer frontend developer",
      desc: "even more bullshit",
      col: "1/2",
      row: "1/2",
    },
    {
      title: "software engineer intern",
      desc: "a buncha bullshit",
      col: "3/4",
      row: "2/3",
    },
    {
      title: "software engineer co-op",
      desc: "in my fuckin dreams",
      col: "1/2",
      row: "3/4",
    },
  ];

  return (
    <div className="experience">
      <p className="text-4xl font-bold text-center">
        here&apos;s where i&apos;ve been
      </p>

      <div className="timeline md:grid md:grid-cols-3 my-24 gap-x-12 gap-y-4">
        {workExperience.map((job, index) => (
          <Job key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
