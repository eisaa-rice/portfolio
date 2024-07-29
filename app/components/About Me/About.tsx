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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        delay: easeDelay,
        duration: transDuration,
        ease: easeType,
      }}
      viewport={{ once: true }}
    >
      <p className="text-lg text-center">{children}</p>
    </motion.div>
  );
};

function About() {
  return (
    <div className="about">
      <div>
        <p className="text-4xl font-bold text-center">holá, nice to meet you</p>

        <Image
          className="secondary-underline"
          src="/images/underline-one.png"
          alt=""
          width={450}
          height={300}
        />
      </div>

      <div className="flex items-center justify-center mt-48 mb-96 sm:mb-48">
        <Image
          className="rounded-full absolute"
          src="/images/image.png"
          alt=""
          width={245}
          height={245}
        />

        <Image
          className="rounded-full absolute "
          src="/images/circle.png"
          alt=""
          width={285}
          height={285}
        />
      </div>

      <div className="flex flex-col gap-10">
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
