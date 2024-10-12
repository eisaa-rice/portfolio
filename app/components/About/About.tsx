"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

import "./About.css";
import { Scada } from "next/font/google";

// interface SkillProps {
//   skills: {
//     src: string;
//     alt: string;
//     height: number;
//     width: number;
//     style?: React.CSSProperties;
//     classname: string;
//   };
// }
// const Skill: React.FC<SkillProps> = ({
//   skills: { src, alt, height, width, style, classname },
// }) => {
//   const clsnm = `flex items-center justify-center flex-shrink-0 h-[100px] w-[100px] bg-red-300
//   rounded-full shadow-sm absolute ${classname}`;

//   return (
//     <div className={clsnm}>
//       <div className="absolute">
//         <Image
//           src={src}
//           alt={alt}
//           height={height}
//           width={width}
//           style={style}
//         />
//       </div>
//     </div>
//   );
// };

interface AboutProps {}
const About: React.FC<AboutProps> = () => {
  const skills = [
    {
      src: "/c++.svg",
      alt: "C++",
    },
    {
      src: "/csharp.svg",
      alt: "C#",
      height: 82.5,
      width: 82.5,
      yDelay: 1.74,
      rotateDelay: 0.5,
    },
    {
      src: "/java.svg",
      alt: "Java",
      height: 75,
      width: 75,
      yDelay: 0.29,
      rotateDelay: 1.07,
      style: { marginBottom: 5 },
    },
    {
      src: "/python.svg",
      alt: "Python",
      height: 70,
      width: 70,
      yDelay: 2,
      rotateDelay: 0.42,
      style: { marginTop: 15 },
    },
    {
      src: "/html.svg",
      alt: "HTML",
      height: 60,
      width: 60,
      yDelay: 0.78,
      rotateDelay: 0.91,
      style: { marginTop: 10 },
    },
    {
      src: "/css.svg",
      alt: "CSS",
      height: 67.5,
      width: 67.5,
      yDelay: 1.44,
      rotateDelay: 0.24,
      style: { marginTop: 10 },
    },
    {
      src: "/javascript.svg",
      alt: "Javascript",
      height: 65,
      width: 65,
      yDelay: 0.15,
      rotateDelay: 1.45,
      style: { borderRadius: 5, marginBottom: 2 },
    },
    {
      src: "/typescript.svg",
      alt: "Typescript",
      height: 65,
      width: 65,
      yDelay: 1.21,
      rotateDelay: 0.44,
      style: { borderRadius: 5, marginBottom: 2 },
    },

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

  const [isCSharpVisible, setCSharpVisible] = useState(false);

  const handleClickCpp = () => {
    console.log(isCSharpVisible);
    setCSharpVisible(true);
  };

  return (
    <div
      className="flex flex-col xl:flex-row items-center
    gap-y-24 mb-96 w-full overflow-visible"
    >
      <div
        className="flex flex-col gap-12 text-2xl font-light opacity-75
      px-2 sm:px-0"
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
        className="flex items-center justify-center flex-shrink-0 bg-orange-50
        h-[650px] xl:h-[550px] 2xl:h-[700px] 
        w-full xl:w-[550px] 2xl:w-[700px]"
      >
        {/* {skills.map((skill, index) => (
          <Skill key={index} skills={skill} />
        ))} */}

        <p
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
        </p>

        <motion.div
          whileHover={isCSharpVisible ? "" : "cplusplus"}
          whileTap="cplusplus"
          onClick={handleClickCpp}
          animate={isCSharpVisible ? "cplusplus" : ""}
        >
          <motion.div
            className="flex items-center justify-center flex-shrink-0 bg-white
          rounded-full shadow-sm absolute z-40
          h-[100px] 2xl:h-[215px] 
          w-[100px] 2xl:w-[215px]
          2xl:-mt-72
          2xl:-ml-72"
            initial={{ scale: 1 }}
            variants={{
              cplusplus: { scale: 1.1, transition: { ease: "easeOut" } },
            }}
          >
            <Image
              src="/c++.svg"
              alt="C++"
              className="p-2"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>

          <motion.div
            className="flex items-center justify-center flex-shrink-0 bg-white
          rounded-full shadow-sm absolute
          h-[100px] 2xl:h-[55px] 
          w-[100px] 2xl:w-[55px]
          2xl:-mt-52
          2xl:-ml-52"
            initial={{ scale: 1, x: 0, y: 0, rotate: -90 }}
            variants={{
              cplusplus: {
                scale: 1.1,
                x: -115,
                y: -115,
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
            className="flex items-center justify-center flex-shrink-0 bg-white
          rounded-full shadow-sm absolute
          h-[100px] 2xl:h-[55px] 
          w-[100px] 2xl:w-[55px]
          2xl:-mt-52
          2xl:-ml-52"
            initial={{ scale: 1, x: 0, y: 0, rotate: 90 }}
            variants={{
              cplusplus: {
                scale: 1.1,
                x: -20,
                y: -160,
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
        </motion.div>

        <motion.div
          className="flex items-center justify-center flex-shrink-0 bg-white
          rounded-full shadow-sm absolute
          h-[100px] 2xl:h-[245px] 
          w-[100px] 2xl:w-[245px]
          2xl:-mb-44
          2xl:-mr-72"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          <Image
            src="/react.svg"
            alt="React.js"
            className="p-2"
            layout="fill"
            objectFit="contain"
          />
        </motion.div>

        <motion.div
          className="flex items-center justify-center flex-shrink-0 bg-white
          rounded-full shadow-sm absolute
          h-[100px] 2xl:h-[185px] 
          w-[100px] 2xl:w-[185px]
          2xl:-mb-96
          2xl:-ml-96"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          <Image
            src="/github.svg"
            alt="GitHub"
            className="p-2"
            layout="fill"
            objectFit="contain"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
