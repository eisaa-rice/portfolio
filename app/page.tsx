"use client";

import Hero from "./components/Hero/Hero";
import About from "./components/About Me/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 2.5, ease: "easeIn" }}
    >
      <div className="home absolute top-0 left-0 right-0 -z-50"></div>

      <div className="max-w-6xl mx-auto">
        <Hero />

        <About />

        {/* <Skills />

      <Experience />

      <Projects /> */}
      </div>
    </motion.div>
  );
}

/*
  initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 5, ease: "easeIn" }}
*/
