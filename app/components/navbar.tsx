"use client";

import React from "react";
import { motion } from "framer-motion";

const tabs = ["home", "about", "skills", "experience", "projects"];

const Navbar = ({}: {}) => {
  return (
    <div
      className="flex m-12 items-center justify-center
      font-light rounded-full relative"
    >
      <ul
        className="flex gap-6 absolute mx-auto px-8 py-3 
      border border-black border-opacity-35 rounded-full"
      >
        {tabs.map((tab, i) => (
          <React.Fragment key={i}>
            <motion.li whileHover={{ cursor: "pointer", opacity: 1 }}>
              {tab}
            </motion.li>

            {i < tabs.length - 1 && <li className="opacity-75">·</li>}
          </React.Fragment>
        ))}
      </ul>

      <ul
        className="flex gap-6 ml-auto mr-0 px-8 py-3
      bg-black text-white rounded-full"
      >
        <motion.a
          initial={{ opacity: 0.75 }}
          whileHover={{ cursor: "pointer", opacity: 1 }}
          href="https://www.linkedin.com/in/eisaa-rice/"
          target="_blank"
        >
          linkedin
        </motion.a>

        <li className="opacity-75"> / </li>

        <motion.a
          initial={{ opacity: 0.75 }}
          whileHover={{ cursor: "pointer", opacity: 1 }}
          href="https://github.com/eisaa-rice"
          target="_blank"
        >
          github
        </motion.a>
      </ul>
    </div>
  );
};

export default Navbar;
