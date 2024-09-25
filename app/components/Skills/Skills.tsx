"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import "./Skills.css";

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full my-96">
      <div className="w-full max-w-4xl flex flex-wrap items-center justify-evenly gap-24 opacity-50">
        <div className="h-14 w-14 bg-black rounded-full flex-shrink-0" />
        <div className="h-14 w-14 bg-black rounded-full flex-shrink-0" />
        <div className="h-14 w-14 bg-black rounded-full flex-shrink-0" />
        <div className="h-14 w-14 bg-black rounded-full flex-shrink-0" />
        <div className="h-14 w-14 bg-black rounded-full flex-shrink-0" />
        <div className="h-14 w-14 bg-black rounded-full flex-shrink-0" />
      </div>

      <div className="w-full max-w-4xl flex flex-wrap items-center justify-evenly gap-36 opacity-50 mt-32">
        <div className="h-14 w-14 bg-black rounded-full flex-shrink-0" />
        <div className="h-14 w-14 bg-black rounded-full flex-shrink-0" />
        <div className="h-14 w-14 bg-black rounded-full flex-shrink-0" />
        <div className="h-14 w-14 bg-black rounded-full flex-shrink-0" />
        <div className="h-14 w-14 bg-black rounded-full flex-shrink-0" />
        <div className="h-14 w-14 bg-black rounded-full flex-shrink-0" />
        <div className="h-14 w-14 bg-black rounded-full flex-shrink-0" />
        <div className="h-14 w-14 bg-black rounded-full flex-shrink-0" />
        <div className="h-14 w-14 bg-black rounded-full flex-shrink-0" />
      </div>
    </div>
  );
};

export default Skills;
