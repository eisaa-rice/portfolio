"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

import "./About.css";
import { Scada } from "next/font/google";

interface AboutProps {}
const About: React.FC<AboutProps> = () => {
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
        {/* LANGUAGES */}

        <motion.div
          className="bg-white rounded-full shadow-sm z-40 absolute flex-shrink-0
          h-[105px] 
          w-[105px]
          -mt-[38rem]
          -ml-[13rem]"
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
          h-[70px] 
          w-[70px]
          -mt-[24rem]
          -ml-[12rem]"
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
          h-[55px] 
          w-[55px]
          -mt-[44rem]
          -ml-2"
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
          h-[60px] 
          w-[60px]
          -mt-[32rem]
          -ml-[2rem]"
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
          h-[80px] 
          w-[80px]
          -mt-[23rem]
          -mr-[12rem]"
        >
          <Image
            src="/html.svg"
            alt="HTML"
            className="p-[0.75rem] mt-[0.25rem]"
            layout="fill"
            objectFit="contain"
          />
        </motion.div>

        <motion.div
          className="bg-white rounded-full shadow-sm absolute flex-shrink-0
           h-[55px] 
          w-[55px]
          -mt-[34rem]
          -mr-[10rem]"
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
          h-[60px] 
          w-[60px]
          -mt-[12rem]
          -mr-[8rem]"
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
          h-[50px] 
          w-[50px]
          -mt-[18rem]
          -mr-[2rem]"
        >
          <Image
            src="/typescript.svg"
            alt="Typescript"
            className="p-[0.625rem] rounded-2xl"
            layout="fill"
            objectFit="contain"
          />
        </motion.div>

        {/* FRAMEWORKS */}
        <motion.div
          className="bg-white rounded-full shadow-sm z-40 absolute flex-shrink-0
          h-[120px] 
          w-[120px]
          -mt-[3rem]
          -ml-[10rem]"
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
         h-[60px] 
          w-[60px]
          -mb-[0rem]
          -mr-[6rem]"
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
            h-[60px] 
          w-[60px]
       -mb-[8rem]
          -ml-[1rem]"
        >
          <Image
            src="/tailwind.svg"
            alt="Tailwind CSS"
            className="p-2"
            layout="fill"
            objectFit="contain"
          />
        </motion.div>

        <motion.div
          className="bg-white rounded-full shadow-sm absolute flex-shrink-0
            h-[50px] 
          w-[50px]
          -mb-[8rem]
          -ml-[16rem]"
        >
          <Image
            src="/react-native.svg"
            alt="React Native"
            className="p-1 -mt-[0.125rem]"
            layout="fill"
            objectFit="contain"
          />
        </motion.div>

        <motion.div
          className="bg-white rounded-full shadow-sm absolute flex-shrink-0
             h-[45px] 
          w-[45px]
          -mb-[12rem]
          -ml-[9rem]"
        >
          <Image
            src="/nodejs.svg"
            alt="Node.js"
            className="p-1"
            layout="fill"
            objectFit="contain"
          />
        </motion.div>

        {/* TECHNOLOGIES */}
        <motion.div
          className="bg-white rounded-full shadow-sm z-40 absolute flex-shrink-0
           h-[90px] 
          w-[90px]
          -mb-[16rem]
          -mr-[12rem]"
        >
          <Image
            src="/github.svg"
            alt="GitHub"
            className="p-2"
            layout="fill"
            objectFit="contain"
          />
        </motion.div>

        <motion.div
          className="bg-white rounded-full shadow-sm absolute flex-shrink-0
             h-[55px] 
          w-[55px]
          -mb-[26rem]
          -mr-[15rem]"
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
              h-[45px] 
          w-[45px]
          -mb-[22rem]
          -mr-[4rem]"
        >
          <Image
            src="/docker.svg"
            alt="Docker Desktop"
            className="p-2 ml-[0.125rem]"
            layout="fill"
            objectFit="contain"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;

/* */
