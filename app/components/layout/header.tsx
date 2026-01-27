"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const tabs = [
  {
    text: "about",
    emoji: "🤟🏻",
  },
  {
    text: "skills",
    emoji: "🛠️",
  },
  {
    text: "experience",
    emoji: "💼",
  },
  {
    text: "projects",
    emoji: "💻",
  },
];

// TODO: fix coloring in dark mode
const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="flex items-center justify-center
      fixed top-0 z-50 backdrop-blur-xs w-full
      bg-white/75 dark:bg-black/75 
      border-b border-black/5 dark:border-white/5"
    >
      <div
        className="flex items-center justify-between
        w-full max-w-6xl p-6"
      >
        <p className="font-semibold text-xl">jésus orozco.</p>

        <div className="relative">
          <button
            key="menu-btn"
            className="lg:hidden hover:cursor-pointer text-xl"
            onClick={() => setOpen((prev) => !prev)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  className="inline-block"
                  initial={{ rotate: -90, opacity: 0, scale: 0.75 }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.1 },
                  }}
                  exit={{
                    rotate: -90,
                    opacity: 0,
                    scale: 0.75,
                    transition: { duration: 0.1 },
                  }}
                >
                  ✕
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  className="inline-block"
                  initial={{ rotate: 90, opacity: 0, scale: 0.75 }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.05 },
                  }}
                  exit={{
                    rotate: 90,
                    opacity: 0,
                    scale: 0.75,
                    transition: { duration: 0.05 },
                  }}
                >
                  ☰
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <AnimatePresence>
            {open && (
              <motion.nav
                key="menu-nav"
                className="lg:hidden border border-black/5 dark:border-white/5 rounded-lg
                flex flex-col justify-center gap-2 z-50 bg-white dark:bg-black
                absolute top-[220%] -right-4 p-2 origin-top-right"
                initial={{ opacity: 0, y: -5 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.1, ease: "easeOut" },
                }}
                exit={{
                  opacity: 0,
                  y: -5,
                  transition: { duration: 0.1, ease: "easeIn" },
                }}
              >
                {tabs.map((m, i) => (
                  <a
                    key={i}
                    onClick={() => setOpen(false)}
                    className="inline-block text-nowrap"
                    href={`#${m.text}`}
                  >
                    <span className="inline-block">{m.emoji}</span> {m.text}.
                  </a>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>

          <nav className="hidden lg:flex gap-6">
            {tabs.map((m, i) => (
              <motion.a
                key={i}
                className="inline-block text-nowrap"
                href={`#${m.text}`}
                whileHover="header"
                initial={{ opacity: 0.5, scale: 1 }}
                variants={{
                  header: {
                    opacity: 1,
                    scale: 1.05,
                    transition: { duration: 0.1 },
                  },
                }}
              >
                <motion.span
                  className="inline-block"
                  initial={{
                    opacity: 0,
                    x: 8,
                  }}
                  variants={{
                    header: {
                      opacity: 1,
                      x: 2,
                      transition: { duration: 0.1 },
                    },
                  }}
                >
                  {m.emoji}
                </motion.span>{" "}
                {m.text}.
              </motion.a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
