"use client";

import React from "react";
import { animate, motion } from "framer-motion";
import Image from "next/image";

import "./Hero.css";

interface HeroProps {}
const Hero: React.FC<HeroProps> = () => {
  return (
    <div
      className="flex flex-col items-center xl:grid xl:grid-cols-[2fr 1fr] xl:grid-rows-1 mb-96
      w-full min-h-screen"
    >
      <div
        className="m-auto relative md:static w-full flex-shrink-0 mt-16 mb-8
        xl:col-start-2 xl:col-end-3 xl:row-start-1 xl:row-end-2 overflow-visible"
      >
        <div
          className="rounded-full flex-shrink-0 bg-white shadow-sm relative overflow-hidden m-auto
        h-[400px]                           xl:h-[440px] 2xl:h-[480px]
        w-[310px] xs:w-[370px] sm:w-[400px] xl:w-[440px] 2xl:w-[480px]"
        >
          <Image
            className="rounded-full mt-4"
            src="/images/animoji.png"
            alt="animoji"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      <div
        className="inline-flex flex-col justify-center items-center xl:items-start
        mx-auto xl:mx-0 gap-14 xl:mt-0
        xl:col-start-1 xl:col-end-2 xl:row-start-1 xl:row-end-2"
      >
        <p
          className="text-center xl:text-start opacity-75 -mb-12
          text-xl sm:text-2xl lg:text-3xl"
        >
          hi, i&apos;m
        </p>

        <p
          // text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600
          className="text-center xl:text-start inline flex-shrink-0 font-extrabold 
          text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600
          text-7xl sm:text-8xl lg:text-9xl pb-2"
        >
          jésus orozco
        </p>

        <p
          className="text-center xl:text-start inline flex-shrink-0 font-semibold opacity-75
          text-5xl sm:text-6xl lg:text-7xl"
        >
          software engineer
        </p>

        <p
          // flex flex-col xs:flex-row
          className="text-center xl:text-start font-light
          flex flex-col xs:block flex-shrink-0 
          text-2xl sm:text-3xl lg:text-4xl opacity-75"
        >
          currently{" "}
          <span className="font-semibold outline-text">
            {" "}
            open for positions
          </span>{" "}
          🙋🏼
        </p>
      </div>
    </div>
  );
};

export default Hero;
