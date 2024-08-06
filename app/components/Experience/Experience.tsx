"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import "./Experience.css";

interface JobProps {
  time: string;
  company: string;
  link: string;
  title: string;
  desc: string;
  col: string;
  row: string;
}
const Job: React.FC<JobProps> = ({
  time,
  company,
  link,
  title,
  desc,
  col,
  row,
}) => {
  return (
    <div
      className={
        "job flex flex-col justify-center items-start md:items-center p-4"
      }
      style={{ gridRow: row, gridColumn: col }}
    >
      <p className="md:text-center">{time}</p>

      <p className="md:text-center text-3xl py-4">{title}</p>

      <motion.a
        href={link}
        target="_blank"
        className="grid grid-rows-2 grid-cols-[auto_2fr] pb-2 cursor-pointer"
        whileHover="hovered"
        initial="initial"
      >
        <p className="md:text-center text-lg font-bold row-start-1 row-end-2 col-start-1 col-end-2">
          {company}
        </p>

        <motion.div
          className="hover-underline row-start-2 row-end-3 col-start-1 col-end-2"
          variants={{
            initial: { width: 0 },
            hovered: { width: "100%" },
          }}
          transition={{ ease: "anticipate" }}
        />

        <motion.div
          className="row-start-1 row-end-2 col-start-2 col-end-3"
          variants={{
            initial: { scale: 1, x: 0, y: 0 },
            hovered: { scale: 1.25, x: 1, y: 1 },
          }}
          transition={{ ease: "anticipate" }}
        >
          <Image
            src="/external-link.svg"
            alt=""
            height={20}
            width={20}
            className="h-full ml-3"
          />
        </motion.div>
      </motion.a>

      <p className="md:text-center text-lg py-4">{desc}</p>
    </div>
  );
};

const Experience: React.FC = () => {
  const workExperience: JobProps[] = [
    {
      time: "CURRENT - MAY 2024",
      company: "radical ai",
      link: "https://lab.radicalai.app/",
      title: "software engineer intern",
      desc: "Felis nascetur in tortor; odio feugiat interdum. Nulla id ad mi risus turpis consectetur cursus. Tincidunt euismod praesent ac pulvinar tempor eu. Lobortis non dis phasellus convallis efficitur justo. Iaculis adipiscing iaculis semper duis volutpat potenti platea dignissim. Interdum leo est vivamus bibendum tempus, porta curae. Litora etiam volutpat porta enim magna lobortis posuere ligula. Laoreet molestie tempus etiam, malesuada litora rhoncus. Sagittis ante facilisi facilisis accumsan sagittis mus. Neque ultricies non class nisl convallis donec.",
      col: "0/1",
      row: "2/3",
    },
    {
      time: "CURRENT - FEB 2024",
      company: "google student developer clubs",
      link: "https://gdsc.community.dev/university-of-michigan-dearborn-united-states/",
      title: "volunteer frontend developer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      col: "0/1",
      row: "3/4",
    },
  ];

  return (
    <div className="experience p-20">
      <motion.p
        className="text-4xl text-center font-light mb-24"
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.45,
          duration: 0.35,
        }}
        viewport={{ once: true }}
      >
        here&apos;s where i&apos;ve been
      </motion.p>

      <div className="grid md:grid-cols-3 md:gap-8 items-center h-full mt-16">
        <Image
          className="mt-auto md:mx-auto col-start-0 col-end-1"
          height={48}
          width={48}
          src={"/images/dot.png"}
          alt=""
        />

        <div className="mid-line mx-auto hidden md:block" />

        <div className="hidden md:block" />

        {workExperience.map((job, index) => (
          <Job key={index} {...job} />
        ))}

        <div className="hidden md:block" />

        <Image
          className="mt-auto md:mx-auto col-start-0 col-end-1"
          height={48}
          width={48}
          src={"/images/arrow-down.png"}
          alt=""
        />
      </div>
    </div>
  );
};

export default Experience;
