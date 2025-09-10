"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      // backdrop-blur-sm border border-gray-100 shadow-md rounded-3xl p-8
      className="flex flex-col justify-center w-full"
    >
      <p className="text-3xl border-b border-gray-300 w-fit pr-6 pb-2 mb-8">
        🤟🏻 about
      </p>

      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-start gap-6 text-gray-500">
          <p>
            as you already know, the name&apos;s 🤟🏻{" "}
            <span className="font-semibold text-gray-700">jesus orozco</span>. i
            was born, raised, and am currently based in 🌮{" "}
            <span className="font-semibold text-gray-700">
              detroit, michigan
            </span>
            .
          </p>

          <p>
            i recently graduated from the{" "}
            <span className="font-semibold text-gray-700">
              🎓 university of michigan - dearborn
            </span>{" "}
            with a bachelor&apos;s in 🖥️{" "}
            <span className="font-semibold text-gray-700">
              computer & information science
            </span>
            .
          </p>

          <p>
            i&apos;ve worked with my university&apos;s 🧑🏻‍💻{" "}
            <motion.a
              className="font-semibold text-gray-700"
              whileHover={{
                textDecoration: "underline",
              }}
              href="https://gdg.community.dev/gdg-on-campus-university-of-michigan-dearborn-dearborn-united-states/"
              target="_blank"
              rel="noopener noreferrer"
            >
              google developer group
            </motion.a>{" "}
            to make web and mobile apps for multiple events like conferences,
            workshops, and hackathons.
          </p>

          <p>
            when i&apos;m not coding, you can probably find me 🎮{" "}
            <span className="font-semibold text-gray-700">grinding ranked</span>{" "}
            or 🎨{" "}
            <span className="font-semibold text-gray-700">
              drawing something
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
