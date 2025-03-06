"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = ({}: {}) => {
  return (
    <div
      className="flex flex-col justify-center gap-8
      lg:grid lg:grid-cols-2 lg:grid-rows-1
      my-64 w-full"
    >
      <div
        className="rounded-full h-96 w-96 m-auto relative overflow-hidden flex-shrink-0 border border-gray-300
      lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2"
      >
        <Image src="/images/me.jpg" alt="me" fill={true} objectFit="contain" />
      </div>

      <div
        className="flex flex-col justify-center gap-8
      lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2"
      >
        <p className="text-2xl font-medium text-gray-500">hola 👋🏻, i&apos;m</p>

        <div className="text-6xl font-bold flex space-x-4 -mr-1">
          <p className="rotate-2">jésus</p> <p className="-rotate-2">orozco</p>
        </div>

        <div className="text-4xl font-semibold text-gray-600">
          software developer
        </div>

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
