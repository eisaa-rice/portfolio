"use client";

import Hero from "./components/Hero/Hero";
import About from "./components/About Me/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="text-[#150f03]">
      <motion.div
        className="h-screen w-full bg-[#150f03] absolute top-0 z-30"
        initial={{ height: "100vh" }}
        animate={{ height: 0 }}
        transition={{ duration: 0.5, delay: 1.5, ease: "easeInOut" }}
      />

      <div className="flex flex-col">
        <Hero />

        <About />

        {/* <Experience /> */}

        {/* <Projects /> */}

        <Footer />
      </div>
    </div>
  );
}
