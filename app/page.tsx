"use client";

import Hero from "./components/Hero/Hero";
import About from "./components/About Me/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-[#181f1c] text-[#e5c687]">
      <motion.div
        className="h-screen w-full bg-[#e5c687] absolute top-0 z-30"
        initial={{ height: "100vh" }}
        animate={{ height: 0 }}
        transition={{ duration: 0.5, delay: 1.5, ease: "easeInOut" }}
      />

      <div className="max-w-4xl mx-auto">
        <Hero />

        <About />

        <Experience />

        <Projects />
      </div>
    </div>
  );
}
