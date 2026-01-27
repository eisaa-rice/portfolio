"use client";

import Image from "next/image";
import { motion } from "motion/react";

import SectionHeader from "../ui/sectionHeader";

const experience = [
  {
    title: "development lead",
    company: "university of michigan - dearborn",
    time: "may 2025 - dec 2025",
    desc: "i led a 4-person team in building a cross-platform mobile app for local coffee shops integrated with clover pos, engineered for scalability and reuse across different clients.",
    img: "/svgs/umd.svg",
    style: {
      padding: "0.25rem",
      backgroundColor: "#0b2b53",
    },
    link: "https://umdearborn.edu/cecs/life-cecs/events/senior-design-day",
  },
  {
    title: "frontend developer",
    company: "google developer groups",
    time: "feb 2024 - feb 2025",
    desc: "i developed scalable front-end web and app components for various regional events.",
    img: "/svgs/gdg.svg",
    style: { paddingLeft: "0.5rem", paddingRight: "0.5rem" },
    link: "https://gdg.community.dev/gdg-on-campus-university-of-michigan-dearborn-dearborn-united-states/",
  },
];

export const Job = ({
  title,
  company,
  time,
  desc,
  img,
  style,
  link,
}: {
  title: string;
  company: string;
  time: string;
  desc: string;
  img: string;
  style?: React.CSSProperties;
  link: string;
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-6">
      <div
        className="rounded-lg h-26 w-26 relative shrink-0 overflow-hidden 
        border border-neutral-200 dark:border-neutral-800"
      >
        <Image
          className="object-contain"
          src={img}
          alt={company}
          fill={true}
          style={style}
        />
      </div>

      <div className="flex flex-col justify-center w-full">
        <h3
          className="text-xl font-medium shrink-0 
          inline-flex flex-col sm:flex-row items-start sm:items-center justify-between"
        >
          {title} <span className="text-base font-light shrink-0">{time}</span>
        </h3>

        <a
          className="text-lg shrink-0 w-fit text-neutral-500 hover:underline"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          @ {company}
        </a>

        <p className="mt-2">{desc}</p>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience">
      <SectionHeader emoji="💼" title="experience" />

      <div className="flex flex-col justify-center gap-16">
        {experience.map(
          ({ title, company, time, desc, img, style, link }, i) => (
            <Job
              key={i}
              title={title}
              company={company}
              time={time}
              desc={desc}
              img={img}
              style={style}
              link={link}
            />
          ),
        )}
      </div>
    </section>
  );
};

export default Experience;
