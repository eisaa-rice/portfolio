"use client";

import React from "react";
import { motion } from "framer-motion";

import "./Hero.css";

const Hero = () => {
  return (
    <motion.div
      className="hero flex flex-col items-center justify-center "
      initial={{ height: "120vh" }}
      animate={{ height: "97.5vh" }}
      transition={{ delay: 1.8, duration: 0.5, ease: "backInOut" }}
    >
      <div className="mx-auto w-[290px] xs:w-[520px] sm:w-[390px] md:w-[695px]">
        <p className="times font-thin text-7xl sm:text-8xl text-center text-[#fffffffa]">
          JESUS OROZCO
        </p>

        <motion.div
          className="underline"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 2.2, duration: 0.75, ease: "backInOut" }}
        />
      </div>
    </motion.div>
  );
};

export default Hero;
