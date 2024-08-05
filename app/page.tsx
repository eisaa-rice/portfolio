"use client";

import Hero from "./components/Hero/Hero";
import About from "./components/About Me/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      // WHY DOES IT KEEP MAKING A SCROLL
      className="overflow-x-hidden mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 5, ease: "easeIn" }}
    >
      <Hero />

      <About />

      {/* <Skills />

      <Experience />

      <Projects /> */}
    </motion.div>
  );
}
