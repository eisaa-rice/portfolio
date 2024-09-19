"use client";

import Hero from "./components/Hero/Hero";
import Projects from "./components/About Me/Projects";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="flex flex-col mx-4 xs:mx-16 sm:mx-32 min-h-[3000px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{ ease: "easeIn", duration: 1, delay: 2 }}
    >
      <Hero />

      <Projects />

      {/* <Experience />

    <Skills />

    <Footer /> */}
    </motion.div>
  );
}
