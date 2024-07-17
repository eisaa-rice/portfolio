"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="my-auto pt-14">
        <p className="name text-6xl font-bold text-center">jésus orozco</p>

        <Image
          className="main-underline"
          src="/images/underline.png"
          alt=""
          width={450}
          height={300}
        />
      </div>

      <motion.div
        // start at initial pos 0, then down 10, then back up to 0
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <Image
          className="mx-auto flex flex-col mt-auto mb-0 pb-20 sm:pb-14 md:pb-32 lg:pb-10"
          src="/arrow-down.svg"
          alt=""
          width={48}
          height={48}
        />
      </motion.div>

      {/* <Image
        className="mx-auto flex flex-col mt-auto mb-0 pb-20 sm:pb-14 lg:pb-10"
        src="/arrow-down.svg"
        alt=""
        width={48}
        height={48}
      /> */}
    </div>
  );
}

export default Hero;
