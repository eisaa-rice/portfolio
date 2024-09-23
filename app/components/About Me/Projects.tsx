"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

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

  const rangeOne = isMobile ? [550, 1350] : isTablet ? [75, 1675] : [550, 1350];
  const y1 = useTransform(scrollY, rangeOne, [300, -300]);
  const rotate1 = useTransform(scrollY, rangeOne, [5, -5]);

  const rangeTwo = isMobile
    ? [1950, 2950]
    : isTablet
    ? [1250, 2850]
    : [1300, 2300];
  const y2 = useTransform(scrollY, rangeTwo, [300, -300]);
  const rotate2 = useTransform(scrollY, rangeTwo, [-5, 5]);

  const rangeThree = isMobile
    ? [3350, 4350]
    : isTablet
    ? [2400, 4000]
    : [2150, 3150];
  // [2250, 3250]
  const y3 = useTransform(scrollY, rangeThree, [300, -300]);
  const rotate3 = useTransform(scrollY, rangeThree, [5, -5]);

  return (
    <div className="w-full flex flex-col items-center justify-start gap-y-[500px]">
      {/* SELECTED PROJECTS */}
      <div className="grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 lg:gap-x-24">
        <motion.div
          className="row-start-1 row-end-2 col-start-1 col-end-2 lg:col-start-2 lg:col-end-3 bg-white w-64 sm:w-96 h-96 m-auto rounded-2xl"
          transition={{ delay: 0.5 }}
          style={{ y: y1, rotate: rotate1 }}
        />

        <div className="row-start-2 row-end-3 lg:row-start-1 lg:row-end-2 col-start-1 col-end-2 lg:my-auto">
          <p className="font-semibold text-3xl">code conductor</p>

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
          <p className="font-semibold text-3xl">
            international women&apos;s day summit website
          </p>

          <div className="flex flex-col mt-10 mb-0 gap-y-8">
            <p className="font-light opacity-75 text-lg">
              for this conference, students at <span>GDSC</span> made a website
              using <span className="font-semibold">react</span>,{" "}
              <span className="font-semibold">git and github</span>, and{" "}
              <span className="font-semibold">tailwind css</span> to bundle
              registration and information for over 200 conference attendees
            </p>

            <p className="font-light opacity-75 text-lg">
              i helped with some of the responsive design to make sure that a
              smooth experience was withheld across various devices and screen
              sizes
            </p>

            <p className="font-light opacity-75 text-lg">
              following best coding practices, reusable components were designed
              to give us an easier time maintening consistency across the
              application
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
          <p className="font-semibold text-3xl">hack dearborn app</p>

          <div className="flex flex-col mt-10 mb-0 gap-y-8">
            <p className="font-light opacity-75 text-lg">
              worked to make an <span>app</span> and a <span>website</span> for
              our school&apos;s annual hackathon, which were used by over 250
              attendees for registration, information display, and check-in
            </p>

            <p className="font-light opacity-75 text-lg">
              i translated some of the design mockups into{" "}
              <span className="font-semibold">responsive</span>,{" "}
              <span className="font-semibold">user-friendly interfaces</span>,
              such as the welcome screen, the account settings tab, and the help
              and support page
            </p>

            <p className="font-light opacity-75 text-lg">
              wrote a custom script to streamlining data migration from .tsv
              files into the{" "}
              <span className="font-semibold">supabase backend</span>
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
      <div className="w-full flex flex-col items-center gap-y-12 mb-12">
        <div className="w-full flex items-center justify-center">
          <div className="flex justify-center items-center h-[70px] w-[70px] flex-shrink-0">
            <Image height={70} width={70} src={"/rounded-square.svg"} alt="" />
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col ml-5 sm:ml-20">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
                <p className="text-xl mb-4 sm:mb-0">project title</p>

                <div className="flex flex-wrap gap-4 opacity-50">
                  <p className="font-extralight">one</p>

                  <p className="font-extralight">two</p>

                  <p className="font-extralight">three</p>
                </div>
              </div>

              <p className="font-light opacity-75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur est massa, dapibus eget odio eget, feugiat faucibus
                nisl. Nam dignissim venenatis lectus quis fermentum.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] opacity-25 rounded-full bg-white" />
      </div>
    </div>
  );
};

export default Projects;
