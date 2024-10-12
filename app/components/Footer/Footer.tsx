"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import "./Footer.css";

interface FooterProps {}
const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex items-center gap-x-12 my-12">
        <motion.a
          href="https://www.linkedin.com/in/eisaa-rice/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ rotate: 0, scale: 1 }}
          whileHover={{ cursor: "pointer", rotate: -5, scale: 1.1 }}
        >
          <Image height={38} width={38} src={"/linkedin.svg"} alt="LinkedIn" />
        </motion.a>

        <motion.a
          href="https://github.com/eisaa-rice"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ rotate: 0, scale: 1 }}
          whileHover={{ cursor: "pointer", rotate: -5, scale: 1.1 }}
        >
          <Image height={35} width={35} src={"/github.svg"} alt="GitHub" />
        </motion.a>

        <motion.a
          href="mailto:jesusorozco3690@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ rotate: 0, scale: 1 }}
          whileHover={{ cursor: "pointer", rotate: -5, scale: 1.1 }}
        >
          <Image height={36} width={36} src={"/email.svg"} alt="Email" />
        </motion.a>
      </div>

      <p className="century-gothic mb-7 font-thin text-lg">
        jesus orozco {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
