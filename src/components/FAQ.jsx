"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { faqs, pricing } from "@/data/portfolio";

const EASE = [0.16, 1, 0.3, 1];

const GROUPS = ["kantong", "standar", "premium"];

export default function FAQ() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState("");

  return (
    <section
      id="faq"
      className="w-full max-w-[900px] mx-auto px-8 md:px-12 lg:px-20 py-24 relative z-10 text-white"
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-3">FAQ</h2>
        <p className="text-white/55 max-w-xl mx-auto text-sm md:text-base">
          Pertanyaan berdasarkan paket yang sering ditanyakan.
        </p>
      </motion.div>

      <div className="space-y-10">
        {GROUPS.map((gid) => {
          const list = faqs[gid] || [];
          if (!list.length) return null;
          const pkg = pricing.find((p) => p.id === gid);
          return (
            <div key={gid}>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/45 mb-4 flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" aria-hidden="true" />
                {pkg?.name ?? gid}
                <span className="text-white/30 tracking-normal normal-case">- {pkg?.price ?? ""}</span>
              </p>
              <div className="space-y-3">
                {list.map((f, i) => {
                  const k = `${gid}-${i}`;
                  const isOpen = open === k;
                  return (
                    <motion.div
                      key={k}
                      initial={reduce ? false : { opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5, delay: 0.04 * i, ease: EASE }}
                      className={`rounded-2xl border backdrop-blur-xl transition-colors duration-300 ${
                        isOpen
                          ? "border-white/25 bg-white/[0.06]"
                          : "border-white/10 bg-white/[0.04] hover:border-white/20"
                      }`}
                    >
                      <button
                        onClick={() => setOpen(isOpen ? "" : k)}
                        className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
                        aria-expanded={isOpen}
                      >
                        <span className="text-[15px] font-semibold">{f.q}</span>
                        <ChevronDown
                          size={16}
                          aria-hidden="true"
                          className={`shrink-0 text-white/50 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={reduce ? false : { height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: EASE }}
                            className="overflow-hidden"
                          >
                            <p className="px-5 pb-5 text-sm text-white/60 leading-relaxed">{f.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}