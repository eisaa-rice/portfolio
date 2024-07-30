"use client";

import React from "react";
import Image from "next/image";

import "./Experience.css";

interface JobProps {
  company: string;
  title: string;
  desc: string;
  col: string;
  row: string;
}
const Job: React.FC<JobProps> = ({ company, title, desc, col, row }) => {
  return (
    <div
      className={"job flex flex-col justify-center items-center p-4"}
      style={{ gridRow: row, gridColumn: col }}
    >
      {/* underline underline-offset-2 */}
      <p className="text-center text-3xl font-light py-4">{title}</p>

      <p className="text-center font-bold pb-2">{company}</p>

      <p className="text-center text-lg p-4">{desc}</p>
    </div>
  );
};

const Experience: React.FC = () => {
  const workExperience: JobProps[] = [
    {
      company: "google student developer clubs",
      title: "volunteer frontend developer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      col: "1/2",
      row: "2/3",
    },
    {
      company: "radical ai",
      title: "software engineer intern",
      desc: "Felis nascetur in tortor; odio feugiat interdum. Nulla id ad mi risus turpis consectetur cursus. Tincidunt euismod praesent ac pulvinar tempor eu. Lobortis non dis phasellus convallis efficitur justo. Iaculis adipiscing iaculis semper duis volutpat potenti platea dignissim. Interdum leo est vivamus bibendum tempus, porta curae. Litora etiam volutpat porta enim magna lobortis posuere ligula. Laoreet molestie tempus etiam, malesuada litora rhoncus. Sagittis ante facilisi facilisis accumsan sagittis mus. Neque ultricies non class nisl convallis donec.",
      col: "3/4",
      row: "3/4",
    },
  ];

  return (
    <div className="experience">
      <p className="text-4xl font-bold text-center">
        here&apos;s where i&apos;ve been
      </p>

      <div className="timeline md:grid md:grid-cols-3 my-24 gap-x-4 gap-y-4">
        <Image
          className="dot mt-0 mb-auto mx-auto hidden md:block"
          height={48}
          width={48}
          src={"/images/dot.png"}
          alt=""
        />

        <Image
          className="chevron mt-auto mb-0 mx-auto hidden md:block"
          height={48}
          width={48}
          src={"/images/arrow-down.png"}
          alt=""
        />

        <div className="mid-line mx-auto hidden md:block" />

        <div className="dummy start hidden md:block" />

        {workExperience.map((job, index) => (
          <Job key={index} {...job} />
        ))}

        <div className="dummy end hidden md:block" />
      </div>
    </div>
  );
};

export default Experience;
