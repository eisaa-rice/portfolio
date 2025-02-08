"use client";

import { useState } from "react";

import Navbar from "./navbar";
import Home from "./home";
import About from "./about";
import Resume from "./resume";
import Work from "./work";

export default function App() {
  const [active, setActive] = useState(0);

  return (
    <>
      <Navbar active={active} onActive={setActive} />

      {active === 0 ? (
        <Home onActive={setActive} />
      ) : active === 1 ? (
        <About />
      ) : active === 2 ? (
        <Work />
      ) : (
        <Resume />
      )}
    </>
  );
}
