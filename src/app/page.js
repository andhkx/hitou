import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Layanan from "@/components/Layanan";
import Pricing from "@/components/Pricing";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Background />
      <Navbar />
      <div className="relative z-[2]">
        <Hero />
        <Layanan />
        <Pricing />
        <Portfolio />
        <Process />
        <FAQ />
        <Testimonials />
        <CTA />
      </div>
      <Footer />
    </main>
  );
}
