"use client";

import { motion } from "motion/react";

import SectionHeader from "../ui/sectionHeader";

const About = () => {
  return (
    <section id="about">
      <SectionHeader
        emoji="🤟🏻"
        title="about"
        emojiStyle={{ marginLeft: "-0.25rem" }}
      />

      <div className="flex flex-col items-start gap-10">
        {/* overview */}
        <div className="flex flex-col items-start gap-3">
          <p>
            as you already know, my name is 🤟🏻{" "}
            <span className="font-medium">jesus orozco</span>. i was born,
            raised, and am currently based in 🌮{" "}
            <span className="font-medium">detroit, michigan</span>.
          </p>
        </div>

        {/* school */}
        <div className="flex flex-col items-start gap-3">
          <p>
            i recently graduated from the{" "}
            <span className="font-medium">
              🎓 university of michigan - dearborn
            </span>{" "}
            with a bachelor&apos;s degree in 🖥️{" "}
            <span className="font-medium">computer & information science</span>.
          </p>

          <p>
            for my{" "}
            <span className="font-medium">
              📚 senior design capstone project
            </span>
            , i led the development of a mobile app for coffee shops integrated
            with clover, engineered as a reusable solution across businesses.
            <span className="font-medium"></span>
          </p>

          <p>
            during my time there, i also worked with my university&apos;s 🧑🏻‍💻{" "}
            <motion.a
              className="font-medium"
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
            <span className="font-medium">
              professional software engineering role
            </span>{" "}
            where i can work with others to build real-world software.
          </p>
        </div>

        {/* personal life */}
        <div className="flex flex-col items-start gap-3">
          <p>
            when i&apos;m not coding, you can probably find me 🎮{" "}
            <span className="font-medium">grinding ranked</span> or 🎨{" "}
            <span className="font-medium">drawing something</span>.
          </p>

          <p>
            but regardless of what i&apos;m doing, you can expect there to be
            some 🎸 <span className="font-medium">rock music</span> blaring in
            the background.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
