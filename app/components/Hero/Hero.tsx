"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import "./Hero.css";

interface HeroProps {}
const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="flex flex-col justify-start items-start mb-96 mt-14 lg:mt-14 2xl:mt-24 h-[800px] w-full">
      <div className="inline-flex flex-col items-center justify-center mx-auto">
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

          <Image
            className="rounded-full flex-shrink-0 bg-white
            sm:h-[175px] sm:w-[175px]"
            src={"/images/memoji.jpg"}
            alt="My Memoji"
            height={150}
            width={150}
          />
        </div>

        <p
          className="text-center font-semibold 
        text-6xl sm:text-7xl lg:text-8xl 2xl:text-9xl"
        >
          {/* sm:text-7xl md:text-8xl lg:text-9xl */}
          hi, i&apos;m{" "}
          <span className="mt-4 text-transparent pb-3 bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600 font-extrabold inline-flex flex-shrink-0">
            jésus orozco
          </span>
        </p>

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

        <p
          className="rounded-3xl font-light text-center -mt-1
        text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl"
        >
          aspiring software developer
        </p>
      </div>

      <p className="p-4 text-xl bg-white rounded-xl mt-16 shadow-sm mx-auto">
        résumé 📄
      </p>
    </div>
  );
};

export default Hero;
