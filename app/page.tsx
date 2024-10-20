"use client";

import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();

  const [opacityRange, setOpacityRange] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [headerRange, setHeaderRange] = useState([0, 0, 0, 0, 0]);

  const [aboutScroll, setAboutScroll] = useState(0);
  const [experienceScroll, setExperienceScroll] = useState(0);
  const [projectsScroll, setProjectsScroll] = useState(0);
  const [contactScroll, setContactScroll] = useState(0);

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;

      if (width >= 320 && width < 500) {
        setOpacityRange([
          1200, 1300, 3150, 3250, 3350, 5200, 5300, 5400, 11300, 11400, 11500,
        ]);
        setHeaderRange([0, 3250, 5300, 11400, 99999]);

        setAboutScroll(1.4);
        setExperienceScroll(3.44);
        setProjectsScroll(5.54);
        setContactScroll(11.6);
      } else if (width >= 500 && width < 640) {
        setOpacityRange([
          900, 1000, 2600, 2700, 2800, 4300, 4400, 4500, 9800, 9900, 10000,
        ]);
        setHeaderRange([0, 2700, 4400, 9900, 99999]);

        setAboutScroll(1.26);
        setExperienceScroll(3);
        setProjectsScroll(4.66);
        setContactScroll(10.09);
      } else if (width >= 640 && width < 1024) {
        setOpacityRange([
          1050, 1150, 2450, 2550, 2650, 3950, 4050, 4150, 9050, 9150, 9250,
        ]);
        setHeaderRange([0, 2550, 4050, 9150, 99999]);

        setAboutScroll(1.23);
        setExperienceScroll(2.8);
        setProjectsScroll(4.24);
        setContactScroll(9.49);
      } else if (width >= 1024 && width < 1280) {
        setOpacityRange([
          1050, 1150, 2450, 2550, 2650, 3850, 3950, 4050, 8800, 8900, 9000,
        ]);
        setHeaderRange([0, 2550, 3950, 8900, 99999]);

        setAboutScroll(1.24);
        setExperienceScroll(2.72);
        setProjectsScroll(4.08);
        setContactScroll(9.49);
      } else if (width >= 1280 && width < 1536) {
        setOpacityRange([
          800, 900, 1750, 1850, 1950, 2900, 3000, 3100, 6100, 6200, 6300,
        ]);
        setHeaderRange([0, 1850, 3000, 6200, 9999]);

        setAboutScroll(0.98);
        setExperienceScroll(1.97);
        setProjectsScroll(3.16);
        setContactScroll(6.5);
      } else {
        // width >= 1536
        setOpacityRange([
          800, 900, 1650, 1750, 1850, 2750, 2850, 2950, 5900, 6000, 6100,
        ]);
        setHeaderRange([0, 1750, 2850, 6000, 9999]);

        setAboutScroll(0.93);
        setExperienceScroll(1.9);
        setProjectsScroll(2.96);
        setContactScroll(8);
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
    "experience 💼",
    "projects 💻",
    "contact 📞",
  ]);

  const handleScroll = (x: number) => {
    if (x === 1) {
      window.scrollTo({
        top: 1000 * aboutScroll,
        behavior: "smooth",
      });
    } else if (x === 2) {
      window.scrollTo({
        top: 1000 * experienceScroll,
        behavior: "smooth",
      });
    } else if (x === 3) {
      window.scrollTo({
        top: 1000 * projectsScroll,
        behavior: "smooth",
      });
    }
    // x === 4
    else {
      window.scrollTo({
        top: 1000 * contactScroll,
        behavior: "smooth",
      });
    }
  };

  const [hamburger, setHamburger] = useState(false);

  return (
    <motion.div
      // w-[320px] xs:w-[450px] sm:w-[600px] lg:w-[750px] xl:w-[1150px] 2xl:w-[1400px]
      className="flex flex-col justify-center items-center mx-auto gap-96 overflow-hidden"
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

      {/* HEADER */}
      <div className="flex flex-col items-center justify-center">
        <div className="h-24 w-screen">
          {/* HAMBURGER */}
          <motion.div className="flex xl:hidden items-center justify-end">
            <motion.div
              className="absolute top-3 right-1
            h-[50px] w-[50px] rounded-3xl z-50"
              whileHover={{ cursor: "pointer" }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setHamburger(!hamburger);
              }}
            >
              <Image
                className="p-2 mt-[2px] -ml-[1px]"
                src="/burger.svg"
                alt=""
                layout="fill"
                objectFit="contain"
              />
            </motion.div>

            <motion.div
              className="glass rounded-bl-[4rem]
              w-[400px] pt-24 pb-8 pr-[160px] flex-shrink-0
              flex flex-col items-center justify-between z-40"
              initial={{ x: 500 }}
              animate={
                hamburger
                  ? {
                      x: "50%",
                      transition: { duration: 0.75, ease: "backInOut" },
                    }
                  : {
                      x: 500,
                      transition: { duration: 0.75, ease: "backInOut" },
                    }
              }
            >
              <div
                className="flex flex-col items-end justify-center gap-8 flex-shrink-0
               text-2xl text-black font-medium"
              >
                <motion.p
                  onClick={() => {
                    handleScroll(1);
                    setHamburger(!hamburger);
                  }}
                >
                  about
                </motion.p>
                <motion.p
                  onClick={() => {
                    handleScroll(2);
                    setHamburger(!hamburger);
                  }}
                >
                  experience
                </motion.p>
                <motion.p
                  onClick={() => {
                    handleScroll(3);
                    setHamburger(!hamburger);
                  }}
                >
                  projects
                </motion.p>
                <motion.p
                  onClick={() => {
                    handleScroll(4);
                    setHamburger(!hamburger);
                  }}
                >
                  contact
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

          {/* FULL WIDTH */}
          <motion.div
            className="hull w-full text-gray-400 mt-6
        hidden xl:flex items-center justify-center gap-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 0.5 }}
          >
            <motion.p
              className="inline-flex items-center gap-2 flex-shrink-0 
          glass py-3 px-5 rounded-3xl
          transition-colors duration-[250ms] ease-in-out"
              initial={{ color: "#6b7280" }}
              whileHover={{ color: "black", cursor: "pointer" }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => handleScroll(1)}
            >
              about
            </motion.p>

            <motion.p
              className="inline-flex items-center gap-2 flex-shrink-0 
        glass py-3 px-5 rounded-3xl
        transition-colors duration-[250ms] ease-in-out"
              initial={{ color: "#6b7280" }}
              whileHover={{ color: "black", cursor: "pointer" }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => handleScroll(2)}
            >
              experience
            </motion.p>

            <motion.p
              className="inline-flex items-center gap-2 flex-shrink-0 
         glass py-3 px-5 rounded-3xl
         transition-colors duration-[250ms] ease-in-out"
              initial={{ color: "#6b7280" }}
              whileHover={{ color: "black", cursor: "pointer" }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => handleScroll(3)}
            >
              projects
            </motion.p>

            <motion.p
              className="inline-flex items-center gap-2 flex-shrink-0 
        glass py-3 px-5 rounded-3xl
        transition-colors duration-[500ms] ease-in-out"
              initial={{ color: "#6b7280" }}
              whileHover={{ color: "black", cursor: "pointer" }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => handleScroll(4)}
            >
              contact
            </motion.p>
          </motion.div>
        </div>

        <Hero />
      </div>

      <About />

      <Experience />

      <Projects />

      <Footer />
    </motion.div>
  );
}
