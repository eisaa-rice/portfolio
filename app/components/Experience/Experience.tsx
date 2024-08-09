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
}

const Job: React.FC<JobProps> = ({ company, link, title, desc }) => (
  <div className="flex flex-col justify-center items-start pl-12 mb-12 md:mb-0">
    <div className="flex flex-row items-center justify-center pb-4">
      <Image
        className="-ml-12 md:-ml-[6.013rem] rounded-full z-50"
        src="/images/small-circle.png"
        alt=""
        height={32}
        width={32}
      />

      <p className="text-2xl pl-4 md:pl-16">{title}</p>
    </div>

    <motion.a
      href={link}
      target="_blank"
      className="grid grid-rows-[auto_10px] grid-cols-[auto_auto] pb-2 cursor-pointer"
      whileHover="hovered"
      initial="initial"
    >
      <p className="text-lg font-bold row-start-1 row-end-2 col-start-1 col-end-2">
        {company}
      </p>

      <motion.div
        className="hover-underline row-start-2 row-end-3 col-start-1 col-end-2"
        variants={{
          initial: { width: 0 },
          hovered: { width: "100%" },
        }}
        transition={{ ease: "backInOut" }}
      />

      <motion.div
        className="row-start-1 row-end-2 col-start-2 col-end-3"
        variants={{
          initial: { scale: 1, x: 0, y: 0 },
          hovered: { scale: 1.25, x: 1, y: 1 },
        }}
        transition={{ ease: "backIn" }}
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

    <p className="text-lg py-4">{desc}</p>
  </div>
);

const Experience: React.FC = () => {
  const workExperience: JobProps[] = [
    {
      time: "CURRENT - MAY 2024",
      company: "radical ai",
      link: "https://lab.radicalai.app/",
      title: "software engineer intern",
      desc: "Felis nascetur in tortor; odio feugiat interdum. Nulla id ad mi risus turpis consectetur cursus. Tincidunt euismod praesent ac pulvinar tempor eu. Lobortis non dis phasellus convallis efficitur justo. Iaculis adipiscing iaculis semper duis volutpat potenti platea dignissim. Interdum leo est vivamus bibendum tempus, porta curae. Litora etiam volutpat porta enim magna lobortis posuere ligula. Laoreet molestie tempus etiam, malesuada litora rhoncus. Sagittis ante facilisi facilisis accumsan sagittis mus. Neque ultricies non class nisl convallis donec.",
    },
    {
      time: "CURRENT - FEB 2024",
      company: "google student developer clubs",
      link: "https://gdsc.community.dev/university-of-michigan-dearborn-united-states/",
      title: "volunteer frontend developer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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

      <div className="grid md:grid-cols-[175px_40px_5fr] md:gap-x-8 items-center h-full mt-16">
        {workExperience.map((job, index) => (
          <React.Fragment key={index}>
            <p
              className={`font-light md:row-start-${index * 2 + 1} md:row-end-${
                index * 2 + 2
              } md:col-start-1 md:col-end-2 mb-auto md:pt-[0.25rem] pl-12 md:pl-0`}
            >
              {job.time}
            </p>

            <div
              className={`ml-4 md:ml-auto w-[0.5px] bg-black h-full md:inline-grid md:row-start-${
                index + 1
              } md:row-end-${index + 2} md:col-start-2 md:col-end-3`}
            />

            <div
              className={`md:row-start-${index * 2 + 1} md:row-end-${
                index * 2 + 2
              } md:col-start-3 md:col-end-4`}
            >
              <Job {...job} />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Experience;

{
  /* <Image
          className="mt-auto md:mx-auto -ml-2 col-start-1 col-end-2 md:col-start-2 md:col-end-3 row-start-1 row-end-2"
          height={48}
          width={48}
          src={"/images/bigger-circle.png"}
          alt=""
        /> */
}

{
  /* <Image
          className="mt-auto md:mx-auto -ml-2 col-start-1 col-end-2 md:col-start-2 md:col-end-3 row-start-8 row-end-9 md:row-start-4 md:row-end-5"
          height={48}
          width={48}
          src={"/images/arrow-down.png"}
          alt=""
        /> */
}
