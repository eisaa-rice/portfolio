"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

import "./About.css";

const About = () => {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-around gap-24 mb-96 w-full xl:px-12">
      <div className="overflow-hidden relative md:static w-full">
        <motion.svg
          className="z-40 overflow-hidden absolute mx-auto
          h-[430px]
          w
          -ml-12 mt-2 xs:ml-6 sm:ml-20 lg:ml-40 xl:ml-3 2xl:ml-16"
          viewBox="0 -10 461 486"
          xmlns="http://www.w3.org/2000/svg"
          whileInView="squiggly"
          viewport={{ once: true }}
        >
          <motion.path
            className="overflow-hidden"
            d="M19.6759 1C24.4763 30.0738 22.6007 88.5505 19.6759 116.44C0.910865 295.372 -8.25346 387.082 19.6759 426.204C23.6035 439.244 48.9296 464.649 65.0612 439.672C89.4994 401.833 129.211 471.097 149.286 446.726C165.345 427.23 188.998 431.548 193.362 439.672C195.689 449.505 216.848 489.117 251.839 439.672C285.878 391.572 251.839 493.544 460 446.726"
            stroke="black"
            fill="none"
            strokeWidth="5"
            initial={{ pathLength: 0 }}
            variants={{
              squiggly: {
                pathLength: 1,
                transition: {
                  duration: 1,
                  delay: 0.5,
                  ease: "easeIn",
                },
              },
            }}
          />
        </motion.svg>

        <div
          className="bg-white rounded-3xl shadow-sm mb-16 xl:mb-0 flex-shrink-0 mx-auto h-[400px] 
        w-[310px] xs:w-[370px] sm:w-[400px]"
        ></div>
      </div>

      <div
        className="flex flex-col gap-6 text-2xl font-light opacity-75 
      w-full 
      px-2 sm:px-12"
      >
        <p>
          holá! 👋🏻 as you already know, the name&apos;s{" "}
          <span className="font-semibold">jésus orozco</span>!
        </p>

        <p>
          i was born, raised, and am currently based in{" "}
          <span className="font-semibold">detroit, mi</span> 🌮
        </p>

        <p>
          i&apos;m currently in my fourth year at 🎓{" "}
          <span className="font-semibold">
            university of michigan - dearborn
          </span>
          , majoring in <span className="font-semibold">computer science</span>{" "}
          🖥️
        </p>

        <p>
          i currently volunteer as a developer for my university&apos;s{" "}
          <span className="font-semibold">google developer group</span>
          <span className="font-semibold"></span>
        </p>
      </div>
    </div>
  );
};

export default About;
