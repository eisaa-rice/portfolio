"use client";

import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";

import { useState, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export default function Home() {
  const { scrollY } = useScroll();

  const [hamburger, setHamburger] = useState(false);

  return (
    <motion.div
      // w-[320px] xs:w-[450px] sm:w-[600px] md:w-[] lg:w-[750px] xl:w-[1150px] 2xl:w-[1400px]
      className="flex flex-col justify-center items-center mx-auto overflow-hidden gap-64"
    >
      {/* LOADING ANIMATION */}
      <motion.div
        className="h-full w-screen bg-black z-[999]
        fixed top-0 left-0 right-0"
        initial={{ width: "100%" }}
        animate={{ width: "0" }}
        transition={{ ease: "easeIn", duration: 0.55, delay: 2 }}
      />

      <motion.div
        className="h-full w-screen bg-teal-600 z-[666]
        fixed top-0 left-0 right-0"
        initial={{ width: "100%" }}
        animate={{ width: "0" }}
        transition={{ ease: "easeIn", duration: 0.325, delay: 2.25 }}
      />

      <motion.div
        className="h-full w-screen bg-emerald-400 z-[333]
        fixed top-0 left-0 right-0"
        initial={{ width: "100%" }}
        animate={{ width: "0" }}
        transition={{ ease: "easeIn", duration: 0.25, delay: 2.45 }}
      />

      {/* HAMBURGER */}
      <Image
        className="flex md:hidden items-center justify-center
        rounded-3xl flex-shrink-0 absolute top-3 left-3"
        src="/svgs/hamburger.svg"
        alt=""
        height={32}
        width={32}
        onClick={() => setHamburger(!hamburger)}
      />

      <motion.div
        className="absolute w-full top-0 bg-[#f8f8ff] shadow-lg z-50
        flex md:hidden flex-col items-center justify-start 
        pt-12 pb-6 rounded-bl-xl rounded-br-xl"
        initial={{ y: "-100%" }}
        animate={hamburger ? { y: "-12.4%" } : { y: "-100%" }}
        transition={{ ease: "backInOut", duration: 0.5 }}
      >
        <Image
          className="flex-shrink-0
          ml-4 mr-auto mt-4"
          src="/svgs/x.svg"
          alt=""
          height={24}
          width={24}
          onClick={() => setHamburger(!hamburger)}
        />

        <div
          className="w-full h-full flex flex-col items-start justify-start 
        gap-8 text-lg font-medium mt-8 pl-10"
        >
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-40}
            onClick={() => setHamburger(false)}
          >
            <motion.p>About 🧔🏼</motion.p>
          </ScrollLink>

          <ScrollLink
            to="skills"
            smooth={true}
            duration={500}
            offset={-40}
            onClick={() => setHamburger(false)}
          >
            <motion.p>Skills 🛠️</motion.p>
          </ScrollLink>

          <ScrollLink
            to="experience"
            smooth={true}
            duration={500}
            offset={-40}
            onClick={() => setHamburger(false)}
          >
            <motion.p>Experience 💼</motion.p>
          </ScrollLink>

          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            offset={-40}
            onClick={() => setHamburger(false)}
          >
            <motion.p>Projects 💻</motion.p>
          </ScrollLink>

          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-40}
            onClick={() => setHamburger(false)}
          >
            <motion.p>Contact 📞</motion.p>
          </ScrollLink>
        </div>
      </motion.div>

      {/* NAVBAR */}
      <div
        className="h-16 z-[60] absolute top-0 left-1/2 transform -translate-x-1/2 
        hidden md:flex items-center justify-evenly mx-auto gap-12
        text-sm px-6 transition-all duration-[25ms] ease-in-out
        w-[320px] xs:w-[450px] sm:w-[600px] lg:w-[750px] xl:w-[1150px] 2xl:w-[1400px]"
      >
        <ScrollLink to="about" smooth={true} duration={500} offset={-40}>
          <motion.p
            className="py-2"
            initial={{ color: "#a3a3a3", fontWeight: 300 }}
            whileHover={{
              color: "white",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            ABOUT
          </motion.p>
        </ScrollLink>

        <ScrollLink to="skills" smooth={true} duration={500} offset={-40}>
          <motion.p
            className="py-2"
            initial={{ color: "#a3a3a3", fontWeight: 300 }}
            whileHover={{
              color: "white",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            SKILLS
          </motion.p>
        </ScrollLink>

        <ScrollLink to="experience" smooth={true} duration={500} offset={-40}>
          <motion.p
            className="py-2"
            initial={{ color: "#a3a3a3", fontWeight: 300 }}
            whileHover={{
              color: "white",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            EXPERIENCE
          </motion.p>
        </ScrollLink>

        <ScrollLink to="projects" smooth={true} duration={500} offset={-40}>
          <motion.p
            className="py-2"
            initial={{ color: "#a3a3a3", fontWeight: 300 }}
            whileHover={{
              color: "white",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            PROJECTS
          </motion.p>
        </ScrollLink>

        <ScrollLink to="contact" smooth={true} duration={500} offset={-40}>
          <motion.p
            className="py-2"
            initial={{ color: "#a3a3a3", fontWeight: 300 }}
            whileHover={{
              color: "white",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            CONTACT
          </motion.p>
        </ScrollLink>
      </div>

      {/* HEADER */}
      {/* <div className="fixed top-0 mt-5 z-50 flex-shrink-0">
        <motion.p
          initial={{ opacity: 0 }}
          style={{ opacity }}
          className="font-semibold p-3 rounded-xl bg-white shadow-sm"
        >
          {header}
        </motion.p>
      </div> */}

      <Hero />

      <About />

      <Skills />

      <Experience />

      <Projects />

      <Footer />
    </motion.div>
  );
}
