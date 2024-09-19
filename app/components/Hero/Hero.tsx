"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import "./Hero.css";

interface HeroProps {}
const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="hero h-screen flex flex-col items-center justify-start mb-64">
      <div className="flex items-center justify-between w-full mt-5 mb-auto century-gothic">
        <div className="opacity-75">
          <p className="text-sm sm:text-lg">jésus orozco</p>
        </div>

        <div className="hidden lg:flex items-center gap-10 opacity-75 text-sm">
          <div className="flex items-center gap-5">
            <p>work</p>

            <p>history</p>

            <p>contact</p>
          </div>

          <div className="h-[30px] w-[0.5px] bg-white rounded-full" />

          <div className="flex items-center gap-2">
            <p>A</p>

            <p>B</p>

            <p>C</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-y-12 lg:grid lg:grid-rows-1 lg:grid-cols-2 mb-36">
        <div className="hidden md:block sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 m-auto mb-16">
          <div className="h-[350px] w-[350px] bg-slate-50 rounded-full bg-opacity-0 border-2 border-dashed border-white border-opacity-50 " />
        </div>

        <div className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2">
          <p className="text-6xl font-medium">aspiring developer of whatever</p>

          <p className="font-light mt-12 opacity-75">
            Sed luctus magna sed hendrerit molestie. Sed dignissim ut arcu sed
            molestie. Integer sed ante mattis, iaculis diam auctor, viverra
            lectus. Phasellus ac neque mollis, faucibus leo ut, sodales ex.
          </p>

          <div className="hidden sm:flex items-center justify-center sm:justify-start gap-12 opacity-90 mt-20">
            <p className="py-3 px-6 bg-white rounded-md text-black hover:cursor-pointer">
              work
            </p>

            <p className="py-3 px-6 bg-white rounded-md bg-opacity-10 border border-white border-opacity-20 backdrop-blur-2xl hover:cursor-pointer">
              résumé
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
