"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Gamepad2, MessageCircle, MonitorSmartphone, Store } from "lucide-react";
import { layanan, wa } from "@/data/portfolio";

const EASE = [0.4, 0, 0.2, 1];
const ICONS = {
  umkm: MonitorSmartphone,
  katalog: Store,
  jb: Gamepad2,
};

export default function Layanan() {
  const reduce = useReducedMotion();

  return (
    <section className="relative z-10 mx-auto w-full max-w-[1300px] px-5 py-16 text-white sm:px-8 md:px-12 md:py-24">
      <motion.div initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6, ease: EASE }} className="mb-6 text-center">
        <span className="mb-2 inline-block font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#53bdeb]">Layanan Kami</span>
        <h2 className="mb-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-5xl">Butuh website seperti apa?</h2>
        <p className="mx-auto max-w-xl px-2 text-sm leading-relaxed text-white/60 md:text-base">Pilih solusi yang sesuai dengan kebutuhan bisnis atau usahamu.</p>
      </motion.div>

      <div className="mb-5 flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#53bdeb] md:hidden">
        <span>Geser untuk melihat layanan lainnya</span>
        <ArrowRight size={13} aria-hidden="true" />
      </div>

      <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
        {layanan.map((item, i) => {
          const Icon = ICONS[item.id] ?? MonitorSmartphone;
          return (
            <motion.article
              key={item.id}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              className="group relative flex min-h-[520px] w-[84vw] max-w-[360px] flex-shrink-0 snap-start flex-col justify-between rounded-[24px] border border-white/10 bg-[#14181f] shadow-[0_10px_30px_-12px_rgba(0,0,0,0.55)] transition-transform duration-300 hover:-translate-y-1 md:w-auto"
            >
              <div className="p-6 pb-3 md:p-7 md:pb-4">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <Icon size={20} className="text-[#53bdeb]" strokeWidth={1.6} aria-hidden="true" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-white/35">Website</span>
                </div>
                <h3 className="mb-2 text-xl font-extrabold leading-tight text-white md:text-2xl">{item.title}</h3>
                <p className="text-[13px] leading-relaxed text-white/60 md:text-sm">{item.desc}</p>
              </div>

              <div className="relative -mx-2 mt-1 overflow-visible px-4 pb-4 md:px-6">
                <div className="relative mx-auto flex h-[285px] w-full max-w-[300px] items-end justify-center transition-all duration-300 group-hover:-translate-y-4 group-hover:scale-[1.03]">
                  <div className="relative h-[380px] w-full overflow-visible rounded-t-[32px] shadow-[0_-8px_30px_-12px_rgba(0,0,0,0.7)] transition-transform duration-300 group-hover:-translate-y-2">
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
              </div>
            </motion.article>
          );
        })}
      </div>

      <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3, ease: EASE }} className="mx-auto mt-12 max-w-2xl text-center md:mt-16">
        <p className="text-white font-bold text-base md:text-lg">Belum tahu website yang kamu butuhkan?</p>
        <p className="mt-1 text-xs md:text-sm text-white/50">Konsultasi gratis, kami bantu tentukan solusi terbaik sesuai budgetmu.</p>
        <a href={wa("Halo Hitou! Saya ingin konsultasi website yang cocok untuk kebutuhan saya.")} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 font-bold text-[#53bdeb] transition-colors hover:text-white">
          Konsultasi Gratis
        </a>
      </motion.div>
    </section>
  );
}
