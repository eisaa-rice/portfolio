"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

import "./About.css";

interface AboutProps {}
const About: React.FC<AboutProps> = () => {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-around gap-24 mb-96 w-full xl:px-12 overflow-visible">
      <div className="overflow-hidden relative md:static w-full max-w-[500px] flex-shrink-0">
        <motion.svg></motion.svg>

        <div
          className="rounded-full flex-shrink-0 bg-white shadow-sm relative overflow-hidden
          mb-16 m-auto xl:-mt-28
          h-[400px] xl:h-[440px] 2xl:h-[480px]
          w-[310px] xs:w-[370px] sm:w-[400px] xl:w-[440px] 2xl:w-[480px]"
        >
          <Image
            className="rounded-full mt-4 xs:"
            src="/images/animoji.png"
            alt="animoji"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      <div
        className="flex flex-col gap-6 text-2xl font-light opacity-75
      w-full
      px-2 sm:px-12"
      >
        <p>
          holá! 👋🏻 as you already know, the name&apos;s{" "}
          <span className="font-semibold">jésus orozco</span>!
        </p>

        <p>
          i was born, raised, and am currently based in{" "}
          <span className="font-semibold">detroit, mi</span> 🌮
        </p>

        <p>
          i&apos;m currently in my fourth year at 🎓{" "}
          <span className="font-semibold">
            university of michigan - dearborn
          </span>
          , majoring in <span className="font-semibold">computer science</span>{" "}
          🖥️
        </p>

        <p>
          i currently volunteer as a developer for my university&apos;s{" "}
          <span className="font-semibold">google developer group</span>
          <span className="font-semibold"></span>
        </p>
      </div>
    </div>
  );
};

export default About;
