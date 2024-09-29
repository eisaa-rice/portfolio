"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import "./Skills.css";

const Skills = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-20 md:gap-44 xl:mx-20 my-96">
      <motion.div
        className="flex items-center justify-center flex-shrink-0 h-[100px] w-[100px] bg-white rounded-full shadow-sm"
        whileInView="circle"
        initial={{ rotate: 0, scale: 1, y: 0 }}
        whileHover={{ scale: 1.2 }}
        animate={{
          rotate: [-5, 5, -5],
          y: [-10, 0, -10],
        }}
        transition={{
          scale: { duration: 0.25 },
          rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 3, repeat: Infinity, ease: "easeOut" },
        }}
        viewport={{ once: true }}
      >
        <motion.svg
          className="absolute h-[115px] w-[115px] z-30 rotate-45"
          viewBox="0 -10 311 340"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M6.49998 140C10.1 -7.59999 147.333 -9.16666 215.5 8.50001C289.5 30.5 309.667 122.667 310.5 166C304.833 204 283.1 284.3 241.5 301.5C151.5 341.9 65.3333 304 33.5 280C17.1666 270.333 -11.1 228.8 6.49998 140Z"
            stroke="black"
            fill="none"
            strokeWidth="3"
          />
        </motion.svg>

        <motion.div className="absolute">
          <Image src="/c++.svg" alt="C++" height={90} width={90} />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex items-center justify-center flex-shrink-0 h-[100px] w-[100px] bg-white rounded-full shadow-sm"
        whileInView="circle"
        initial={{ rotate: 0, scale: 1, y: 0 }}
        whileHover={{ scale: 1.2 }}
        animate={{
          rotate: [-5, 5, -5],
          y: [-10, 0, -10],
        }}
        transition={{
          scale: { duration: 0.25 },
          rotate: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          },
          y: { duration: 3, repeat: Infinity, ease: "easeOut", delay: 0.5 },
        }}
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
          />
        </motion.svg>

        <motion.div className="absolute">
          <Image src="/csharp.svg" alt="C#" height={85} width={85} />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex items-center justify-center flex-shrink-0 h-[100px] w-[100px] bg-white rounded-full shadow-sm"
        whileInView="circle"
        initial={{ rotate: 0, scale: 1, y: 0 }}
        whileHover={{ scale: 1.2 }}
        animate={{
          rotate: [-5, 5, -5],
          y: [-10, 0, -10],
        }}
        transition={{
          scale: { duration: 0.25 },
          rotate: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.25,
          },
          y: { duration: 3, repeat: Infinity, ease: "easeOut", delay: 0.25 },
        }}
        viewport={{ once: true }}
      >
        <motion.svg
          className="absolute h-[115px] w-[115px] z-30 rotate-[135deg]"
          viewBox="0 -10 311 340"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M6.49998 140C10.1 -7.59999 147.333 -9.16666 215.5 8.50001C289.5 30.5 309.667 122.667 310.5 166C304.833 204 283.1 284.3 241.5 301.5C151.5 341.9 65.3333 304 33.5 280C17.1666 270.333 -11.1 228.8 6.49998 140Z"
            stroke="black"
            fill="none"
            strokeWidth="3"
          />
        </motion.svg>

        <motion.div className="absolute -mb-4">
          <Image src="/python.svg" alt="Python" height={75} width={75} />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex items-center justify-center flex-shrink-0 h-[100px] w-[100px] bg-white rounded-full shadow-sm"
        whileInView="circle"
        initial={{ rotate: 0, scale: 1, y: 0 }}
        whileHover={{ scale: 1.2 }}
        animate={{
          rotate: [-5, 5, -5],
          y: [-10, 0, -10],
        }}
        transition={{
          scale: { duration: 0.25 },
          rotate: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.36,
          },
          y: { duration: 3, repeat: Infinity, ease: "easeOut", delay: 0.36 },
        }}
        viewport={{ once: true }}
      >
        <motion.svg
          className="absolute h-[115px] w-[115px] z-30 rotate-180"
          viewBox="0 -10 311 340"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M6.49998 140C10.1 -7.59999 147.333 -9.16666 215.5 8.50001C289.5 30.5 309.667 122.667 310.5 166C304.833 204 283.1 284.3 241.5 301.5C151.5 341.9 65.3333 304 33.5 280C17.1666 270.333 -11.1 228.8 6.49998 140Z"
            stroke="black"
            fill="none"
            strokeWidth="3"
          />
        </motion.svg>

        <motion.div className="absolute">
          <Image src="/java.svg" alt="Java" height={75} width={75} />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex items-center justify-center flex-shrink-0 h-[100px] w-[100px] bg-white rounded-full shadow-sm"
        whileInView="circle"
        initial={{ rotate: 0, scale: 1, y: 0 }}
        whileHover={{ scale: 1.2 }}
        animate={{
          rotate: [-5, 5, -5],
          y: [-10, 0, -10],
        }}
        transition={{
          scale: { duration: 0.25 },
          rotate: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.48,
          },
          y: { duration: 3, repeat: Infinity, ease: "easeOut", delay: 0.48 },
        }}
        viewport={{ once: true }}
      >
        <motion.svg
          className="absolute h-[115px] w-[115px] z-30 rotate-[475deg]"
          viewBox="-10 -10 321 340"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M6.49998 140C10.1 -7.59999 147.333 -9.16666 215.5 8.50001C289.5 30.5 309.667 122.667 310.5 166C304.833 204 283.1 284.3 241.5 301.5C151.5 341.9 65.3333 304 33.5 280C17.1666 270.333 -11.1 228.8 6.49998 140Z"
            stroke="black"
            fill="none"
            strokeWidth="3"
          />
        </motion.svg>

        <motion.div className="absolute -mb-2">
          <Image src="/html.svg" alt="HTML" height={60} width={60} />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex items-center justify-center flex-shrink-0 h-[100px] w-[100px] bg-white rounded-full shadow-sm"
        whileInView="circle"
        initial={{ rotate: 0, scale: 1, y: 0 }}
        whileHover={{ scale: 1.2 }}
        animate={{
          rotate: [-5, 5, -5],
          y: [-10, 0, -10],
        }}
        transition={{
          scale: { duration: 0.25 },
          rotate: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.02,
          },
          y: { duration: 3, repeat: Infinity, ease: "easeOut", delay: 0.02 },
        }}
        viewport={{ once: true }}
      >
        <motion.svg
          className="absolute h-[115px] w-[115px] z-30 rotate-[520deg]"
          viewBox="-10 -10 321 340"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M6.49998 140C10.1 -7.59999 147.333 -9.16666 215.5 8.50001C289.5 30.5 309.667 122.667 310.5 166C304.833 204 283.1 284.3 241.5 301.5C151.5 341.9 65.3333 304 33.5 280C17.1666 270.333 -11.1 228.8 6.49998 140Z"
            stroke="black"
            fill="none"
            strokeWidth="3"
          />
        </motion.svg>

        <motion.div className="absolute -mb-2">
          <Image src="/css.svg" alt="CSS" height={67.5} width={67.5} />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex items-center justify-center flex-shrink-0 h-[100px] w-[100px] bg-white rounded-full shadow-sm"
        whileInView="circle"
        initial={{ rotate: 0, scale: 1, y: 0 }}
        whileHover={{ scale: 1.2 }}
        animate={{
          rotate: [-5, 5, -5],
          y: [-10, 0, -10],
        }}
        transition={{
          scale: { duration: 0.25 },
          rotate: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.17,
          },
          y: { duration: 3, repeat: Infinity, ease: "easeOut", delay: 0.17 },
        }}
        viewport={{ once: true }}
      >
        <motion.svg
          className="absolute h-[115px] w-[115px] z-30 rotate-[520deg]"
          viewBox="-10 -10 321 340"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M6.49998 140C10.1 -7.59999 147.333 -9.16666 215.5 8.50001C289.5 30.5 309.667 122.667 310.5 166C304.833 204 283.1 284.3 241.5 301.5C151.5 341.9 65.3333 304 33.5 280C17.1666 270.333 -11.1 228.8 6.49998 140Z"
            stroke="black"
            fill="none"
            strokeWidth="3"
          />
        </motion.svg>

        <motion.div className="absolute">
          <Image
            className="rounded-md"
            src="/javascript.svg"
            alt="Javascript"
            height={67.5}
            width={67.5}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex items-center justify-center flex-shrink-0 h-[100px] w-[100px] bg-white rounded-full shadow-sm"
        whileInView="circle"
        initial={{ rotate: 0, scale: 1, y: 0 }}
        whileHover={{ scale: 1.2 }}
        animate={{
          rotate: [-5, 5, -5],
          y: [-10, 0, -10],
        }}
        transition={{
          scale: { duration: 0.25 },
          rotate: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.23,
          },
          y: { duration: 3, repeat: Infinity, ease: "easeOut", delay: 0.23 },
        }}
        viewport={{ once: true }}
      >
        <motion.svg
          className="absolute h-[115px] w-[115px] z-30 rotate-[565deg]"
          viewBox="-10 -10 321 340"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M6.49998 140C10.1 -7.59999 147.333 -9.16666 215.5 8.50001C289.5 30.5 309.667 122.667 310.5 166C304.833 204 283.1 284.3 241.5 301.5C151.5 341.9 65.3333 304 33.5 280C17.1666 270.333 -11.1 228.8 6.49998 140Z"
            stroke="black"
            fill="none"
            strokeWidth="3"
          />
        </motion.svg>

        <motion.div className="absolute">
          <Image
            className="rounded-md"
            src="/typescript.svg"
            alt="Typescript"
            height={67.5}
            width={67.5}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex items-center justify-center flex-shrink-0 h-[100px] w-[100px] bg-white rounded-full shadow-sm"
        whileInView="circle"
        initial={{ rotate: 0, scale: 1, y: 0 }}
        whileHover={{ scale: 1.2 }}
        animate={{
          rotate: [-5, 5, -5],
          y: [-10, 0, -10],
        }}
        transition={{
          scale: { duration: 0.25 },
          rotate: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.13,
          },
          y: { duration: 3, repeat: Infinity, ease: "easeOut", delay: 0.13 },
        }}
        viewport={{ once: true }}
      >
        <motion.svg
          className="absolute h-[115px] w-[115px] z-30 rotate-[225deg]"
          viewBox="0 -10 311 340"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M6.49998 140C10.1 -7.59999 147.333 -9.16666 215.5 8.50001C289.5 30.5 309.667 122.667 310.5 166C304.833 204 283.1 284.3 241.5 301.5C151.5 341.9 65.3333 304 33.5 280C17.1666 270.333 -11.1 228.8 6.49998 140Z"
            stroke="black"
            fill="none"
            strokeWidth="3"
          />
        </motion.svg>

        <motion.div className="absolute">
          <Image src="/react.svg" alt="React.js" height={75} width={75} />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex items-center justify-center flex-shrink-0 h-[100px] w-[100px] bg-white rounded-full shadow-sm"
        whileInView="circle"
        initial={{ rotate: 0, scale: 1, y: 0 }}
        whileHover={{ scale: 1.2 }}
        animate={{
          rotate: [-5, 5, -5],
          y: [-10, 0, -10],
        }}
        transition={{
          scale: { duration: 0.25 },
          rotate: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          },
          y: { duration: 3, repeat: Infinity, ease: "easeOut", delay: 0.3 },
        }}
        viewport={{ once: true }}
      >
        <motion.svg
          className="absolute h-[115px] w-[115px] z-30 rotate-[610deg]"
          viewBox="-10 -10 321 340"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M6.49998 140C10.1 -7.59999 147.333 -9.16666 215.5 8.50001C289.5 30.5 309.667 122.667 310.5 166C304.833 204 283.1 284.3 241.5 301.5C151.5 341.9 65.3333 304 33.5 280C17.1666 270.333 -11.1 228.8 6.49998 140Z"
            stroke="black"
            fill="none"
            strokeWidth="3"
          />
        </motion.svg>

        <motion.div className="absolute -mt-3">
          <Image
            className="rounded-md"
            src="/react-native.svg"
            alt="React Native"
            height={95}
            width={95}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex items-center justify-center flex-shrink-0 h-[100px] w-[100px] bg-white rounded-full shadow-sm"
        whileInView="circle"
        initial={{ rotate: 0, scale: 1, y: 0 }}
        whileHover={{ scale: 1.2 }}
        animate={{
          rotate: [-5, 5, -5],
          y: [-10, 0, -10],
        }}
        transition={{
          scale: { duration: 0.25 },
          rotate: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.41,
          },
          y: { duration: 3, repeat: Infinity, ease: "easeOut", delay: 0.41 },
        }}
        viewport={{ once: true }}
      >
        <motion.svg
          className="absolute h-[115px] w-[115px] z-30 rotate-[270deg]"
          viewBox="0 -10 311 340"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M6.49998 140C10.1 -7.59999 147.333 -9.16666 215.5 8.50001C289.5 30.5 309.667 122.667 310.5 166C304.833 204 283.1 284.3 241.5 301.5C151.5 341.9 65.3333 304 33.5 280C17.1666 270.333 -11.1 228.8 6.49998 140Z"
            stroke="black"
            fill="none"
            strokeWidth="3"
          />
        </motion.svg>

        <motion.div className="absolute">
          <Image
            src="/tailwind.svg"
            alt="Tailwind CSS"
            height={75}
            width={75}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex items-center justify-center flex-shrink-0 h-[100px] w-[100px] bg-white rounded-full shadow-sm"
        initial={{ rotate: 0, scale: 1, y: 0 }}
        whileHover={{ scale: 1.2 }}
        animate={{
          rotate: [-5, 5, -5],
          y: [-10, 0, -10],
        }}
        transition={{
          scale: { duration: 0.25 },
          rotate: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.07,
          },
          y: { duration: 3, repeat: Infinity, ease: "easeOut", delay: 0.07 },
        }}
        viewport={{ once: true }}
      >
        <motion.svg
          className="absolute h-[115px] w-[115px] z-30 rotate-[315deg]"
          viewBox="0 -10 311 340"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M6.49998 140C10.1 -7.59999 147.333 -9.16666 215.5 8.50001C289.5 30.5 309.667 122.667 310.5 166C304.833 204 283.1 284.3 241.5 301.5C151.5 341.9 65.3333 304 33.5 280C17.1666 270.333 -11.1 228.8 6.49998 140Z"
            stroke="black"
            fill="none"
            strokeWidth="3"
          />
        </motion.svg>

        <motion.div className="absolute">
          <Image
            src="/framer-motion.svg"
            alt="Framer Motion"
            height={60}
            width={60}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex items-center justify-center flex-shrink-0 h-[100px] w-[100px] bg-white rounded-full shadow-sm"
        initial={{ rotate: 0, scale: 1, y: 0 }}
        whileHover={{ scale: 1.2 }}
        animate={{
          rotate: [-5, 5, -5],
          y: [-10, 0, -10],
        }}
        transition={{
          scale: { duration: 0.25 },
          rotate: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.27,
          },
          y: { duration: 3, repeat: Infinity, ease: "easeOut", delay: 0.27 },
        }}
        viewport={{ once: true }}
      >
        <motion.svg
          className="absolute h-[115px] w-[115px] z-30 rotate-[360deg]"
          viewBox="0 -10 311 340"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M6.49998 140C10.1 -7.59999 147.333 -9.16666 215.5 8.50001C289.5 30.5 309.667 122.667 310.5 166C304.833 204 283.1 284.3 241.5 301.5C151.5 341.9 65.3333 304 33.5 280C17.1666 270.333 -11.1 228.8 6.49998 140Z"
            stroke="black"
            fill="none"
            strokeWidth="3"
          />
        </motion.svg>

        <motion.div className="absolute">
          <Image src="/git.svg" alt="Git" height={70} width={70} />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex items-center justify-center flex-shrink-0 h-[100px] w-[100px] bg-white rounded-full shadow-sm"
        initial={{ rotate: 0, scale: 1, y: 0 }}
        whileHover={{ scale: 1.2 }}
        animate={{
          rotate: [-5, 5, -5],
          y: [-10, 0, -10],
        }}
        transition={{
          scale: { duration: 0.36 },
          rotate: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.27,
          },
          y: { duration: 3, repeat: Infinity, ease: "easeOut", delay: 0.36 },
        }}
        viewport={{ once: true }}
      >
        <motion.svg
          className="absolute h-[115px] w-[115px] z-30 rotate-[430deg]"
          viewBox="0 -10 311 340"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M6.49998 140C10.1 -7.59999 147.333 -9.16666 215.5 8.50001C289.5 30.5 309.667 122.667 310.5 166C304.833 204 283.1 284.3 241.5 301.5C151.5 341.9 65.3333 304 33.5 280C17.1666 270.333 -11.1 228.8 6.49998 140Z"
            stroke="black"
            fill="none"
            strokeWidth="3"
          />
        </motion.svg>

        <motion.div className="absolute">
          <Image src="/github.svg" alt="GitHub" height={80} width={80} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
