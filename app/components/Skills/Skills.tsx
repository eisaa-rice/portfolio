"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import "./Skills.css";

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mb-[500px]">
      <p className="font-extralight text-4xl mb-12">i&apos;ve worked with</p>

      <div className="w-full min-h-[300px] flex flex-wrap items-center justify-evenly"></div>
    </div>
  );
};

export default Skills;
