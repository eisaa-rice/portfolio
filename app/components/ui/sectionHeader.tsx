"use client";

import { motion } from "motion/react";

const SectionHeader = ({
  emoji,
  title,
  emojiStyle,
}: {
  emoji: string;
  title: string;
  emojiStyle?: React.CSSProperties;
}) => {
  return (
    <motion.h2
      className="text-2xl font-semibold my-6 inline-block"
      whileInView="section"
      viewport={{ once: true }}
    >
      <motion.span
        className="inline-block"
        variants={{
          section: {
            scale: [1, 1.25],
            transition: { duration: 0.25, delay: 0.5 },
          },
        }}
        style={emojiStyle}
      >
        {emoji}
      </motion.span>{" "}
      {title}.
      <motion.div
        className="w-0 h-px mt-1 bg-neutral-300 dark:bg-neutral-700
        transition-colors duration-250 ease-linear"
        variants={{
          section: {
            width: "100%",
            transition: { duration: 0.25, delay: 0.5 },
          },
        }}
      />
    </motion.h2>
  );
};

export default SectionHeader;
