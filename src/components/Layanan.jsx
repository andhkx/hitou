"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Gamepad2, MessageCircle, ShoppingBag, Store } from "lucide-react";
import DeviceMockup from "./DeviceMockup.jsx";
import { layanan, wa } from "@/data/portfolio";

const EASE = [0.16, 1, 0.3, 1];

const ICONS = {
  umkm: Store,
  katalog: ShoppingBag,
  store: Gamepad2,
};

export default function Layanan() {
  const reduce = useReducedMotion();

  return (
    <section
      id="layanan"
      className="w-full max-w-[1450px] mx-auto px-6 md:px-12 lg:px-20 py-16 relative z-10 text-white"
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="text-center mb-6"
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-3">Butuh Website Seperti Apa?</h2>
        <p className="text-white/55 max-w-xl mx-auto text-sm md:text-base px-2">
          Pilih kategori yang cocok dengan bisnis kamu, kami bikinkan dari nol.
        </p>
      </motion.div>

      <p className="swipe-hint justify-center items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-white/45 mb-6">
        Geser untuk melihat
        <ArrowRight size={14} aria-hidden="true" className="animate-float-tiny" />
      </p>

      <div className="swipe-row">
        {layanan.map((l, i) => {
          const Icon = ICONS[l.id] ?? Store;
          return (
            <motion.div
              key={l.id}
              initial={reduce ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.08 * i, ease: EASE }}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 flex flex-col h-full"
            >
              <div className="flex justify-center mb-4">
                <DeviceMockup device="phone" float="tiny" crop="half">
                  <div className="flex h-full flex-col items-center justify-center gap-2 px-5 text-center">
                    <Icon size={26} className="text-white/25" aria-hidden="true" />
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30 leading-relaxed">
                      Screenshot
                      <br />
                      contoh untuk
                      <br />
                      {l.title}
                    </p>
                  </div>
                </DeviceMockup>
              </div>

              <h3 className="text-lg font-extrabold mb-1.5">{l.title}</h3>
              <p className="text-[13px] text-white/55 leading-relaxed mb-4">{l.desc}</p>

              <ul className="space-y-2 mb-5 flex-1">
                {l.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-[13px] text-white/70">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-white/60" aria-hidden="true" />
                    {pt}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="font-mono text-[13px] font-bold text-white">{l.starter}</span>
                <span className="font-mono text-[10px] text-white/45">{l.paket}</span>
              </div>

              <a
                href={wa(`Halo Hitou! Saya mau konsultasi bikin ${l.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black text-sm font-bold px-5 py-3.5 transition-all duration-300 hover:bg-white/90 active:scale-[0.99]"
              >
                <MessageCircle size={16} aria-hidden="true" />
                Konsultasi Gratis
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}