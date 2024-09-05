"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import "./Hero.css";

const Hero = () => {
  return (
    <motion.div className="hero h-screen flex flex-col justify-center items-start mx-auto">
      <p className="century-gothic-bold font-bold text-7xl sm:text-8xl mt-12">
        jésus orozco
      </p>

      <p className="max-w-64 sm:max-w-none font-extralight text-3xl mt-16">
        software engineer. i think.
      </p>

      <p className="max-w-64 sm:max-w-none font-extralight text-md mt-4">
        currently a <strong>free agent</strong>
      </p>
    </motion.div>
  );
};

export default Hero;
