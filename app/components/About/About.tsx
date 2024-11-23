"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import "./About.css";

interface AboutProps {}
const About: React.FC<AboutProps> = () => {
  return (
    <div
      className="flex flex-col items-start justify-center
      text-2xl font-light gap-12
      gap-y-12 gap-x-20 overflow-visible p-32 rounded-2xl
      w-[320px] xs:w-[450px] sm:w-[600px] lg:w-[750px] xl:w-[1150px] 2xl:w-[1400px]"
    >
      <div
        className="rounded-full flex-shrink-0 bg-white shadow-lg 
        relative overflow-hidden m-auto h-[200px] w-[200px]
        "
      >
        <Image
          className="rounded-full mt-4"
          src="/images/animoji.png"
          alt="animoji"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <p>
        Holá! 👋🏻 As you already know, my name is{" "}
        <span className="font-semibold">Jésus Orozco</span>!
      </p>

      <p>
        I was born, raised, and am currently based in{" "}
        <span className="font-semibold">Detroit, MI</span> 🌮
      </p>

      <p>
        I&apos;m currently in my fourth year at 🎓{" "}
        <span className="font-semibold">University of Michigan - Dearborn</span>
        , majoring in <span className="font-semibold">computer science</span> 🖥️
      </p>

      <p>
        I am currently developing apps and websites for events regarding my
        university&apos;s{" "}
        <span className="font-semibold">Google Developer Group</span>
      </p>

      <p>
        When i&apos;m not coding, you can probably find me 🎮{" "}
        <span className="font-semibold">grinding ranked</span> or{" "}
        <span className="font-semibold">drawing something</span> 🎨
      </p>

      <motion.a
        className="border border-green-300 font-bold rounded-xl py-3 px-8"
        href="/resume"
        target="_blank"
        rel="noopener noreferrer"
      >
        Résumé
      </motion.a>
    </div>
  );
};

export default About;
