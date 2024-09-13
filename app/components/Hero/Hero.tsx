"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import "./Hero.css";

interface HeroProps {}
const Hero: React.FC<HeroProps> = () => {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="hero h-screen flex flex-col items-center justify-center">
      <motion.div
        className="mx-auto w-[290px] xs:w-[520px] sm:w-[390px] md:w-[695px]"
        style={{ opacity }}
      >
        <p className="times text-7xl sm:text-8xl font-thin text-center text-[#fffffffa]">
          JESUS OROZCO
        </p>

        <motion.div
          className="underline"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 2.2, duration: 0.75, ease: "backInOut" }}
        />
      </motion.div>
    </div>
  );
};

export default Hero;
