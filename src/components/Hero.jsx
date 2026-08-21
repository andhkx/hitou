"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { profile, wa } from "@/data/portfolio";

const EASE = [0.4, 0, 0.2, 1];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="min-h-[100dvh] px-5 sm:px-8 md:px-12 lg:px-20 pt-28 pb-16 md:pt-24 flex items-center">
      <div className="w-full max-w-[1200px] mx-auto grid lg:grid-cols-2 items-center gap-12 lg:gap-14">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-center lg:text-left"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#53bdeb] font-bold mb-4">
            {profile.eyebrow}
          </p>
          <h1 className="text-[clamp(34px,5vw,58px)] leading-[1.08] font-extrabold tracking-tight mb-5">
            Website untuk bisnismu, <span className="text-[#53bdeb]">dibikin serius.</span>
          </h1>
          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 mb-7">
            Dari website UMKM, katalog produk, hingga top up game dan sistem custom. Hitou bantu bisnismu tampil profesional.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            <a
              href={wa("Halo Hitou! Saya ingin konsultasi pembuatan website.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#53bdeb] text-black font-bold text-sm px-5 py-3.5 transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Konsultasi Gratis
            </a>
            <Link href="/portofolio" className="inline-flex items-center gap-2 rounded-xl border border-white/20 text-white font-bold text-sm px-5 py-3.5 hover:bg-white/5">
              Lihat Portofolio
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          className="relative mx-auto w-full max-w-[620px] animate-float-slow"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/contoh_website_hitou.png"
            alt="Contoh website dibuat Hitou"
            width="1536"
            height="1024"
            className="h-auto w-full object-contain drop-shadow-[0_30px_70px_rgba(0,0,0,0.65)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
