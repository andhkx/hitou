"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { layanan, wa } from "@/data/portfolio";

const EASE = [0.4, 0, 0.2, 1];

export default function Layanan() {
  const reduce = useReducedMotion();

  return (
    <section className="w-full max-w-[1300px] mx-auto px-5 sm:px-8 md:px-12 py-16 md:py-24 relative z-10 text-white">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="text-center mb-4 md:mb-6"
      >
        <span className="inline-block font-mono text-[11px] uppercase tracking-[0.25em] text-[#53bdeb] mb-2 font-bold">
          Layanan Kami
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
          Butuh website seperti apa?
        </h2>
        <p className="text-white/60 max-w-xl mx-auto text-sm md:text-base leading-relaxed px-2">
          Pilih solusi yang sesuai dengan kebutuhan bisnis atau usahamu.
        </p>
      </motion.div>

      <div className="flex md:hidden items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#53bdeb] mb-5">
        <span>Geser untuk melihat layanan lainnya</span>
        <ArrowRight size={13} aria-hidden="true" />
      </div>

      <div className="flex md:grid md:grid-cols-3 gap-5 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none pb-4 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0">
        {layanan.map((item, i) => (
          <motion.article
            key={item.id}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
            className="flex-shrink-0 w-[84vw] max-w-[360px] md:w-auto snap-start flex flex-col justify-between rounded-[24px] bg-[#14181f] border border-white/10 overflow-hidden group hover:border-[#53bdeb]/50 transition-colors duration-300 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)]"
          >
            <div className="p-6 md:p-7 pb-4">
              <span className="inline-flex font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#53bdeb]/10 text-[#53bdeb] font-bold border border-[#53bdeb]/20 mb-3">
                {item.badge}
              </span>
              <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-white/60 text-[13px] md:text-sm leading-relaxed">{item.desc}</p>
            </div>

            {/* Phone mockup: sengaja dipotong bawah seperti kartu Dibikinin */}
            <div className="relative mt-2 px-6 overflow-hidden bg-gradient-to-b from-transparent to-black/40">
              <div className="relative mx-auto w-full max-w-[270px] h-[260px] sm:h-[300px] overflow-hidden rounded-t-[32px] shadow-[0_-8px_30px_-12px_rgba(0,0,0,0.7)] transition-transform duration-500 group-hover:-translate-y-2">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 767px) 84vw, 360px"
                  className="object-cover object-top"
                  priority={i === 0}
                />
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
        className="mt-12 md:mt-16 text-center rounded-[20px] bg-[#14181f]/70 border border-white/10 p-6 sm:p-8 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <div className="text-center sm:text-left">
          <p className="text-white font-bold text-base md:text-lg mb-1">Belum tahu website yang kamu butuhkan?</p>
          <p className="text-white/50 text-xs md:text-sm">Konsultasi gratis, kami bantu tentukan solusi terbaik sesuai budgetmu.</p>
        </div>
        <a
          href={wa("Halo Hitou! Saya ingin konsultasi website yang cocok untuk kebutuhan saya.")}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-[#53bdeb] text-black font-bold text-sm px-5 py-3 transition-all duration-200 hover:bg-[#53bdeb]/90 active:scale-95 shadow-[0_0_20px_rgba(83,189,235,0.3)]"
        >
          <MessageCircle size={16} aria-hidden="true" />
          Konsultasi Gratis
        </a>
      </motion.div>
    </section>
  );
}