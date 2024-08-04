"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import "./About.css";

const FadeInText: React.FC<{ children: ReactNode }> = ({ children }) => {
  const easeType = "easeIn";
  const transDuration = 1;
  const easeDelay = 0.25;

  return (
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        delay: easeDelay,
        duration: transDuration,
        ease: easeType,
      }}
      viewport={{ once: true }}
      className="text-lg text-center"
    >
      {children}
    </motion.p>
  );
};

function About() {
  return (
    <div className="about">
      <p className="text-4xl text-center mb-24">holá, nice to meet you</p>

      <div className="flex items-center justify-center my-72 sm:mb-[450px] md:my-64">
        <Image
          className="rounded-full absolute sm:w-[340px] sm:h-[340px]"
          src="/images/image.png"
          alt=""
          width={245}
          height={245}
        />

        <Image
          className="rounded-full absolute sm:w-[400px] sm:h-[400px]"
          src="/images/circle.png"
          alt=""
          width={285}
          height={285}
        />
      </div>

      <div className="flex flex-col gap-10 pt-64 sm:pt-0">
        <FadeInText>
          as you&apos;ve probably seen, my name&apos;s{" "}
          <strong>jesus orozco</strong>, but some of my friends call me{" "}
          <strong>eisaa</strong>.
        </FadeInText>

        <FadeInText>
          i was born and raised, and am still <strong>located</strong> in,{" "}
          <strong>detroit, michigan</strong>, where the roots of my{" "}
          <strong>mexican</strong> heritage lie.
        </FadeInText>

        <FadeInText>
          i&apos;m currently attending{" "}
          <strong>university of michigan - dearborn</strong> where i&apos;m
          majoring in <strong>computer science</strong>.
        </FadeInText>

        <FadeInText>
          i&apos;m aspiring to be a <strong>web</strong> and{" "}
          <strong>app developer</strong>, having already worked on multiple
          projects for regional events such as <strong>conferences</strong> and{" "}
          <strong>hackathons</strong>.
        </FadeInText>
      </div>
    </div>
  );
}

export default About;
