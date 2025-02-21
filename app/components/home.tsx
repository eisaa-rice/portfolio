"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const tabs = ["home", "about", "skills", "experience", "projects"];

const Home = ({}: {}) => {
  return (
    <header
      className="flex flex-col items-center justify-center 
      max-h-screen max-w-[50%] sticky top-0 left-0 pb-12"
    >
      <div
        className="rounded-full h-52 w-52 bg-white mt-auto
        relative overflow-hidden
        border-2 border-white shadow-md"
      >
        <Image
          className="mt-8 scale-125 transform"
          src="/images/animoji.png"
          alt="literally me"
          fill={true}
          objectFit="contain"
        />
      </div>

      <div className="flex space-x-6">
        <p className="text-7xl font-extrabold mt-6 rotate-2">jesus</p>
        <p className="text-7xl font-extrabold mt-6 -rotate-2">orozco</p>
      </div>

      <p className="text-4xl font-normal mt-4">software engineer</p>

      <div className="flex items-center justify-center gap-12 mt-12">
        <motion.button
          className="border border-lime-300 text-black bg-white
  relative rounded-full py-4 px-6 flex items-center justify-center gap-3"
          onClick={() => {
            navigator.clipboard.writeText("jesusoro@umich.edu");
          }}
          initial={{ scale: 1, rotate: 2 }}
          whileHover={{ scale: 1.1, rotate: 1 }}
          whileTap={{ scale: 1 }}
        >
          jesusoro@umich.edu
          <Image
            className=""
            src="/svgs/copy.svg"
            alt="copy email"
            height={30}
            width={30}
          />
        </motion.button>

        <motion.button
          className="bg-lime-300 text-black font-semibold
rounded-full py-4 px-6"
          initial={{ scale: 1, rotate: -2 }}
          whileHover={{
            scale: 1.05,
            rotate: 1,
          }}
          whileTap={{ scale: 1 }}
        >
          résumé
        </motion.button>
      </div>

      {/* <p className="text-md mt-10">
        currently: <span className="font-medium">looking for positions</span> 🟢
      </p> */}

      <ul className="mt-auto mb-0 flex items-center justify-center gap-6">
        <a
          href="https://www.linkedin.com/in/eisaa-rice/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>

        <a
          href="https://github.com/eisaa-rice"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
      </ul>
    </header>
  );
};

export default Home;
