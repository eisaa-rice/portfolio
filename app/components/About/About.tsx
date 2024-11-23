"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import "./About.css";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-3xl text-center mb-24">What&apos;s up?</p>

      <div
        className="flex flex-col items-center justify-center gap-y-20 
     xl:grid xl:grid-rows-1 xl:grid-cols-2 gap-x-16 px-2
     w-[320px] xs:w-[450px] sm:w-[600px] lg:w-[750px] xl:w-[1150px] 2xl:w-[1400px]"
      >
        <div
          className="rounded-full flex-shrink-0 bg-white shadow-lg 
       xl:row-start-1 xl:row-end-2 xl:col-start-1 xl:col-end-2
       relative overflow-hidden m-auto 
       h-[400px] xl:h-[600px] w-[300px] xs:w-[400px] xl:w-[500px]"
        >
          <Image
            className="rounded-full mt-6"
            src="/images/animoji.png"
            alt="animoji"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div
          className="flex flex-col items-center lg:items-start justify-center
       xl:row-start-1 xl:row-end-2 xl:col-start-2 xl:col-end-3
       w-full text-2xl font-light gap-12 text-gray-700"
        >
          <p>
            Holá! 👋🏻 As you already know, my name is{" "}
            <span className="font-semibold">Jésus Orozco</span>!
          </p>

          <p>
            I was born, raised, and am currently based in{" "}
            <span className="font-semibold">Detroit, MI</span> 🌮.
          </p>

          <p>
            I&apos;m currently in my fourth year at 🎓{" "}
            <span className="font-semibold">
              University of Michigan - Dearborn
            </span>
            , majoring in{" "}
            <span className="font-semibold">computer science</span> 🖥️.
          </p>

          <p>
            I am currently developing apps and websites for events regarding my
            university&apos;s{" "}
            <span className="font-semibold">Google Developer Group</span>.
          </p>

          <p>
            When i&apos;m not coding, you can probably find me 🎮{" "}
            <span className="font-semibold">grinding ranked</span> or{" "}
            <span className="font-semibold">drawing something</span> 🎨.
          </p>

          <motion.a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block p-4 text-xl text-black bg-white rounded-xl shadow-sm font-medium mx-auto xl:mx-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{
              scale: 0.95,
            }}
          >
            Résumé 📄
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default About;
