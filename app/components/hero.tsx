"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = ({}: {}) => {
  return (
    <div className="flex flex-col justify-center w-full mt-96 mb-64 gap-8">
      <p className="text-2xl font-medium text-gray-500">hola 👋🏻, i&apos;m</p>

      <div className="text-6xl font-bold flex space-x-4 -mr-1">
        <p className="rotate-2">jésus</p> <p className="-rotate-2">orozco</p>
      </div>

      <div className="text-4xl font-semibold text-gray-600">
        software developer
      </div>
    </div>
  );
};

export default Hero;

/* navbar */
/* <div className="mt-3 flex gap-12 pb-12">
        {tabs.map(({ emoji, link }, i) => (
          <motion.button
            key={i}
            className="rounded-full bg-white p-1 text-sm shadow-sm text-center"
            initial={{}}
            whileHover={{
              scale: 1.1,
              ...(i % 2 === 0 ? { rotate: "-4deg" } : { rotate: "4deg" }),
            }}
          >
            <ScrollLink to={link} smooth={true} duration={500} offset={-80}>
              {emoji}
            </ScrollLink>
          </motion.button>
        ))}
      </div> */

/* <div
        className="rounded-full h-44 w-44 bg-white
        relative overflow-hidden flex-shrink-0 my-4
        border-2 border-white shadow-md"
      >
        <Image
          className="mt-8 scale-125 transform"
          src="/images/animoji.png"
          alt="literally me"
          fill={true}
          objectFit="contain"
        />
      </div> */
