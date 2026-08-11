import Background from "@/components/Background";
import CursorGlow from "@/components/CursorGlow";
import IntroLoader from "@/components/IntroLoader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Value from "@/components/Value";
import Pricing from "@/components/Pricing";
import Portfolio from "@/components/Portfolio";
import Features from "@/components/Features";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <IntroLoader />
      <Background />
      <CursorGlow />
      <Navbar />
      <div className="relative z-[2]">
        <Hero />
        <Value />
        <Pricing />
        <Portfolio />
        <Features />
        <Process />
        <FAQ />
        <Testimonials />
        <CTA />
      </div>
      <Footer />
    </main>
  );
}