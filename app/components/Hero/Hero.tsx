"use client";

import React from "react";
import { animate, motion } from "framer-motion";
import Image from "next/image";

import "./Hero.css";

interface HeroProps {}
const Hero: React.FC<HeroProps> = () => {
  return (
    //     lg:mt-14 2xl:mt-24
    <div
      className="flex flex-col items-center xl:grid xl:grid-cols-[2fr 1fr] xl:grid-rows-1 mb-96
      w-full min-h-screen"
    >
      <div
        className="m-auto relative md:static w-full flex-shrink-0 mt-20 mb-4
        xl:col-start-2 xl:col-end-3 xl:row-start-1 xl:row-end-2 overflow-visible"
      >
        <div
          className="rounded-full flex-shrink-0 bg-white shadow-sm relative overflow-hidden m-auto
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
        className="inline-flex flex-col justify-center items-center xl:items-start
        mx-auto xl:mx-0 gap-14 xl:mt-0
        xl:col-start-1 xl:col-end-2 xl:row-start-1 xl:row-end-2"
      >
        <p
          className="text-center xl:text-start opacity-75
          -mb-12 font-light
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

/*

*/

/*
        <div
          className="flex items-center justify-center bg-white rounded-full flex-shrink-0 shadow-sm 
          h-[225px] w-[225px] sm:h-[250px] sm:w-[250px]
          mb-6 sm:mb-12"
        >
          <motion.svg
            className="absolute z-30
            h-[225px] w-[225px] sm:h-[250px] sm:w-[250px]"
            viewBox="0 -10 311 340"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M6.49998 140C10.1 -7.59999 147.333 -9.16666 215.5 8.50001C289.5 30.5 309.667 122.667 310.5 166C304.833 204 283.1 284.3 241.5 301.5C151.5 341.9 65.3333 304 33.5 280C17.1666 270.333 -11.1 228.8 6.49998 140Z"
              stroke="black"
              fill="none"
              strokeWidth="5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 3, ease: "easeOut" }}
            />
          </motion.svg>

          <div
            className="rounded-full flex-shrink-0 bg-white relative
            h-[150px] sm:h-[175px] 
            w-[150px] sm:w-[175px]"
          >
            <Image
              className="overflow-visible rounded-full p-3"
              src={"/images/memoji.jpg"}
              alt="memoji"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
*/

/*
        <motion.svg
          className="w-full h-full"
          viewBox="0 -10 1144 137"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M1 34.1308C15.8398 22.5621 63.7275 -0.0308612 136.559 2.14678C209.391 4.32441 247.274 24.3768 257.112 34.1308C270.952 42.5238 309.735 59.0375 354.155 57.9487C398.574 56.8599 452.031 41.6164 473.207 34.1308C493.382 22.1841 550.34 5.4586 616.77 34.1308C683.199 62.803 740.157 49.4045 760.332 39.1212C779.007 32.3161 829.863 21.7909 883.887 34.1308C904.395 40.4822 984.931 50.3723 1143 39.1212"
            stroke="black"
            fill="none"
            strokeWidth="5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 4.5, ease: "easeOut" }}
          />
        </motion.svg>
*/
