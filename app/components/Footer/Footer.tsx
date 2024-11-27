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
      className="flex items-center justify-center flex-row
      glass rounded-2xl py-3 px-4 flex-shrink-0"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ rotate: 0, scale: 1 }}
      whileHover={{ cursor: "pointer", rotate: -1, scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <span className="flex items-center justify-center">
        <Image className="mr-1" height={38} width={38} src={icon} alt={alt} />{" "}
      </span>

      <span className="ml-2 flex-shrink-0">{text}</span>
    </motion.a>
  ) : (
    <motion.p
      className="flex items-center justify-center flex-row
      glass rounded-2xl py-3 px-4 flex-shrink-0"
    >
      <span className="flex items-center justify-center">
        <Image className="mr-1" height={38} width={38} src={icon} alt={alt} />{" "}
      </span>
      <span className="ml-2 flex-shrink-0">{text}</span>
    </motion.p>
  );
};

const Footer = () => {
  return (
    <div className="flex flex-col items-center px-2 xs:px-0" id="footer">
      <p className="text-3xl text-center mb-12">Wanna talk?</p>

      <div
        className="w-full flex flex-col sm:flex-row flex-wrap 
      items-center justify-center gap-12 mt-20
      sm:w-[680px] lg:w-auto max-w-[600px]"
      >
        <Contact
          alt="LinkedIn"
          icon="/svgs/linkedin.svg"
          text="eisaa-rice"
          link="https://linkedin.com/in/eisaa-rice/"
        />

        <Contact
          alt="GitHub"
          icon="/svgs/github.svg"
          text="eisaa-rice"
          link="https://github.com/eisaa-rice"
        />

        <Contact
          alt="Gmail"
          icon="/svgs/gmail.svg"
          text="jesusorozco3690@gmail.com"
          // link="mailto:jesusorozco3690@gmail.com"
        />

        <Contact alt="Location" icon="/svgs/location.svg" text="Detroit, MI" />
      </div>

      <p className="text-2xl font-light text-slate-500 text-center mt-24 mb-64 px-1">
        I&apos;m open to chat about basically anything, so don&apos;t be afraid
        to drop me a line!
      </p>

      <p className="century-gothic mb-20 font-thin text-lg text-center">
        © {new Date().getFullYear()} Jesus Orozco
      </p>
    </div>
  );
};

export default Footer;
