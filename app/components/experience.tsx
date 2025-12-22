"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const experience = [
  {
    title: "development lead",
    company: "university of michigan - dearborn",
    time: "may 2025 - dec 2025",
    desc: "i led a 4-person team in building a cross-platform mobile app for local coffee shops integrated with clover pos, engineered for scalability and reuse across different clients.",
    img: "/svgs/umd.svg",
    style: {
      padding: "0.5rem",
      backgroundColor: "#0b2b53",
    },
    link: "https://umdearborn.edu/cecs/life-cecs/events/senior-design-day",
    skills: ["React Native", "TypeScript", "Express", "Postman", "PostgreSQL"],
  },
  {
    title: "frontend developer",
    company: "google developer groups",
    time: "feb 2024 - feb 2025",
    desc: "i developed scalable front-end web and app components for various regional events.",
    img: "/svgs/gdg.svg",
    style: { paddingLeft: "0.5rem", paddingRight: "0.5rem" },
    link: "https://gdg.community.dev/gdg-on-campus-university-of-michigan-dearborn-dearborn-united-states/",
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
  link,
  skills,
}: {
  title: string;
  company: string;
  time: string;
  desc: string;
  img: string;
  style?: React.CSSProperties;
  link: string;
  skills: string[];
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-6">
      <div
        className="rounded-full h-24 w-24 relative flex-shrink-0 border border-gray-300
      overflow-hidden"
      >
        <Image
          className="object-contain"
          src={img}
          alt={company}
          fill={true}
          style={style}
        />
      </div>

      <div className="flex flex-col justify-center w-full">
        <p
          className="text-xl text-gray-800 font-medium flex-shrink-0 
        inline-flex flex-col sm:flex-row items-start sm:items-center justify-between"
        >
          {title}{" "}
          <span className="text-base font-light text-gray-400 flex-shrink-0">
            {time}
          </span>
        </p>

        <motion.a
          className="text-lg text-gray-600 flex-shrink-0 w-fit"
          whileHover={{
            textDecoration: "underline",
            underlineThickness: 0.5,
          }}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          @ {company}
        </motion.a>

        <p className="text-gray-500 mt-1">{desc}</p>

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
      <p className="text-3xl border-b border-gray-300 w-fit pr-6 pb-2 mb-8">
        💼 experience
      </p>

      <div className="flex flex-col justify-center gap-20">
        {experience.map(
          ({ title, company, time, desc, img, style, link, skills }, i) => (
            <Job
              key={i}
              title={title}
              company={company}
              time={time}
              desc={desc}
              img={img}
              style={style}
              link={link}
              skills={skills}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Experience;
