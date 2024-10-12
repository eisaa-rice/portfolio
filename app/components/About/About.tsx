"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

import "./About.css";
import { Scada } from "next/font/google";

interface AboutProps {}
const About: React.FC<AboutProps> = () => {
  const skills = [
    {
      src: "/react.svg",
      alt: "React.js",
      height: 75,
      width: 75,
      yDelay: 0.8,
      rotateDelay: 1.35,
    },
    {
      src: "/react-native.svg",
      alt: "React Native",
      height: 90,
      width: 90,
      yDelay: 1.9,
      rotateDelay: 0.72,
      style: { marginBottom: 10 },
    },
    {
      src: "/tailwind.svg",
      alt: "Tailwind CSS",
      height: 80,
      width: 80,
      yDelay: 0.57,
      rotateDelay: 1.16,
    },
    {
      src: "/nodejs.svg",
      alt: "Node.js",
      height: 80,
      width: 80,
      yDelay: 1.58,
      rotateDelay: 0.37,
    },
    {
      src: "/framer-motion.svg",
      alt: "Framer Motion",
      height: 60,
      width: 60,
      yDelay: 0.3,
      rotateDelay: 1.45,
    },

    {
      src: "/git.svg",
      alt: "Git",
      height: 75,
      width: 75,
      yDelay: 0.3,
      rotateDelay: 1.45,
    },
    {
      src: "/github.svg",
      alt: "GitHub",
      height: 75,
      width: 75,
      yDelay: 1.68,
      rotateDelay: 0.67,
    },
  ];

  const [areLangsVisible, setLangsVisible] = useState(false);
  const [areFrmWrksVisible, setFrmWkrsVisible] = useState(false);
  const [isTechVisible, setTechVisible] = useState(false);

  const showSkills = (x: number) => {
    x == 1
      ? setLangsVisible(true)
      : x == 2
      ? setFrmWkrsVisible(true)
      : x == 3
      ? setTechVisible(true)
      : console.log("bruh are you dumb");
  };

  return (
    <div
      className="flex flex-col xl:flex-row items-center
    gap-24 mb-96 w-full overflow-visible"
    >
      <div
        className="flex flex-col gap-12 text-2xl font-light opacity-75
      px-2 sm:px-0 mb-12 xl:mb-0"
      >
        <p>
          holá! 👋🏻 as you already know, the name&apos;s{" "}
          <span className="font-semibold">jésus orozco</span>!
        </p>

        <p>
          i was born, raised, and am currently based in{" "}
          <span className="font-semibold">detroit, mi</span> 🌮
        </p>

        <p>
          i&apos;m currently in my fourth year at 🎓{" "}
          <span className="font-semibold">
            university of michigan - dearborn
          </span>
          , majoring in <span className="font-semibold">computer science</span>{" "}
          🖥️
        </p>

        <p>
          i currently develop apps and websites for events regarding my
          university&apos;s{" "}
          <span className="font-semibold">google developer group</span>
          <span className="font-semibold"></span>
        </p>
      </div>

      <div
        className="flex items-center justify-center flex-shrink-0 
        h-[650px] xl:h-[550px] 2xl:h-[700px] 
        w-full xl:w-[550px] 2xl:w-[700px]"
      >
        {/* <p
          className="hiddden xl:absolute
          2xl:-mt-[30rem]
          "
        >
          hover for more!
        </p>

        <p
          className="hiddden xl:absolute
          2xl:-mb-[36rem]
          2xl:-mr-32"
        >
          click to keep &apos;em out!
        </p> */}

        {/* LANGUAGES */}
        <motion.div
          className="flex items-center justify-center"
          whileHover={areLangsVisible ? "" : "languages"}
          onClick={() => showSkills(1)}
          animate={areLangsVisible ? "languages" : ""}
        >
          <motion.div
            className="bg-white rounded-full shadow-sm z-40 absolute flex-shrink-0
            sm:h-[200px] 
            sm:w-[200px]
            sm:-mt-[28rem] xl:-mt-[30rem]
            sm:-ml-[18rem] lg:-ml-[30rem] xl:-ml-80 2xl:-ml-96"
            initial={{ scale: 1 }}
            variants={{
              languages: { scale: 1.1, transition: { ease: "easeOut" } },
            }}
          >
            <Image
              src="/c++.svg"
              alt="C++"
              className="p-1"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>

          <motion.div
            className="bg-white rounded-full shadow-sm absolute flex-shrink-0
            h-[100px] sm:h-[55px] 
            w-[100px] sm:w-[55px]
            sm:-mt-[28rem] xl:-mt-[30rem]
            sm:-ml-[18rem] lg:-ml-[30rem] xl:-ml-80 2xl:-ml-96"
            initial={{ scale: 1, x: 0, y: 0, rotate: -90 }}
            variants={{
              languages: {
                scale: 1.1,
                x: -140,
                y: 90,
                rotate: 0,
                transition: { ease: "easeOut" },
              },
            }}
          >
            <Image
              src="/python.svg"
              alt="Python"
              className="p-2 mt-1"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>

          <motion.div
            className="bg-white rounded-full shadow-sm absolute flex-shrink-0
             h-[100px] sm:h-[55px] 
          w-[100px] sm:w-[55px]
            sm:-mt-[28rem] xl:-mt-[30rem]
            sm:-ml-[18rem] lg:-ml-[30rem] xl:-ml-80 2xl:-ml-96"
            initial={{ scale: 1, x: 0, y: 0, rotate: -90 }}
            variants={{
              languages: {
                scale: 1.1,
                x: -60,
                y: 160,
                rotate: 0,
                transition: { ease: "easeOut" },
              },
            }}
          >
            <Image
              src="/csharp.svg"
              alt="C#"
              className="p-1"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>

          <motion.div
            className="bg-white rounded-full shadow-sm absolute flex-shrink-0
            h-[100px] sm:h-[55px] 
          w-[100px] sm:w-[55px]
           sm:-mt-[28rem] xl:-mt-[30rem]
            sm:-ml-[18rem] lg:-ml-[30rem] xl:-ml-80 2xl:-ml-96"
            initial={{ scale: 1, x: 0, y: 0, rotate: 90 }}
            variants={{
              languages: {
                scale: 1.1,
                x: 50,
                y: 160,
                rotate: 0,
                transition: { ease: "easeOut" },
              },
            }}
          >
            <Image
              src="/java.svg"
              alt="Java"
              className="p-2"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>

          <motion.div
            className="bg-white rounded-full shadow-sm absolute flex-shrink-0
           h-[100px] sm:h-[55px] 
          w-[100px] sm:w-[55px]
         sm:-mt-[28rem] xl:-mt-[30rem]
            sm:-ml-[18rem] lg:-ml-[30rem] xl:-ml-80 2xl:-ml-96"
            initial={{ scale: 1, x: 0, y: 0, rotate: 90 }}
            variants={{
              languages: {
                scale: 1.1,
                x: 150,
                y: 80,
                rotate: 0,
                transition: { ease: "easeOut" },
              },
            }}
          >
            <Image
              src="/html.svg"
              alt="HTML"
              className="p-[0.55rem] mt-[0.125rem]"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>

          <motion.div
            className="bg-white rounded-full shadow-sm absolute flex-shrink-0
           h-[100px] sm:h-[55px] 
          w-[100px] sm:w-[55px]
         sm:-mt-[28rem] xl:-mt-[30rem]
            sm:-ml-[18rem] lg:-ml-[30rem] xl:-ml-80 2xl:-ml-96"
            initial={{ scale: 1, x: 0, y: 0, rotate: -90 }}
            variants={{
              languages: {
                scale: 1.1,
                x: 170,
                y: 10,
                rotate: 0,
                transition: { ease: "easeOut" },
              },
            }}
          >
            <Image
              src="/css.svg"
              alt="CSS"
              className="p-[0.55rem] mt-[0.125rem]"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>

          <motion.div
            className="bg-white rounded-full shadow-sm absolute flex-shrink-0
              h-[100px] sm:h-[55px] 
          w-[100px] sm:w-[55px]
             sm:-mt-[28rem] xl:-mt-[30rem]
            sm:-ml-[18rem] lg:-ml-[30rem] xl:-ml-80 2xl:-ml-96"
            initial={{ scale: 1, x: 0, y: 0, rotate: 90 }}
            variants={{
              languages: {
                scale: 1.1,
                x: 160,
                y: -60,
                rotate: 0,
                transition: { ease: "easeOut" },
              },
            }}
          >
            <Image
              src="/javascript.svg"
              alt="Javascript"
              className="p-[0.625rem] rounded-2xl"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>

          <motion.div
            className="bg-white rounded-full shadow-sm absolute flex-shrink-0
            h-[100px] sm:h-[55px] 
          w-[100px] sm:w-[55px]
            sm:-mt-[28rem] xl:-mt-[30rem]
            sm:-ml-[18rem] lg:-ml-[30rem] xl:-ml-80 2xl:-ml-96"
            initial={{ scale: 1, x: 0, y: 0, rotate: 90 }}
            variants={{
              languages: {
                scale: 1.1,
                x: 120,
                y: -120,
                rotate: 0,
                transition: { ease: "easeOut" },
              },
            }}
          >
            <Image
              src="/typescript.svg"
              alt="Typescript"
              className="p-[0.625rem] rounded-2xl"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>
        </motion.div>

        {/* FRAMEWORKS */}
        <motion.div
          className="flex items-center justify-center"
          whileHover={areFrmWrksVisible ? "" : "frameworks"}
          onClick={() => showSkills(2)}
          animate={areFrmWrksVisible ? "frameworks" : ""}
        >
          <motion.div
            className="bg-white rounded-full shadow-sm z-40 absolute flex-shrink-0
          sm:h-[175px] 
          sm:w-[175px]
          sm:-mb-14 lg:-mb-0
          sm:-mr-[27rem] lg:-mr-[30rem]"
            initial={{ scale: 1 }}
            variants={{
              frameworks: { scale: 1.1, transition: { ease: "easeOut" } },
            }}
          >
            <Image
              src="/react.svg"
              alt="Reactjs"
              className="p-1"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>

          <motion.div
            className="bg-white rounded-full shadow-sm absolute flex-shrink-0
            h-[100px] sm:h-[55px] 
            w-[100px] sm:w-[55px]
          sm:-mb-14 lg:-mb-0
          sm:-mr-[27rem] lg:-mr-[30rem]"
            initial={{ scale: 1, x: 0, y: 0, rotate: -90 }}
            variants={{
              frameworks: {
                scale: 1.1,
                x: -130,
                y: -90,
                rotate: 0,
                transition: { ease: "easeOut" },
              },
            }}
          >
            <Image
              src="/react-native.svg"
              alt="React Native"
              className="p-1"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>

          <motion.div
            className="bg-white rounded-full shadow-sm absolute flex-shrink-0
             h-[100px] sm:h-[55px] 
            w-[100px] sm:w-[55px]
          sm:-mb-14 lg:-mb-0
          sm:-mr-[27rem] lg:-mr-[30rem]"
            initial={{ scale: 1, x: 0, y: 0, rotate: -90 }}
            variants={{
              frameworks: {
                scale: 1.1,
                x: -150,
                y: -10,
                rotate: 0,
                transition: { ease: "easeOut" },
              },
            }}
          >
            <Image
              src="/tailwind.svg"
              alt="Tailwind CSS"
              className="p-1"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>

          <motion.div
            className="bg-white rounded-full shadow-sm absolute flex-shrink-0
            h-[100px] sm:h-[55px] 
            w-[100px] sm:w-[55px]
          sm:-mb-14 lg:-mb-0
          sm:-mr-[27rem] lg:-mr-[30rem]"
            initial={{ scale: 1, x: 0, y: 0, rotate: -90 }}
            variants={{
              frameworks: {
                scale: 1.1,
                x: -130,
                y: 70,
                rotate: 0,
                transition: { ease: "easeOut" },
              },
            }}
          >
            <Image
              src="/framer-motion.svg"
              alt="Framer Motion"
              className="p-3"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>

          <motion.div
            className="bg-white rounded-full shadow-sm absolute flex-shrink-0
             h-[100px] sm:h-[55px] 
            w-[100px] sm:w-[55px]
          sm:-mb-14 lg:-mb-0
          sm:-mr-[27rem] lg:-mr-[30rem]"
            initial={{ scale: 1, x: 0, y: 0, rotate: -90 }}
            variants={{
              frameworks: {
                scale: 1.1,
                x: -70,
                y: 130,
                rotate: 0,
                transition: { ease: "easeOut" },
              },
            }}
          >
            <Image
              src="/nodejs.svg"
              alt="Node.js"
              className="p-1"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>
        </motion.div>

        {/* TECHNOLOGIES */}
        <motion.div
          className="flex items-center justify-center"
          whileHover={isTechVisible ? "" : "technologies"}
          onClick={() => showSkills(3)}
          animate={isTechVisible ? "technologies" : ""}
        >
          <motion.div
            className="bg-white rounded-full shadow-sm z-40 absolute flex-shrink-0
          sm:h-[150px] 
          sm:w-[150px]
          sm:-mb-[36rem] lg:-mb-[30rem] xl:-mb-[30rem]
          sm:-ml-52 lg:-ml-72 xl:-ml-60"
            initial={{ scale: 1 }}
            variants={{
              technologies: { scale: 1.1, transition: { ease: "easeOut" } },
            }}
          >
            <Image
              src="/github.svg"
              alt="GitHub"
              className="p-3"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>

          <motion.div
            className="bg-white rounded-full shadow-sm absolute flex-shrink-0
            h-[100px] sm:h-[55px] 
            w-[100px] sm:w-[55px]
            sm:-mb-[36rem] lg:-mb-[30rem] xl:-mb-[30rem]
          sm:-ml-52 lg:-ml-72 xl:-ml-60"
            initial={{ scale: 1, x: 0, y: 0, rotate: -90 }}
            variants={{
              technologies: {
                scale: 1.1,
                x: -40,
                y: -130,
                rotate: 0,
                transition: { ease: "easeOut" },
              },
            }}
          >
            <Image
              src="/git.svg"
              alt="Git"
              className="p-2"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>

          <motion.div
            className="bg-white rounded-full shadow-sm absolute flex-shrink-0
              h-[100px] sm:h-[55px] 
            w-[100px] sm:w-[55px]
            sm:-mb-[36rem] lg:-mb-[30rem] xl:-mb-[30rem]
          sm:-ml-52 lg:-ml-72 xl:-ml-60"
            initial={{ scale: 1, x: 0, y: 0, rotate: -90 }}
            variants={{
              technologies: {
                scale: 1.1,
                x: 40,
                y: -130,
                rotate: 0,
                transition: { ease: "easeOut" },
              },
            }}
          >
            <Image
              src="/docker.svg"
              alt="Docker Desktop"
              className="p-2 ml-[0.125rem]"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

/* */
