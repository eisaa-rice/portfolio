"use client";

import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col justify-center">
      <motion.p
        className="text-3xl font-bold mb-8"
        initial={{ rotate: "-2deg", transformOrigin: "bottom left" }}
        whileInView={{
          rotate: ["-2deg", "0deg", "-1deg", "0deg"],
          transition: { ease: "backIn", duration: 0.4, delay: 0.25 },
        }}
        viewport={{ once: true }}
      >
        💻 here&apos;s what i&apos;ve done
      </motion.p>
    </div>
  );
};

export default Projects;
