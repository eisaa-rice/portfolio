"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div id="contact" className="flex flex-col justify-start mt-44">
      <p className="my-8 text-center mx-auto">
        © {new Date().getFullYear()} jesus orozco
      </p>

      <p className="text-lg text-start italic text-stone-400 mb-8">
        this website&apos;s layout was heavily inspired by{" "}
        <motion.a
          className="font-medium"
          initial={{}}
          whileHover={{ textDecoration: "underline" }}
          href="https://brittanychiang.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          brittany chang.
        </motion.a>
      </p>
    </div>
  );
};

export default Footer;
