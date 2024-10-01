"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import "./Projects.css";

const Projects = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start gap-y-48 xl:gap-y-[500px]">
      {/* SELECTED PROJECTS */}
      <div className="grid grid-rows-2 grid-cols-1 xl:grid-rows-1 xl:grid-cols-2 xl:gap-x-24">
        <motion.div className="row-start-1 row-end-2 col-start-1 col-end-2 xl:col-start-2 xl:col-end-3 bg-white shadow-sm w-full max-w-96 h-96 md:max-w-[500px] md:h-[500px] m-auto rounded-2xl mb-44 xl:my-auto" />

        <div className="row-start-2 row-end-3 xl:row-start-1 xl:row-end-2 col-start-1 col-end-2 xl:my-auto">
          <motion.a
            className="inline-flex items-center"
            href="https://www.codeconductor.org/"
            target="_blank"
            whileHover="hover"
          >
            <div className="flex flex-col ">
              <p className="font-semibold text-3xl">🤖 code conductor</p>

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

          <div className="flex flex-col mt-10 mb-0 gap-y-8">
            <p className="font-light opacity-75 text-2xl">
              for a group project, some classmates and i made an{" "}
              <span className="font-semibold">online platform</span> that lets
              people brainstorm and visualize custom algorithms easily
            </p>

            <p className="font-light opacity-75 text-2xl">
              we used <span className="font-semibold">git</span> and{" "}
              <span className="font-semibold">github</span> to work
              simultaneously and and our leader assigned issues to each of us so
              that we could progress incrementally
            </p>

            <p className="font-light opacity-75 text-2xl">
              blocks consisting of code type and description are properly
              indented and are drag-and-drop-able to make designing the
              algorithm easy and simple
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <p className="font-extralight p-2 bg-white rounded-xl shadow-sm">
                react.js
              </p>

              <p className="font-extralight p-2 bg-white rounded-xl shadow-sm">
                typescript
              </p>

              <p className="font-extralight p-2 bg-white rounded-xl shadow-sm">
                material ui
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-rows-2 grid-cols-1 xl:grid-rows-1 xl:grid-cols-2 xl:gap-x-24">
        <motion.div className="row-start-1 row-end-2 col-start-1 col-end-2 bg-white shadow-sm w-full max-w-96 h-96 md:max-w-[500px] md:h-[500px] m-auto rounded-2xl mb-44 xl:my-auto" />

        <div className="row-start-2 row-end-3 xl:row-start-1 xl:row-end-2 col-start-1 col-end-2 xl:col-start-2 xl:col-end-3 xl:my-auto">
          <motion.a
            className="inline-flex items-center"
            href="https://www.iwdsummit.com/"
            target="_blank"
            whileHover="hover"
          >
            <div className="flex flex-col">
              <p className="font-semibold text-3xl">
                👩 international women&apos;s day summit
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

          <div className="flex flex-col mt-10 mb-0 gap-y-8">
            <p className="font-light opacity-75 text-2xl">
              for this conference, students at <span>GDSC</span> made a website
              using <span className="font-semibold">react</span>,{" "}
              <span className="font-semibold">git and github</span>, and{" "}
              <span className="font-semibold">tailwind css</span> to bundle
              registration and information for over 200 conference attendees
            </p>

            <p className="font-light opacity-75 text-2xl">
              <span className="font-semibold">responsive design</span> was
              applied to make sure that a smooth experience was present across
              various devices and screen sizes
            </p>

            <p className="font-light opacity-75 text-2xl">
              to follow best coding practices,{" "}
              <span className="font-semibold">reusable components</span> were
              designed and give us an easier time maintening consistency across
              the application
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <p className="font-extralight p-2 bg-white rounded-xl shadow-sm">
                react.js
              </p>

              <p className="font-extralight p-2 bg-white rounded-xl shadow-sm">
                javascript
              </p>

              <p className="font-extralight p-2 bg-white rounded-xl shadow-sm">
                tailwind css
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-rows-2 grid-cols-1 xl:grid-rows-1 xl:grid-cols-2 xl:gap-x-24 xl:my-auto">
        <motion.div className="row-start-1 row-end-2 col-start-1 col-end-2 xl:col-start-2 xl:col-end-3 bg-white shadow-sm w-full max-w-96 h-96 md:max-w-[500px] md:h-[500px] m-auto rounded-2xl mb-44 xl:my-auto" />

        <div className="row-start-2 row-end-3 xl:row-start-1 xl:row-end-2 col-start-1 col-end-2">
          <motion.a
            className="inline-flex items-center"
            href="https://www.hackdearborn.org/"
            target="_blank"
            whileHover="hover"
          >
            <div className="flex flex-col ">
              <p className="font-semibold text-3xl">🧑‍💻 hack dearborn 3</p>

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

          <div className="flex flex-col mt-10 mb-0 gap-y-8">
            <p className="font-light opacity-75 text-2xl">
              university club made an <span className="font-semibold">app</span>{" "}
              and a <span className="font-semibold">website</span> for our
              school&apos;s annual hackathon, which were used by over 250
              attendees for registration, information display, and check-in
            </p>

            <p className="font-light opacity-75 text-2xl">
              wireframe mockups were translated into{" "}
              <span className="font-semibold">responsive</span>,{" "}
              <span className="font-semibold">user-friendly interfaces</span>{" "}
              with appealing and engaging designs
            </p>

            <p className="font-light opacity-75 text-2xl">
              <span className="font-semibold">supabase</span> was used for the
              backend to take advantage of its database tables, edge functions,
              and simple authentication features
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <p className="font-extralight p-2 bg-white rounded-xl shadow-sm">
                react native
              </p>

              <p className="font-extralight p-2 bg-white rounded-xl shadow-sm">
                typescript
              </p>

              <p className="font-extralight p-2 bg-white rounded-xl shadow-sm">
                supabase
              </p>
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
