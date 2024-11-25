"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import { Skill } from "../Skills/Skills";

import "./Projects.css";

const OtherProject = ({
  name,
  desc,
  link,
  skills,
}: {
  name: string;
  desc: string;
  link: string;
  skills: { name: string; src: string; style?: React.CSSProperties }[];
}) => {
  return (
    <motion.a
      className="lg:h-[480px] w-[300px] xs:w-[450px] lg:w-[360px]
      flex flex-col flex-shrink-0 items-start justify-start 
      bg-[#fdfdff] shadow-md rounded-lg p-10 relative"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 1 }}
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      variants={{
        hover: { scale: 1.05, cursor: "pointer" },
      }}
    >
      <motion.div
        className="h-10 w-10 rounded-full flex-shrink-0 absolute top-2 right-2"
        initial={{ scale: 1, opacity: 0.5 }}
        variants={{
          hover: {
            scale: 1.2,
            opacity: 1,
          },
        }}
      >
        <Image
          className="-rotate-12"
          src={"/svgs/arrow-circle-right.svg"}
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </motion.div>

      <p className="text-2xl font-semibold pr-6">{name}</p>

      <p className="font-light text-xl text-gray-700 my-6">{desc}</p>

      <div
        className="flex flex-wrap gap-2 mt-auto mb-0
        items-center justify-center xs:justify-start"
      >
        {skills.map((skill, index) => (
          <Skill
            key={index}
            name={skill.name}
            src={skill.src}
            style={skill.style}
          />
        ))}
      </div>
    </motion.a>
  );
};

const Projects = () => {
  const { scrollY } = useScroll();

  const [scrollRange1, setScrollRange1] = useState([0, 0]);
  const [scrollRange2, setScrollRange2] = useState([0, 0]);
  const [scrollRange3, setScrollRange3] = useState([0, 0]);

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;

      // - 1600
      if (width >= 320 && width < 500) {
        setScrollRange1([6000, 7600]);

        setScrollRange2([7850, 9450]);

        setScrollRange3([9850, 11450]);
      } else if (width >= 500 && width < 640) {
      } else if (width >= 640 && width < 1024) {
      } else if (width >= 1024 && width < 1280) {
      } else if (width >= 1280 && width < 1536) {
        setScrollRange1([3250, 4950]);

        setScrollRange2([4250, 5850]);

        setScrollRange3([5400, 7000]);
      } else {
        // width >= 1536
        setScrollRange1([3100, 4700]);

        setScrollRange2([4100, 5700]);

        setScrollRange3([5200, 6800]);
      }
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const y1 = useTransform(scrollY, scrollRange1, ["50%", "-50%"]);
  const rotate1 = useTransform(scrollY, scrollRange1, [2, -2]);

  const y2 = useTransform(scrollY, scrollRange2, ["50%", "-50%"]);
  const rotate2 = useTransform(scrollY, scrollRange2, [-2, 2]);

  const y3 = useTransform(scrollY, scrollRange3, ["50%", "-50%"]);
  const rotate3 = useTransform(scrollY, scrollRange3, [2, -2]);

  return (
    <div
      // pt-96 pb-48
      className="flex flex-col items-center justify-start gap-y-80 overflow-visible px-2
    w-[320px] xs:w-[450px] sm:w-[600px] lg:w-[750px] xl:w-[1150px] 2xl:w-[1400px]"
    >
      <p className="text-3xl text-center -mb-56">
        Some things I&apos;ve worked on.
      </p>

      {/* SELECTED PROJECTS */}
      <div className="grid grid-rows-[auto_auto] grid-cols-1 xl:grid-rows-1 xl:grid-cols-2 xl:gap-x-24">
        <motion.div
          className="row-start-1 row-end-2 col-start-1 col-end-2 xl:col-start-2 xl:col-end-3
          mx-auto -ml-24 xs:-ml-32 sm:-ml-24 mb-20 xs:mb-28 sm:mb-10 xl:my-auto
          w-[1000px] xs:w-[1000px] sm:w-[1100px] xl:w-[975px]"
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
              <p className="font-semibold text-3xl">🤖 Code Conductor</p>

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
                src={"/svgs/arrow-circle-right.svg"}
                alt=""
              />
            </motion.div>
          </motion.a>

          <div className="flex flex-col mt-10 mb-0 gap-y-8 text-gray-700">
            <p className="font-light text-2xl">
              For a group project, some classmates and i made an{" "}
              <span className="font-semibold">online platform</span> that lets
              people brainstorm and visualize custom algorithms easily.
            </p>

            <p className="font-light text-2xl">
              We used <span className="font-semibold">git</span> and{" "}
              <span className="font-semibold">github</span> to work
              simultaneously and and our leader assigned issues to each of us so
              that we could progress incrementally.
            </p>

            <p className="font-light text-2xl">
              Blocks consisting of code type and description are properly
              indented and are drag-and-drop-able to make designing the
              algorithm easy and simple.
            </p>

            <div className="flex flex-wrap justify-center xl:justify-start gap-4 mt-4 mx-auto xl:mx-0">
              <Skill name="React.js" src="/svgs/react.svg" />

              <Skill name="Material UI" src="/svgs/mui.svg" />

              <Skill
                name="TypeScript"
                src="/svgs/typescript.svg"
                style={{ borderRadius: 2.5 }}
              />
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
                👩 International Women&apos;s Day Summit
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
                src={"/svgs/arrow-circle-right.svg"}
                alt=""
              />
            </motion.div>
          </motion.a>

          <div className="flex flex-col mt-10 mb-0 gap-y-8 text-gray-700">
            <p className="font-light text-2xl">
              For this conference, students at <span>GDG</span> made a website
              using <span className="font-semibold">react</span>,{" "}
              <span className="font-semibold">git and github</span>, and{" "}
              <span className="font-semibold">tailwind css</span> to bundle
              registration and information for over 200 conference attendees.
            </p>

            <p className="font-light text-2xl">
              <span className="font-semibold">Responsive design</span> was
              applied to make sure that a smooth experience was present across
              various devices and screen sizes.
            </p>

            <p className="font-light text-2xl">
              To follow best coding practices,{" "}
              <span className="font-semibold">reusable components</span> were
              designed and give us an easier time maintening consistency across
              the application.
            </p>

            <div className="flex flex-wrap justify-center xl:justify-start gap-4 mt-4 mx-auto xl:mx-0 text-gray-500">
              <Skill name="React.js" src="/svgs/react.svg" />

              <Skill name="Tailwind CSS" src="/svgs/tailwind.svg" />

              <Skill
                name="JavaScript"
                src="/svgs/javascript.svg"
                style={{ borderRadius: 2.5 }}
              />
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
                🧑‍💻 Hack{" "}
                <span className="inline-flex flex-shrink-0">Dearborn 3</span>
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
                src={"/svgs/arrow-circle-right.svg"}
                alt=""
              />
            </motion.div>
          </motion.a>

          <div className="flex flex-col mt-10 mb-0 gap-y-8 text-gray-700">
            <p className="font-light text-2xl">
              University club made a{" "}
              <span className="font-semibold">fullstack app</span> and a{" "}
              <span className="font-semibold">website</span> for our
              school&apos;s annual hackathon, which were used by over 250
              attendees for registration, information display, and check-in.
            </p>

            <p className="font-light text-2xl">
              Wireframe mockups were translated into{" "}
              <span className="font-semibold">responsive</span>,{" "}
              <span className="font-semibold">user-friendly interfaces</span>{" "}
              with appealing and engaging designs.
            </p>

            <p className="font-light text-2xl">
              <span className="font-semibold">Supabase</span> was used for the
              backend to take advantage of its database tables, edge functions,
              and simple authentication features.
            </p>

            <div className="flex flex-wrap justify-center xl:justify-start gap-3 xl:gap-4 mt-4 mx-auto xl:mx-0 text-gray-500">
              <Skill
                name="React Native"
                src="/svgs/react-native.svg"
                style={{ height: 35 }}
              />

              <Skill name="Supabase" src="/svgs/supabase.svg" />

              <Skill
                name="TypeScript"
                src="/svgs/typescript.svg"
                style={{ borderRadius: 2.5 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* OTHER WORKS */}
      <p className="text-3xl text-center -mt-28">And some others.</p>

      <div
        className="flex flex-col items-center justify-center -mt-56
        w-full lg:justify-evenly
        gap-y-20 lg:flex-row lg:flex-wrap"
      >
        <div className="mx-auto">
          <OtherProject
            name="🖥️ CPU Simulator"
            desc="Simulate how a CPU would schedule jobs as it runs! Consists of a file generator full of ordered, organized data and a simulator that uses that data file."
            link="https://github.com/eisaa-rice/processor-simulator"
            skills={[
              { name: "C++", src: "/svgs/c++.svg" },
              { name: "Visual Studio", src: "/svgs/visual-studio.svg" },
            ]}
          />
        </div>

        <div className="mx-auto">
          <OtherProject
            name="🟰 Boolean & Algebraic Calculator"
            desc="Assembly program capable of performing various algebraic and logical operations on hexadecimal integers."
            link="https://github.com/eisaa-rice/boolean-algebraic-calculator"
            skills={[
              {
                name: "Assembly",
                src: "/svgs/asm.svg",
                style: { width: 40, marginRight: -5 },
              },
              { name: "Visual Studio", src: "/svgs/visual-studio.svg" },
            ]}
          />
        </div>

        <div className="mx-auto">
          <OtherProject
            name="🔗 Portfolio"
            desc="This website right here! It's a responsive, user-friendly, and (hopefully) engaging portfolio that showcases my skills and projects."
            link="https://jesusorozco.dev/"
            skills={[
              { name: "Next.js", src: "/svgs/nextjs.svg" },
              { name: "Tailwind CSS", src: "/svgs/tailwind.svg" },
              { name: "Framer Motion", src: "/svgs/framer-motion.svg" },
            ]}
          />
        </div>

        {/* <div className="mx-auto">
          <OtherProject
            name="The Home Depot Relational Database"
            desc="..."
            link=""
            skills={[
              { name: "MySQL", src: "/svgs/mysql.svg" },
              { name: "SQL", src: "/svgs/sql.svg" },
              { name: "AWS", src: "/svgs/aws.svg", style: { marginTop: 5 } },
            ]}
          />
        </div> */}

        {/* <div className="mx-auto">
          <OtherProject
            name="Natural Language Processing"
            desc="..."
            link=""
            skills={[
              {
                name: "Python",
                src: "/svgs/python.svg",
                style: { marginTop: 7.5 },
              },
            ]}
          />
        </div> */}
      </div>

      <p className="text-2xl -mt-56 font-light text-slate-500 text-center">
        And obviously, the source for these and more are all on my{" "}
        <motion.a
          href="https://github.com/eisaa-rice"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ fontWeight: 600 }}
          whileHover={{
            cursor: "pointer",
            fontWeight: 900,
          }}
        >
          GitHub
        </motion.a>
        .
      </p>
    </div>
  );
};

export default Projects;
