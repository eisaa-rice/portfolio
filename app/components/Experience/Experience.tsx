"use client";

import React from "react";
import Image from "next/image";

import "./Experience.css";

function Experience() {
  return (
    <div className="experience">
      <div>
        <p className="text-4xl font-bold text-center">
          here&apos;s where i&apos;ve been
        </p>

        <Image
          className="secondary-underline hidden sm:block sm:mx-auto"
          src="/images/underline-one.png"
          alt=""
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}

export default Experience;
