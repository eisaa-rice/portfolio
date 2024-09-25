"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

import "./About.css";

const About = () => {
  const { scrollY } = useScroll();

  return (
    <div className="flex flex-col lg:flex-row justify-evenly gap-12 mb-24">
      <div className="bg-white h-[400px] w-full max-w-96 mx-auto lg:mx-0 rounded-3xl mb-16 lg:mb-0"></div>

      <div className="w-full max-w-xl flex flex-col justify-center gap-6 text-2xl font-light opacity-75">
        <p>
          holá! 👋🏻 as you probably guessed, the name&apos;s{" "}
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
          💻
        </p>

        <p>
          i have a passion for technology and enjoy working on innovative
          projects that make a difference
        </p>
      </div>
    </div>
  );
};

export default About;
/*
 <div className="flex items-center">
          <p className="opacity-25 text-xl font-extralight">résumé</p>

          <Image
            className="opacity-50 ml-1 flex-shrink-0"
            height={30}
            width={30}
            src={"/arrow-circle-down.svg"}
            alt=""
          />
  </div>
*/
