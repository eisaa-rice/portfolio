"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import "./Hero.css";

interface HeroProps {}
const Hero: React.FC<HeroProps> = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [0.5, 0]);

  return (
    <div className="hero min-h-screen flex flex-col items-center justify-start mb-72">
      <div className="flex items-center justify-between w-full mt-5 mb-32 century-gothic">
        <div className="opacity-75">
          <p className="text-sm py-1 px-3 bg-white rounded-md bg-opacity-10 ">
            jésus orozco
          </p>
        </div>

        <div className="flex items-center gap-5 opacity-75">
          <motion.a
            href="https://www.linkedin.com/in/eisaa-orozco/"
            target="_blank"
            initial={{ opacity: "75%" }}
            whileHover={{ opacity: "100%", cursor: "pointer" }}
          >
            <Image
              height={23.5}
              width={23.5}
              src={"/linkedin.svg"}
              alt="LinkedIn"
            />
          </motion.a>

          <motion.a
            href="mailto:jesusorozco3690@gmail.com"
            target="_blank"
            initial={{ opacity: "75%" }}
            whileHover={{ opacity: "100%", cursor: "pointer" }}
          >
            <Image height={25} width={25} src={"/email.svg"} alt="Email" />
          </motion.a>

          <motion.a
            href="https://github.com/eisaarice"
            target="_blank"
            initial={{ opacity: "75%" }}
            whileHover={{ opacity: "100%", cursor: "pointer" }}
          >
            <Image height={22} width={22} src={"/github.svg"} alt="GitHub" />
          </motion.a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center lg:mt-32 mb-36 lg:grid lg:grid-rows-1 lg:grid-cols-2 lg:gap-x-12 gap-y-12 lg:gap-y-0">
        <div className="hidden md:block sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 lg:m-auto">
          <motion.div
            className="h-[350px] w-[350px] rounded-full bg-opacity-0 dashed-circle opacity-75 "
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 15, // time to complete one rotation
              ease: "linear",
            }}
          />
        </div>

        <div className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 md:mt-28 lg:mt-0">
          <p className="text-6xl font-medium">aspiring software engineer</p>

          <p className="font-light mt-12 opacity-75">
            currently a student at{" "}
            <span className="font-semibold">
              university of michigan - deaborn
            </span>{" "}
            studying <span className="font-semibold">computer science</span> and
            having <span className="font-semibold">way too much fun</span>{" "}
            making <span className="font-semibold">web applications</span> on
            the side
          </p>
        </div>

        <motion.div
          className="-mb-32 xl:-mb-96 mx-auto flex flex-col items-center justify-center lg:col-start-1 lg:col-end-3"
          initial={{ y: 500 }}
          animate={{ y: 15 }}
          transition={{ delay: 2.5, duration: 2.5, ease: "anticipate" }}
          style={{ opacity }}
        >
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [5, -5, 5] }}
            transition={{
              delay: 4.25,
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          >
            <Image
              height={120}
              width={120}
              src={"/mouse-scroll-icon.svg"}
              alt=""
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
