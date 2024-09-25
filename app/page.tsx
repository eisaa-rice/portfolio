"use client";

import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";

import { motion, useTransform, useScroll } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();

  const opacity = useTransform(
    scrollY,
    [950, 1150, 1800, 1950, 2100, 2700, 2750, 2900, 3050],
    [0, 1, 1, 0, 1, 1, 0, 0, 1]
  );
  const text = useTransform(
    scrollY,
    [0, 1950, 2900, 6000],
    ["about 🧔🏼", "about 🧔🏼", "skills 🛠️", "experience 💼"]
  );

  return (
    <motion.div
      className="flex flex-col mx-4 xs:mx-16 sm:mx-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{ ease: "easeIn", duration: 1, delay: 2 }}
    >
      <div className="fixed left-0 right-0 top-0 flex items-center justify-center mx-auto p-5 font-extralight z-50 flex-shrink-0">
        <motion.p
          initial={{ opacity: 0 }}
          style={{ opacity }}
          className="font-semibold p-3 rounded-xl bg-white"
        >
          {text}
        </motion.p>
      </div>

      <Hero />

      <About />

      <Skills />

      <Experience />

      <Projects />

      <Footer />
    </motion.div>
  );
}
