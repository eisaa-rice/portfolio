"use client";

import { useState } from "react";
import { motion } from "motion/react";

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

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="flex items-center justify-center
      fixed top-0 z-50 backdrop-blur-xs bg-white/75
      w-full border-b border-black/5"
    >
      <div
        className="flex items-center justify-between
        w-full max-w-6xl p-6"
      >
        <p className="font-semibold text-xl">jésus orozco.</p>

        <div className="relative">
          <button
            className="sm:hidden hover:cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
          >
            menu
          </button>

          {open && (
            <nav
              className="sm:hidden border border-black/5 rounded-lg
            flex flex-col justify-center gap-2 z-50 bg-white
            absolute top-[240%] -right-4 p-2"
            >
              {tabs.map((m, i) => (
                <a
                  key={i}
                  onClick={() => setOpen(closed)}
                  className="inline-block text-nowrap"
                  href={`#${m.text}`}
                >
                  <span className="inline-block">{m.emoji}</span> {m.text}.
                </a>
              ))}
            </nav>
          )}

          <nav className="hidden sm:flex gap-6">
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
                    transition: { duration: 0.1, ease: "linear" },
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
                      transition: { duration: 0.1, ease: "linear" },
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
