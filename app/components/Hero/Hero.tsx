import React from "react";
import Image from "next/image";

import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="my-auto pt-52">
        <p className="text-6xl font-bold text-center">jésus orozco</p>

        <Image
          className="main-underline"
          src="/images/underline.png"
          alt=""
          width={450}
          height={300}
        />
      </div>

      <Image
        className="mx-auto flex flex-col mt-auto mb-0 pb-10"
        src="/arrow-down.svg"
        alt=""
        width={48}
        height={48}
      />
    </div>
  );
}

export default Hero;
