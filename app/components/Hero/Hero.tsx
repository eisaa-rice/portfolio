"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="h-full flex flex-col justify-center items-center"
      >
        <div className="my-auto pt-14">
          <p className="name text-6xl font-bold text-center">jésus orozco</p>

          <Image
            className="main-underline"
            src="/images/underline-one.png"
            alt=""
            width={450}
            height={300}
          />
        </div>

        <motion.div
          animate={{ y: [100, 0] }}
          transition={{
            delay: 0.5,
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <motion.div
            // start at initial pos 0, then down 10, then back up to 0
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            className=""
          >
            <Image
              className="mx-auto flex flex-col mt-auto mb-20 sm:mb-12 md:mb-6"
              src="/arrow-down.svg"
              alt=""
              width={48}
              height={48}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
