"use client";

import { motion, useReducedMotion } from "motion/react";
import { Quote, Star } from "lucide-react";
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
      className="w-full max-w-[1450px] mx-auto px-8 md:px-12 lg:px-20 py-24 relative z-10 text-white"
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-3">Apa Kata Mereka?</h2>
        <p className="text-white/55 max-w-xl mx-auto text-sm md:text-base">
          Pengalaman orang-orang yang sudah punya website.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            initial={reduce ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.08 * i, ease: EASE }}
            className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20"
          >
            <div className="flex gap-0.5 mb-4">
              {[...Array(t.rating)].map((_, s) => (
                <span
                  key={s}
                  className="star-shine inline-flex"
                  style={{ animationDelay: `${s * 0.18}s` }}
                >
                  <Star
                    size={16}
                    className="text-white/70 fill-white/60"
                    aria-hidden="true"
                  />
                </span>
              ))}
            </div>
            <Quote size={22} className="text-white/15 mb-3" aria-hidden="true" />
            <p className="text-sm md:text-[15px] text-white/60 italic leading-relaxed mb-5">
              “{t.quote}”
            </p>
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-[13px] font-bold text-white/80 shrink-0">
                {initials(t.name)}
              </span>
              <div className="min-w-0">
                <p className="font-bold text-white text-sm truncate">{t.name}</p>
                <p className="text-xs text-white/50 truncate">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}