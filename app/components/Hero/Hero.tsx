"use client";

import React from "react";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col items-center sm:items-start sm:mx-auto justify-center text-center sm:text-start">
      <p className="century-gothic-bold font-bold text-7xl sm:text-8xl mt-12 ">
        jésus orozco
      </p>

      <p className="font-extralight text-2xl mt-16">
        software engineer. i think.
      </p>

      <p className="font-extralight text-lg mt-6">
        currently a <strong>free agent</strong>
      </p>
    </div>
  );
};

export default Hero;
