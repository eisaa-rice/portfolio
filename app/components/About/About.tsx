"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import "./About.css";

interface AboutProps {}
const About: React.FC<AboutProps> = () => {
  return (
    <div
      className="flex flex-col items-center xl:grid xl:grid-rows-1 xl:grid-cols-2
    gap-12 mb-96 w-full overflow-visible px-2 sm:px-0"
    >
      <div
        className="flex flex-col text-2xl font-light opacity-75 gap-12
        xl:row-start-1 xl:row-end-2
        xl:col-start-1 xl:col-end-2
        mb-12 xl:mb-0"
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
        </p>

        <p>
          when i&apos;m not coding, you can probably find me 🎮{" "}
          <span className="font-semibold">grinding ranked</span> or{" "}
          <span className="font-semibold">drawing something</span> 🎨
        </p>
      </div>

      <div
        className="flex flex-col items-center xl:items-start
        text-2xl font-light flex-shrink-0 gap-14
        xl:row-start-1 xl:row-end-2
        xl:col-start-2 xl:col-end-3"
      >
        <div>
          <p className="opacity-75 mb-5 text-center xl:text-start text-xl">
            i do lots of work with these
          </p>

          <div className="flex items-start flex-wrap gap-4 justify-center xl:justify-start">
            <p
              className="font-extralight px-2 py-auto bg-white rounded-xl shadow-sm h-[45px]
  text-lg opacity-100 inline-flex items-center gap-2 flex-shrink-0"
            >
              react.js
              <Image src={"/react.svg"} alt="react.js" height={25} width={25} />
            </p>

            <p
              className="font-extralight px-2 py-auto bg-white rounded-xl shadow-sm h-[45px]
  text-lg opacity-100 inline-flex items-center gap-2 flex-shrink-0"
            >
              tailwind css
              <Image
                src={"/tailwind.svg"}
                alt="tailwind css"
                height={35}
                width={35}
              />
            </p>

            <p
              className="font-extralight px-2 py-auto bg-white rounded-xl shadow-sm h-[45px]
  text-lg opacity-100 inline-flex items-center gap-2 flex-shrink-0"
            >
              github
              <Image src={"/github.svg"} alt="github" height={25} width={25} />
            </p>

            <p
              className="font-extralight px-2 py-auto bg-white rounded-xl shadow-sm h-[45px]
  text-lg opacity-100 inline-flex items-center gap-2 flex-shrink-0"
            >
              typescript
              <Image
                src={"/typescript.svg"}
                alt="typescript"
                className="rounded-sm"
                height={25}
                width={25}
              />
            </p>
          </div>
        </div>

        <div>
          <p className="opacity-75 mb-5 text-center xl:text-start text-xl">
            i&apos;m pretty comfortable with these
          </p>

          <div className="flex items-start flex-wrap gap-4 justify-center xl:justify-start">
            <p
              className="font-extralight px-2 py-auto bg-white rounded-xl shadow-sm h-[45px]
  text-lg opacity-100 inline-flex items-center gap-2 flex-shrink-0"
            >
              framer motion
              <Image
                src={"/framer-motion.svg"}
                alt="framer motion"
                height={20}
                width={20}
              />
            </p>

            <p
              className="font-extralight px-2 py-auto bg-white rounded-xl shadow-sm h-[45px]
  text-lg opacity-100 inline-flex items-center gap-2 flex-shrink-0"
            >
              node.js
              <Image src={"/nodejs.svg"} alt="node.js" height={30} width={30} />
            </p>

            <p
              className="font-extralight px-2 py-auto bg-white rounded-xl shadow-sm h-[45px]
  text-lg opacity-100 inline-flex items-center gap-2 flex-shrink-0"
            >
              c++
              <Image src={"/c++.svg"} alt="c++" height={35} width={35} />
            </p>

            <p
              className="font-extralight px-2 py-auto bg-white rounded-xl shadow-sm h-[45px]
  text-lg opacity-100 inline-flex items-center gap-2 flex-shrink-0"
            >
              c#
              <Image src={"/csharp.svg"} alt="c#" height={30} width={30} />
            </p>

            <p
              className="font-extralight px-2 py-auto bg-white rounded-xl shadow-sm h-[45px]
  text-lg opacity-100 inline-flex items-center gap-2 flex-shrink-0"
            >
              java
              <Image
                src={"/java.svg"}
                alt="java"
                className="mb-1"
                height={30}
                width={30}
              />
            </p>

            <p
              className="font-extralight px-2 py-auto bg-white rounded-xl shadow-sm h-[45px]
  text-lg opacity-100 inline-flex items-center gap-2 flex-shrink-0"
            >
              python
              <Image
                src={"/python.svg"}
                alt="python"
                className="mt-1"
                height={25}
                width={25}
              />
            </p>

            <p
              className="font-extralight px-2 py-auto bg-white rounded-xl shadow-sm h-[45px]
  text-lg opacity-100 inline-flex items-center gap-2 flex-shrink-0"
            >
              javascript
              <Image
                src={"/javascript.svg"}
                alt="javascript"
                className="rounded-sm"
                height={25}
                width={25}
              />
            </p>
          </div>
        </div>

        <div>
          <p className="opacity-75 mb-5 text-center xl:text-start text-xl">
            i&apos;ve messed around with these before
          </p>

          <div className="flex items-start flex-wrap gap-4 justify-center xl:justify-start">
            <p
              className="font-extralight px-2 py-auto bg-white rounded-xl shadow-sm h-[45px]
  text-lg opacity-100 inline-flex items-center gap-2 flex-shrink-0"
            >
              next.js
              <Image src={"/nextjs.svg"} alt="next.js" height={25} width={25} />
            </p>

            <p
              className="font-extralight px-2 py-auto bg-white rounded-xl shadow-sm h-[45px]
  text-lg opacity-100 inline-flex items-center gap-2 flex-shrink-0"
            >
              react native
              <Image
                src={"/react-native.svg"}
                alt="react native"
                height={40}
                width={40}
              />
            </p>

            <p
              className="font-extralight px-2 py-auto bg-white rounded-xl shadow-sm h-[45px]
  text-lg opacity-100 inline-flex items-center gap-2 flex-shrink-0"
            >
              figma
              <Image src={"/figma.svg"} alt="figma" height={20} width={20} />
            </p>

            <p
              className="font-extralight px-2 py-auto bg-white rounded-xl shadow-sm h-[45px]
  text-lg opacity-100 inline-flex items-center gap-2 flex-shrink-0"
            >
              docker
              <Image src={"/docker.svg"} alt="docker" height={25} width={25} />
            </p>

            <p
              className="font-extralight px-2 py-auto bg-white rounded-xl shadow-sm h-[45px]
  text-lg opacity-100 inline-flex items-center gap-2 flex-shrink-0"
            >
              git
              <Image src={"/git.svg"} alt="git" height={25} width={25} />
            </p>

            <p
              className="font-extralight px-2 py-auto bg-white rounded-xl shadow-sm h-[45px]
  text-lg opacity-100 inline-flex items-center gap-2 flex-shrink-0"
            >
              html
              <Image src={"/html.svg"} alt="html" height={25} width={25} />
            </p>

            <p
              className="font-extralight px-2 py-auto bg-white rounded-xl shadow-sm h-[45px]
  text-lg opacity-100 inline-flex items-center gap-2 flex-shrink-0"
            >
              css
              <Image src={"/css.svg"} alt="css" height={25} width={25} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
