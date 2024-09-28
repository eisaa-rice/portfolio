"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import "./Skills.css";

const Skills = () => {
  const [cppHovered, setCppHovered] = useState(false);
  const [csharpHovered, setCSharpHovered] = useState(false);
  const [javaHovered, setJavaHovered] = useState(false);
  const [pythonHovered, setPythonHovered] = useState(false);

  const [reactHovered, setReactHovered] = useState(false);
  const [tailwindHovered, setTailwindHovered] = useState(false);
  const [framerHovered, setFramerHovered] = useState(false);

  const [gitHovered, setGitHovered] = useState(false);
  const [githubHovered, setGitHubHovered] = useState(false);

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
        onHoverStart={() => setCSharpHovered(true)}
        onClick={() => setCSharpHovered(true)}
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
            filter: csharpHovered ? "none" : "grayscale(100%) brightness(0.2)",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Image src="/csharp.svg" alt="C#" height={85} width={85} />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex items-center justify-center flex-shrink-0 h-[100px] w-[100px] bg-white rounded-full shadow-sm"
        whileInView="circle"
        onHoverStart={() => setJavaHovered(true)}
        onClick={() => setJavaHovered(true)}
        viewport={{ once: true }}
      >
        <motion.svg
          className="absolute h-[115px] w-[115px] z-30 rotate-[-13deg]"
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
            filter: javaHovered ? "none" : "grayscale(100%) brightness(0)",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Image src="/java.svg" alt="Java" height={80} width={80} />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex items-center justify-center flex-shrink-0 h-[100px] w-[100px] bg-white rounded-full shadow-sm"
        whileInView="circle"
        onHoverStart={() => setPythonHovered(true)}
        onClick={() => setPythonHovered(true)}
        viewport={{ once: true }}
      >
        <motion.svg
          className="absolute h-[115px] w-[115px] z-30 rotate-[-177deg]"
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
          className="absolute -mb-4"
          animate={{
            filter: pythonHovered ? "none" : "grayscale(100%) brightness(0)",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Image src="/python.svg" alt="Python" height={80} width={80} />
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
            filter: reactHovered ? "none" : "grayscale(100%) brightness(0)",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Image src="/react.svg" alt="React.js" height={90} width={90} />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex items-center justify-center flex-shrink-0 h-[100px] w-[100px] bg-white rounded-full shadow-sm"
        whileInView="circle"
        onHoverStart={() => setTailwindHovered(true)}
        onClick={() => setTailwindHovered(true)}
        viewport={{ once: true }}
      >
        <motion.svg
          className="absolute h-[115px] w-[115px] z-30 rotate-[22deg]"
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
            filter: tailwindHovered ? "none" : "grayscale(100%) brightness(0)",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Image
            src="/tailwind.svg"
            alt="Tailwind CSS"
            height={90}
            width={90}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex items-center justify-center flex-shrink-0 h-[100px] w-[100px] bg-white rounded-full shadow-sm"
        whileInView="circle"
        onHoverStart={() => setFramerHovered(true)}
        onClick={() => setFramerHovered(true)}
        viewport={{ once: true }}
      >
        <motion.svg
          className="absolute h-[115px] w-[115px] z-30 rotate-[22deg]"
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
            filter: framerHovered ? "none" : "grayscale(100%) brightness(0)",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Image
            src="/framer-motion.svg"
            alt="Framer Motion"
            height={65}
            width={65}
          />
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
            filter: gitHovered ? "none" : "grayscale(100%) brightness(0)",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Image src="/git.svg" alt="Git" height={90} width={90} />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex items-center justify-center flex-shrink-0 h-[100px] w-[100px] bg-white rounded-full shadow-sm"
        whileInView="circle"
        onHoverStart={() => setGitHubHovered(true)}
        onClick={() => setGitHubHovered(true)}
        viewport={{ once: true }}
      >
        <motion.svg
          className="absolute h-[115px] w-[115px] z-30 rotate-[58deg]"
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
            filter: githubHovered ? "none" : "grayscale(100%) brightness(0)",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Image src="/github.svg" alt="GitHub" height={90} width={90} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
