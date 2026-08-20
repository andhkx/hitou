import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Background from "@/components/Background";
import IntroLoader from "@/components/IntroLoader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Layanan from "@/components/Layanan";
import Pricing from "@/components/Pricing";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

function KeuntunganTeaser() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 py-12 relative z-10 text-white">
      <Link
        href="/keuntungan"
        className="group flex flex-col md:flex-row items-center justify-between gap-5 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl px-8 py-8 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06]"
      >
        <div>
          <h2 className="text-xl md:text-2xl font-extrabold tracking-tight mb-1.5">
            Masih ragu punya website?
          </h2>
          <p className="text-sm text-white/55 leading-relaxed">
            Intip simulasi singkat — apa jadinya kalau bisnis kamu punya website sendiri.
          </p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-xl bg-white text-black text-sm font-bold px-6 py-3.5 transition-all duration-300 group-hover:bg-white/90 group-hover:translate-x-0.5 active:scale-[0.99] shrink-0">
          Lihat Keuntungan
          <ArrowRight size={16} aria-hidden="true" />
        </span>
      </Link>
    </section>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <IntroLoader />
      <Background />
      <Navbar />
      <div className="relative z-[2]">
        <Hero />
        <Layanan />
        <Pricing limit={3} viewAllHref="/harga" />
        <Portfolio
          limit={2}
          viewAllHref="/portofolio"
          showLogoLoop={false}
          showCtaCard={false}
        />
        <KeuntunganTeaser />
        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
      </div>
      <Footer />
    </main>
  );
}