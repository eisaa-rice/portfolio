"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

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

  const { scrollY } = useScroll();

  const scale = useTransform(
    scrollY,
    [3000, 4000, 6250, 7250],
    [1, 1.162, 1.162, 1]
  );

  return (
    <motion.div
      className="h-[3000px] mb-[3000px] bg-white text-black rounded-xl flex items-center justify-center"
      style={{ scale }}
    >
      <p>EXPERIENCE</p>
    </motion.div>
  );
};

export default Experience;
