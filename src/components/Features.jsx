"use client";

import { motion, useReducedMotion } from "motion/react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { features, wa } from "@/data/portfolio";
import { useState } from "react";

const EASE = [0.16, 1, 0.3, 1];

export default function Features() {
  const reduce = useReducedMotion();

  return (
    <section
      id="features"
      className="w-full max-w-[1450px] mx-auto px-8 md:px-12 lg:px-20 py-24 relative z-10 text-white"
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-3">Selalu Included</h1>
        <p className="text-white/55 max-w-xl mx-auto text-sm md:text-base">
          Semua paket sudah termasuk hal-hal ini.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.05 * i, ease: EASE }}
            className="flex items-start gap-3.5 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20"
          >
            <CheckCircle2 size={20} className="text-lime-400 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h3 className="text-[15px] font-bold mb-0.5">{f.title}</h3>
              <p className="text-[13px] text-white/55">{f.desc}</p>
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
          className="rounded-2xl border border-lime-400/25 bg-lime-400/[0.05] p-5 flex items-center justify-between gap-4"
        >
          <div>
            <h3 className="text-[15px] font-bold mb-0.5">Masih ragu?</h3>
            <p className="text-[13px] text-white/55">Tanya apa saja, gratis & tanpa komitmen.</p>
          </div>
          <a
            href={wa("Halo Andhika! Saya mau tanya-tanya soal pembuatan website.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 rounded-xl bg-lime-400 text-black text-[13px] font-bold px-4 py-2.5 transition-all duration-300 hover:bg-lime-300 active:scale-[0.99]"
          >
            <MessageCircle size={14} aria-hidden="true" />
            Tanya
          </a>
        </motion.div>
      </div>
    </section>
  );
}