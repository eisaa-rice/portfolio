"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="h-[1px] w-11/12 bg-white opacity-50" />

      <p className="century-gothic my-7 font-thin text-lg">
        jesus orozco {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
