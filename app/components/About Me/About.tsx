"use client";

import React from "react";
import { motion } from "framer-motion";

import "./About.css";

const About = () => {
  return (
    <div className="h-[100vh] w-full mx-auto ">
      <p className="font-extralight text-3xl text-center mt-6">
        software engineer. artist. gamer.
      </p>
    </div>
  );
};

export default About;

/*
initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.25 }}
      // viewport={{ once: true }}
*/
