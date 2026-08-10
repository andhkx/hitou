"use client";

import { motion, useReducedMotion } from "motion/react";
import { Mail, MapPin, Briefcase, CircleDot } from "lucide-react";
import SplitText from "./reactbits/TextAnimations/SplitText/SplitText.jsx";
import { about, profile } from "@/data/portfolio";

const EASE = [0.16, 1, 0.3, 1];

const STATS = [
  { icon: Briefcase, label: "Role", value: about.role },
  { icon: MapPin, label: "Location", value: about.location },
  { icon: Mail, label: "Email", value: about.email },
];

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section
      id="about"
      className="w-full max-w-[1450px] mx-auto px-8 md:px-12 lg:px-20 pt-24 pb-24 text-white relative z-10"
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: EASE }}
        className="mb-12"
      >
        {reduce ? (
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-[-0.03em]">About Me</h1>
        ) : (
          <SplitText
            text="About Me"
            tag="h1"
            className="text-4xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05]"
            duration={0.9}
            delay={35}
            from={{ opacity: 0, y: 60, rotate: 6 }}
            to={{ opacity: 1, y: 0, rotate: 0 }}
            splitType="chars"
            textAlign="left"
          />
        )}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-8 lg:gap-12 items-start">
        <div>
          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
            className="text-[clamp(24px,3.5vw,40px)] font-bold leading-[1.15] tracking-[-0.02em] mb-6"
          >
            {about.name}
          </motion.h2>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            className="mb-6"
          >
            {reduce ? (
              <p className="text-[15px] text-secondary leading-[1.9] max-w-[520px]">{about.intro}</p>
            ) : (
              <SplitText
                text={about.intro}
                tag="p"
                className="text-[15px] text-secondary leading-[1.9] max-w-[520px]"
                duration={0.8}
                delay={25}
                from={{ opacity: 0, y: 24 }}
                to={{ opacity: 1, y: 0 }}
                splitType="words"
                textAlign="left"
                threshold={0.2}
              />
            )}
          </motion.div>

          <div className="space-y-4 max-w-[520px]">
            {about.bio.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={reduce ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.15 * i }}
                className="text-[14px] text-white/55 leading-[1.9]"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={reduce ? false : { opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.1 * (i + 1) }}
              className="rounded-2xl border border-white/15 bg-black/20 p-6 transition-all duration-300 hover:bg-black/30 hover:border-white/20"
            >
              <div className="flex items-center gap-2 mb-3">
                <stat.icon size={15} className="text-white/40" aria-hidden="true" />
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/40">
                  {stat.label}
                </p>
              </div>
              {stat.label === "Email" ? (
                <a
                  href={`mailto:${stat.value}`}
                  className="text-[15px] font-bold leading-tight hover:text-white transition-colors break-all"
                >
                  {stat.value}
                </a>
              ) : (
                <p className="text-[15px] font-bold leading-tight">{stat.value}</p>
              )}
            </motion.div>
          ))}

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
            className="rounded-2xl border border-white/15 bg-black/20 p-6 flex flex-col justify-center gap-3 hover:bg-black/30 hover:border-white/20 transition-all duration-300"
          >
            <div className="flex items-center gap-2.5">
              <CircleDot size={15} className="text-emerald-400" aria-hidden="true" />
              <p className="text-[15px] font-bold">{about.status}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {profile.heroTags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] text-secondary border border-white/10 rounded-full px-2.5 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}