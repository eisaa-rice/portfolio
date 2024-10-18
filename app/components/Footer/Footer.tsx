"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import "./Footer.css";

interface FooterProps {}
const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="flex flex-col items- px-2 xs:px-0">
      <p className="text-3xl text-center">wanna talk?</p>

      <p className="text-xl text-gray-600 text-center mt-6 max-w-[304px] xs:max-w-none">
        you can hit me up through any of the following:
      </p>

      <div
        className="w-full flex flex-col xl:flex-row flex-wrap 
      items-center gap-12 mt-20 mb-52 xl:mb-72"
      >
        <motion.a
          className="flex items-center justify-center flex-col xs:flex-row
  glass rounded-2xl py-3 px-4 flex-shrink-0"
          href="https://linkedin.com/in/eisaa-rice/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ rotate: 0, scale: 1 }}
          whileHover={{ cursor: "pointer", rotate: -1, scale: 1.1 }}
        >
          <span className="flex items-center justify-center">
            <Image
              className="mr-1"
              height={38}
              width={38}
              src={"/linkedin.svg"}
              alt="LinkedIn"
            />
            :{" "}
          </span>
          <span className="ml-2 flex-shrink-0 mt-2 xl:mt-0">
            linkedin.com/in/eisaa-rice/
          </span>
        </motion.a>

        <motion.a
          className="flex items-center justify-center flex-col xs:flex-row
  glass rounded-2xl py-3 px-4 flex-shrink-0"
          href="https://github.com/eisaa-rice"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ rotate: 0, scale: 1 }}
          whileHover={{ cursor: "pointer", rotate: 1, scale: 1.1 }}
        >
          <span className="flex items-center justify-center">
            <Image
              className="mr-1"
              height={38}
              width={38}
              src={"/github.svg"}
              alt="GitHub"
            />
            :{" "}
          </span>
          <span className="ml-2 flex-shrink-0 mt-2 xl:mt-0">
            github.com/eisaa-rice
          </span>
        </motion.a>

        <motion.a
          className="flex items-center justify-center flex-col xs:flex-row
  glass rounded-2xl py-3 px-4 flex-shrink-0"
          href="mailto:jesusorozco3690@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ rotate: 0, scale: 1 }}
          whileHover={{ cursor: "pointer", rotate: -1, scale: 1.1 }}
        >
          <span className="flex items-center justify-center">
            <Image
              className="mr-1"
              height={36}
              width={36}
              src={"/email.svg"}
              alt="E-mail"
            />
            :{" "}
          </span>
          <span className="ml-2 flex-shrink-0 mt-2 xl:mt-0">
            jesusorozco3690@gmail.com
          </span>
        </motion.a>
      </div>

      <p className="century-gothic mb-7 font-thin text-lg text-center">
        jesus orozco {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
