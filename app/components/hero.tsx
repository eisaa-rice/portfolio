"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = ({}: {}) => {
  return (
    <div
      className="flex flex-col justify-center w-full
      lg:grid lg:grid-cols-2 lg:grid-rows-1"
    >
      <div
        className="rounded-full h-48 lg:h-72 w-48 lg:w-72 -mt-8 mb-8 lg:my-0
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
      lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2"
      >
        <p className="text-2xl font-medium text-gray-500">hola 👋🏻, i&apos;m</p>

        <p className="text-6xl font-bold">jésus orozco</p>

        <p className="text-4xl font-semibold text-gray-600">
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
