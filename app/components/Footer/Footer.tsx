"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import "./Footer.css";

const Contact = ({
  alt,
  icon,
  link,
  text,
}: {
  alt: string;
  icon: string;
  link?: string;
  text: string;
}) => {
  return link ? (
    <motion.a
      className="flex items-center justify-center flex-col xs:flex-row
glass rounded-2xl py-3 px-4 flex-shrink-0"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ rotate: 0, scale: 1 }}
      whileHover={{ cursor: "pointer", rotate: -1, scale: 1.1 }}
    >
      <span className="flex items-center justify-center">
        <Image className="mr-1" height={38} width={38} src={icon} alt={alt} />{" "}
      </span>

      <span className="ml-2 flex-shrink-0 mt-2 xl:mt-0">{text}</span>
    </motion.a>
  ) : (
    <motion.p
      className="flex items-center justify-center flex-col xs:flex-row
      glass rounded-2xl py-3 px-4 flex-shrink-0"
    >
      <span className="flex items-center justify-center">
        <Image className="mr-1" height={38} width={38} src={icon} alt={alt} />{" "}
      </span>
      <span className="ml-2 flex-shrink-0 mt-2 xl:mt-0">{text}</span>
    </motion.p>
  );
};

const Footer = () => {
  return (
    <div className="flex flex-col items- px-2 xs:px-0">
      <p className="text-3xl text-center mb-24">Wanna talk?</p>

      <div
        className="w-full flex flex-col xl:flex-row flex-wrap 
      items-center gap-12 mt-20 mb-52 xl:mb-72"
      >
        <Contact
          alt="LinkedIn"
          icon="/linkedin.svg"
          text="eisaa-rice"
          link="https://linkedin.com/in/eisaa-rice/"
        />

        <Contact
          alt="GitHub"
          icon="/github.svg"
          text="eisaa-rice"
          link="https://github.com/eisaa-rice"
        />

        <Contact
          alt="Email"
          icon="/email.svg"
          text="jesusorozco3690@gmail.com"
          // link="mailto:jesusorozco3690@gmail.com"
        />

        <Contact alt="Location" icon="/location.svg" text="Detroit, MI" />
      </div>

      <p className="century-gothic mb-7 font-thin text-lg text-center">
        jesus orozco {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
