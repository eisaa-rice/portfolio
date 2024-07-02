import Hero from "./components/Hero/Hero";
import About from "./components/About Me/About";
import Skills from "./components/Skills/Skills";

export default function Home() {
  return (
    // WHY DOES IT KEEP MAKING A SCROLL
    <div className="overflow-x-hidden">
      <Hero />

      <About />

      <Skills />
    </div>
  );
}
