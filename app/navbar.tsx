"use client";

import React from "react";
import { motion } from "framer-motion";

const tabs = ["home", "about", "experience", "projects"];

const Navbar = ({
  active,
  onActive,
}: {
  active: number;
  onActive: React.Dispatch<React.SetStateAction<number>>; // wtf is this
}) => {
  return (
    <div
      className="flex px-8 py-3 m-6 items-center justify-center
      font-light bg-black text-white rounded-full relative"
    >
      <ul className="flex gap-6 absolute mx-auto">
        {tabs.map((s, i) => (
          <React.Fragment key={i}>
            <motion.li
              animate={{ opacity: active === i ? 1 : 0.75 }}
              whileHover={{ cursor: "pointer", opacity: 1 }}
              onClick={() => onActive(i)}
            >
              {s}
            </motion.li>

            {i < tabs.length - 1 && <li className="opacity-75">·</li>}
          </React.Fragment>
        ))}
      </ul>

      <ul className="flex gap-6 ml-auto mr-0">
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
