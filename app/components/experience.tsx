"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const experience = [
  {
    title: "frontend developer",
    company: "google developer groups",
    time: "feb 2024 - present",
    desc: "i developed scalable front-end web and app components for various regional events.",
    img: "/svgs/gdg.svg",
    style: { paddingLeft: "0.5rem", paddingRight: "0.5rem" },
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
];

export const Job = ({
  title,
  company,
  time,
  desc,
  img,
  style,
  skills,
}: {
  title: string;
  company: string;
  time: string;
  desc: string;
  img: string;
  style?: React.CSSProperties;
  skills: string[];
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-6">
      <div className="rounded-full h-24 w-24 relative flex-shrink-0 border border-gray-300">
        <Image
          src={img}
          alt={company}
          fill={true}
          objectFit="contain"
          style={style}
        />
      </div>

      <div className="flex flex-col justify-center w-full">
        <p
          className="text-2xl font-bold
        inline-flex flex-col sm:flex-row items-center justify-between"
        >
          <span>{title}</span>
          <span className="text-base font-normal text-gray-400">{time}</span>
        </p>

        <motion.a
          className="text-xl font-normal text-gray-600 my-1
          mx-auto sm:mx-0"
          whileHover={{
            textDecoration: "underline",
          }}
          href="https://gdg.community.dev/gdg-on-campus-university-of-michigan-dearborn-dearborn-united-states/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {company}
        </motion.a>

        <p className="text-gray-400 text-lg mt-1">{desc}</p>

        <div className="flex flex-wrap justify-start gap-2 mt-4">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="text-gray-400 text-sm 
              rounded-full border border-gray-300 px-2 py-1"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div id="experience" className="flex flex-col justify-center w-full">
      <p
        className="text-3xl text-gray-800 font-medium
        border-b border-gray-300 w-fit pr-6 pb-2"
      >
        💼 experience
      </p>

      <div className="flex flex-col justify-center mt-4">
        {experience.map(
          ({ title, company, time, desc, img, style, skills }, i) => (
            <Job
              key={i}
              title={title}
              company={company}
              time={time}
              desc={desc}
              img={img}
              style={style}
              skills={skills}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Experience;
