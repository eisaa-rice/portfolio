"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import "./Projects.css";

interface OtherWorksProps {}
const OtherWorks: React.FC<OtherWorksProps> = () => {
  return (
    <div
      className="w-full flex flex-col items-center
bg-black bg-opacity-5"
    >
      <p className="text-2xl font-light opacity-75 my-4">other works</p>

      <div className="h-[1px] w-full bg-black opacity-25" />

      <div className="flex flex-col w-full gap-12 items-center justify-center p-24">
        <div className="bg-white h-[50px] w-full rounded-md">
          <p> one day some shit will go here lol</p>
        </div>
      </div>
    </div>
  );
};

interface ProjectsProps {}
const Projects: React.FC<ProjectsProps> = () => {
  const { scrollY } = useScroll();

  const [scrollRange1, setScrollRange1] = useState([0, 0]);
  const [scrollRange2, setScrollRange2] = useState([0, 0]);
  const [scrollRange3, setScrollRange3] = useState([0, 0]);

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;

      // - 1600
      if (width >= 320 && width < 500) {
        setScrollRange1([4700, 6300]);

        setScrollRange2([6800, 8400]);

        setScrollRange3([9000, 10600]);
      } else if (width >= 500 && width < 640) {
        setScrollRange1([4000, 5600]);

        setScrollRange2([5950, 7550]);

        setScrollRange3([7950, 9550]);
      } else if (width >= 640 && width < 1024) {
        setScrollRange1([3800, 5400]);

        setScrollRange2([5625, 7225]);

        setScrollRange3([7500, 9100]);
      } else if (width >= 1024 && width < 1280) {
        setScrollRange1([3700, 5300]);

        setScrollRange2([5550, 7150]);

        setScrollRange3([7350, 8950]);
      } else if (width >= 1280 && width < 1536) {
        setScrollRange1([2825, 4425]);

        setScrollRange2([4025, 5625]);

        setScrollRange3([5350, 6950]);
      } else {
        // width >= 1536
        setScrollRange1([2800, 4400]);

        setScrollRange2([4025, 5625]);

        setScrollRange3([5350, 6950]);
      }
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const y1 = useTransform(scrollY, scrollRange1, ["100%", "-100%"]);
  const rotate1 = useTransform(scrollY, scrollRange1, [5, -5]);

  const y2 = useTransform(scrollY, scrollRange2, ["100%", "-100%"]);
  const rotate2 = useTransform(scrollY, scrollRange2, [-5, 5]);

  const y3 = useTransform(scrollY, scrollRange3, ["100%", "-100%"]);
  const rotate3 = useTransform(scrollY, scrollRange3, [5, -5]);

  return (
    <div
      // pt-96 pb-48
      className="flex flex-col items-center justify-start gap-y-96 overflow-visible px-2
    w-[320px] xs:w-[450px] sm:w-[600px] lg:w-[750px] xl:w-[1150px] 2xl:w-[1400px]"
    >
      {/* SELECTED PROJECTS */}
      <div className="grid grid-rows-[auto_auto] grid-cols-1 xl:grid-rows-1 xl:grid-cols-2 xl:gap-x-24">
        <motion.div
          className="row-start-1 row-end-2 col-start-1 col-end-2 xl:col-start-2 xl:col-end-3
          mx-auto -ml-14 xs:-ml-20 sm:-ml-24 mb-44 xl:mt-12
          w-[800px] xs:w-[1000px] sm:w-[1200px] xl:w-[875px] 2xl:w-[975px]"
          style={{ y: y1, rotate: rotate1 }}
        >
          <Image src="/images/cc.png" alt="CC" height={1469} width={2432} />
        </motion.div>

        <div className="row-start-2 row-end-3 xl:row-start-1 xl:row-end-2 col-start-1 col-end-2 xl:my-auto">
          <motion.a
            className="inline-flex items-center"
            href="https://www.codeconductor.org/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover="hover"
          >
            <div className="flex flex-col">
              <p className="font-semibold text-3xl">🤖 code conductor</p>

              <motion.div
                className="h-[1px] bg-black"
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
              className="-mb-1 ml-5 flex-shrink-0"
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

          <div className="flex flex-col mt-10 mb-0 gap-y-8 text-gray-700">
            <p className="font-light text-2xl">
              for a group project, some classmates and i made an{" "}
              <span className="font-semibold">online platform</span> that lets
              people brainstorm and visualize custom algorithms easily
            </p>

            <p className="font-light text-2xl">
              we used <span className="font-semibold">git</span> and{" "}
              <span className="font-semibold">github</span> to work
              simultaneously and and our leader assigned issues to each of us so
              that we could progress incrementally
            </p>

            <p className="font-light text-2xl">
              blocks consisting of code type and description are properly
              indented and are drag-and-drop-able to make designing the
              algorithm easy and simple
            </p>

            <div className="flex flex-wrap justify-center xl:justify-start gap-4 mt-4 mx-auto xl:mx-0">
              <p
                className="font-extralight px-2 py-auto bg-white rounded-xl shadow-sm h-[45px] text-gray-500
                inline-flex items-center gap-2 flex-shrink-0"
              >
                react.js
                <Image
                  src={"/react.svg"}
                  alt="react.js"
                  height={25}
                  width={25}
                />
              </p>

              <p
                className="font-extralight px-2 py-auto bg-white rounded-xl shadow-sm h-[45px]
               inline-flex items-center gap-2 flex-shrink-0"
              >
                typescript
                <Image
                  src={"/typescript.svg"}
                  alt="typescript"
                  className="rounded-sm"
                  height={25}
                  width={25}
                />
              </p>

              <p
                className="font-extralight px-2 py-auto bg-white rounded-xl shadow-sm h-[45px]
               inline-flex items-center gap-2 flex-shrink-0"
              >
                material ui
                <Image
                  src={"/mui.svg"}
                  alt="material ui"
                  height={25}
                  width={25}
                />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-rows-[auto_auto] grid-cols-1 xl:grid-rows-1 xl:grid-cols-2 xl:gap-x-24">
        <motion.div
          className="row-start-1 row-end-2 col-start-1 col-end-2 
          relative h-[700px] xs:my-12"
          style={{ y: y2, rotate: rotate2 }}
        >
          <Image
            src="/images/iwd.png"
            alt="IWD"
            layout="fill"
            objectFit="contain"
          />
        </motion.div>

        <div className="row-start-2 row-end-3 xl:row-start-1 xl:row-end-2 col-start-1 col-end-2 xl:col-start-2 xl:col-end-3 xl:my-auto">
          <motion.a
            className="inline-flex items-center"
            href="https://www.iwdsummit.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover="hover"
          >
            <div className="flex flex-col">
              <p className="font-semibold text-3xl">
                👩 international women&apos;s day summit
              </p>

              <motion.div
                className="h-[1px] bg-black"
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
              className="-mb-1 ml-5 flex-shrink-0"
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

          <div className="flex flex-col mt-10 mb-0 gap-y-8 text-gray-700">
            <p className="font-light text-2xl">
              for this conference, students at <span>GDG</span> made a website
              using <span className="font-semibold">react</span>,{" "}
              <span className="font-semibold">git and github</span>, and{" "}
              <span className="font-semibold">tailwind css</span> to bundle
              registration and information for over 200 conference attendees
            </p>

            <p className="font-light text-2xl">
              <span className="font-semibold">responsive design</span> was
              applied to make sure that a smooth experience was present across
              various devices and screen sizes
            </p>

            <p className="font-light text-2xl">
              to follow best coding practices,{" "}
              <span className="font-semibold">reusable components</span> were
              designed and give us an easier time maintening consistency across
              the application
            </p>

            <div className="flex flex-wrap justify-center xl:justify-start gap-4 mt-4 mx-auto xl:mx-0 text-gray-500">
              <p
                className="font-extralight px-2 py-auto bg-white rounded-xl shadow-sm h-[45px]
               inline-flex items-center gap-2 flex-shrink-0"
              >
                react.js
                <Image
                  src={"/react.svg"}
                  alt="react.js"
                  height={25}
                  width={25}
                />
              </p>

              <p
                className="font-extralight px-2 py-auto bg-white rounded-xl shadow-sm h-[45px]
              inline-flex items-center gap-2 flex-shrink-0"
              >
                javascript
                <Image
                  src={"/javascript.svg"}
                  alt="javascript"
                  className="rounded-sm"
                  height={25}
                  width={25}
                />
              </p>

              <p
                className="font-extralight px-2 py-auto bg-white rounded-xl shadow-sm h-[45px]
              inline-flex items-center gap-2 flex-shrink-0"
              >
                tailwind css
                <Image
                  src={"/tailwind.svg"}
                  alt="tailwind css"
                  height={30}
                  width={30}
                />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-rows-[auto_auto] grid-cols-1 xl:grid-rows-1 xl:grid-cols-2 xl:gap-x-24 xl:my-auto">
        <motion.div
          className="row-start-1 row-end-2 col-start-1 col-end-2 xl:col-start-2 xl:col-end-3 
          relative h-[700px] xs:my-12"
          style={{ y: y3, rotate: rotate3 }}
        >
          <Image
            src="/images/hd3.png"
            alt="HD3"
            layout="fill"
            objectFit="contain"
          />
        </motion.div>

        <div className="row-start-2 row-end-3 xl:row-start-1 xl:row-end-2 col-start-1 col-end-2 xl:my-auto">
          <motion.a
            className="inline-flex items-center"
            href="https://www.hackdearborn.org/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover="hover"
          >
            <div className="flex flex-col ">
              <p className="font-semibold text-3xl">
                🧑‍💻 hack{" "}
                <span className="inline-flex flex-shrink-0">dearborn 3</span>
              </p>

              <motion.div
                className="h-[1px] bg-black"
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
              className="-mb-1 ml-5 rounded-full flex-shrink-0"
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

          <div className="flex flex-col mt-10 mb-0 gap-y-8 text-gray-700">
            <p className="font-light text-2xl">
              university club made a{" "}
              <span className="font-semibold">fullstack app</span> and a{" "}
              <span className="font-semibold">website</span> for our
              school&apos;s annual hackathon, which were used by over 250
              attendees for registration, information display, and check-in
            </p>

            <p className="font-light text-2xl">
              wireframe mockups were translated into{" "}
              <span className="font-semibold">responsive</span>,{" "}
              <span className="font-semibold">user-friendly interfaces</span>{" "}
              with appealing and engaging designs
            </p>

            <p className="font-light text-2xl">
              <span className="font-semibold">supabase</span> was used for the
              backend to take advantage of its database tables, edge functions,
              and simple authentication features
            </p>

            <div className="flex flex-wrap justify-center xl:justify-start gap-3 xl:gap-4 mt-4 mx-auto xl:mx-0 text-gray-500">
              <p
                className="font-extralight px-2 py-auto bg-white rounded-xl shadow-sm h-[45px]
              inline-flex items-center gap-2 flex-shrink-0"
              >
                react native
                <Image
                  src={"/react-native.svg"}
                  alt="react native"
                  height={35}
                  width={35}
                />
              </p>

              <p
                className="font-extralight px-2 py-auto bg-white rounded-xl shadow-sm h-[45px]
               inline-flex items-center gap-2 flex-shrink-0"
              >
                typescript
                <Image
                  src={"/typescript.svg"}
                  alt="typescript"
                  className="rounded-sm"
                  height={25}
                  width={25}
                />
              </p>

              <p
                className="font-extralight px-2 py-auto bg-white rounded-xl shadow-sm h-[45px]
               inline-flex items-center gap-2 flex-shrink-0"
              >
                supabase
                <Image
                  src={"/supabase.svg"}
                  alt="supabase"
                  height={25}
                  width={25}
                />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* OTHER WORKS */}
      {/* <OtherWorks /> */}
    </div>
  );
};

export default Projects;
