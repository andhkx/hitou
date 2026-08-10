import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Background />
      <Navbar />
      <div className="relative z-[2]">
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </main>
  );
}