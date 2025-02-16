"use client";

import { once } from "events";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-start
      my-24 p-6 rounded-3xl"
    >
      <motion.p className="text-4xl font-bold mb-20 rotate-3">👋🏻 sup!</motion.p>

      <div
        className="flex flex-col items-center justify-start gap-16
      text-xl text-center w-2/5"
      >
        <motion.p
          initial={{ rotate: "3deg", transformOrigin: "left bottom" }}
          whileInView={{ rotate: ["-3deg", "1deg", "0deg", "1deg"] }}
          transition={{
            duration: 0.5,
            delay: 0.4,
            ease: "circOut",
          }}
          viewport={{ once: true }}
        >
          as you already know, the name&apos;s 🤟🏻{" "}
          <span className="font-semibold">jesus orozco</span>
        </motion.p>

        <motion.p
          initial={{ rotate: "-3deg", transformOrigin: "right bottom" }}
          whileInView={{ rotate: ["3deg", "-1deg", "0deg", "-1deg"] }}
          transition={{
            duration: 0.5,
            delay: 0.6,
            ease: "circOut",
          }}
          viewport={{ once: true }}
        >
          i was born, raised, and am currently based in{" "}
          <span className="font-semibold">detroit, michigan</span> 🌮
        </motion.p>

        <motion.p
          initial={{ rotate: "3deg", transformOrigin: "left bottom" }}
          whileInView={{ rotate: ["-3deg", "1deg", "0deg", "1deg"] }}
          transition={{
            duration: 0.5,
            delay: 0.8,
            ease: "circOut",
          }}
          viewport={{ once: true }}
        >
          i&apos;m currently a fourth year{" "}
          <span className="font-semibold">computer science major</span> 🖥️ at
          the 🎓 university of michigan - dearborn
        </motion.p>

        <motion.p
          initial={{ rotate: "-3deg", transformOrigin: "right bottom" }}
          whileInView={{ rotate: ["3deg", "-1deg", "0deg", "-1deg"] }}
          transition={{
            duration: 0.5,
            delay: 1,
            ease: "circOut",
          }}
          viewport={{ once: true }}
        >
          when i&apos;m not coding, you can probably find me 🎮{" "}
          <span className="font-semibold">grinding ranked</span> or{" "}
          <span className="font-semibold">drawing something</span> 🎨
        </motion.p>

        <span className="font-bold"></span>
      </div>
    </div>
  );
};

export default About;
