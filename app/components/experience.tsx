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
  },
];

export const Job = ({
  title,
  company,
  time,
  desc,
  img,
}: {
  title: string;
  company: string;
  time: string;
  desc: string;
  img: string;
}) => {
  return (
    <div className="flex items-center gap-6">
      <div
        className="rounded-full h-20 w-20 bg-white relative 
        flex-shrink-0 border-2 border-white shadow-md"
      >
        <Image
          className="mt-1 px-2"
          src={img}
          alt={company}
          fill={true}
          objectFit="contain"
        />
      </div>

      <div className="flex flex-col justify-center">
        <p className="text-neutral-600 text-sm">{time}</p>

        <p className="text-xl font-semibold mb-3">
          {title} <span className="opacity-50">·</span>{" "}
          <span className="font-normal text-neutral-800"> {company}</span>
        </p>

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
        {experience.map(({ title, company, time, desc, img }, i) => (
          <Job
            key={i}
            title={title}
            company={company}
            time={time}
            desc={desc}
            img={img}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
