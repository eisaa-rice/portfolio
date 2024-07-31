"use client";

import Hero from "./components/Hero/Hero";
import About from "./components/About Me/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";

import { motion } from "framer-motion";

export default function Home() {
  return (
    // WHY DOES IT KEEP MAKING A SCROLL
    <div className="overflow-x-hidden mx-auto max-w-[1000px]">
      <motion.div
        className="bg-white h-[500vh] w-full z-50 absolute top-0 left-0 right-0"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0, display: "none" }}
        transition={{ duration: 2, ease: "easeIn" }}
      />

      <Hero />

      <About />

      <Skills />

      <Experience />

      <Projects />
    </div>
  );
}
