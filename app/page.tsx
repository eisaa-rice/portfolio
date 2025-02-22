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
    <div className="flex gap-44 mx-auto min-h-screen max-w-screen-xl">
      <Home />

      <main
        className="flex flex-col items-center justify-start 
      max-w-[50%] pt-24 gap-20"
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
