"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Skill } from "./skills";

const experience = [
  {
    title: "frontend developer",
    company: "google developer groups",
    time: "FEB 2024 - PRESENT",
    desc: "i developed scalable front-end web and app components for various regional events.",
    img: "/svgs/gdg.svg",
    style: { paddingLeft: "0.5rem", paddingRight: "0.5rem" },
  },
];

export const Job = ({
  title,
  company,
  time,
  desc,
  img,
  style,
}: {
  title: string;
  company: string;
  time: string;
  desc: string;
  img: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div className="flex items-center gap-6">
      <div
        className="rounded-full h-20 w-20 bg-white relative
        flex-shrink-0 border-2 border-white shadow-md"
      >
        <Image
          src={img}
          alt={company}
          fill={true}
          objectFit="contain"
          style={style}
        />
      </div>

      <div className="flex flex-col justify-center">
        <p
          className="text-xl font-semibold
        inline-flex items-center justify-between"
        >
          <span>{title}</span>
          <span className="text-sm font-normal text-neutral-400">{time}</span>
        </p>

        <motion.a
          className="text-lg font-normal text-neutral-600 mb-3 w-fit"
          whileHover={{
            textDecoration: "underline",
          }}
          href="https://gdg.community.dev/gdg-on-campus-university-of-michigan-dearborn-dearborn-united-states/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {company}
        </motion.a>

        <p className="text-neutral-500">{desc}</p>
      </div>

      {/* skills */}
    </div>
  );
};

const Experience = () => {
  return (
    <div id="experience" className="flex flex-col justify-center w-full">
      <motion.p
        className="text-2xl text-neutral-800 font-medium"
        initial={{ rotate: "-2deg", transformOrigin: "bottom left" }}
        whileInView={{
          rotate: ["-2deg", "0deg", "-1deg", "0deg"],
          transition: { ease: "backIn", duration: 0.4, delay: 0.25 },
        }}
        viewport={{ once: true }}
      >
        💼 here&apos;s where i&apos;ve been
      </motion.p>

      <div className="flex flex-col justify-center mt-12">
        {experience.map(({ title, company, time, desc, img, style }, i) => (
          <Job
            key={i}
            title={title}
            company={company}
            time={time}
            desc={desc}
            img={img}
            style={style}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
