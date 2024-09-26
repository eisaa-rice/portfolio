"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import "./Hero.css";

interface HeroProps {}
const Hero: React.FC<HeroProps> = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [0.75, 0]);

  return (
    <div className="flex flex-col items-center justify-start mb-72">
      <div className="flex items-center justify-between w-full mt-5 mb-32">
        <p className="text-sm py-1 px-3 rounded-md bg-white">jésus orozco</p>

        <div className="flex items-center gap-5">
          <motion.a
            href="https://www.linkedin.com/in/eisaa-orozco/"
            target="_blank"
            initial={{ rotate: 0, scale: 1 }}
            whileHover={{ cursor: "pointer", rotate: -5, scale: 1.1 }}
          >
            <Image
              height={28}
              width={28}
              src={"/linkedin.svg"}
              alt="LinkedIn"
            />
          </motion.a>

          <motion.a
            href="https://github.com/eisaarice"
            target="_blank"
            initial={{ rotate: 0, scale: 1 }}
            whileHover={{ cursor: "pointer", rotate: -5, scale: 1.1 }}
          >
            <Image height={25} width={25} src={"/github.svg"} alt="GitHub" />
          </motion.a>

          <motion.a
            href="mailto:jesusorozco3690@gmail.com"
            target="_blank"
            initial={{ rotate: 0, scale: 1 }}
            whileHover={{ cursor: "pointer", rotate: -5, scale: 1.1 }}
          >
            <Image height={26} width={26} src={"/email.svg"} alt="Email" />
          </motion.a>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center w-full mt-24">
        <p className="text-center md:text-start text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold">
          hi, i&apos;m <span className="text-emerald-400">jésus orozco</span>
        </p>

        <p className="text-center md:text-start text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-24">
          aspiring software engineer
        </p>

        <p className="p-5 bg-white rounded-xl mt-16">résumé</p>

        <motion.div
          className="mt-20 md:mt-64 lg:mt-32 mx-auto flex flex-col items-center justify-center"
          initial={{ y: 500 }}
          animate={{ y: 15 }}
          transition={{ delay: 2.5, duration: 2.5, ease: "anticipate" }}
          style={{ opacity }}
        >
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [5, -5, 5] }}
            transition={{
              delay: 4.25,
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          >
            <Image
              height={120}
              width={120}
              src={"/mouse-scroll-icon.svg"}
              alt=""
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
