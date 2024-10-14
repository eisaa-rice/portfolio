"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import "./About.css";

interface AboutProps {}
const About: React.FC<AboutProps> = () => {
  const { scrollY } = useScroll();

  const [rotateRange, setRotateRange] = useState([0, 0]);

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;

      if (width >= 320 && width < 500) {
      } else if (width >= 500 && width < 640) {
      } else if (width >= 640 && width < 1024) {
      } else if (width >= 1024 && width < 1280) {
      } else if (width >= 1280 && width < 1536) {
      } else {
        setRotateRange([400, 1900]);
        // width >= 1536
      }
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const cppRotate = useTransform(scrollY, rotateRange, [-90, 90]);
  const csharpRotate = useTransform(scrollY, rotateRange, [-90, 90]);

  const htmlRotate = useTransform(scrollY, rotateRange, [360, -360]);

  const reactRotate = useTransform(scrollY, rotateRange, [720, -720]);

  const githubRotate = useTransform(scrollY, rotateRange, [180, -180]);

  return (
    <div
      className="flex flex-col items-center xl:grid xl:grid-rows-1 xl:grid-cols-[auto_auto]
    gap-24 mb-96 w-full overflow-visible"
    >
      <div
        className="flex flex-col text-2xl font-light opacity-75
        xl:row-start-1 xl:row-end-2
        xl:col-start-2 xl:col-end-3
        gap-12 2xl:gap-20
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
        xl:row-start-1 xl:row-end-2
        xl:col-start-1 xl:col-end-2
        h-[750px] xl:h-[550px] 2xl:h-[600px] 
        w-full xl:w-[550px] 2xl:w-[600px]"
      >
        {/* LANGUAGES */}
        <motion.div
          className="bg-white rounded-full shadow-sm z-40 absolute flex-shrink-0
          h-[105px]     xl:h-[150px]
          w-[105px]     xl:w-[150px]
          -mt-[35rem]   xl:-mt-[24.5rem]
          -ml-[13rem]   xl:-ml-[24.5rem]"
          style={{ rotate: cppRotate }}
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
          h-[70px]      xl:h-[80px]
          w-[70px]      xl:w-[80px]
          -mt-[19rem]   xl:-mt-[9rem]
          -ml-[12rem]   xl:-ml-[29rem]"
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
          h-[55px]        xl:h-[65px]
          w-[55px]        xl:w-[65px]
          -mt-[41rem]     xl:-mt-[30rem]
          -ml-[0.5rem]    xl:-ml-[10rem]"
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
          h-[60px]      xl:h-[70px] 
          w-[60px]      xl:w-[70px]
          -mt-[26rem]   xl:-mt-[15rem]
          -ml-[2rem]    xl:-ml-[7rem]"
        >
          <Image
            src="/java.svg"
            alt="Java"
            className="p-2 xl:-mt-1"
            layout="fill"
            objectFit="contain"
          />
        </motion.div>

        <motion.div
          className="bg-white rounded-full shadow-sm absolute flex-shrink-0
          h-[80px]        xl:h-[125px]
          w-[80px]        xl:w-[125px]
          -mt-[10rem]     xl:-mt-[15rem]
          -mr-[12rem]     xl:-mr-[26rem]"
          style={{ rotate: htmlRotate }}
        >
          <Image
            src="/html.svg"
            alt="HTML"
            className="p-3 mt-1 xl:p-4"
            layout="fill"
            objectFit="contain"
          />
        </motion.div>

        <motion.div
          className="bg-white rounded-full shadow-sm absolute flex-shrink-0
          h-[55px]        xl:h-[65px] 
          w-[55px]        xl:w-[65px]
          -mt-[21rem]     xl:-mt-[28rem]
          -mr-[10rem]     xl:-mr-[17rem]"
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
          h-[60px]        xl:h-[70px]
          w-[60px]        xl:w-[70px]
          -mb-[1rem]      xl:-mt-[2rem]
          -mr-[8rem]      xl:-mr-[20rem]"
        >
          <Image
            src="/javascript.svg"
            alt="Javascript"
            className="p-[0.625rem] rounded-2xl xl:p-3"
            layout="fill"
            objectFit="contain"
          />
        </motion.div>

        <motion.div
          className="bg-white rounded-full shadow-sm absolute flex-shrink-0
          h-[50px]        xl:h-[60px]
          w-[50px]        xl:w-[60px]
          -mt-[5rem]      xl:-mt-[9rem]
          -mr-[2rem]      xl:-mr-[11rem]"
        >
          <Image
            src="/typescript.svg"
            alt="Typescript"
            className="p-[0.625rem] rounded-2xl xl:p-3"
            layout="fill"
            objectFit="contain"
          />
        </motion.div>

        {/* FRAMEWORKS */}
        <motion.div
          className="bg-white rounded-full shadow-sm z-40 absolute flex-shrink-0
          h-[120px]       xl:h-[165px]
          w-[120px]       xl:w-[165px]
          -mb-[11rem]     xl:-mb-[8rem]
          -ml-[9rem]      xl:-ml-[18rem]"
          style={{ rotate: reactRotate }}
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
          h-[60px]      xl:h-[70px] 
          w-[60px]      xl:w-[70px]
          -mb-[14rem]   xl:-mb-[]
          -mr-[6rem]    xl:-mr-[3rem]"
        >
          <Image
            src="/framer-motion.svg"
            alt="Framer Motion"
            className="p-3 xl:p-4"
            layout="fill"
            objectFit="contain"
          />
        </motion.div>

        <motion.div
          className="bg-white rounded-full shadow-sm absolute flex-shrink-0
          h-[65px]      xl:h-[75px] 
          w-[65px]      xl:w-[75px]
          -mb-[24rem]   
          -ml-[2rem]    xl:-ml-[7rem]"
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
          h-[50px]      xl:h-[60px]
          w-[50px]      xl:w-[60px]
          -mb-[22rem]   xl:-mb-[]
          -ml-[16rem]   xl:-ml-[27rem]"
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
          h-[45px]      xl:h-[55px] 
          w-[45px]      xl:w-[55px]
          -mb-[29rem]   xl:
          -ml-[11rem]   xl:-ml-[21rem]"
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
          h-[90px]      xl:h-[135px]
          w-[90px]      xl:w-[135px]
          -mb-[30rem]   xl:-mb-[17rem]
          -mr-[12rem]   xl:-mr-[23rem]"
          style={{ rotate: githubRotate }}
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
          h-[55px]      xl:h-[65px]
          w-[55px]      xl:w-[65px]
          -mb-[41rem]   xl:-mb-[30rem]
          -mr-[15rem]   xl:-mr-[11rem]"
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
          h-[45px]      xl:h-[55px]
          w-[45px]      xl:w-[55px]
          -mb-[37rem]   xl:-mb-[29rem]
          -mr-[4rem]    xl:-mr-[30rem]"
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
