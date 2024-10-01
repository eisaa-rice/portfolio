"use client";

import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";

import { useState, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isPC, setIsPC] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;

      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width < 1024);
      setIsPC(width >= 1920);
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const rangeOne = isMobile
    ? [550, 650, 2000, 2100, 2200, 3650, 3750, 3850, 5600, 5700, 5800]
    : isTablet
    ? [950, 1050, 2350, 2450, 2550, 3550, 3650, 3750, 5000, 5100, 5200]
    : [900, 1000, 1600, 1700, 1800, 2800, 2900, 3000, 3800, 3900, 4000];
  const opacity = useTransform(
    scrollY,
    rangeOne,
    [0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1]
  );

  const rangeTwo = isMobile
    ? [0, 2100, 3750, 5700, 9999]
    : isTablet
    ? [0, 2450, 3650, 5100, 9999]
    : [0, 1700, 2900, 3900, 9999];
  const text = useTransform(scrollY, rangeTwo, [
    "about 🧔🏼",
    "about 🧔🏼",
    "skills 🛠️",
    "experience 💼",
    "projects 💻",
  ]);

  return (
    <motion.div
      className="flex flex-col mx-4 xs:mx-16 sm:mx-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{ ease: "easeIn", duration: 1, delay: 2 }}
    >
      <div className="fixed left-1/2 transform -translate-x-1/2 mt-5 z-50 flex-shrink-0">
        <motion.p
          initial={{ opacity: 0 }}
          style={{ opacity }}
          className="font-semibold p-3 rounded-xl bg-white shadow-sm"
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
