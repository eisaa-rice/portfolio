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
          className="secondary-underline hidden sm:block sm:mx-auto md:mx-0"
          src="/images/underline.png"
          alt=""
          width={450}
          height={300}
        />
      </div>

      <div className="md:grid md:grid-cols-2 gap-20">
        {/* md:mb-16 lg:mb-28 */}
        <div className="images flex items-center justify-center mt-48 sm:mt-54 md:mt-0 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2">
          <Image
            className="rounded-full absolute sm:h-[380px] sm:w-[380px] md:h-[300px] md:w-[300px] lg:h-[420px] lg:w-[420px]"
            src="/images/image.png"
            alt=""
            width={245}
            height={245}
          />

          <Image
            className="rounded-full absolute sm:h-[440px] sm:w-[440px] md:h-[360px] md:w-[360px] lg:h-[480px] lg:w-[480px]"
            src="/images/circle.png"
            alt=""
            width={285}
            height={285}
          />
        </div>

        <div className="desc flex flex-col gap-10 lg:gap-24 pt-[200px] sm:pt-[250px] md:pt-0 mt-[200px] sm:mt-[250px] md:mt-0 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2">
          {/* about me: a brief introduction about yourself, your background, and your career goals */}
          <p className="text-lg text-center md:text-start">
            as you&apos;ve probably seen, my name&apos;s{" "}
            <strong>jesus orozco</strong>, but some of my friends call me{" "}
            <strong>eisaa</strong>.
          </p>

          <p className="text-lg text-center md:text-start">
            i was born and raised, and am still <strong>located</strong> in,{" "}
            <strong>detroit, michigan</strong>, where the roots of my{" "}
            <strong>mexican</strong> heritage lie.
          </p>

          <p className="text-lg text-center md:text-start">
            i&apos;m currently attending{" "}
            <strong>university of michigan - dearborn</strong> where i&apos;m
            majoring in <strong>computer science</strong>.
          </p>

          <p className="text-lg text-center md:text-start">
            i&apos;m aspiring to be a <strong>web</strong> and{" "}
            <strong>app developer</strong>, having already worked on multiple
            projects for regional events such as <strong>conferences</strong>{" "}
            and <strong>hackathons</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
