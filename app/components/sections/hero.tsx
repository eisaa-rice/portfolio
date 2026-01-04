"use client";

import Image from "next/image";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-neutral-700 text-xl">
        hola{" "}
        <motion.span
          className="inline-block z-10"
          animate={{
            scale: [1, 2, 1],
            rotate: [0, 15, -15, 15, 0],
            transition: { duration: 1, ease: "easeOut", delay: 0.2 },
          }}
        >
          👋🏻
        </motion.span>
        , i&apos;m
      </p>

      <h1 className="text-8xl font-bold">jésus orozco.</h1>

      <p className="text-3xl">new-grad software engineer.</p>

      <p className="text-neutral-500">📌 detroit, mi.</p>

      <div className="flex items-center gap-3">
        <motion.a
          className="mx-px"
          href="https://www.linkedin.com/in/eisaa-rice/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ rotate: "-2deg", scale: 1.1 }}
        >
          <Image
            src="/icons/linkedin.svg"
            alt="linkedin"
            height={25}
            width={25}
          />
        </motion.a>

        <motion.a
          className="mx-px"
          href="https://github.com/eisaa-rice"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ rotate: "2deg", scale: 1.1 }}
        >
          <Image src="/icons/github.svg" alt="github" height={25} width={25} />
        </motion.a>

        <motion.a
          className="text-2xl"
          href="mailto:jesusoro@umich.edu"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ rotate: "-2deg", scale: 1.1 }}
        >
          ✉️
        </motion.a>

        <motion.a
          className="text-2xl"
          href="/documents/jesus_orozco.pdf"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ rotate: "2deg", scale: 1.1 }}
        >
          📄
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
