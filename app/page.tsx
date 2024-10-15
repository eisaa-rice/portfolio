"use client";

import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";

import { useState, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();

  const [opacityRange, setOpacityRange] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [headerRange, setHeaderRange] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;

      if (width >= 320 && width < 500) {
        setOpacityRange([1000, 1100, 3000, 3100, 3200, 5200, 5300, 5400]);
        setHeaderRange([0, 3100, 5300, 9999]);
      } else if (width >= 500 && width < 640) {
        setOpacityRange([900, 1000, 2600, 2700, 2800, 4250, 4350, 4450]);
        setHeaderRange([0, 2700, 4350, 9999]);
      } else if (width >= 640 && width < 1024) {
        setOpacityRange([950, 1050, 2450, 2550, 2650, 3950, 4050, 4150]);
        setHeaderRange([0, 2550, 4050, 9999]);
      } else if (width >= 1024 && width < 1280) {
        setOpacityRange([1000, 1100, 2450, 2550, 2650, 3800, 3900, 4000]);
        setHeaderRange([0, 2550, 3900, 9999]);
      } else if (width >= 1280 && width < 1536) {
        setOpacityRange([900, 1000, 1700, 1800, 1900, 3000, 3100, 3200]);
        setHeaderRange([0, 1800, 3100, 9999]);
      } else {
        // width >= 1536
        setOpacityRange([900, 1000, 1850, 1950, 2050, 2900, 3000, 3100]);
        setHeaderRange([0, 1950, 3000, 9999]);
      }
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const opacity = useTransform(scrollY, opacityRange, [0, 1, 1, 0, 1, 1, 0, 1]);

  const header = useTransform(scrollY, headerRange, [
    "about 🧔🏼",
    "about 🧔🏼",
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

      <Experience />

      <Projects />

      <Footer />
    </motion.div>
  );
}
