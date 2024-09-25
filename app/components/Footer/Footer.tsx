"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="h-[1px] w-11/12 bg-white opacity-50" />

      <p className="century-gothic my-7 font-thin text-lg">jesus orozco 2024</p>
    </div>
  );
};

export default Footer;

/*
        <motion.a href="https://www.linkedin.com/in/eisaa-orozco/">
          <motion.div whileHover={{ scale: 1.25, rotate: -10 }}>
            <Image src="/linkedin.svg" alt="LinkedIn" height={35} width={35} />
          </motion.div>
        </motion.a>

        <motion.a href="mailto:jesusorozco3690@gmail.com">
          <motion.div whileHover={{ scale: 1.25, rotate: -10 }}>
            <Image src="/email.svg" alt="Email" height={35} width={35} />
          </motion.div>
        </motion.a>
*/
