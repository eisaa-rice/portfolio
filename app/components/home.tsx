"use client";

import Image from "next/image";

import { motion } from "framer-motion";

const Home = ({}: {}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="rounded-full h-52 w-52 bg-white 
        relative overflow-hidden
        border-2 border-white mt-16"
      >
        <Image
          className="mt-8 scale-125 transform"
          src="/images/animoji.png"
          alt="literally me"
          fill={true}
          objectFit="contain"
        />
      </div>

      <p className="text-4xl mt-12">
        holá 👋🏻 i&apos;m <span className="font-bold">jesus orozco</span>
      </p>

      <p className="text-7xl font-extrabold my-8">software developer</p>

      <div className="flex items-center justify-center gap-12 my-6">
        <motion.button
          className="border border-lime-300 text-black 
          relative rounded-full py-4 px-6 flex items-center justify-center gap-3"
          onClick={() => {
            navigator.clipboard.writeText("jesusoro@umich.edu");
          }}
        >
          jesusoro@umich.edu
          <Image
            className=""
            src="/svgs/copy.svg"
            alt="copy email"
            height={30}
            width={30}
          />
        </motion.button>

        <button
          className="bg-lime-300 text-black font-semibold
        rounded-full py-4 px-6"
        >
          résumé
        </button>
      </div>

      <p className="text-xl mt-10">
        currently: <span className="font-normal">open for positions</span>
      </p>
    </div>
  );
};

export default Home;
