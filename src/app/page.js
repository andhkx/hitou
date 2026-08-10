import Background from "@/components/Background";
import IntroLoader from "@/components/IntroLoader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <IntroLoader />
      <Background />
      <Navbar />
      <div className="relative z-[2]">
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}