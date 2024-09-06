"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-96">
      <div className="bg-black w-11/12 h-[0.5px] opacity-35" />

      <div className="flex flex-col sm:flex-row items-center justify-between mt-4 mb-6 w-full sm:px-32">
        <p className="century-gothic-bold mb-6 sm:my-0">jesus orozco 2024</p>

        <div className="flex flex-row items-center justify-center">
          <motion.a
            href="https://www.linkedin.com/in/eisaa-orozco/"
            target="_blank"
            className="mx-6"
          >
            <motion.div whileHover={{ scale: 1.25, rotate: -10 }}>
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                height={35}
                width={35}
              />
            </motion.div>
          </motion.a>

          <motion.a
            href="mailto:jesusorozco3690@gmail.com"
            target="_blank"
            className="mx-6"
          >
            <motion.div whileHover={{ scale: 1.25, rotate: -10 }}>
              <Image src="/email.svg" alt="Email" height={35} width={35} />
            </motion.div>
          </motion.a>

          <motion.a href="" target="_blank" className="mx-6">
            <motion.div whileHover={{ scale: 1.25, rotate: -10 }}>
              <Image src="/resumé.svg" alt="Resumé" height={35} width={35} />
            </motion.div>
          </motion.a>
        </div>
      </div>
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
