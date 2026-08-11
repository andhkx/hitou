"use client";

import { motion, useReducedMotion } from "motion/react";
import { Zap, Banknote, Smartphone, LifeBuoy } from "lucide-react";
import { valueProps } from "@/data/portfolio";

const EASE = [0.16, 1, 0.3, 1];
const ICONS = { zap: Zap, banknote: Banknote, smartphone: Smartphone, lifebuoy: LifeBuoy };

export default function Value() {
  const reduce = useReducedMotion();

  return (
    <section id="value" className="w-full max-w-[1450px] mx-auto px-8 md:px-12 lg:px-20 py-16 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {valueProps.map((v, i) => {
          const Icon = ICONS[v.icon] ?? Zap;
          return (
            <motion.div
              key={v.title}
              initial={reduce ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.08 * i, ease: EASE }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20"
            >
              <div className="w-10 h-10 rounded-xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center mb-4">
                <Icon size={18} className="text-lime-400" aria-hidden="true" />
              </div>
              <h3 className="text-[15px] font-bold mb-1">{v.title}</h3>
              <p className="text-[13px] text-white/55 leading-relaxed">{v.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}