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

      if (width <= 320) {
        setOpacityRange([
          900, 1000, 2600, 2700, 2800, 4150, 4250, 4350, 6400, 6500, 6600,
        ]);
        setHeaderRange([0, 2700, 4250, 6500, 9999]);
      } else if (width > 320 && width <= 344) {
        setOpacityRange([
          800, 900, 2300, 2400, 2500, 3950, 4050, 4150, 5900, 6000, 6100,
        ]);
        setHeaderRange([0, 2400, 4050, 6000, 9999]);
      } else if (width > 344 && width <= 360) {
        setOpacityRange([
          700, 800, 2200, 2300, 2400, 3800, 3900, 4000, 5600, 5700, 5800,
        ]);
        setHeaderRange([0, 2300, 3900, 5700, 9999]);
      } else if (width > 360 && width <= 380) {
        setOpacityRange([
          700, 800, 2050, 2150, 2250, 3700, 3800, 3900, 5400, 5500, 5600,
        ]);
        setHeaderRange([0, 2150, 3800, 5500, 9999]);
      } else if (width > 380 && width <= 412) {
        setOpacityRange([
          750, 850, 2300, 2400, 2500, 3400, 3500, 3600, 5100, 5200, 5300,
        ]);
        setHeaderRange([0, 2400, 3500, 5200, 9999]);
      } else if (width > 412 && width <= 540) {
        setOpacityRange([
          750, 850, 2100, 2200, 2300, 3200, 3300, 3400, 4550, 4650, 4750,
        ]);
        setHeaderRange([0, 2200, 3300, 4650, 9999]);
      } else if (width > 540 && width <= 768) {
        setOpacityRange([
          900, 1000, 2250, 2350, 2450, 3600, 3700, 3800, 5150, 5250, 5350,
        ]);
        setHeaderRange([0, 2350, 3700, 5250, 9999]);
      } else if (width > 768 && width <= 820) {
        setOpacityRange([
          1000, 1100, 2450, 2550, 2650, 3750, 3850, 3950, 5200, 5300, 5400,
        ]);
        setHeaderRange([0, 2550, 3850, 5300, 9999]);
      } else if (width > 820 && width <= 912) {
        setOpacityRange([
          1050, 1250, 2500, 2600, 2700, 3850, 3950, 4050, 5100, 5200, 5300,
        ]);
        setHeaderRange([0, 2600, 3950, 5200, 9999]);
      } else if (width > 912 && width <= 1024) {
        setOpacityRange([
          1050, 1250, 2350, 2450, 2550, 3600, 3700, 3800, 4800, 4900, 5000,
        ]);
        setHeaderRange([0, 2450, 3700, 4900, 9999]);
      } else {
        // desktop sizes > 1024
        setOpacityRange([
          900, 1000, 1600, 1700, 1800, 2700, 2800, 2900, 3800, 3900, 4000,
        ]);
        setHeaderRange([0, 1700, 2800, 3900, 9999]);
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
          {header}
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
