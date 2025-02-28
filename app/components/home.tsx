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
      className="flex flex-col justify-between
      lg:h-screen lg:w-1/2 lg:sticky lg:top-0 lg:py-24"
      // lg:max-h-screen
    >
      <p className="text-2xl text-neutral-800 font-medium"> hi 👋🏻, i&apos;m</p>

      <div className="text-5xl font-bold my-4">jésus orozco</div>

      <p className="text-neutral-500">
        currently a{" "}
        <span className="font-medium text-black">software engineer</span> @{" "}
        <span className="font-medium text-black">free agent</span> 🟢
      </p>

      <ul className="lg:mt-auto flex items-center gap-6">
        <motion.button
          className=""
          onClick={() => {
            navigator.clipboard.writeText("jesusoro@umich.edu");
          }}
        >
          <Image
            className=""
            src="/svgs/gmail.svg"
            alt="copy email"
            height={30}
            width={30}
          />
        </motion.button>

        <motion.a
          href="https://www.linkedin.com/in/eisaa-rice/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className=""
            src="/svgs/linkedin.svg"
            alt="copy email"
            height={30}
            width={30}
          />
        </motion.a>

        <motion.a
          href="https://github.com/eisaa-rice"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className=""
            src="/svgs/github.svg"
            alt="copy email"
            height={30}
            width={30}
          />
        </motion.a>

        <motion.a
          href="https://github.com/eisaa-rice"
          target="_blank"
          rel="noopener noreferrer"
        >
          CV
        </motion.a>
      </ul>
    </header>
  );
};

export default Home;

/* navbar */
/* <div className="mt-3 flex gap-12 pb-12">
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
      </div> */

/* <div
        className="rounded-full h-44 w-44 bg-white
        relative overflow-hidden flex-shrink-0 my-4
        border-2 border-white shadow-md"
      >
        <Image
          className="mt-8 scale-125 transform"
          src="/images/animoji.png"
          alt="literally me"
          fill={true}
          objectFit="contain"
        />
      </div> */
