import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

import Hero from "./components/sections/hero";
import About from "./components/sections/about";
import Skills from "./components/sections/skills";
import Experience from "./components/sections/experience";
import Projects from "./components/sections/projects";

export default function Home() {
  return (
    <div
      className="flex flex-col min-h-screen items-center justify-center 
      font-light"
    >
      <Header />

      <main
        className="min-h-screen w-full max-w-6xl
        flex flex-col items-center sm:items-start gap-96
        p-6"
      >
        <Hero />

        <About />

        <Skills />

        <Experience />

        <Projects />
      </main>

      <Footer />
    </div>
  );
}
