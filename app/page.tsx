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

  const [opacityRange, setOpacityRange] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [headerRange, setHeaderRange] = useState([0, 0, 0, 0, 0]);

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;

      if (width >= 320 && width < 500) {
        setOpacityRange([
          800, 900, 2300, 2400, 2500, 3850, 3950, 4050, 5900, 6000, 6100,
        ]);
        setHeaderRange([0, 2400, 3950, 6000, 9999]);
      } else if (width >= 500 && width < 640) {
        setOpacityRange([
          850, 950, 2200, 2300, 2400, 3300, 3400, 3500, 4800, 4900, 5000,
        ]);
        setHeaderRange([0, 2300, 3400, 4900, 9999]);
      } else if (width >= 640 && width < 1024) {
        setOpacityRange([
          900, 1000, 2100, 2200, 2300, 3350, 3450, 3550, 4700, 4800, 4900,
        ]);
        setHeaderRange([0, 2200, 3450, 4800, 9999]);
      } else if (width >= 1024 && width < 1280) {
        setOpacityRange([
          800, 900, 2000, 2100, 2200, 3050, 3150, 3250, 4250, 4350, 4450,
        ]);
        setHeaderRange([0, 2100, 3150, 4350, 9999]);
      } else if (width >= 1280 && width < 1536) {
        setOpacityRange([
          700, 800, 1600, 1700, 1800, 2550, 2650, 2750, 3600, 3700, 3800,
        ]);
        setHeaderRange([0, 1700, 2650, 3700, 9999]);
      } else {
        // width >= 1536
        setOpacityRange([
          900, 1000, 1600, 1700, 1800, 2650, 2750, 2850, 3600, 3700, 3800,
        ]);
        setHeaderRange([0, 1700, 2750, 3700, 9999]);
      }
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const opacity = useTransform(
    scrollY,
    opacityRange,
    [0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1]
  );

  const header = useTransform(scrollY, headerRange, [
    "about 🧔🏼",
    "about 🧔🏼",
    "skills 🛠️",
    "experience 💼",
    "projects 💻",
  ]);

  return (
    <motion.div
      className="flex flex-col justify-center items-center mx-auto
      w-[320px] xs:w-[450px] sm:w-[600px] lg:w-[750px] xl:w-[1150px] 2xl:w-[1400px]"
    >
      <div className="fixed top-0 mt-5 z-50 flex-shrink-0">
        <motion.p
          initial={{ opacity: 0 }}
          style={{ opacity }}
          className="font-semibold p-3 rounded-xl bg-white shadow-sm"
        >
          {header}
        </motion.p>
      </div>

      {/* LOADING ANIMATION */}
      <motion.div
        className="h-full w-screen bg-black z-[999]
        fixed top-0 left-0 right-0"
        initial={{ width: "100%" }}
        animate={{ width: "0" }}
        transition={{ ease: "easeIn", duration: 0.55, delay: 2 }}
      />

      <motion.div
        className="h-full w-screen bg-teal-600 z-[666]
        fixed top-0 left-0 right-0"
        initial={{ width: "100%" }}
        animate={{ width: "0" }}
        transition={{ ease: "easeIn", duration: 0.325, delay: 2.25 }}
      />

      <motion.div
        className="h-full w-screen bg-emerald-400 z-[333]
        fixed top-0 left-0 right-0"
        initial={{ width: "100%" }}
        animate={{ width: "0" }}
        transition={{ ease: "easeIn", duration: 0.25, delay: 2.45 }}
      />

      <Hero />

      <About />

      {/* <Skills /> */}

      <Experience />

      <Projects />

      <Footer />
    </motion.div>
  );
}
