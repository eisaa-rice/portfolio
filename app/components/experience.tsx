"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Skill } from "./skills";

const experience = [
  {
    title: "frontend developer",
    company: "google developer groups",
    desc: "I developed scalable front-end web and app components for various regional events.",
    img: "/svgs/gdg.svg",
  },
];

export const Job = ({
  title,
  company,
  desc,
  img,
}: {
  title: string;
  company: string;
  desc: string;
  img: string;
}) => {
  return (
    <div className="flex items-center gap-6 ">
      <div
        className="rounded-full h-28 w-28 bg-white 
        relative overflow-hidden flex-shrink-0
        border-2 border-white shadow-md"
      >
        <Image
          className="mt-8 scale-125 transform"
          src={img}
          alt={company}
          fill={true}
          objectFit="contain"
        />
      </div>

      <div className="flex flex-col justify-center">
        <p className="text-2xl font-normal text-stone-500">{company}</p>

        <p className="text-3xl font-semibold mb-3">{title}</p>

        <p className="text-xl">{desc}</p>
      </div>

      {/* skills */}
    </div>
  );
};

const Experience = () => {
  return (
    <div id="experience" className="flex flex-col justify-center w-full">
      <motion.p
        className="text-3xl font-bold"
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
        {experience.map(({ title, company, desc, img }, i) => (
          <Job key={i} title={title} company={company} desc={desc} img={img} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
