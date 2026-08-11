"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/portfolio";

const EASE = [0.16, 1, 0.3, 1];

export default function FAQ() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(0);

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
        <h1 className="text-3xl md:text-5xl font-bold mb-3">FAQ</h1>
        <p className="text-white/55 max-w-xl mx-auto text-sm md:text-base">
          Pertanyaan yang paling sering ditanyakan.
        </p>
      </motion.div>

      <div className="space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={f.q}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.04 * i, ease: EASE }}
              className={`rounded-2xl border backdrop-blur-xl transition-colors duration-300 ${
                isOpen ? "border-lime-400/30 bg-white/[0.06]" : "border-white/10 bg-white/[0.04] hover:border-white/20"
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
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
    </section>
  );
}