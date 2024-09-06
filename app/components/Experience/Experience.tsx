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
    <div className="my-32">
      <div className="grid grid-rows-2 sm:flex sm:flex-row items-center justify-evenly my-24 gap-y-12 md:gap-y-0">
        <div className="row-start-2 row-end-3 bg-green-300 h-[300px] w-[300px] sm:rotate-[3deg] rounded-md"></div>

        <div className="row-start-1 row-end-2 w-[300px] sm:rotate-[-1deg]">
          <p className="text-3xl font-light">title</p>

          <p className="text-xl font-bold">company</p>

          <p className="text-lg font-extralight">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Vivamus
            inceptos dignissim convallis phasellus luctus. Ullamcorper bibendum
            lectus porttitor magnis vel venenatis nisi ultricies ac.
          </p>
        </div>
      </div>

      <div className="grid grid-rows-2 sm:flex sm:flex-row items-center justify-evenly my-24 gap-y-12 md:gap-y-0">
        <div className="row-start-1 row-end-2 w-[300px] sm:rotate-[-1deg]">
          <p className="text-3xl font-light">title</p>

          <p className="text-xl font-bold">company</p>

          <p className="text-lg font-extralight">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Vivamus
            inceptos dignissim convallis phasellus luctus. Ullamcorper bibendum
            lectus porttitor magnis vel venenatis nisi ultricies ac.
          </p>
        </div>

        <div className="row-start-2 row-end-3 bg-blue-300 h-[300px] w-[300px] sm:rotate-[3deg] rounded-md"></div>
      </div>
    </div>
  );
};

export default Experience;
