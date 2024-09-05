"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import "./Hero.css";

const Hero = () => {
  return (
    <motion.div className="hero h-screen flex flex-col justify-center items-center">
      <div className="mx-6">
        <p className="cedarville text-center font-light text-8xl mt-12">
          jésus orozco
        </p>

        <p className="text-center font-thin text-xl mt-16">
          im fucking trying to be somebody this shit is hard
        </p>

        <p className="text-center font-thin text-sm mt-4">
          currently a <strong>free agent</strong>
        </p>
      </div>
    </motion.div>
  );
};

export default Hero;

/*
<motion.a
        className="absolute top-5 left-4"
        href="https://www.instagram.com/eisaarice/"
        target="_blank"
        initial={{ y: -100, rotate: -90 }}
        animate={{ y: 0, rotate: 0 }}
        transition={{ duration: 1, delay: 2.8, ease: "circInOut" }}
      >
        <motion.div whileHover={{ scale: 1.25, rotate: -10 }}>
          <Image src="/instagram.svg" alt="Instagram" height={35} width={35} />
        </motion.div>
      </motion.a>

      <motion.a
        className="absolute top-5 left-16"
        href="https://www.linkedin.com/in/eisaa-orozco/"
        target="_blank"
        initial={{ y: -100, rotate: -90 }}
        animate={{ y: 0, rotate: 0 }}
        transition={{ duration: 1, delay: 3.2, ease: "circInOut" }}
      >
        <motion.div whileHover={{ scale: 1.25, rotate: -10 }}>
          <Image src="/linkedin.svg" alt="LinkedIn" height={35} width={35} />
        </motion.div>
      </motion.a>

      <motion.a
        className="absolute top-5 left-28"
        href="mailto:jesusorozco3690@gmail.com"
        target="_blank"
        initial={{ y: -100, rotate: -90 }}
        animate={{ y: 0, rotate: 0 }}
        transition={{ duration: 1, delay: 3.6, ease: "circInOut" }}
      >
        <motion.div whileHover={{ scale: 1.25, rotate: -10 }}>
          <Image src="/email.svg" alt="Email" height={35} width={35} />
        </motion.div>
      </motion.a>
*/
