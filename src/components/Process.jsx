"use client";

import { motion, useReducedMotion } from "motion/react";
import { process } from "@/data/portfolio";

const EASE = [0.16, 1, 0.3, 1];

export default function Process() {
  const reduce = useReducedMotion();

  return (
    <section
      id="process"
      className="w-full max-w-[1450px] mx-auto px-8 md:px-12 lg:px-20 py-24 relative z-10 text-white"
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-3">Gimana Prosesnya?</h1>
        <p className="text-white/55 max-w-xl mx-auto text-sm md:text-base">
          Simpel, jelas, dan kamu selalu tahu progress-nya.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {process.map((p, i) => (
          <motion.div
            key={p.step}
            initial={reduce ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.08 * i, ease: EASE }}
            className="relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 overflow-hidden"
          >
            <span className="absolute -top-3 -right-2 text-[64px] font-extrabold text-white/[0.06] leading-none select-none">
              {p.step}
            </span>
            <span className="font-mono text-[11px] text-white/80 tracking-[0.2em]">
              STEP {p.step}
            </span>
            <h3 className="text-[16px] font-bold mt-2 mb-1">{p.title}</h3>
            <span className="inline-block font-mono text-[10px] text-white/45 border border-white/10 rounded-full px-2.5 py-0.5 mb-3 bg-black/20">
              {p.time}
            </span>
            <p className="text-[13px] text-white/55 leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}