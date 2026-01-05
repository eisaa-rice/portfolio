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
      className="flex items-center justify-between
      fixed top-0 backdrop-blur-sm z-50
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
            className="sm:hidden border border-black rounded-lg
            flex flex-col justify-center gap-2
            absolute top-[150%] right-0 p-2 bg-white"
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

        <nav className="hidden sm:flex gap-4">
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
                  scale: 1.1,
                  transition: { duration: 0.1, ease: "linear" },
                },
              }}
            >
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, scale: 1, x: 5 }}
                variants={{
                  header: {
                    opacity: 1,
                    scale: 1.05,
                    x: 0,
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
    </header>
  );
};

export default Header;
