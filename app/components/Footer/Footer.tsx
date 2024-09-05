"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer flex flex-col items-center justify-center">
      <div className="flex w-96 flex-row items-center justify-center">
        <motion.a
          href="https://www.linkedin.com/in/eisaa-orozco/"
          className="mx-6"
        >
          <motion.div whileHover={{ scale: 1.25, rotate: -10 }}>
            <Image src="/linkedin.svg" alt="LinkedIn" height={35} width={35} />
          </motion.div>
        </motion.a>

        <motion.a href="mailto:jesusorozco3690@gmail.com" className="mx-6">
          <motion.div whileHover={{ scale: 1.25, rotate: -10 }}>
            <Image src="/email.svg" alt="Email" height={35} width={35} />
          </motion.div>
        </motion.a>
      </div>

      <p className="cedarville font-thin my-12">jesus orozco 2024</p>
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
