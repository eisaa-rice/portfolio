"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import "./About.css";

const About = () => {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="h-[screen] w-full grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2">
      <div className="row-start-1 row-end-2 col-start-1 col-end-2 sm:col-start-2 sm:col-end-3 bg-slate-50 w-32 h-96 m-auto"></div>

      <div className="row-start-2 row-end-3 sm:row-start-1 sm:row-end-2 col-start-1 col-end-2 h-96">
        <p className="font-semibold text-3xl mt-6 w-72">
          software engineer. artist. gamer.
        </p>

        <div className="flex flex-col mt-10 mb-0 ">
          <p className="font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            sodales dui eget nulla dictum blandit non nec nisl. Cras consectetur
            mi vitae purus porttitor vestibulum. Sed porta luctus nulla nec
            rhoncus. Proin massa nibh, rhoncus eu sollicitudin nec, imperdiet in
            libero.
          </p>

          <p className="font-light text-sm">
            Sed porta luctus nulla nec rhoncus. Proin massa nibh, rhoncus eu
            sollicitudin nec, imperdiet in libero.
          </p>

          <p className="font-light text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            sodales dui eget nulla dictum blandit non nec nisl. Cras consectetur
            mi vitae purus porttitor vestibulum. Sed porta luctus nulla nec
            rhoncus. Proin massa nibh, rhoncus eu sollicitudin nec, imperdiet in
            libero. Nunc rhoncus efficitur est, a suscipit orci laoreet id.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
