"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const tabs = [
  {
    emoji: "👋🏻",
    link: "about",
  },
  {
    emoji: "🛠️",
    link: "skills",
  },
  {
    emoji: "💼",
    link: "experience",
  },
  {
    emoji: "💻",
    link: "projects",
  },
  // {
  //   emoji: "📞",
  //   link: "contact",
  // },
];

const Home = ({}: {}) => {
  return (
    <header
      className="flex flex-col items-center justify-center min-h-[800px]
      max-h-screen max-w-[50%] sticky top-0 left-0 pb-12"
    >
      {/* navbar */}
      <div className="mt-10 mb-auto flex gap-12">
        {tabs.map(({ emoji, link }, i) => (
          <motion.button
            key={i}
            className="rounded-full bg-white p-1 text-sm shadow-sm text-center"
            initial={{}}
            whileHover={{
              scale: 1.1,
              ...(i % 2 === 0 ? { rotate: "-4deg" } : { rotate: "4deg" }),
            }}
          >
            <ScrollLink to={link} smooth={true} duration={500} offset={-80}>
              {emoji}
            </ScrollLink>
          </motion.button>
        ))}
      </div>

      <div
        className="rounded-full h-52 w-52 bg-white 
        relative overflow-hidden flex-shrink-0
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

      <p className="text-md mt-6 mb-14">
        currently @ <span className="font-medium">free agent</span> 🟢
      </p>

      <div className="flex items-center justify-center gap-12">
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
