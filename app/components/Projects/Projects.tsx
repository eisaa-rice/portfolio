"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Image from "next/image";
import "./Projects.css";

const Projects = () => {
  const { scrollY } = useScroll();

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;

      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const rangeOne = isMobile ? [550, 1350] : isTablet ? [75, 1675] : [700, 1500];
  const y1 = useTransform(scrollY, rangeOne, [300, -300]);
  const rotate1 = useTransform(scrollY, rangeOne, [5, -5]);

  const rangeTwo = isMobile
    ? [1950, 2950]
    : isTablet
    ? [1250, 2850]
    : [1450, 2450];
  const y2 = useTransform(scrollY, rangeTwo, [300, -300]);
  const rotate2 = useTransform(scrollY, rangeTwo, [-5, 5]);

  const rangeThree = isMobile
    ? [3350, 4350]
    : isTablet
    ? [2400, 4000]
    : [2350, 3350];
  const y3 = useTransform(scrollY, rangeThree, [300, -300]);
  const rotate3 = useTransform(scrollY, rangeThree, [5, -5]);

  return (
    <div className="w-full flex flex-col items-center justify-start gap-y-[500px]">
      {/* SELECTED PROJECTS */}
      <div className="grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 lg:gap-x-24">
        <motion.a
          className="row-start-1 row-end-2 col-start-1 col-end-2 lg:col-start-2 lg:col-end-3 bg-white w-64 sm:w-96 h-96 m-auto rounded-2xl"
          href="https://www.codeconductor.org/"
          target="_blank"
          whileHover={{}}
          style={{ y: y1, rotate: rotate1 }}
        />

        <div className="row-start-2 row-end-3 lg:row-start-1 lg:row-end-2 col-start-1 col-end-2 lg:my-auto">
          <motion.a
            className="inline-flex items-center"
            href="https://www.codeconductor.org/"
            target="_blank"
            whileHover="hover"
          >
            <div className="flex flex-col ">
              <p className="font-semibold text-3xl">code conductor</p>

              <motion.div
                className="h-[1px] bg-white opacity-50"
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
              className="opacity-75 -mb-1 ml-5 flex-shrink-0"
              initial={{ rotate: 0, x: 0, y: 0, scale: 1 }}
              variants={{
                hover: {
                  rotate: -20,
                  x: 5,
                  y: -5,
                  scale: 1.1,
                  transition: { duration: 0.25, delay: 0.05 },
                },
              }}
            >
              <Image
                height={35}
                width={35}
                src={"/arrow-circle-right.svg"}
                alt=""
              />
            </motion.div>
          </motion.a>

          <div className="flex flex-col mt-10 mb-0 gap-y-8">
            <p className="font-light opacity-75 text-lg">
              for a group project, some classmates and i made an{" "}
              <span className="font-semibold">online platform</span> that lets
              people brainstorm and visualize custom algorithms easily
            </p>

            <p className="font-light opacity-75 text-lg">
              we used <span className="font-semibold">git</span> and{" "}
              <span className="font-semibold">github</span> to work
              simultaneously and and our leader assigned issues to each of us so
              that we could progress incrementally
            </p>

            <p className="font-light opacity-75 text-lg">
              blocks consisting of code type and description are properly
              indented and are drag-and-drop-able to make designing the
              algorithm easy and simple
            </p>

            <div className="flex flex-wrap gap-4 opacity-50 mt-4">
              <p className="font-extralight">react.js</p>

              <p className="font-extralight">typescript</p>

              <p className="font-extralight">material ui</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 lg:gap-x-24">
        <motion.div
          className="row-start-1 row-end-2 col-start-1 col-end-2 bg-white w-64 sm:w-96 h-96 m-auto rounded-2xl"
          style={{ y: y2, rotate: rotate2 }}
        />

        <div className="row-start-2 row-end-3 lg:row-start-1 lg:row-end-2 col-start-1 col-end-2 lg:col-start-2 lg:col-end-3 lg:my-auto">
          <motion.a
            className="inline-flex items-center"
            href="https://www.iwdsummit.com/"
            target="_blank"
            whileHover="hover"
          >
            <div className="flex flex-col ">
              <p className="font-semibold text-3xl">
                international women&apos;s day summit
              </p>

              <motion.div
                className="h-[1px] bg-white opacity-50"
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
              className="opacity-75 -mb-1 ml-5 flex-shrink-0"
              initial={{ rotate: 0, x: 0, y: 0, scale: 1 }}
              variants={{
                hover: {
                  rotate: -20,
                  x: 5,
                  y: -5,
                  scale: 1.1,
                  transition: { duration: 0.25, delay: 0.05 },
                },
              }}
            >
              <Image
                height={35}
                width={35}
                src={"/arrow-circle-right.svg"}
                alt=""
              />
            </motion.div>
          </motion.a>

          <div className="flex flex-col mt-10 mb-0 gap-y-8">
            <p className="font-light opacity-75 text-lg">
              for this conference, students at <span>GDSC</span> made a website
              using <span className="font-semibold">react</span>,{" "}
              <span className="font-semibold">git and github</span>, and{" "}
              <span className="font-semibold">tailwind css</span> to bundle
              registration and information for over 200 conference attendees
            </p>

            <p className="font-light opacity-75 text-lg">
              <span className="font-semibold">responsive design</span> was
              applied to make sure that a smooth experience was present across
              various devices and screen sizes
            </p>

            <p className="font-light opacity-75 text-lg">
              to follow best coding practices,{" "}
              <span className="font-semibold">reusable components</span> were
              designed and give us an easier time maintening consistency across
              the application
            </p>

            <div className="flex flex-wrap gap-4 opacity-50 mt-4">
              <p className="font-extralight">react.js</p>

              <p className="font-extralight">javascript</p>

              <p className="font-extralight">tailwind css</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 lg:gap-x-24 lg:my-auto">
        <motion.div
          className="row-start-1 row-end-2 col-start-1 col-end-2 lg:col-start-2 lg:col-end-3 bg-white w-64 sm:w-96 h-96 m-auto rounded-2xl"
          style={{ y: y3, rotate: rotate3 }}
        />

        <div className="row-start-2 row-end-3 lg:row-start-1 lg:row-end-2 col-start-1 col-end-2">
          <motion.a
            className="inline-flex items-center"
            href="https://www.hackdearborn.org/"
            target="_blank"
            whileHover="hover"
          >
            <div className="flex flex-col ">
              <p className="font-semibold text-3xl">hack dearborn 3</p>

              <motion.div
                className="h-[1px] bg-white opacity-50"
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
              className="opacity-75 -mb-1 ml-5 rounded-full flex-shrink-0"
              initial={{
                rotate: 0,
                x: 0,
                y: 0,
                scale: 1,
              }}
              variants={{
                hover: {
                  rotate: -20,
                  x: 5,
                  y: -5,
                  scale: 1.1,

                  transition: { duration: 0.25, delay: 0.05 },
                },
              }}
            >
              <Image
                height={35}
                width={35}
                src={"/arrow-circle-right.svg"}
                alt=""
              />
            </motion.div>
          </motion.a>

          <div className="flex flex-col mt-10 mb-0 gap-y-8">
            <p className="font-light opacity-75 text-lg">
              university club made an <span className="font-semibold">app</span>{" "}
              and a <span className="font-semibold">website</span> for our
              school&apos;s annual hackathon, which were used by over 250
              attendees for registration, information display, and check-in
            </p>

            <p className="font-light opacity-75 text-lg">
              wireframe mockups were translated into{" "}
              <span className="font-semibold">responsive</span>,{" "}
              <span className="font-semibold">user-friendly interfaces</span>{" "}
              with appealing and engaging designs
            </p>

            <p className="font-light opacity-75 text-lg">
              <span className="font-semibold">supabase</span> was used for the
              backend to take advantage of its database tables, edge functions,
              and simple authentication features
            </p>

            <div className="flex flex-wrap gap-4 opacity-50 mt-4">
              <p className="font-extralight">react native</p>

              <p className="font-extralight">typescript</p>

              <p className="font-extralight">supabase</p>
            </div>
          </div>
        </div>
      </div>

      {/* OTHER WORKS */}
      <div className="w-full flex flex-col items-center"></div>
    </div>
  );
};

export default Projects;
