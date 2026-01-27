"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "motion/react";

import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

import Hero from "./components/sections/hero";
import About from "./components/sections/about";
import Skills from "./components/sections/skills";
import Experience from "./components/sections/experience";
import Projects from "./components/sections/projects";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;

      document.documentElement.classList.toggle("dark", next);
      document.documentElement.style.colorScheme = next ? "dark" : "light";

      return next;
    });
  };

  return (
    <div
      className="flex flex-col min-h-screen items-center justify-center 
      font-light"
    >
      <Header />

      <main
        className="min-h-screen w-full max-w-6xl
        flex flex-col items-stretch gap-[75vh]
        p-6"
      >
        <Hero />

        <About />

        <Skills />

        <Experience />

        <Projects />
      </main>

      <button
        className="fixed bottom-10 right-10 p-1 text-2xl
        flex items-center justify-center 
        bg-white/50 dark:bg-black/50 backdrop-blur-xs
        border border-neutral-200 dark:border-neutral-800 rounded-full
        hover:cursor-pointer"
        type="button"
        onClick={toggleTheme}
      >
        <AnimatePresence mode="wait" initial={false}>
          {!isDark ? (
            <motion.span
              key="sun"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: { ease: "easeIn", duration: 0.2 },
              }}
              exit={{
                opacity: 0,
                transition: { ease: "easeOut", duration: 0.1 },
              }}
            >
              ☀️
            </motion.span>
          ) : (
            <motion.span
              key="moon"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: { ease: "easeIn", duration: 0.2 },
              }}
              exit={{
                opacity: 0,
                transition: { ease: "easeOut", duration: 0.1 },
              }}
            >
              🌙
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      <Footer />
    </div>
  );
}
