"use client";

import React, { useState } from "react";
import Image from "next/image";

import { motion, useAnimation } from "framer-motion";

import "./Hero.css";

interface HeroProps {}
const Hero: React.FC<HeroProps> = () => {
  return (
    <div
      className="flex flex-col justify-center items-center text-neutral-300 
      hero w-screen h-screen"
    >
      <div
        className="rounded-full flex-shrink-0 bg-white
        relative overflow-hidden h-[200px] w-[200px]"
      >
        <Image
          className="rounded-full p-4"
          src="/images/memoji.jpg"
          alt="memoji"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <p
        className="text-center font-bold my-6
        bg-clip-text text-transparent bg-gradient-to-tr from-teal-500 to-lime-300
        text-6xl sm:text-7xl lg:text-8xl"
      >
        Jésus Orozco
      </p>

      <p
        className="text-center xl:text-start
        text-lg sm:text-xl lg:text-2xl"
      >
        Fullstack Software Engineer and Developer
      </p>

      <div className="flex items-center justify-center mt-8 gap-4">
        <div className="laser-dot" />

        <p
          className="text-neutral-500 text-center xl:text-start
          flex flex-col xs:block flex-shrink-0 font-extralight
          sm:text-lg lg:text-xl"
        >
          OPEN FOR POSITIONS
        </p>
      </div>
    </div>
  );
};

export default Hero;

/*
      href="/resume"
      target="_blank"
      rel="noopener noreferrer"
*/

/*
<div className="flex items-center justify-center gap-x-12 svg-white">
  <motion.a
    className=""
    href="https://www.linkedin.com/in/eisaa-rice/"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ rotate: 0, scale: 1 }}
    whileHover={{ cursor: "pointer", rotate: -5, scale: 1.1 }}
  >
    <Image height={35} width={35} src={"/linkedin.svg"} alt="LinkedIn" />
  </motion.a>

  <motion.a
    href="https://github.com/eisaa-rice"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ rotate: 0, scale: 1 }}
    whileHover={{ cursor: "pointer", rotate: -5, scale: 1.1 }}
  >
    <Image height={34} width={34} src={"/github.svg"} alt="GitHub" />
  </motion.a>

  <motion.a
    href="mailto:jesusorozco3690@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ rotate: 0, scale: 1 }}
    whileHover={{ cursor: "pointer", rotate: -5, scale: 1.1 }}
  >
    <Image height={36} width={36} src={"/email.svg"} alt="Email" />
  </motion.a>
</div>
*/
