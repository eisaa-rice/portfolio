"use client";

import { useState } from "react";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

const Hero = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      document.documentElement.style.colorScheme = next ? "dark" : "light";
      return next;
    });
  };

  return (
    <section
      className="flex flex-col gap-12 pt-20 sm:pt-40 lg:pt-20
      lg:min-h-[calc(100dvh-80px)] lg:justify-center"
    >
      <p className="text-3xl font-extralight">
        hola{" "}
        <motion.span
          className="inline-block z-10"
          animate={{
            scale: [1, 2, 1],
            rotate: [0, 15, -15, 15, 0],
            transition: { duration: 1, ease: "easeInOut", delay: 0.2 },
          }}
        >
          👋🏻
        </motion.span>
        , i&apos;m
      </p>

      <h1 className="text-7xl sm:text-8xl font-bold">jésus orozco.</h1>

      <p className="text-3xl font-extralight">new-grad software engineer.</p>

      <p>📌 detroit, mi.</p>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
        {/* <div className="flex items-center gap-2">
          <p className="font-sour italic font-extralight text-lg text-nowrap">
            contact me!
          </p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 400 400"
            fill="none"
          >
            <path
              d="M49 200.913C99.7842 198.157 150.377 196.78 200.778 196.78C276.38 196.78 336.003 200.913 351.598 200.913"
              stroke="#000000"
              strokeOpacity="0.9"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M297.858 148C311.416 151.811 342.206 190.498 350.385 194.54C358.564 198.581 323.305 244.831 307.119 253"
              stroke="#000000"
              strokeOpacity="0.9"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div> */}

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between w-full">
          <div
            className="flex items-center gap-3 p-2 w-fit
          border border-neutral-300 rounded-lg"
          >
            <motion.a
              className="mx-px"
              href="https://www.linkedin.com/in/eisaa-rice/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ rotate: "-2deg", scale: 1.1 }}
            >
              <Image
                src="/svgs/linkedin.svg"
                alt="linkedin"
                height={25}
                width={25}
              />
            </motion.a>

            <motion.a
              className="mx-px"
              href="https://github.com/eisaa-rice"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ rotate: "2deg", scale: 1.1 }}
            >
              <Image
                src="/svgs/github.svg"
                alt="github"
                height={25}
                width={25}
              />
            </motion.a>

            <motion.a
              className="text-2xl"
              href="mailto:jesusoro@umich.edu"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ rotate: "-2deg", scale: 1.1 }}
            >
              ✉️
            </motion.a>

            <motion.a
              className="text-2xl"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ rotate: "2deg", scale: 1.1 }}
            >
              📄
            </motion.a>
          </div>

          {/* TODO: animate boder from #0000000d to #ffffff0d 
           - will need variants for sun-animation*/}
          <button
            className="p-1 text-3xl
            flex items-center justify-center
            border rounded-full
            hover:cursor-pointer"
            type="button"
            onClick={toggleTheme}
          >
            <AnimatePresence mode="wait" initial={false}>
              {!isDark ? (
                <motion.span
                  key="sun"
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                    transition: { ease: "easeIn", duration: 0.2 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { ease: "easeOut", duration: 0.1 },
                  }}
                >
                  ☀️
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                    transition: { ease: "easeIn", duration: 0.2 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { ease: "easeOut", duration: 0.1 },
                  }}
                >
                  🌙
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
