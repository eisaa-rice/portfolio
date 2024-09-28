"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import "./Skills.css";

const Skills = () => {
  const [cppHovered, setCppHovered] = useState(false);
  const [reactHovered, setReactHovered] = useState(false);
  const [gitHovered, setGitHovered] = useState(false);

  return (
    <div className="flex flex-wrap items-center justify-center gap-32 xl:mx-20 my-96">
      <motion.div
        className="flex items-center justify-center flex-shrink-0 h-[100px] w-[100px] bg-white rounded-full shadow-sm"
        whileInView="circle"
        onHoverStart={() => setCppHovered(true)}
        onClick={() => setCppHovered(true)}
        viewport={{ once: true }}
      >
        <motion.svg
          className="absolute h-[115px] w-[115px] z-30 rotate-90"
          viewBox="0 -10 311 340"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M6.49998 140C10.1 -7.59999 147.333 -9.16666 215.5 8.50001C289.5 30.5 309.667 122.667 310.5 166C304.833 204 283.1 284.3 241.5 301.5C151.5 341.9 65.3333 304 33.5 280C17.1666 270.333 -11.1 228.8 6.49998 140Z"
            stroke="black"
            fill="none"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            variants={{
              circle: {
                pathLength: 1,
                transition: {
                  duration: 1,
                  delay: 0.5,
                  ease: "linear",
                },
              },
            }}
            transition={{ duration: 1.5, delay: 3, ease: "easeOut" }}
          />
        </motion.svg>

        <motion.div
          className="absolute"
          animate={{
            filter: cppHovered ? "none" : "grayscale(100%) brightness(0.2)",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Image src="/c++.svg" alt="C++" height={90} width={90} />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex items-center justify-center flex-shrink-0 h-[100px] w-[100px] bg-white rounded-full shadow-sm"
        whileInView="circle"
        onHoverStart={() => setReactHovered(true)}
        onClick={() => setReactHovered(true)}
        viewport={{ once: true }}
      >
        <motion.svg
          className="absolute h-[115px] w-[115px] z-30 rotate-[62deg]"
          viewBox="0 -10 311 340"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M6.49998 140C10.1 -7.59999 147.333 -9.16666 215.5 8.50001C289.5 30.5 309.667 122.667 310.5 166C304.833 204 283.1 284.3 241.5 301.5C151.5 341.9 65.3333 304 33.5 280C17.1666 270.333 -11.1 228.8 6.49998 140Z"
            stroke="black"
            fill="none"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            variants={{
              circle: {
                pathLength: 1,
                transition: {
                  duration: 1,
                  delay: 0.5,
                  ease: "linear",
                },
              },
            }}
            transition={{ duration: 1.5, delay: 3, ease: "easeOut" }}
          />
        </motion.svg>

        <motion.div
          className="absolute"
          animate={{
            filter: reactHovered ? "none" : "grayscale(100%) brightness(0.2)",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Image src="/react.svg" alt="React.js" height={90} width={90} />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex items-center justify-center flex-shrink-0 h-[100px] w-[100px] bg-white rounded-full shadow-sm"
        whileInView="circle"
        onHoverStart={() => setGitHovered(true)}
        onClick={() => setGitHovered(true)}
        viewport={{ once: true }}
      >
        <motion.svg
          className="absolute h-[115px] w-[115px] z-30 rotate-[157deg]"
          viewBox="0 -10 311 340"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M6.49998 140C10.1 -7.59999 147.333 -9.16666 215.5 8.50001C289.5 30.5 309.667 122.667 310.5 166C304.833 204 283.1 284.3 241.5 301.5C151.5 341.9 65.3333 304 33.5 280C17.1666 270.333 -11.1 228.8 6.49998 140Z"
            stroke="black"
            fill="none"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            variants={{
              circle: {
                pathLength: 1,
                transition: {
                  duration: 1,
                  delay: 0.5,
                  ease: "linear",
                },
              },
            }}
            transition={{ duration: 1.5, delay: 3, ease: "easeOut" }}
          />
        </motion.svg>

        <motion.div
          className="absolute"
          animate={{
            filter: gitHovered ? "none" : "grayscale(100%) brightness(0.2)",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Image src="/git.svg" alt="React.js" height={90} width={90} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
