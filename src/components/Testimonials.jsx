"use client";

import { motion, useReducedMotion } from "motion/react";
import { MessageCircle, Quote } from "lucide-react";
import { testimonialsPlaceholder, wa } from "@/data/portfolio";

const EASE = [0.16, 1, 0.3, 1];

export default function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <section
      id="testimonials"
      className="w-full max-w-[900px] mx-auto px-8 md:px-12 lg:px-20 py-24 relative z-10 text-white"
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-3">Apa Kata Klien?</h1>
        <p className="text-white/55 max-w-xl mx-auto text-sm md:text-base">
          Pengalaman orang-orang yang sudah punya website.
        </p>
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="rounded-2xl border border-dashed border-white/15 bg-white/[0.03] backdrop-blur-xl p-8 text-center"
      >
        <Quote size={28} className="text-white/20 mx-auto mb-4" aria-hidden="true" />
        <p className="text-[15px] text-white/60 italic leading-relaxed max-w-lg mx-auto">
          “{testimonialsPlaceholder}”
        </p>
        <a
          href={wa("Halo Andhika! Saya mau jadi klien pertamamu.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-lime-400 text-black text-sm font-bold px-5 py-3 transition-all duration-300 hover:bg-lime-300 active:scale-[0.99]"
        >
          <MessageCircle size={15} aria-hidden="true" />
          Mau Jadi yang Pertama?
        </a>
      </motion.div>
    </section>
  );
}