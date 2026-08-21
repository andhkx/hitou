"use client";

import { motion, useReducedMotion } from "motion/react";
import { process } from "@/data/portfolio";

const EASE = [0.4, 0, 0.2, 1];

export default function Process() {
  const reduce = useReducedMotion();

  return (
    <section id="process" className="relative z-10 mx-auto w-full max-w-[1300px] px-5 py-16 text-white sm:px-8 md:px-12 md:py-24">
      <motion.div initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5, ease: EASE }} className="mb-8 text-center">
        <h2 className="mb-3 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-5xl">Cara Kerja</h2>
        <p className="mx-auto max-w-xl text-sm leading-relaxed text-white/60 md:text-base">Gampang, cepat, dan transparan.</p>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {process.slice(0, 4).map((p, i) => (
          <motion.article key={p.step} initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }} className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#14181f] p-6">
            <span className="absolute -right-2 -top-3 text-[60px] font-extrabold leading-none text-white/[0.06] select-none">{p.step}</span>
            <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#53bdeb]/20 bg-[#53bdeb]/10 text-[#53bdeb] font-mono text-[12px] font-extrabold">{p.step}</span>
            <h3 className="mb-2 text-[18px] font-extrabold text-white">{p.title}</h3>
            <p className="mb-3 text-[11px] font-mono uppercase tracking-[0.18em] text-white/40">{p.time}</p>
            <p className="text-sm leading-relaxed text-white/60">{p.desc}</p>
          </motion.article>
        ))}
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          ["Update di Tiap Tahap", "Kamu selalu tahu progressnya — nggak ditinggal diam."],
          ["Tepat Waktu", "Pengerjaan sesuai target yang disepakati."],
          ["Kualitas Terjaga", "Desain modern, responsif, dan teruji."],
          ["Support Penuh", "Tetap kami bantu setelah website live."],
        ].map(([title, desc]) => (
          <div key={title} className="rounded-[18px] border border-white/10 bg-white/[0.03] p-4">
            <p className="mb-1 text-sm font-extrabold text-white">{title}</p>
            <p className="text-[13px] leading-relaxed text-white/50">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
