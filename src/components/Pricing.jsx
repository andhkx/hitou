"use client";

import { motion, useReducedMotion } from "motion/react";
import { Check, Sparkles } from "lucide-react";
import { pricing, wa } from "@/data/portfolio";

const EASE = [0.16, 1, 0.3, 1];

export default function Pricing() {
  const reduce = useReducedMotion();

  return (
    <section
      id="pricing"
      className="w-full max-w-[1450px] mx-auto px-8 md:px-12 lg:px-20 pt-20 pb-24 relative z-10 text-white"
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-3">Paket Harga</h1>
        <p className="text-white/55 max-w-xl mx-auto text-sm md:text-base">
          Mulai dari Rp 250rb — tanpa biaya tersembunyi.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {pricing.map((p, i) => (
          <motion.div
            key={p.id}
            initial={reduce ? false : { opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.08 * i, ease: EASE }}
            className={`relative rounded-[24px] border backdrop-blur-xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
              p.popular
                ? "border-white/50 bg-white/[0.07] shadow-[0_0_50px_rgba(255,255,255,0.08)]"
                : "border-white/20 bg-white/[0.04] hover:border-white/35"
            }`}
          >
            {p.popular && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-white text-black text-[11px] font-extrabold tracking-wide px-4 py-1.5 shadow-[0_0_20px_rgba(255,255,255,0.35)]">
                <Sparkles size={12} aria-hidden="true" />
                PALING LARIS
              </span>
            )}

            <p className="font-mono text-[11px] tracking-[0.25em] text-white/45 uppercase mb-2">
              {p.name}
            </p>

            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1">
              {p.id === "custom" ? "Hubungi" : "Mulai dari"}
            </p>
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-2">
              {p.price}
            </h3>
            <p className="text-[13px] text-white/50 leading-relaxed mb-4">{p.desc}</p>

            <p className="text-[12px] text-white/60 leading-relaxed mb-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/40">
                Cocok buat:{" "}
              </span>
              {p.for}
              {p.example && (
                <>
                  {" "}
                  — contoh:{" "}
                  <a
                    href={p.example}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 text-white/80 hover:text-white transition-colors"
                  >
                    {p.example.replace("https://", "")}
                  </a>
                </>
              )}
            </p>

            <ul className="space-y-2.5 mb-6 flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-[13px] text-white/75">
                  <Check size={15} className="text-white shrink-0 mt-0.5" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={wa(`Halo Hitou! Saya mau pesan paket ${p.name} — harga ${p.price}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full rounded-xl py-4 text-sm font-bold text-center transition-all duration-300 active:scale-[0.99] ${
                p.popular
                  ? "bg-white text-black hover:bg-white/90 shadow-[0_0_25px_rgba(255,255,255,0.2)]"
                  : "bg-white text-black hover:bg-white/90"
              }`}
            >
              {p.cta}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}