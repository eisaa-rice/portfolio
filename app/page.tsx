"use client";

import Hero from "./components/Hero/Hero";
import About from "./components/About Me/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="text-black">
      <motion.div
        className="w-full bg-black absolute top-0 z-30"
        initial={{ height: "120vh" }}
        animate={{ height: 0 }}
        transition={{ duration: 0.55, delay: 1.5, ease: "easeInOut" }}
      />

      <div className="flex flex-col">
        <div className="hero w-full h-[30px] py-6 fixed top-0 left-0 right-0 flex items-center justify-evenly">
          <div className="">
            <p className="times text-lg font-thin text-[#fffffffa] inline-block">
              home
            </p>
            <div className="underline" />
          </div>

          <div className="">
            <p className="times text-lg font-thin text-[#fffffffa] inline-block">
              about
            </p>
            <div className="underline" />
          </div>

          <div className="">
            <p className="times text-lg font-thin text-[#fffffffa] inline-block">
              career
            </p>
            <div className="underline" />
          </div>

          <div className="">
            <p className="times text-lg font-thin text-[#fffffffa] inline-block">
              work
            </p>
            <div className="underline" />
          </div>
        </div>

        <Hero />

        <About />

        {/* <Experience />

        <Projects />

        <Skills />

        <Footer /> */}
      </div>
    </div>
  );
}
