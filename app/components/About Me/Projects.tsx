"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import "./Projects.css";

const Projects = () => {
  const { scrollY } = useScroll();

  const [screenWidth, setScreenWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;

      setScreenWidth(width);
      setIsMobile(width <= 768);
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const rangeOne = isMobile ? [450, 1450] : [450, 1250];
  const y1 = useTransform(scrollY, rangeOne, [300, -300]);
  const rotate1 = useTransform(scrollY, rangeOne, [5, -5]);

  const rangeTwo = isMobile ? [1900, 2900] : [1250, 2250];
  const y2 = useTransform(scrollY, rangeTwo, [300, -300]);
  const rotate2 = useTransform(scrollY, rangeTwo, [5, -5]);

  const rangeThree = isMobile ? [3450, 4450] : [2250, 3250];
  const y3 = useTransform(scrollY, rangeThree, [300, -300]);
  const rotate3 = useTransform(scrollY, rangeThree, [5, -5]);

  return (
    <div className="w-full flex flex-col items-center justify-start gap-y-[500px]">
      <div className="grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 lg:gap-x-24">
        <motion.div
          className="row-start-1 row-end-2 col-start-1 col-end-2 lg:col-start-2 lg:col-end-3 bg-white w-64 sm:w-96 h-96 m-auto rounded-2xl"
          transition={{ delay: 0.5 }}
          style={{ y: y1, rotate: rotate1 }}
        />

        <div className="row-start-2 row-end-3 lg:row-start-1 lg:row-end-2 col-start-1 col-end-2">
          <p className="font-semibold text-3xl">project one</p>

          <div className="flex flex-col mt-10 mb-0 gap-y-8">
            <p className="font-light opacity-75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sodales dui eget nulla dictum blandit non nec nisl. Cras
              consectetur mi vitae purus porttitor vestibulum. Sed porta luctus
              nulla nec rhoncus. Proin massa nibh, rhoncus eu sollicitudin nec,
              imperdiet in libero.
            </p>

            <p className="font-light opacity-75">
              Sed porta luctus nulla nec rhoncus. Proin massa nibh, rhoncus eu
              sollicitudin nec, imperdiet in libero.
            </p>

            <p className="font-light opacity-75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sodales dui eget nulla dictum blandit non nec nisl. Cras
              consectetur mi vitae purus porttitor vestibulum. Sed porta luctus
              nulla nec rhoncus. Proin massa nibh, rhoncus eu sollicitudin nec,
              imperdiet in libero. Nunc rhoncus efficitur est, a suscipit orci
              laoreet id.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 lg:gap-x-24">
        <motion.div
          className="row-start-1 row-end-2 col-start-1 col-end-2 bg-white w-64 sm:w-96 h-96 m-auto rounded-2xl"
          style={{ y: y2, rotate: rotate2 }}
        />

        <div className="row-start-2 row-end-3 lg:row-start-1 lg:row-end-2 col-start-1 col-end-2 lg:col-start-2 lg:col-end-3">
          <p className="font-semibold text-3xl">project two</p>

          <div className="flex flex-col mt-10 mb-0 gap-y-8">
            <p className="font-light opacity-75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sodales dui eget nulla dictum blandit non nec nisl. Cras
              consectetur mi vitae purus porttitor vestibulum. Sed porta luctus
              nulla nec rhoncus. Proin massa nibh, rhoncus eu sollicitudin nec,
              imperdiet in libero.
            </p>

            <p className="font-light opacity-75">
              Sed porta luctus nulla nec rhoncus. Proin massa nibh, rhoncus eu
              sollicitudin nec, imperdiet in libero.
            </p>

            <p className="font-light opacity-75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sodales dui eget nulla dictum blandit non nec nisl. Cras
              consectetur mi vitae purus porttitor vestibulum. Sed porta luctus
              nulla nec rhoncus. Proin massa nibh, rhoncus eu sollicitudin nec,
              imperdiet in libero. Nunc rhoncus efficitur est, a suscipit orci
              laoreet id.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 lg:gap-x-24">
        <motion.div
          className="row-start-1 row-end-2 col-start-1 col-end-2 lg:col-start-2 lg:col-end-3 bg-white w-64 sm:w-96 h-96 m-auto rounded-2xl"
          style={{ y: y3, rotate: rotate3 }}
        />

        <div className="row-start-2 row-end-3 lg:row-start-1 lg:row-end-2 col-start-1 col-end-2">
          <p className="font-semibold text-3xl">project three</p>

          <div className="flex flex-col mt-10 mb-0 gap-y-8">
            <p className="font-light opacity-75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sodales dui eget nulla dictum blandit non nec nisl. Cras
              consectetur mi vitae purus porttitor vestibulum. Sed porta luctus
              nulla nec rhoncus. Proin massa nibh, rhoncus eu sollicitudin nec,
              imperdiet in libero.
            </p>

            <p className="font-light opacity-75">
              Sed porta luctus nulla nec rhoncus. Proin massa nibh, rhoncus eu
              sollicitudin nec, imperdiet in libero.
            </p>

            <p className="font-light opacity-75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sodales dui eget nulla dictum blandit non nec nisl. Cras
              consectetur mi vitae purus porttitor vestibulum. Sed porta luctus
              nulla nec rhoncus. Proin massa nibh, rhoncus eu sollicitudin nec,
              imperdiet in libero. Nunc rhoncus efficitur est, a suscipit orci
              laoreet id.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-0 mb-0">
        <p className="font-light">some other works</p>
      </div>
    </div>
  );
};

export default Projects;
