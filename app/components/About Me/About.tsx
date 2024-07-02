import React from "react";
import Image from "next/image";

import "./About.css";

function About() {
  return (
    <div className="about">
      <div>
        <p className="text-4xl font-bold text-center md:text-start">
          holá, nice to meet you
        </p>

        <Image
          className="about-underline hidden sm:block sm:mx-auto md:mx-0"
          src="/images/underline.png"
          alt=""
          width={450}
          height={300}
        />
      </div>

      <div className="md:grid md:grid-cols-2 gap-20">
        <div className="flex items-center justify-center mt-48 sm:mt-54 md:mt-0 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2">
          <Image
            className="rounded-full absolute sm:h-[380px] sm:w-[380px] md:h-[300px] md:w-[300px] lg:h-[420px] lg:w-[420px]"
            src="/images/image.png"
            alt=""
            width={265}
            height={265}
          />

          <Image
            className="rounded-full absolute sm:h-[440px] sm:w-[440px] md:h-[360px] md:w-[360px] lg:h-[480px] lg:w-[480px]"
            src="/images/circle.png"
            alt=""
            width={315}
            height={315}
          />
        </div>

        <div className="flex flex-col gap-4 lg:gap-28 mt-[200px] sm:mt-[250px] md:mt-0 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2">
          <p>
            Duis aute irure dolor in mexico in detroit velit esse cillum dolore
            eu fugiat nulla pariatur.
          </p>

          <p>
            Lorem software engineer sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna web and app
            development.
          </p>

          <p>
            Ut enim ad minim veniam, university of michigan - dearborn nostrud
            exercitation computer science laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
