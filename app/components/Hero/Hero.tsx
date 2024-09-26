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
      <div className="w-full flex items-center gap-5 mt-5 justify-end">
        <motion.a
          href="https://www.linkedin.com/in/eisaa-orozco/"
          target="_blank"
          initial={{ rotate: 0, scale: 1 }}
          whileHover={{ cursor: "pointer", rotate: -5, scale: 1.1 }}
        >
          <Image height={28} width={28} src={"/linkedin.svg"} alt="LinkedIn" />
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

      <div className="flex flex-col items-start justify-center w-full mt-16 md:mt-60">
        <div className="inline-flex flex-col">
          <p className="text-center md:text-start text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold">
            hi, i&apos;m{" "}
            <span className="text-emerald-400 font-extrabold">
              jésus orozco
            </span>
          </p>

          <motion.svg
            className="md:-ml-8 mt-3 w-full h-full"
            viewBox="0 -5 1144 140"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M1.5 72.5C16.3333 47 64.2 -2.79999 137 2.00001C209.8 6.80001 247.667 51 257.5 72.5C271.333 91 310.1 127.4 354.5 125C398.9 122.6 452.333 89 473.5 72.5C493.667 46.1667 550.6 9.30001 617 72.5C683.4 135.7 740.333 106.167 760.5 83.5C779.167 68.5 830 45.3 884 72.5C904.5 86.5 985 108.3 1143 83.5"
              stroke="black"
              fill="none"
              strokeWidth="5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 3 }}
            />
          </motion.svg>
        </div>

        <p className="text-center md:text-start text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-20">
          aspiring <span className="font-bold">software engineer</span>
        </p>

        <p className="p-4 text-xl bg-white rounded-xl mt-16 border border-black border-opacity-25 mx-auto md:mx-0">
          résumé 📄
        </p>

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
