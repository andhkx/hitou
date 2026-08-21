"use client";

import { motion, useReducedMotion } from "motion/react";
import { CheckCheck, ArrowRight, Star } from "lucide-react";
import { testimonials } from "@/data/portfolio";

const EASE = [0.4, 0, 0.2, 1];

function initials(name) {
  const words = name.replace(/[.,]/g, "").split(/\s+/).filter(Boolean);
  if (words.length === 0) return "?";
  return ((words[0][0] ?? "") + (words[1]?.[0] ?? "")).toUpperCase();
}

export default function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <section id="testimonials" className="relative z-10 mx-auto w-full max-w-[1300px] px-5 py-16 text-white sm:px-8 md:px-12 md:py-24">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mb-8 text-center"
      >
        <h2 className="mb-3 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-5xl">Kata mereka setelah punya website.</h2>
        <p className="mx-auto max-w-xl text-sm leading-relaxed text-white/60 md:text-base">Format chat, ringan, dan mudah dibaca di mobile.</p>
      </motion.div>

      <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
        {testimonials.map((t, i) => (
          <motion.article
            key={t.id}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
            className="flex w-[84vw] max-w-[360px] flex-shrink-0 snap-start flex-col rounded-[24px] border border-white/10 bg-[#14181f] p-5 md:w-auto"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#53bdeb]/15 text-sm font-extrabold text-[#53bdeb]">{initials(t.name)}</span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-extrabold text-white">{t.name}</p>
                <p className="text-[11px] text-green-400">online • {t.role}</p>
              </div>
              <div className="flex gap-0.5 text-white/65">
                {[...Array(t.rating)].map((_, s) => <Star key={s} size={12} className="fill-white/60 text-white/60" aria-hidden="true" />)}
              </div>
            </div>

            <div className="rounded-2xl rounded-tl-sm border border-white/10 bg-white/[0.05] p-4">
              <p className="text-sm leading-relaxed text-white/75">{t.quote}</p>
            </div>

            <div className="mt-3 flex items-center justify-between text-[11px] text-white/40">
              <span>{("0" + (9 + i)).slice(-2)}.24</span>
              <span className="inline-flex items-center gap-1 text-blue-400"><CheckCheck size={13} aria-hidden="true" /> read</span>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3.5 text-sm font-bold text-white hover:bg-white/[0.04]">
          Chat Sekarang <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
