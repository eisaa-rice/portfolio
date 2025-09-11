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
        <div className="flex flex-col items-start gap-10 text-gray-500">
          {/* overview */}
          <div className="flex flex-col items-start gap-3">
            <p>
              as you already know, the name&apos;s 🤟🏻{" "}
              <span className="font-semibold text-gray-700">jesus orozco</span>.
              i was born, raised, and am currently based in 🌮{" "}
              <span className="font-semibold text-gray-700">
                detroit, michigan
              </span>
              .
            </p>
          </div>

          {/* school */}
          <div className="flex flex-col items-start gap-3">
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
              for my{" "}
              <span className="font-semibold text-gray-700">
                📚 senior design capstone project
              </span>
              , i led development of a mobile app integrated with Clover for
              coffee shops engineered as a reusable solution across businesses.
              <span className="font-semibold text-gray-700"></span>
            </p>

            <p>
              during my time there, i also worked with my university&apos;s 🧑🏻‍💻{" "}
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
          </div>

          {/* work */}
          <div className="flex flex-col items-start gap-3">
            <p>
              i&apos;m currently looking for my first 💼{" "}
              <span className="font-semibold text-gray-700">
                professional software engineering role
              </span>{" "}
              where i can work with others to build real-world software.
            </p>
          </div>

          {/* other life */}
          <div className="flex flex-col items-start gap-3">
            <p>
              when i&apos;m not coding, you can probably find me 🎮{" "}
              <span className="font-semibold text-gray-700">
                grinding ranked
              </span>{" "}
              or 🎨{" "}
              <span className="font-semibold text-gray-700">
                drawing something
              </span>
              .
            </p>

            <p>
              but regardless of what i&apos;m doing, you can expect there to be
              some 🎸{" "}
              <span className="font-semibold text-gray-700">rock music</span>{" "}
              blaring in the background.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
