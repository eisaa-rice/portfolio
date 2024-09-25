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

  // const scaleX1 = useTransform(scrollY, [2600, 2900], [0, 1]);

  return (
    <motion.div className="min-h-[700px] flex flex-col items-center justify-center gap-32 mb-96">
      <div className="flex flex-col md:flex-row justify-center w-full rounded-xl">
        <div className="flex flex-col items-center">
          <div className="bg-white h-[100px] w-[100px] rounded-full flex-shrink-0 mb-4 md:mb-0 flex items-center justify-center">
            <Image
              height={70}
              width={70}
              alt=""
              src={"/gdsc.svg"}
              className="m-auto"
            />
          </div>

          <div className="hidden md:block h-full w-[1px] rounded-full bg-black opacity-50 p mt-4" />
        </div>

        <div className="md:ml-16 mt-4">
          <p className="text-xl font-normal text-center md:text-start opacity-75 mb-4">
            google developer student club
          </p>

          <div className="flex flex-col items-center md:items-baseline justify-between mb-8 text-center md:text-start">
            <p className="font-semibold text-3xl mb-6">
              volunteer software developer
            </p>

            <p className="flex text-lg font-medium opacity-50">
              feb 2024 - current · dearborn, mi · volunteer
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-light opacity-75 text-xl">
              i&apos;m assisting this university club with{" "}
              <span className="font-semibold">frontend</span> and{" "}
              <span className="font-semibold">backend web</span> and{" "}
              <span className="font-semibold">app development</span> for
              multiple regional events, like conferences and hackathons
            </p>

            <p className="font-light opacity-75 text-xl">
              i&apos;ve <span className="font-semibold">converted</span> lots of
              provided <span className="font-semibold"> figma designs</span>{" "}
              into their equivalent functional{" "}
              <span className="font-semibold"> react components</span>, making
              sure our clients were satisfied with final web app layouts
            </p>

            <p className="font-light opacity-75 text-xl">
              every project incorporated{" "}
              <span className="font-semibold"> responsive design</span> to
              ensure seamless access from any device on any platform
            </p>

            <p className="font-light opacity-75 text-xl">
              <span className="font-semibold"> best coding practices</span> were
              always withheld through the design of{" "}
              <span className="font-semibold">reusable components</span>,
              allowing individual code blocks to be reused throughout multiple
              user interfaces.
            </p>

            <p className="font-light opacity-75 text-xl">
              <span className="font-semibold">user-acceptance testing</span> was
              performed on all assigned issues to guarantee client guidelines
              and specifications were met.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
