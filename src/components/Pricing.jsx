"use client";

import { motion, useReducedMotion } from "motion/react";
import { Check, MessageCircle, Sparkles } from "lucide-react";
import { pricing, wa } from "@/data/portfolio";

const EASE = [0.4, 0, 0.2, 1];

export default function Pricing({ hideHeading = false }) {
  const reduce = useReducedMotion();

  return (
    <section id="pricing" className="relative z-10 mx-auto w-full max-w-[1300px] px-5 py-16 text-white sm:px-8 md:px-12 md:py-24">
      {!hideHeading && (
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-8 text-center"
        >
          <span className="mb-2 inline-block font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#53bdeb]">
            Harga Paket
          </span>
          <h2 className="mb-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-5xl">
            Paket untuk bisnismu.
          </h2>
          <p className="mx-auto max-w-xl px-2 text-sm leading-relaxed text-white/60 md:text-base">
            Pilih kualitas pengerjaan sesuai target dan budget. Harga tetap fleksibel.
          </p>
        </motion.div>
      )}

      <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
        {pricing.map((p, i) => {
          const featured = p.popular;
          return (
            <motion.article
              key={p.id}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              className={`relative flex min-h-[520px] w-[84vw] max-w-[360px] flex-shrink-0 snap-start flex-col rounded-[24px] border p-6 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.55)] md:w-auto ${
                featured
                  ? "border-[#53bdeb]/50 bg-[#53bdeb] text-black"
                  : "border-white/10 bg-[#14181f] text-white"
              }`}
            >
              {featured && (
                <span className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-black px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-white">
                  <Sparkles size={12} aria-hidden="true" />
                  Paling Laris
                </span>
              )}

              <p className={`mb-3 font-mono text-[11px] font-bold uppercase tracking-[0.22em] ${featured ? "text-black/60" : "text-[#53bdeb]"}`}>
                {p.name}
              </p>
              <h3 className="mb-2 text-3xl font-extrabold tracking-tight md:text-4xl">{p.price}</h3>
              <p className={`mb-5 text-sm leading-relaxed ${featured ? "text-black/70" : "text-white/60"}`}>{p.desc}</p>

              <div className="mb-5 flex flex-wrap gap-1.5">
                {p.for.split(", ").slice(0, 3).map((item) => (
                  <span
                    key={item}
                    className={`rounded-full border px-2.5 py-1 text-[11px] font-bold ${
                      featured ? "border-black/20 bg-black/5 text-black/70" : "border-white/10 bg-white/[0.04] text-white/55"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <ul className="mb-6 flex-1 space-y-3">
                {p.features.slice(0, 6).map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-[13px] ${featured ? "text-black/75" : "text-white/70"}`}>
                    <Check size={15} className="mt-0.5 shrink-0" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={wa(p.waText ?? `Halo Hitou! Saya mau pesan paket ${p.name} mulai dari ${p.price}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-extrabold transition-transform active:scale-[0.98] hover:scale-[1.02] ${
                  featured ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                <MessageCircle size={16} aria-hidden="true" />
                {p.cta}
              </a>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
