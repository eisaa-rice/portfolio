"use client";

import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";

import { useState, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();

  const [opacityRange, setOpacityRange] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [headerRange, setHeaderRange] = useState([0, 0, 0, 0, 0, 0]);

  const [aboutScroll, setAboutScroll] = useState(0);
  const [skillScroll, setSkillScroll] = useState(0);
  const [experienceScroll, setExperienceScroll] = useState(0);
  const [projectsScroll, setProjectsScroll] = useState(0);
  const [contactScroll, setContactScroll] = useState(0);

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;

      if (width >= 320 && width < 500) {
        setOpacityRange([
          850, 950, 2600, 2700, 2800, 4500, 4600, 4700, 6450, 6550, 6650, 14800,
          14900, 15000,
        ]);
        setHeaderRange([0, 2700, 4600, 6550, 14900, 99999]);

        setAboutScroll(1.04);
        setSkillScroll(2.1);
        setExperienceScroll(2.96);
        setProjectsScroll(3.96);
        setContactScroll(8.16);
      } else if (width >= 500 && width < 640) {
      } else if (width >= 640 && width < 1024) {
      } else if (width >= 1024 && width < 1280) {
      } else if (width >= 1280 && width < 1536) {
        setOpacityRange([
          850, 950, 1900, 2000, 2100, 2700, 2800, 2900, 3700, 3800, 3900, 7925,
          8025, 8125,
        ]);
        setHeaderRange([0, 2000, 2800, 3800, 8025, 9999]);

        setAboutScroll(1.04);
        setSkillScroll(2.1);
        setExperienceScroll(2.96);
        setProjectsScroll(3.96);
        setContactScroll(8.16);
      } else {
        // width >= 1536
        setOpacityRange([
          950, 1050, 1900, 2000, 2100, 2650, 2750, 2850, 3600, 3700, 3800, 7750,
          7850, 7950,
        ]);
        setHeaderRange([0, 2000, 2750, 3700, 7850, 9999]);

        setAboutScroll(1.1);
        setSkillScroll(2.1);
        setExperienceScroll(2.88);
        setProjectsScroll(3.84);
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
    [0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1]
  );

  const header = useTransform(scrollY, headerRange, [
    "about 🧔🏼",
    "about 🧔🏼",
    "skills 🛠️",
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
        top: 1000 * skillScroll,
        behavior: "smooth",
      });
    } else if (x === 3) {
      window.scrollTo({
        top: 1000 * experienceScroll,
        behavior: "smooth",
      });
    } else if (x === 4) {
      window.scrollTo({
        top: 1000 * projectsScroll,
        behavior: "smooth",
      });
    }
    // x === 5
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
      // w-[320px] xs:w-[450px] sm:w-[600px] md:w-[] lg:w-[750px] xl:w-[1150px] 2xl:w-[1400px]
      className="flex flex-col justify-center items-center mx-auto overflow-hidden gap-64"
    >
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

      {/* HEADERS */}
      <div
        className="h-16 z-[60] absolute top-0 left-1/2 transform -translate-x-1/2 
        hidden md:flex items-center justify-evenly mx-auto gap-12
        text-sm px-6 transition-all duration-[25ms] ease-in-out
        w-[320px] xs:w-[450px] sm:w-[600px] lg:w-[750px] xl:w-[1150px] 2xl:w-[1400px]"
      >
        <motion.p
          className="py-2 "
          initial={{ color: "#a3a3a3", fontWeight: 300 }}
          whileHover={{
            color: "white",
            fontWeight: 500,
            cursor: "pointer",
          }}
          onClick={() => handleScroll(1)}
        >
          ABOUT
        </motion.p>

        <motion.p
          className="py-2 "
          initial={{ color: "#a3a3a3", fontWeight: 300 }}
          whileHover={{
            color: "white",
            fontWeight: 500,
            cursor: "pointer",
          }}
          onClick={() => handleScroll(2)}
        >
          SKILLS
        </motion.p>

        <motion.p
          className="py-2 "
          initial={{ color: "#a3a3a3", fontWeight: 300 }}
          whileHover={{
            color: "white",
            fontWeight: 500,
            cursor: "pointer",
          }}
          onClick={() => handleScroll(3)}
        >
          EXPERIENCE
        </motion.p>

        <motion.p
          className="py-2 "
          initial={{ color: "#a3a3a3", fontWeight: 300 }}
          whileHover={{
            color: "white",
            fontWeight: 500,
            cursor: "pointer",
          }}
          onClick={() => handleScroll(4)}
        >
          PROJECTS
        </motion.p>

        <motion.p
          className="py-2 "
          initial={{ color: "#a3a3a3", fontWeight: 300 }}
          whileHover={{
            color: "white",
            fontWeight: 500,
            cursor: "pointer",
          }}
          onClick={() => handleScroll(5)}
        >
          CONTACT
        </motion.p>
      </div>

      <div className="fixed top-0 mt-5 z-50 flex-shrink-0">
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
