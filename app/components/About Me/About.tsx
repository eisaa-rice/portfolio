"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import "./About.css";

const About = () => {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [450, 1250], [0, -300]); // Adjust the -50 value to change the parallax depth
  const rotate = useTransform(scrollY, [450, 1250], [5, -5]);

  return (
    <div className="h-screen w-full lg:grid lg:grid-rows-1 lg:grid-cols-2 lg:gap-x-24">
      <motion.div
        className="row-start-1 row-end-2 col-start-1 col-end-2 sm:col-start-2 sm:col-end-3 bg-green-300 bg-opacity-50 w-96 h-96 m-auto hidden lg:block rounded-2xl"
        style={{ y, rotate }}
      />

      <div className="row-start-2 row-end-3 sm:row-start-1 sm:row-end-2 col-start-1 col-end-2 h-96">
        <p className="font-semibold text-3xl mt-6">
          software engineer. artist. gamer.
        </p>

        <div className="flex flex-col mt-10 mb-0 gap-y-8">
          <p className="font-light opacity-75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            sodales dui eget nulla dictum blandit non nec nisl. Cras consectetur
            mi vitae purus porttitor vestibulum. Sed porta luctus nulla nec
            rhoncus. Proin massa nibh, rhoncus eu sollicitudin nec, imperdiet in
            libero.
          </p>

          <p className="font-light opacity-75">
            Sed porta luctus nulla nec rhoncus. Proin massa nibh, rhoncus eu
            sollicitudin nec, imperdiet in libero.
          </p>

          <p className="font-light opacity-75">
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
