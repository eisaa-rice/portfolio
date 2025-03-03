"use client";

// import { useState } from "react";

import Home from "./components/home";
import About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Resume from "./components/resume";
import Footer from "./components/footer";
import Skills from "./components/skills";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <div
      className="flex flex-col items-center
    max-w-screen-xl mx-auto gap-36 
    lg:mt-32"
    >
      <Navbar />

      <Home />

      <About />

      <Skills />

      <Experience />

      <Projects />

      <Footer />
    </div>
  );
}
