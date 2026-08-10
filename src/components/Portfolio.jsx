"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { Award, ArrowUpRight, Code2, Folder } from "lucide-react";
import { projects, certificates, techStack } from "@/data/portfolio";

const EASE = [0.16, 1, 0.3, 1];

const TABS = [
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "tech", label: "Tech Stack" },
];

function Reveal({ children, delay = 0, reduce }) {
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

const tabVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -14, scale: 0.985 },
};

function SafeImg({ src, alt, className, fallback }) {
  const [err, setErr] = useState(false);
  if (err || !src) return fallback;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className={className} loading="lazy" onError={() => setErr(true)} />
  );
}

export default function Portfolio() {
  const reduce = useReducedMotion();
  const [tab, setTab] = useState("projects");

  return (
    <section
      id="portfolio"
      className="w-full max-w-[1450px] mx-auto px-8 md:px-12 lg:px-20 pt-24 pb-24 text-white relative z-10"
    >
      <Reveal reduce={reduce}>
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">Portfolio Showcase</h1>
          <p className="text-white/55 max-w-xl mx-auto text-sm md:text-base">
            Explore my journey through projects, certifications, and technical expertise.
          </p>
        </div>
      </Reveal>

      <Reveal reduce={reduce} delay={0.12}>
        <div className="flex justify-center mb-10">
          <div className="w-full max-w-3xl rounded-full border border-white/10 bg-white/5 p-2 flex gap-2 backdrop-blur-xl">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`flex-1 rounded-full py-3 text-sm transition-all duration-300 ${
                  tab === t.id ? "bg-white/10 text-white" : "text-white/50 hover:text-white"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, delay: 0.15, ease: EASE }}
      >
        <AnimatePresence mode="wait">
          {tab === "projects" && (
            <motion.div
              key="projects"
              variants={tabVariants}
              initial={reduce ? false : "hidden"}
              animate="show"
              exit={reduce ? undefined : "exit"}
              transition={{ duration: 0.5, ease: EASE, staggerChildren: 0.08 }}
              className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 px-1"
            >
              {projects.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={reduce ? false : { opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.08 * i, ease: EASE }}
                  className="group rounded-[24px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 flex flex-col gap-4 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:scale-[1.01]"
                >
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/20 aspect-video mb-4">
                    <SafeImg
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      fallback={
                        <div className="w-full h-full flex items-center justify-center">
                          <Folder size={22} className="text-white/20" />
                        </div>
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <Folder size={18} className="text-white/70" />
                    </div>
                    <span className="font-mono text-[11px] text-white/35">{p.year}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1.5">{p.title}</h3>
                    <p className="text-sm text-white/55 leading-relaxed">{p.description}</p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] text-white/50 border border-white/10 rounded-full px-2.5 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-1 mt-auto">
                    <a
                      href={p.live}
                      className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white/80 hover:text-white transition-colors"
                    >
                      Live <ArrowUpRight size={14} />
                    </a>
                    <a
                      href={p.repo}
                      className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white/80 hover:text-white transition-colors"
                    >
                      Repo <ArrowUpRight size={14} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {tab === "certificates" && (
            <motion.div
              key="certificates"
              variants={tabVariants}
              initial={reduce ? false : "hidden"}
              animate="show"
              exit={reduce ? undefined : "exit"}
              transition={{ duration: 0.5, ease: EASE }}
              className="max-w-3xl mx-auto space-y-4 px-1"
            >
              {certificates.map((c, i) => (
                <motion.div
                  key={c.id}
                  initial={reduce ? false : { opacity: 0, x: -28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.07 * i, ease: EASE }}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20"
                >
                  <div className="w-12 h-12 rounded-lg overflow-hidden border border-white/10 bg-black/20 shrink-0">
                    <SafeImg
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover"
                      fallback={
                        <div className="w-full h-full flex items-center justify-center">
                          <Award size={18} className="text-white/50" />
                        </div>
                      }
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[15px] font-semibold truncate">{c.title}</h3>
                    <p className="text-[13px] text-white/50">{c.issuer}</p>
                  </div>
                  <span className="font-mono text-[11px] text-white/35">{c.year}</span>
                </motion.div>
              ))}
            </motion.div>
          )}

          {tab === "tech" && (
            <motion.div
              key="tech"
              variants={tabVariants}
              initial={reduce ? false : "hidden"}
              animate="show"
              exit={reduce ? undefined : "exit"}
              transition={{ duration: 0.5, ease: EASE }}
              className="grid md:grid-cols-3 gap-6 px-1"
            >
              {techStack.map((group, gi) => (
                <motion.div
                  key={group.category}
                  initial={reduce ? false : { opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.08 * gi, ease: EASE }}
                  className="rounded-[24px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6"
                >
                  <div className="flex items-center gap-2.5 mb-5">
                    <Code2 size={16} className="text-white/60" />
                    <h3 className="text-[15px] font-semibold">{group.category}</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item.name}
                        className="flex items-center gap-2.5 font-mono text-[11px] text-white/60 border border-white/10 rounded-xl px-3 py-2 bg-black/20 transition-all duration-300 hover:border-white/25 hover:text-white/90"
                      >
                        <Image
                          src={item.logo}
                          alt={item.name}
                          width={14}
                          height={14}
                          className="shrink-0"
                        />
                        {item.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}