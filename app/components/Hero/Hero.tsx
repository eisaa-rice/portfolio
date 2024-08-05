"use client";

import React from "react";
import { motion } from "framer-motion";

import "./Hero.css";

const Hero = () => {
  return (
    <motion.div className="h-screen flex flex-col justify-center items-center">
      <motion.p className="cedarville text-center text-8xl font-light">
        jésus orozco
      </motion.p>
    </motion.div>
  );
};

export default Hero;
