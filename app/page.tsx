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
    <motion.div
      className="flex flex-col mx-4 xs:mx-16 sm:mx-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{ ease: "easeIn", duration: 1, delay: 2 }}
    >
      <Hero />

      <About />

      {/* <Experience />

    <Projects />

    <Skills />

    <Footer /> */}
    </motion.div>
  );
}
