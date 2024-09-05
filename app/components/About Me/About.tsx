"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import "./About.css";

const About = () => {
  return (
    <div className="about flex items-center justify-center">
      <div className="flex flex-col justify-center items-start mx-12 md:mx-auto gap-y-8">
        {/* <div className="bg-red-300 mx-auto h-[200px] w-[200px] sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px] sm:rotate-[7deg]"></div> */}

        <p className="text-lg font-extralight rotate-[2deg]">
          as you&apos;ve probably seen, my name&apos;s{" "}
          <strong>jesus orozco</strong>, but some of my friends call me{" "}
          <strong>eisaa</strong>.
        </p>

        <p className="text-lg font-extralight rotate-[1deg]">
          i was born and raised, and am still <strong>located</strong> in,{" "}
          <strong>detroit, michigan</strong>, where the roots of my{" "}
          <strong>mexican</strong> heritage lie.
        </p>

        <p className="text-lg font-extralight rotate-[-1deg]">
          i&apos;m currently attending{" "}
          <strong>university of michigan - dearborn</strong> where i&apos;m
          majoring in <strong>computer science</strong>.
        </p>

        <p className="text-lg font-extralight ">
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
