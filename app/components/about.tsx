"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="flex flex-col justify-center">
      <motion.p
        className="text-3xl font-bold mb-8"
        initial={{ rotate: "0deg", transformOrigin: "bottom left" }}
        whileInView={{
          scale: 1.1,
          transition: { ease: "backIn", duration: 0.4, delay: 0.25 },
        }}
        viewport={{ once: true }}
      >
        👋🏻 sup!
      </motion.p>

      <div className="flex flex-col items-start justify-start gap-6 text-xl">
        <p>
          as you already know, the name&apos;s 🤟🏻{" "}
          <span className="font-semibold">jesus orozco</span>. i was born,
          raised, and am currently based in 🌮{" "}
          <span className="font-semibold">detroit, michigan</span>.
        </p>

        <p>
          i&apos;m currently a fourth year 🖥️{" "}
          <span className="font-semibold">computer science major</span> at the
          🎓 university of michigan - dearborn.
        </p>

        <p>
          when i&apos;m not coding, you can probably find me 🎮{" "}
          <span className="font-semibold">grinding ranked</span> or 🎨{" "}
          <span className="font-semibold">drawing something</span>.
        </p>

        <span className="font-bold"></span>
      </div>
    </div>
  );
};

export default About;
