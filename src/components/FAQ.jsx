"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { faqs, pricing } from "@/data/portfolio";

const EASE = [0.4, 0, 0.2, 1];
const GROUPS = ["kantong", "standar", "premium"];
const VISIBLE = 3;

export default function FAQ() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState("");
  const [showAll, setShowAll] = useState({});

  return (
    <section id="faq" className="relative z-10 mx-auto w-full max-w-[920px] px-5 py-16 text-white sm:px-8 md:px-12 md:py-24">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mb-8 text-center"
      >
        <h2 className="mb-3 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-5xl">Pertanyaan yang sering ditanyakan.</h2>
        <p className="mx-auto max-w-xl text-sm leading-relaxed text-white/60 md:text-base">Ringkasan pertanyaan berdasarkan paket.</p>
      </motion.div>

      <div className="space-y-8">
        {GROUPS.map((gid) => {
          const list = faqs[gid] || [];
          const pkg = pricing.find((p) => p.id === gid);
          const visible = showAll[gid] ? list : list.slice(0, VISIBLE);
          return (
            <div key={gid}>
              <p className="mb-3 flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#53bdeb]">
                {pkg?.name ?? gid}
                <span className="normal-case tracking-normal text-white/40">— {pkg?.price}</span>
              </p>
              <div className="space-y-3">
                {visible.map((f, i) => {
                  const k = `${gid}-${i}`;
                  const isOpen = open === k;
                  return (
                    <div key={k} className={`rounded-[18px] border bg-[#14181f] transition-colors ${isOpen ? "border-[#53bdeb]/50" : "border-white/10"}`}>
                      <button onClick={() => setOpen(isOpen ? "" : k)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left" aria-expanded={isOpen}>
                        <span className="text-[15px] font-extrabold text-white">{f.q}</span>
                        <ChevronDown size={16} className={`shrink-0 text-white/50 transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div initial={reduce ? false : { height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: EASE }} className="overflow-hidden">
                            <p className="px-5 pb-5 text-sm leading-relaxed text-white/60">{f.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
              {list.length > VISIBLE && (
                <button onClick={() => setShowAll((p) => ({ ...p, [gid]: !p[gid] }))} className="mt-3 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#53bdeb]">
                  {showAll[gid] ? "Tutup" : `Lihat ${list.length - VISIBLE} pertanyaan lainnya`}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
