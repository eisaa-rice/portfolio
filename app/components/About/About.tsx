"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

import "./About.css";

interface AboutProps {}
const About: React.FC<AboutProps> = () => {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-around gap-24 mb-96 w-full xl:px-12 overflow-visible">
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
          i currently develop apps and websites for events regarding my
          university&apos;s{" "}
          <span className="font-semibold">google developer group</span>
          <span className="font-semibold"></span>
        </p>
      </div>
    </div>
  );
};

export default About;
