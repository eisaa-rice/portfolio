"use client";

import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

import "./Hero.css";

interface HeroProps {}
const Hero: React.FC<HeroProps> = () => {
  return (
    <div
      className="flex flex-col items-center
      w-[320px] xs:w-[450px] sm:w-[600px] lg:w-[750px] xl:w-[1150px] 2xl:w-[1400px]"
    >
      <motion.div
        className="h-24 w-full text-gray-400
        hidden md:flex items-center justify-center gap-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.5 }}
      >
        <motion.p
          className="inline-flex items-center gap-2 flex-shrink-0 
          glass py-3 px-5 rounded-3xl
          transition-colors duration-[500ms] ease-in-out"
          initial={{ color: "#6b7280" }}
          whileHover={{ color: "black", cursor: "pointer" }}
          whileTap={{
            scale: 0.95,
          }}
        >
          about
        </motion.p>

        <motion.p
          className="inline-flex items-center gap-2 flex-shrink-0 
        glass py-3 px-5 rounded-3xl
        transition-colors duration-[500ms] ease-in-out"
          initial={{ color: "#6b7280" }}
          whileHover={{ color: "black", cursor: "pointer" }}
          whileTap={{
            scale: 0.95,
          }}
        >
          experience
        </motion.p>

        <motion.p
          className="inline-flex items-center gap-2 flex-shrink-0 
         glass py-3 px-5 rounded-3xl
         transition-colors duration-[500ms] ease-in-out"
          initial={{ color: "#6b7280" }}
          whileHover={{ color: "black", cursor: "pointer" }}
          whileTap={{
            scale: 0.95,
          }}
        >
          projects
        </motion.p>

        <motion.p
          className="inline-flex items-center gap-2 flex-shrink-0 
        glass py-3 px-5 rounded-3xl
        transition-colors duration-[500ms] ease-in-out"
          initial={{ color: "#6b7280" }}
          whileHover={{ color: "black", cursor: "pointer" }}
          whileTap={{
            scale: 0.95,
          }}
        >
          contact
        </motion.p>
      </motion.div>

      <div
        className="flex flex-col items-center w-full mt-28 md:mt-4 xl:mt-28
        xl:grid xl:grid-cols-[auto_450px] 2xl:grid-cols-[auto_500px] xl:grid-rows-1 xl:gap-20 2xl:gap-12"
      >
        <div
          className="m-auto relative md:static w-full flex-shrink-0 mt-16 mb-8
      xl:col-start-2 xl:col-end-3 xl:row-start-1 xl:row-end-2 overflow-visible"
        >
          <div
            className="rounded-full flex-shrink-0 bg-white shadow-lg relative overflow-hidden m-auto
            h-[400px]                           xl:h-[440px] 2xl:h-[480px]
            w-[310px] xs:w-[370px] sm:w-[400px] xl:w-[440px] 2xl:w-[480px]"
          >
            <Image
              className="rounded-full mt-4"
              src="/images/animoji.png"
              alt="animoji"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        <div
          className="inline-flex flex-col justify-center items-center xl:items-start
      mx-auto xl:mx-0 gap-10 xl:mt-0
      xl:col-start-1 xl:col-end-2 xl:row-start-1 xl:row-end-2"
        >
          {/* text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600 */}
          <p
            className="text-gray-500 text-center xl:text-start font-medium
            text-4xl sm:text-5xl lg:text-6xl"
          >
            holá, i&apos;m
          </p>

          <p
            className="text-center xl:text-start inline flex-shrink-0 font-bold 
        text-6xl sm:text-7xl lg:text-8xl p-2"
          >
            jésus orozco
          </p>

          <p
            className="text-gray-700 text-center xl:text-start inline flex-shrink-0
        text-xl sm:text-2xl lg:text-3xl"
          >
            aspiring software engineer
          </p>

          <p
            className="text-gray-500 text-center xl:text-start
            flex flex-col xs:block flex-shrink-0  
            text-lg sm:text-xl lg:text-2xl"
          >
            currently <span className="font-semibold">open for positions</span>{" "}
            🙋🏼
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center xl:justify-start
            w-full gap-12 mx-auto"
          >
            <motion.a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="py-5 px-9 rounded-full font-semibold
               transition-colors duration-[500ms] ease-in-out"
              initial={{
                backgroundColor: "black",
                color: "ghostwhite",
              }}
              whileHover={{
                backgroundColor: "white",
                color: "black",
                boxShadow: "0 0 30px rgba(0, 0, 0, 0.1)",

                cursor: "pointer",
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              résumé
            </motion.a>

            <div className="flex items-center justify-center gap-x-12 svg-black">
              <motion.a
                className=""
                href="https://www.linkedin.com/in/eisaa-rice/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ rotate: 0, scale: 1 }}
                whileHover={{ cursor: "pointer", rotate: -5, scale: 1.1 }}
              >
                <Image
                  height={33}
                  width={33}
                  src={"/linkedin.svg"}
                  alt="LinkedIn"
                />
              </motion.a>

              <motion.a
                href="https://github.com/eisaa-rice"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ rotate: 0, scale: 1 }}
                whileHover={{ cursor: "pointer", rotate: -5, scale: 1.1 }}
              >
                <Image
                  height={32}
                  width={32}
                  src={"/github.svg"}
                  alt="GitHub"
                />
              </motion.a>

              <motion.a
                href="mailto:jesusorozco3690@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ rotate: 0, scale: 1 }}
                whileHover={{ cursor: "pointer", rotate: -5, scale: 1.1 }}
              >
                <Image height={33} width={33} src={"/email.svg"} alt="Email" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
