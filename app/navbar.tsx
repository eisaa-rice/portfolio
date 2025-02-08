"use client";

import { motion } from "framer-motion";

const Navbar = ({
  active,
  onActive,
}: {
  active: number;
  onActive: React.Dispatch<React.SetStateAction<number>>; // wtf is this
}) => {
  return (
    <div
      className="flex px-8 py-4 m-6 items-center justify-center
      font-light bg-black text-white rounded-full relative"
    >
      {/* <motion.p
        initial={{ opacity: 0.75 }}
        whileHover={{ cursor: "pointer", opacity: 1 }}
      >
        J.O.
      </motion.p> */}

      <ul className="flex gap-6 absolute mx-auto">
        <motion.li
          animate={{ opacity: active === 0 ? 1 : 0.75 }}
          whileHover={{ cursor: "pointer", opacity: 1 }}
          onClick={() => onActive(0)}
        >
          home
        </motion.li>

        <li className="opacity-75">·</li>

        <motion.li
          animate={{ opacity: active === 1 ? 1 : 0.75 }}
          whileHover={{ cursor: "pointer", opacity: 1 }}
          onClick={() => onActive(1)}
        >
          about
        </motion.li>

        <li className="opacity-75">·</li>

        <motion.li
          animate={{ opacity: active === 2 ? 1 : 0.75 }}
          whileHover={{ cursor: "pointer", opacity: 1 }}
          onClick={() => onActive(2)}
        >
          work
        </motion.li>
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
