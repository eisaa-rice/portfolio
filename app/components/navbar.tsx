"use client";

import React, { useState } from "react";
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
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      // border-b border-b-gray-100
      className="w-full fixed top-0 z-30  
      backdrop-blur-sm shadow-sm bg-white/30"
    >
      <div className="max-w-screen-xl px-6 py-4 mx-auto flex items-center justify-between lg:justify-center">
        <p className="font-medium">jésus orozco</p>

        {/* hamburger */}
        <button className="lg:hidden h-8 w-8" onClick={() => setOpen(!open)}>
          <svg>
            <path
              width="32"
              height="32"
              viewBox="0 0 32 32"
              d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"
            />
          </svg>
        </button>

        <motion.div
          className="absolute top-0 right-0 z-50 px-6 py-4
          bg-[#f8f8ff] shadow-md rounded-bl-xl 
          flex flex-col gap-6 "
          initial={{ x: 200 }}
          animate={open ? { x: 0 } : { x: 200 }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
        >
          <button
            className="h-8 w-8 ml-auto mr-0"
            onClick={() => setOpen(!open)}
          >
            <svg>
              <path
                width="32"
                height="32"
                viewBox="0 0 32 32"
                d="M19.525 15.875l10.513 10.563c.95.962 .95 2.512 0 3.475-.95.962-2.5.962-3.45 0l-10.512-10.562-10.612 10.663c-.963.975-2.525.975-3.487 0-.962-.962-.962-2.538 0-3.5l10.613-10.675L2.4 5.6c-.95-.963-.95-2.512 0-3.475.95-.962 2.5-.962 3.45 0L16.038 12.375 26.375 1.988c.962-.963 2.525-.963 3.488 0 .962.975 .962 2.538 0 3.5L19.525 15.875z"
              />
            </svg>
          </button>

          {tabs.map(({ emoji, link }, i) => (
            <button key={i} className="flex ">
              <ScrollLink to={link} smooth={true} duration={500} offset={-80}>
                {emoji} {link}
              </ScrollLink>
            </button>
          ))}
        </motion.div>

        {/* navbar */}
        <ul className="hidden lg:flex items-center justify-center gap-8 mx-auto absolute">
          {tabs.map(({ emoji, link }, i) => (
            <motion.button
              key={i}
              className="flex"
              initial={{ opacity: 0.5 }}
              whileHover="hover"
              variants={{
                hover: {
                  scale: 1.05,
                  opacity: 1,
                },
              }}
              transition={{ duration: 0.25, ease: "anticipate" }}
            >
              <ScrollLink to={link} smooth={true} duration={500} offset={-80}>
                {link}
              </ScrollLink>

              <motion.p
                className="-z-50"
                initial={{
                  opacity: 0,
                  x: -10,
                }}
                variants={{
                  hover: {
                    opacity: 1,
                    x: 5,
                  },
                }}
                transition={{ duration: 0.25, ease: "anticipate" }}
              >
                {emoji}
              </motion.p>
            </motion.button>
          ))}
        </ul>

        <ul className="hidden lg:flex items-center gap-6 ml-auto mr-0">
          <motion.a
            href="mailto:jesusorozco3690@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ rotate: "2deg", scale: 1.1 }}
          >
            <Image
              className=""
              src="/svgs/gmail.svg"
              alt="copy email"
              height={25}
              width={25}
            />
          </motion.a>

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
            href="/documents/jesus_orozco_software.pdf"
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
