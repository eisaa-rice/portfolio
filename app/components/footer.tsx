"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div id="contact" className="flex flex-col justify-start">
      <p className="mb-8 text-center mx-auto text-gray-400">
        © {new Date().getFullYear()} jesus orozco
      </p>
    </div>
  );
};

export default Footer;
