"use client";

import { motion } from "motion/react";
import SectionHeader from "../ui/sectionHeader";

const About = () => {
  return (
    <div>
      <SectionHeader emoji="🤟🏻" title="about." />

      <div className="flex flex-col items-start gap-10 text-neutral-700">
        {/* overview */}
        <div className="flex flex-col items-start gap-3">
          <p>
            as you already know, the name&apos;s 🤟🏻{" "}
            <span className="font-semibold text-neutral-700">jesus orozco</span>
            . i was born, raised, and am currently based in 🌮{" "}
            <span className="font-semibold text-neutral-700">
              detroit, michigan
            </span>
            .
          </p>
        </div>

        {/* school */}
        <div className="flex flex-col items-start gap-3">
          <p>
            i recently graduated from the{" "}
            <span className="font-semibold text-neutral-700">
              🎓 university of michigan - dearborn
            </span>{" "}
            with a bachelor&apos;s in 🖥️{" "}
            <span className="font-semibold text-neutral-700">
              computer & information science
            </span>
            .
          </p>

          <p>
            for my{" "}
            <span className="font-semibold text-neutral-700">
              📚 senior design capstone project
            </span>
            , i led the development of a mobile app for coffee shops integrated
            with clover, engineered as a reusable solution across businesses.
            <span className="font-semibold text-neutral-700"></span>
          </p>

          <p>
            during my time there, i also worked with my university&apos;s 🧑🏻‍💻{" "}
            <motion.a
              className="font-semibold text-neutral-700"
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
            <span className="font-semibold text-neutral-700">
              professional software engineering role
            </span>{" "}
            where i can work with others to build real-world software.
          </p>
        </div>

        {/* other life */}
        <div className="flex flex-col items-start gap-3">
          <p>
            when i&apos;m not coding, you can probably find me 🎮{" "}
            <span className="font-semibold text-neutral-700">
              grinding ranked
            </span>{" "}
            or 🎨{" "}
            <span className="font-semibold text-neutral-700">
              drawing something
            </span>
            .
          </p>

          <p>
            but regardless of what i&apos;m doing, you can expect there to be
            some 🎸{" "}
            <span className="font-semibold text-neutral-700">rock music</span>{" "}
            blaring in the background.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
