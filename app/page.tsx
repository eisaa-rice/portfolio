"use client";

// import { useState } from "react";

import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Resume from "./components/resume";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <Navbar />

      <Home />

      <About />

      <Experience />

      <Projects />

      <Footer />
    </>
  );
}
