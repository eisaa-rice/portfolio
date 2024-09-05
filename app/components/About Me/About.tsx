"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import "./About.css";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center sm:items-start sm:mx-auto justify-center text-center xs:text-start gap-x-12 lg:gap-x-32">
      <div className="bg-red-300 my-12 md:my-0 mx-auto h-[200px] w-[200px] xs:h-[300px] xs:w-[300px] lg:h-[400px] lg:w-[400px] xs:rotate-[-7deg]"></div>

      <div className="max-w-[350px] mx-2">
        <p className="text-lg font-extralight">
          as you&apos;ve probably seen, my name&apos;s{" "}
          <strong>jesus orozco</strong>, but some of my friends call me{" "}
          <strong>eisaa</strong>.
        </p>
        <p className="text-lg font-extralight">
          i was born and raised, and am still <strong>located</strong> in,{" "}
          <strong>detroit, michigan</strong>, where the roots of my{" "}
          <strong>mexican</strong> heritage lie.
        </p>
        <p className="text-lg font-extralight">
          i&apos;m currently attending{" "}
          <strong>university of michigan - dearborn</strong> where i&apos;m
          majoring in <strong>computer science</strong>.
        </p>
        <p className="text-lg font-extralight">
          i&apos;m aspiring to be a <strong>web</strong> and{" "}
          <strong>app developer</strong>, having already worked on multiple
          projects for regional events such as <strong>conferences</strong> and{" "}
          <strong>hackathons</strong>.
        </p>
      </div>
    </div>
  );
};

export default About;
