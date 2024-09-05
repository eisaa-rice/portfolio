"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import "./Experience.css";

const Experience: React.FC = () => {
  const workExperience = [
    {
      time: "FEB 2024 - CURRENT",
      company: "google student developer clubs",
      link: "https://gdsc.community.dev/university-of-michigan-dearborn-united-states/",
      title: "volunteer frontend developer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  const education = [
    {
      time: "SEP 2021 - CURRENT",
      company: "university of michigan - dearborn",
      link: "https://umdearborn.edu/",
      title: "major in computer and information science",
      desc: "Felis nascetur in tortor; odio feugiat interdum. Nulla id ad mi risus turpis consectetur cursus. Tincidunt euismod praesent ac pulvinar tempor eu. ",
    },
  ];

  return (
    <div className="experience px-20 py-32 -ml-12 md:-ml-0">
      <motion.p
        className="cedarville text-4xl text-center font-light mb-24 ml-12 md:ml-0"
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.45,
          duration: 0.35,
        }}
        viewport={{ once: true }}
      >
        here&apos;s where i&apos;ve been
      </motion.p>
    </div>
  );
};

export default Experience;
