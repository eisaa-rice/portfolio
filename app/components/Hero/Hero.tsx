"use client";

import React, { useState } from "react";
import Image from "next/image";

import { motion, useAnimation } from "framer-motion";

import "./Hero.css";

const Hero = () => {
  return (
    <div
      className="flex flex-col justify-center items-center text-neutral-300 
      hero w-screen h-screen"
      id="hero"
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
        text-6xl sm:text-7xl lg:text-8xl
        w-[390px] xs:w-auto"
      >
        Jésus Orozco
      </p>

      <p
        className="text-center xl:text-start
        text-lg sm:text-xl lg:text-2xl
        w-[215px] xs:w-auto"
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
