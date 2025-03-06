"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = ({}: {}) => {
  return (
    <div
      className="flex flex-col justify-center w-full
      md:grid md:grid-cols-2 md:grid-rows-1"
    >
      <div
        className="rounded-full h-48 md:h-72 w-48 md:w-72 
        -mt-8 mb-8 m-auto md:my-auto
        md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 
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
      md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2"
      >
        <p className="text-2xl font-medium text-gray-500">hola 👋🏻, i&apos;m</p>

        <p className="text-4xl sm:text-6xl font-bold">jésus orozco</p>

        <p className="text-2xl sm:text-4xl font-semibold text-gray-600">
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

{
  /* <div
          className="rounded-3xl h-72 lg:h-96 w-72 lg:w-96 px-10 m-auto 
          relative overflow-hidden flex-shrink-0 border border-gray-300
      lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2"
        >
          <Image
            src="/images/me.jpg"
            alt="me"
            fill={true}
            objectFit="contain"
          />
        </div> */
}
