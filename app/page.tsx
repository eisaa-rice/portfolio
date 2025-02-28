"use client";

// import { useState } from "react";

import Home from "./components/home";
import About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Resume from "./components/resume";
import Footer from "./components/footer";
import Skills from "./components/skills";

export default function App() {
  return (
    <div
      className="mx-auto min-h-screen max-w-screen-xl px-4
    lg:flex lg:justify-between lg:gap-32"
    >
      <Home />

      <main
        className="flex flex-col items-center justify-start 
        lg:w-2/3 lg:py-24 gap-24"
      >
        <About />

        <Skills />

        <Experience />

        <Projects />

        <Footer />
      </main>
    </div>
  );
}
