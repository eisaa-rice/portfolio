import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

import Hero from "./components/sections/hero";
import About from "./components/sections/about";

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
      p-6 bg-white/50"
      >
        <Hero />

        <About />
      </main>

      <Footer />
    </div>
  );
}
