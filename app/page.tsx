"use client";

import Hero from "./components/Hero/Hero";
import About from "./components/About Me/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  return (
    <div className="text-black">
      <motion.div
        className="w-full bg-black absolute top-0 z-30"
        initial={{ height: "120vh" }}
        animate={{ height: 0 }}
        transition={{ duration: 0.55, delay: 1.5, ease: "easeInOut" }}
      />

      <div className="flex flex-col mx-32">
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
