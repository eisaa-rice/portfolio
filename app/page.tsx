"use client";

import Hero from "./components/Hero/Hero";
import About from "./components/About Me/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const useScrollPos = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollY;
};

export default function Home() {
  const yPos = useScrollPos();

  const { scrollY } = useScroll();

  const background = useTransform(
    scrollY,
    [550, 850],
    ["rgba(0,0,0,0)", "rgba(0,0,0,1)"]
  );

  return (
    <div className="text-black">
      <motion.div
        className="w-full bg-black absolute top-0 z-30"
        initial={{ height: "120vh" }}
        animate={{ height: 0 }}
        transition={{ duration: 0.55, delay: 1.5, ease: "easeInOut" }}
      />

      <div className="flex flex-col">
        <motion.div
          className="w-5/6 h-[30px] mx-auto pt-5 pb-7 fixed top-0 left-0 right-0 flex items-center justify-evenly rounded-b-lg"
          style={{ background }}
        >
          <div className="">
            <p className="times text-lg font-thin text-[#fffffffa] inline-block">
              home
            </p>

            <motion.div
              className="underline"
              initial={{ width: 0 }}
              animate={{ width: yPos >= 0 && yPos < 500 ? "100%" : 0 }}
              transition={{ duration: 0.5, ease: "backInOut" }}
            />
          </div>

          <div className="">
            <p className="times text-lg font-thin text-[#fffffffa] inline-block">
              about
            </p>

            <motion.div
              className="underline"
              initial={{ width: 0 }}
              animate={{ width: yPos >= 500 && yPos < 1000 ? "100%" : 0 }}
              transition={{ duration: 0.75, ease: "backInOut" }}
            />
          </div>

          <div className="">
            <p className="times text-lg font-thin text-[#fffffffa] inline-block">
              experience
            </p>

            <motion.div
              className="underline"
              initial={{ width: 0 }}
              animate={{
                width: yPos >= 1000 && yPos < 1500 ? "100%" : 0,
              }}
              transition={{ duration: 0.75, ease: "backInOut" }}
            />
          </div>

          <div className="">
            <p className="times text-lg font-thin text-[#fffffffa] inline-block">
              projects
            </p>

            <motion.div
              className="underline"
              initial={{ width: 0 }}
              animate={{
                width: yPos >= 1500 && yPos < 2000 ? "100%" : 0,
              }}
              transition={{ duration: 0.75, ease: "backInOut" }}
            />
          </div>
        </motion.div>

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
