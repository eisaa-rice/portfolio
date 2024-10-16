"use client";

import React from "react";
import Image from "next/image";

import "./Hero.css";

interface HeroProps {}
const Hero: React.FC<HeroProps> = () => {
  return (
    <div
      // bg-[#64815f]
      className="flex flex-col items-center bg-[#64815f] text-white
      w-[320px] xs:w-[450px] sm:w-[600px] lg:w-[750px] xl:w-[1150px] 2xl:w-[1400px]"
    >
      <div
        className="h-24 w-full text-xl font-semibold
        hidden xl:flex items-center justify-end gap-24"
      >
        <p className="inline-flex items-center gap-2 flex-shrink-0">about</p>

        <p className="inline-flex items-center gap-2 flex-shrink-0">
          experience
        </p>

        <p className="inline-flex items-center gap-2 flex-shrink-0">projects</p>

        <p className="inline-flex items-center gap-2 flex-shrink-0">contact</p>
      </div>

      <div
        className="flex flex-col items-center w-full mt-28
        xl:grid xl:grid-cols-[1fr 1fr] xl:grid-rows-1 2xl:gap-32"
      >
        <div
          className="m-auto relative md:static w-full flex-shrink-0 mt-16 mb-8
      xl:col-start-2 xl:col-end-3 xl:row-start-1 xl:row-end-2 overflow-visible"
        >
          <div
            className="rounded-full flex-shrink-0 bg-white shadow-sm relative overflow-hidden m-auto
            h-[400px]                           xl:h-[440px] 2xl:h-[480px]
            w-[310px] xs:w-[370px] sm:w-[400px] xl:w-[440px] 2xl:w-[480px]"
          >
            <Image
              className="rounded-full mt-4"
              src="/images/animoji.png"
              alt="animoji"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        <div
          className="inline-flex flex-col justify-center items-center xl:items-start
      mx-auto xl:mx-0 gap-10 xl:mt-0
      xl:col-start-1 xl:col-end-2 xl:row-start-1 xl:row-end-2"
        >
          {/* text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600 */}
          <p
            className="text-center xl:text-start opacity-75 font-semibold
            text-4xl sm:text-5xl lg:text-6xl"
          >
            holá, i&apos;m
          </p>

          <p
            className="text-center xl:text-start inline flex-shrink-0 font-bold 
        text-7xl sm:text-8xl lg:text-9xl p-2 inter"
          >
            jésus orozco
          </p>

          <p
            className="text-center xl:text-start inline flex-shrink-0 font-semibold opacity-75
        text-3xl sm:text-4xl lg:text-5xl"
          >
            a <span className="text-amber-200">software engineer</span> from{" "}
            <span className="text-red-400">detroit</span>
          </p>

          <p
            // flex flex-col xs:flex-row
            className="text-center xl:text-start font-semibold
            flex flex-col xs:block flex-shrink-0 
            text-xl sm:text-2xl lg:text-3xl opacity-50"
          >
            currently{" "}
            <span className="font-semibold outline-text">
              {" "}
              open for positions
            </span>{" "}
            🙋🏼
          </p>

          <div>
            <p>resume</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
