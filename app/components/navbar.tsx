"use client";
import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

const tabs = [
  {
    emoji: "🤟🏻",
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

const Navbar = () => {
  return (
    <header
      // border-b border-b-gray-100
      className="w-full fixed top-0 z-50
      backdrop-blur-sm shadow-sm 
      p-4"
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-center">
        <ul
          className="flex items-center justify-center gap-16
        mx-auto absolute"
        >
          {tabs.map(({ emoji, link }, i) => (
            <motion.button
              key={i}
              className="flex"
              initial={{ opacity: 0.5 }}
              whileHover="hover"
              variants={{ hover: { scale: 1.05, opacity: 1 } }}
            >
              <ScrollLink to={link} smooth={true} duration={500} offset={-80}>
                {link}
              </ScrollLink>

              <motion.p
                className="-z-50"
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                variants={{
                  hover: {
                    opacity: 1,
                    x: 10,
                  },
                }}
                transition={{ duration: 0.25 }}
              >
                {emoji}
              </motion.p>
            </motion.button>
          ))}
        </ul>

        <ul className="flex items-center gap-8 ml-auto mr-0">
          <motion.button
            whileHover={{ rotate: "2deg", scale: 1.1 }}
            onClick={() => {
              navigator.clipboard.writeText("jesusoro@umich.edu");
            }}
          >
            <Image
              className=""
              src="/svgs/gmail.svg"
              alt="copy email"
              height={25}
              width={25}
            />
          </motion.button>

          <motion.a
            href="https://www.linkedin.com/in/eisaa-rice/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ rotate: "-2deg", scale: 1.1 }}
          >
            <Image
              className=""
              src="/svgs/linkedin.svg"
              alt="copy email"
              height={25}
              width={25}
            />
          </motion.a>

          <motion.a
            href="https://github.com/eisaa-rice"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ rotate: "2deg", scale: 1.1 }}
          >
            <Image
              className=""
              src="/svgs/github.svg"
              alt="copy email"
              height={25}
              width={25}
            />
          </motion.a>

          <motion.a
            className="font-bold text-lg -mx-1"
            href=""
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ rotate: "-2deg", scale: 1.1 }}
          >
            CV
          </motion.a>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

//   {{
//     scale: 1.05,
//     opacity: 1,
// ...(i % 2 === 0 ? { rotate: "-4deg" } : { rotate: "4deg" }),
//   }}
