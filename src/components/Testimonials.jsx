"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, CheckCheck, Star } from "lucide-react";
import { testimonials } from "@/data/portfolio";

const EASE = [0.16, 1, 0.3, 1];

function initials(name) {
  const words = name.replace(/[.,]/g, "").split(/\s+/).filter(Boolean);
  if (words.length === 0) return "?";
  const first = words[0][0] ?? "";
  const second = words[1]?.[0] ?? "";
  return (first + second).toUpperCase();
}

export default function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <section
      id="testimonials"
      className="w-full max-w-[1450px] mx-auto px-6 md:px-12 lg:px-20 py-16 relative z-10 text-white"
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-3">Kata Mereka</h2>
        <p className="text-white/55 max-w-xl mx-auto text-sm md:text-base px-2">
          Pengalaman orang-orang yang sudah punya website.
        </p>
      </motion.div>

      <p className="swipe-hint justify-center items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-white/45 mb-6">
        Geser untuk melihat
        <ArrowRight size={14} aria-hidden="true" className="animate-float-tiny" />
      </p>

      <div className="swipe-row">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            initial={reduce ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.08 * i, ease: EASE }}
            className="h-full"
          >
            <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-[13px] font-bold text-green-400 border border-green-500/30">
                  {initials(t.name)}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-white truncate">{t.name}</p>
                  <p className="flex items-center gap-1.5 text-[11px] text-green-400/90">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400" aria-hidden="true" />
                    online • {t.role}
                  </p>
                </div>
                <Star size={14} className="shrink-0 fill-white/70 text-white/70" aria-hidden="true" />
              </div>

              <div className="flex-1 rounded-2xl rounded-tl-sm bg-white/[0.07] border border-white/10 p-4">
                <p className="text-[13px] text-white/75 leading-relaxed">“{t.quote}”</p>
              </div>

              <div className="flex items-center justify-between gap-2 mt-2.5">
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, s) => (
                    <Star key={s} size={12} className="fill-white/60 text-white/60" aria-hidden="true" />
                  ))}
                </div>
                <span className="flex items-center gap-1.5 text-[11px] text-white/40">
                  {("0" + (9 + i)).slice(-2)}.24
                  <CheckCheck size={13} className="text-blue-400/80" aria-hidden="true" />
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}