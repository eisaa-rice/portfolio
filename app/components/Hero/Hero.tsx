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
    <div className="hero min-h-screen flex flex-col items-center justify-start mb-64">
      <div className="flex items-center justify-between w-full mt-5 mb-auto century-gothic">
        <div className="opacity-75">
          <p className="text-sm sm:text-lg">jésus orozco</p>
        </div>

        <div className=" hidden lg:flex items-center gap-5 opacity-75">
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

      <div className="flex flex-col items-center justify-center gap-y-12 lg:grid lg:grid-rows-1 lg:grid-cols-2 mb-36 lg:gap-x-12">
        <div className="hidden md:block sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 m-auto mb-16">
          <motion.div
            className="h-[350px] w-[350px] rounded-full bg-opacity-0 dashed-circle opacity-75"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 15, // time to complete one rotation
              ease: "linear",
            }}
          />
        </div>

        <div className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2">
          <p className="text-6xl font-medium">aspiring developer of whatever</p>

          <p className="font-light mt-12 opacity-75">
            Sed luctus magna sed hendrerit molestie. Sed dignissim ut arcu sed
            molestie. Integer sed ante mattis, iaculis diam auctor, viverra
            lectus. Phasellus ac neque mollis, faucibus leo ut, sodales ex.
          </p>
        </div>

        <motion.div
          className="-mb-32 mx-auto flex flex-col items-center justify-center lg:col-start-1 lg:col-end-3"
          initial={{ y: 50, opacity: "0%" }}
          animate={{ y: -15, opacity: "50%" }}
          transition={{ delay: 4, duration: 1.5, ease: "backOut" }}
          style={{ opacity }}
        >
          <div className="bg-black w-[37px] h-[51px] rounded-3xl absolute z-20" />

          <motion.div
            className="bg-green-300 w-[10px] h-[10px] rounded-full absolute z-30"
            initial={{ y: 0 }}
            animate={{ y: [10, -10, 10] }}
            transition={{
              delay: 4,
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          />

          <div className="bg-slate-50 w-[40px] h-[55px] rounded-3xl absolute -z-20" />

          <motion.div className="mt-20">
            <Image height={23.5} width={23.5} src={"/down-arrow.svg"} alt="" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
