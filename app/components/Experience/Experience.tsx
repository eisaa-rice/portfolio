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

  // const { scrollY } = useScroll();

  // const scaleX1 = useTransform(scrollY, [2600, 2900], [0, 1]);

  return (
    <motion.div className="min-h-[700px] flex flex-col items-center justify-center gap-32">
      <div className="flex flex-col lg:flex-row lg:-ml-28 justify-center w-full rounded-xl">
        <div className="flex flex-col items-center">
          <div className="bg-white shadow-sm h-[100px] w-[100px] rounded-full flex-shrink-0 mb-4 lg:mb-0 flex items-center justify-center">
            <Image
              height={70}
              width={70}
              alt=""
              src={"/gdsc.svg"}
              className="m-auto"
            />
          </div>

          <div className="hidden lg:block h-full w-[1px] rounded-full bg-black opacity-50 p mt-4" />
        </div>

        <div className="lg:ml-16 mt-4">
          <div className="flex">
            <motion.a
              className="inline-flex items-center mb-3 mx-auto lg:mx-0"
              whileHover="hover"
              href="https://gdg.community.dev/gdg-on-campus-university-of-michigan-dearborn-dearborn-united-states/"
              target="_blank"
            >
              <div className="flex flex-col">
                <p className="text-xl font-normal text-center lg:text-start opacity-75">
                  google developer groups
                </p>

                <motion.div
                  className="h-[1px] bg-black opacity-50"
                  initial={{ width: 0 }}
                  variants={{
                    hover: {
                      width: "100%",
                      transition: { duration: 0.3 },
                    },
                  }}
                />
              </div>

              <motion.div
                className="hidden xs:block -mb-1 ml-5 flex-shrink-0"
                initial={{ x: 0, y: 0 }}
                variants={{
                  hover: {
                    x: 3,
                    y: -3,
                    transition: { duration: 0.2 },
                  },
                }}
              >
                <Image
                  height={30}
                  width={30}
                  src={"/external-link.svg"}
                  alt=""
                />
              </motion.div>
            </motion.a>
          </div>

          <div className="flex flex-col items-center lg:items-baseline justify-between mb-8 text-center lg:text-start">
            <p className="font-semibold text-3xl mb-6">
              volunteer software developer
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <p className="font-extralight p-3 bg-white rounded-xl flex-shrink-0 shadow-sm">
                feb 2024 - current
              </p>

              <p className="font-extralight p-3 bg-white rounded-xl flex-shrink-0 shadow-sm">
                dearborn, MI
              </p>

              <p className="font-extralight p-3 bg-white rounded-xl flex-shrink-0 shadow-sm">
                volunteer
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 px-2 lg:px-0">
            <p className="font-light opacity-75 text-2xl">
              i&apos;m assisting this university club with{" "}
              <span className="font-semibold">frontend</span> and{" "}
              <span className="font-semibold">backend web</span> and{" "}
              <span className="font-semibold">app development</span> for
              multiple regional events, like conferences and hackathons
            </p>

            <p className="font-light opacity-75 text-2xl">
              i&apos;ve <span className="font-semibold">converted</span> lots of
              provided <span className="font-semibold"> figma designs</span>{" "}
              into their equivalent functional{" "}
              <span className="font-semibold"> react components</span>, making
              sure our clients were satisfied with final web app layouts
            </p>

            <p className="font-light opacity-75 text-2xl">
              every project incorporated{" "}
              <span className="font-semibold"> responsive design</span> to
              ensure seamless access from any device on any platform
            </p>

            <p className="font-light opacity-75 text-2xl">
              <span className="font-semibold"> best coding practices</span> were
              always withheld through the design of{" "}
              <span className="font-semibold">reusable components</span>,
              allowing individual code blocks to be reused throughout multiple
              user interfaces.
            </p>

            <p className="font-light opacity-75 text-2xl">
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
