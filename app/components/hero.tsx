"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = ({}: {}) => {
  return (
    <div
      className="flex flex-col justify-center w-full
      sm:grid sm:grid-cols-2 sm:grid-rows-1"
    >
      {/* [@media(min-width:400px)]: */}
      <div
        className="rounded-full h-48 sm:h-72 w-48 sm:w-72 
        -mt-8 mb-8 m-auto sm:my-auto
        sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 
        relative overflow-hidden flex-shrink-0 border border-gray-300"
      >
        <Image
          className="mt-3 ml-4 scale-125"
          src="/images/animoji.png"
          alt="literally me"
          fill={true}
          objectFit="contain"
        />
      </div>

      <div
        className="flex flex-col justify-center gap-6
      sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-2"
      >
        <p className="text-3xl font-medium text-gray-500">hola 👋🏻, i&apos;m</p>

        <p className="text-7xl font-bold">jésus orozco</p>

        <p className="text-5xl font-semibold text-gray-600">
          software developer
        </p>

        <p className="text-xl text-gray-400 inline-flex items-center gap-2">
          <span>
            <Image
              src="/svgs/location.svg"
              alt="location"
              height={20}
              width={20}
            />
          </span>{" "}
          detroit, mi
        </p>

        <ul className="flex lg:hidden items-center gap-6">
          <motion.a
            href="mailto:jesusorozco3690@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ rotate: "2deg", scale: 1.1 }}
          >
            <Image
              className=""
              src="/svgs/gmail.svg"
              alt="copy email"
              height={25}
              width={25}
            />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/eisaa-rice/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ rotate: "-2deg", scale: 1.1 }}
          >
            <Image
              className=""
              src="/svgs/linkedin.svg"
              alt="copy email"
              height={25}
              width={25}
            />
          </motion.a>

          <motion.a
            href="https://github.com/eisaa-rice"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ rotate: "2deg", scale: 1.1 }}
          >
            <Image
              className=""
              src="/svgs/github.svg"
              alt="copy email"
              height={25}
              width={25}
            />
          </motion.a>

          <motion.a
            className="font-bold text-lg -mx-1"
            href="/documents/jesus_orozco.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ rotate: "-2deg", scale: 1.1 }}
          >
            CV
          </motion.a>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
