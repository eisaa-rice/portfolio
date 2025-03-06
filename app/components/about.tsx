"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      // backdrop-blur-sm border border-gray-100 shadow-md rounded-3xl p-8
      className="flex flex-col justify-center w-full"
    >
      <p
        className="text-3xl text-gray-800 font-medium text-center
        border-b border-gray-300 w-fit mx-auto px-6 pb-2"
      >
        🤟🏻 sup!
      </p>

      <div className="flex items-center justify-center gap-24 mt-10">
        <div className="rounded-full h-72 w-72 m-auto relative overflow-hidden flex-shrink-0 border border-gray-300">
          <Image
            className="mt-3 ml-4 scale-125"
            src="/images/animoji.png"
            alt="literally me"
            fill={true}
            objectFit="contain"
          />
        </div>

        <div
          className="flex flex-col items-start gap-6 
      text-gray-400 text-lg mt-4"
        >
          <p>
            as you already know, the name&apos;s 🤟🏻{" "}
            <span className="font-semibold text-black">jesus orozco</span>. i
            was born, raised, and am currently based in 🌮{" "}
            <span className="font-semibold text-black">detroit, michigan</span>.
          </p>

          <p>
            i&apos;m currently a fourth year 🖥️{" "}
            <span className="font-semibold text-black">
              computer science major
            </span>{" "}
            at the 🎓 university of michigan - dearborn.
          </p>

          <p>
            i&apos;ve worked with my university&apos;s 🧑🏻‍💻{" "}
            <motion.a
              className="font-semibold text-black"
              whileHover={{
                textDecoration: "underline",
              }}
              href="https://gdg.community.dev/gdg-on-campus-university-of-michigan-dearborn-dearborn-united-states/"
              target="_blank"
              rel="noopener noreferrer"
            >
              google developer group
            </motion.a>{" "}
            to make web and mobile apps for multiple events like conferences,
            workshops, and hackathons.
          </p>

          <p>
            when i&apos;m not coding, you can probably find me 🎮{" "}
            <span className="font-semibold text-black">grinding ranked</span> or
            🎨{" "}
            <span className="font-semibold text-black">drawing something</span>.
          </p>

          {/* <span className="font-bold text-black"></span> */}
        </div>
      </div>
    </div>
  );
};

export default About;
