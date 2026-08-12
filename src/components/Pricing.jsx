"use client";

import { motion, useReducedMotion } from "motion/react";
import { AlertTriangle, ArrowUpRight, Check, CheckCircle2, Sparkles } from "lucide-react";
import BorderGlow from "./reactbits/BorderGlow/BorderGlow.jsx";
import { pricing, wa } from "@/data/portfolio";

const EASE = [0.16, 1, 0.3, 1];

export default function Pricing() {
  const reduce = useReducedMotion();

  return (
    <section
      id="pricing"
      className="w-full max-w-[1450px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20 pt-20 pb-24 relative z-10 text-white"
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-3">Paket Harga</h2>
        <p className="text-white/55 max-w-xl mx-auto text-sm md:text-base px-2">
          Pilih yang pas di kantong. Nggak ada biaya tersembunyi.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
        {pricing.map((p, i) => {
          const dark = p.popular; // kartu featured: putih solid, teks gelap

          const t = {
            label: dark ? "text-black/50" : "text-white/40",
            desc: dark ? "text-black/60" : "text-white/50",
            feature: dark ? "text-black/75" : "text-white/75",
            icon: dark ? "text-black" : "text-white",
            forLabel: dark ? "text-black/50" : "text-white/40",
            badge: dark
              ? "border-black/30 bg-black/[0.06] text-black/80 shadow-[0_0_10px_rgba(0,0,0,0.08)]"
              : "border-white/40 bg-white/[0.06] text-white/85 shadow-[0_0_10px_rgba(255,255,255,0.12)]",
            badgeExample: dark
              ? "border-black/40 bg-black/[0.08] text-black shadow-[0_0_12px_rgba(0,0,0,0.12)] hover:bg-black/15"
              : "border-white/50 bg-white/[0.08] text-white shadow-[0_0_12px_rgba(255,255,255,0.18)] hover:bg-white/15",
            note: dark
              ? "border-black/20 bg-black/[0.04] text-black/60"
              : "border-white/25 bg-white/[0.04] text-white/60",
            cta: dark
              ? "bg-black text-white hover:bg-black/85 shadow-[0_0_25px_rgba(0,0,0,0.25)]"
              : "bg-white text-black hover:bg-white/90",
          };

          const cardInner = (
            <div
              className={`p-5 sm:p-6 flex flex-col h-full relative ${
                dark ? "bg-white text-black" : "text-white"
              } ${dark ? "rounded-[24px] border border-white/30 shadow-[0_0_45px_rgba(255,255,255,0.22)]" : ""}`}
            >
              <p
                className={`font-mono text-[13px] sm:text-[14px] font-bold tracking-[0.25em] uppercase mb-2 ${
                  dark ? "text-black" : "text-white"
                }`}
              >
                {p.name}
              </p>

              <p className={`font-mono text-[10px] uppercase tracking-[0.2em] mb-1 ${t.label}`}>
                {p.id === "kantong" ? "Harga" : "Mulai dari"}
              </p>
              <h3 className="text-[26px] sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-2">
                {p.price}
              </h3>
              <p className={`text-[13px] leading-relaxed mb-4 ${t.desc}`}>{p.desc}</p>

              <div className="mb-6">
                <p className={`font-mono text-[10px] uppercase tracking-[0.15em] mb-2 ${t.forLabel}`}>
                  Cocok buat
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.for.split(", ").map((item) => (
                    <span key={item} className={`border rounded-full px-2.5 py-1 text-[11px] ${t.badge}`}>
                      {item}
                    </span>
                  ))}
                  {p.example && (
                    <a
                      href={p.example}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1 border rounded-full px-2.5 py-1 text-[11px] transition-colors ${t.badgeExample}`}
                    >
                      contoh: {p.example.replace("https://", "")}
                      <ArrowUpRight size={11} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>

              <ul className="space-y-2.5 mb-5 flex-1">
                {p.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-[13px] ${t.feature}`}>
                    <Check size={15} className={`shrink-0 mt-0.5 ${t.icon}`} aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>

              {p.note && (
                <p
                  className={`inline-flex items-start gap-2 font-mono text-[10px] tracking-wide leading-relaxed rounded-lg border px-3 py-2 mb-5 ${t.note}`}
                >
                  {p.id === "kantong" ? (
                    <AlertTriangle size={13} className={`shrink-0 mt-0.5 ${t.icon}`} aria-hidden="true" />
                  ) : (
                    <CheckCircle2 size={13} className={`shrink-0 mt-0.5 ${t.icon}`} aria-hidden="true" />
                  )}
                  {p.note}
                </p>
              )}

              <a
                href={wa(
                  p.waText ??
                    `Halo Hitou! Saya mau pesan paket ${p.name} — mulai dari ${p.price}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto w-full rounded-xl py-4 text-sm font-bold text-center transition-all duration-300 active:scale-[0.99] ${t.cta}`}
              >
                {p.cta}
              </a>
            </div>
          );

          return (
            <motion.div
              key={p.id}
              initial={reduce ? false : { opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.08 * i, ease: EASE }}
              className="relative h-full self-stretch"
            >
              {p.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 rounded-full bg-black text-white text-[11px] font-extrabold tracking-wide px-4 py-1.5 shadow-[0_0_20px_rgba(0,0,0,0.4)] whitespace-nowrap">
                  <Sparkles size={12} aria-hidden="true" />
                  PALING LARIS
                </span>
              )}
              {dark ? (
                cardInner
              ) : (
                <BorderGlow
                  className="h-full"
                  backgroundColor="#181818"
                  borderRadius={24}
                  edgeSensitivity={41}
                  glowColor="0 0 100"
                  glowIntensity={1}
                  fillOpacity={0.45}
                >
                  {cardInner}
                </BorderGlow>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}