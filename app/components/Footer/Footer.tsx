"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import "./Footer.css";

interface FooterProps {}
const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-5xl font-extralight">
        wanna chat? you can hit me up through:
      </p>

      <div className="w-full flex items-center gap-12 mt-12 mb-16 justify-center">
        <motion.a
          href="https://www.linkedin.com/in/eisaa-rice/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ rotate: 0, scale: 1 }}
          whileHover={{ cursor: "pointer", rotate: -5, scale: 1.1 }}
        >
          <Image height={58} width={58} src={"/linkedin.svg"} alt="LinkedIn" />
        </motion.a>

        <motion.a
          href="https://github.com/eisaarice"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ rotate: 0, scale: 1 }}
          whileHover={{ cursor: "pointer", rotate: -5, scale: 1.1 }}
        >
          <Image height={55} width={55} src={"/github.svg"} alt="GitHub" />
        </motion.a>

        <motion.a
          href="mailto:jesusorozco3690@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ rotate: 0, scale: 1 }}
          whileHover={{ cursor: "pointer", rotate: -5, scale: 1.1 }}
        >
          <Image height={56} width={56} src={"/email.svg"} alt="Email" />
        </motion.a>
      </div>

      <p className="century-gothic mb-7 font-thin text-lg">
        jesus orozco {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
