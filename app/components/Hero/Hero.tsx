"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import "./Hero.css";

interface HeroProps {}
const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="hero h-screen flex flex-col items-center justify-center">
      <div className="flex items-center justify-between w-full mt-5 mb-auto century-gothic">
        <div>
          <p>jésus orozco</p>
        </div>

        <div className="flex items-center gap-10 opacity-75 text-sm">
          <div className="flex items-center gap-5">
            <p>work</p>

            <p></p>

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

      <div className="flex flex-col items-center justify-center sm:grid sm:grid-rows-1 sm:grid-cols-2 mb-40">
        <div className="sm:col-start-1 sm:col-end-2">
          <p className="text-6xl font-medium">aspiring developer of whatever</p>

          <p className="font-light mt-12 opacity-75">
            Sed luctus magna sed hendrerit molestie. Sed dignissim ut arcu sed
            molestie. Integer sed ante mattis, iaculis diam auctor, viverra
            lectus. Phasellus ac neque mollis, faucibus leo ut, sodales ex.
          </p>

          <div className="flex items-center justify-start gap-12 opacity-90 mt-20">
            <p className="py-3 px-6 bg-white rounded-md text-black">work</p>

            <div className="flex items-center justify-center gap-3">
              <p>resume</p>

              <div className="bg-slate-50 h-[25px] w-[25px] rounded-full opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
