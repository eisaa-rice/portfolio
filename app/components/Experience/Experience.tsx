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
const Job: React.FC<JobProps> = ({ company, link, title, desc }) => {
  return (
    <>
      <motion.div
        className={"flex flex-col justify-center items-start py-2"}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.25,
          duration: 1,
          ease: "easeIn",
        }}
        viewport={{ once: true }}
      >
        <div className="flex flex-row items-center justify-center">
          <Image
            src="/images/small-circle.png"
            alt=""
            className="dot mt-[-0.7rem]"
            height={30}
            width={30}
          />

          <p className="text-3xl pb-4">{title}</p>
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
      </motion.div>
    </>
  );
};

const Experience: React.FC = () => {
  const timeRowStart = ["2", "3"];
  const timeRowEnd = ["3", "4"];

  const descRowStart = ["2", "3"];
  const descRowEnd = ["3", "4"];

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

      <div className="grid md:grid-cols-[3fr_50px_7fr] md:gap-8 items-center h-full mt-16">
        <Image
          className="timeline mt-auto md:mx-auto col-start-1 col-end-2 md:col-start-2 md:col-end-3 row-start-1 row-end-2"
          height={48}
          width={48}
          src={"/images/bigger-circle.png"}
          alt=""
        />

        <div className="mid-line mx-auto hidden md:block" />

        {workExperience.map((job, index) => {
          return (
            <React.Fragment key={index}>
              <p
                className={`col-start-1 col-end-2 md:row-start-${timeRowStart[index]} md:row-end-${timeRowEnd[index]}  mt-0 mb-auto md:pt-2`}
              >
                {job.time}
              </p>

              <div
                className={`md:col-start-3 md:col-end-4 md:row-start-${descRowStart[index]} md:row-end-${descRowEnd[index]}`}
              >
                <Job {...job} />
              </div>
            </React.Fragment>
          );
        })}

        <Image
          className="timeline mt-auto md:mx-auto col-start-1 col-end-2 md:col-start-2 md:col-end-3 row-start-6 row-end-7 md:row-start-4 md:row-end-5"
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
