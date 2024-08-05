"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import "./Hero.css";

const Hero = () => {
  return (
    <motion.div className="hero h-screen flex flex-col justify-center items-center">
      <motion.a
        className="absolute top-5 left-5"
        href="https://www.instagram.com/eisaarice/"
        target="_blank"
        initial={{ x: -100, rotate: -90 }}
        animate={{ x: 0, rotate: 0 }}
        transition={{ duration: 1, delay: 3, ease: "easeOut" }}
      >
        <motion.div whileHover={{ scale: 1.25 }}>
          <Image src="/instagram.svg" alt="Instagram" height={35} width={35} />
        </motion.div>
      </motion.a>

      <motion.a
        className="absolute top-5 left-5"
        href="https://www.linkedin.com/in/eisaa-orozco/"
        target="_blank"
        initial={{ x: -100, rotate: -90 }}
        animate={{ x: 50, rotate: 0 }}
        transition={{ duration: 1, delay: 3.5, ease: "easeOut" }}
      >
        <motion.div whileHover={{ scale: 1.25 }}>
          <Image src="/linkedin.svg" alt="LinkedIn" height={35} width={35} />
        </motion.div>
      </motion.a>

      <motion.a
        className="absolute top-5 left-5"
        href="mailto:jesusorozco3690@gmail.com"
        target="_blank"
        initial={{ x: -100, rotate: -90 }}
        animate={{ x: 100, rotate: 0 }}
        transition={{ duration: 1, delay: 4, ease: "easeOut" }}
      >
        <motion.div whileHover={{ scale: 1.25 }}>
          <Image src="/email.svg" alt="Email" height={35} width={35} />
        </motion.div>
      </motion.a>

      <motion.p
        className="cedarville text-white text-center text-8xl font-light"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.65,
          duration: 1,
        }}
      >
        jésus orozco
      </motion.p>

      <div className="underline" />
    </motion.div>
  );
};

export default Hero;
