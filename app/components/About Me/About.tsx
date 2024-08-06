"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import "./About.css";

const FadeInText: React.FC<{ children: ReactNode }> = ({ children }) => {
  const easeDelay = 0.25;
  const transDuration = 1;
  const easeType = "easeIn";

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

const About = () => {
  return (
    <div className="about p-20">
      <motion.p
        className="text-4xl text-center font-light mb-24"
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.45,
          duration: 0.35,
        }}
        viewport={{ once: true }}
      >
        holá, nice to meet you
      </motion.p>

      <div className="lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-6">
        <div className="flex items-center justify-center my-48 sm:mb-[450px] md:my-64 lg:my-0 lg:ml-12 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2">
          {/* <Image
            className="rounded-full absolute sm:w-[340px] sm:h-[340px]"
            src="/images/image.png"
            alt=""
            width={245}
            height={245}
          /> */}

          <Image
            className="rounded-full absolute sm:w-[400px] md:w-[500px]"
            src="/images/pfp-circle.png"
            alt=""
            width={285}
            height={285}
          />
        </div>

        <div className="flex flex-col gap-10 pt-48 sm:pt-0 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2">
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
            projects for regional events such as <strong>conferences</strong>{" "}
            and <strong>hackathons</strong>.
          </FadeInText>
        </div>
      </div>
    </div>
  );
};

export default About;
