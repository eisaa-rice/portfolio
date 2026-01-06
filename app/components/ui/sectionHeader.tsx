"use client";

import { motion } from "motion/react";

const SectionHeader = ({ emoji, title }: { emoji: string; title: string }) => {
  return (
    <motion.h2
      className="text-3xl my-6 inline-block"
      whileInView="section"
      viewport={{ once: true }}
    >
      <motion.span
        className="inline-block z-10 -ml-1"
        variants={{
          section: {
            scale: [1, 1.25],
            transition: { duration: 0.25, ease: "easeOut", delay: 0.5 },
          },
        }}
      >
        {emoji}
      </motion.span>{" "}
      {title}.
      <motion.div
        className="w-0 h-px bg-neutral-500 mt-1"
        variants={{
          section: {
            width: "100%",
            transition: { duration: 0.25, ease: "easeOut", delay: 0.5 },
          },
        }}
      />
    </motion.h2>
  );
};

export default SectionHeader;
