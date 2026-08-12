"use client";

import { motion, useReducedMotion } from "motion/react";
import { AlertTriangle, ArrowUpRight, Check, CheckCircle2, Sparkles } from "lucide-react";
import BorderGlow from "./reactbits/BorderGlow/BorderGlow.jsx";
import ElectricBorder from "./reactbits/ElectricBorder/ElectricBorder.jsx";
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
          Mulai dari Rp 300k — tanpa biaya tersembunyi.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {pricing.map((p, i) => {
          const cardInner = (
            <div className="p-5 sm:p-6 flex flex-col h-full relative">
              <p className="font-mono text-[13px] sm:text-[14px] font-bold tracking-[0.25em] text-white uppercase mb-2">
                {p.name}
              </p>

              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1">
                {p.id === "custom" ? "Hubungi" : "Mulai dari"}
              </p>
              <h3 className="text-[26px] sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-2">
                {p.price}
              </h3>
              <p className="text-[13px] text-white/50 leading-relaxed mb-4">{p.desc}</p>

              <div className="mb-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/40 mb-2">
                  Cocok buat
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.for.split(", ").map((item) => (
                    <span
                      key={item}
                      className="border border-white/40 bg-white/[0.06] rounded-full px-2.5 py-1 text-[11px] text-white/85 shadow-[0_0_10px_rgba(255,255,255,0.12)]"
                    >
                      {item}
                    </span>
                  ))}
                  {p.example && (
                    <a
                      href={p.example}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 border border-white/50 bg-white/[0.08] rounded-full px-2.5 py-1 text-[11px] text-white shadow-[0_0_12px_rgba(255,255,255,0.18)] hover:bg-white/15 transition-colors"
                    >
                      contoh: {p.example.replace("https://", "")}
                      <ArrowUpRight size={11} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>

              <ul className="space-y-2.5 mb-5 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13px] text-white/75">
                    <Check size={15} className="text-white shrink-0 mt-0.5" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>

              {p.note && (
                <p
                  className={`inline-flex items-start gap-2 font-mono text-[10px] tracking-wide leading-relaxed rounded-lg border px-3 py-2 mb-5 ${
                    p.id === "starter"
                      ? "border-white/25 bg-white/[0.04] text-white/60"
                      : "border-white/35 bg-white/[0.06] text-white/80"
                  }`}
                >
                  {p.id === "starter" ? (
                    <AlertTriangle size={13} className="shrink-0 mt-0.5 text-white/60" aria-hidden="true" />
                  ) : (
                    <CheckCircle2 size={13} className="shrink-0 mt-0.5 text-white" aria-hidden="true" />
                  )}
                  {p.note}
                </p>
              )}

              <a
                href={wa(`Halo Hitou! Saya mau pesan paket ${p.name} — harga ${p.price}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto w-full rounded-xl py-4 text-sm font-bold text-center transition-all duration-300 active:scale-[0.99] ${
                  p.popular
                    ? "bg-white text-black hover:bg-white/90 shadow-[0_0_25px_rgba(255,255,255,0.2)]"
                    : "bg-white text-black hover:bg-white/90"
                }`}
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
              className={`relative h-full self-stretch ${
                p.popular ? "z-10 xl:scale-[1.05] xl:-translate-y-1.5" : ""
              }`}
            >
              {p.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 rounded-full bg-white text-black text-[11px] font-extrabold tracking-wide px-4 py-1.5 shadow-[0_0_20px_rgba(255,255,255,0.4)] whitespace-nowrap">
                  <Sparkles size={12} aria-hidden="true" />
                  PALING LARIS
                </span>
              )}
              {p.popular ? (
                <ElectricBorder
                  className="h-full"
                  color="#ffffff"
                  speed={0.9}
                  chaos={0.1}
                  borderRadius={24}
                  style={{ background: "#181818" }}
                >
                  {cardInner}
                </ElectricBorder>
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