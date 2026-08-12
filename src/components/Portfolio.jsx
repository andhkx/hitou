"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Check, ExternalLink, FolderGit2, MessageCircle, Play } from "lucide-react";
import BorderGlow from "./reactbits/BorderGlow/BorderGlow.jsx";
import LogoLoop from "./reactbits/LogoLoop/LogoLoop.jsx";
import { projects, techStack, wa } from "@/data/portfolio";

const EASE = [0.16, 1, 0.3, 1];

function SafeImg({ src, alt, className, fallback }) {
  const [err, setErr] = useState(false);
  if (err || !src) return fallback;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={1280}
      height={720}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => setErr(true)}
    />
  );
}

function SectionHead({ title, sub }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: EASE }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-3">{title}</h2>
      {sub && (
        <p className="text-white/55 max-w-xl mx-auto text-sm md:text-base">{sub}</p>
      )}
    </motion.div>
  );
}

export default function Portfolio() {
  const reduce = useReducedMotion();

  return (
    <section
      id="portfolio"
      className="w-full max-w-[1450px] mx-auto px-8 md:px-12 lg:px-20 pt-24 pb-24 text-white relative z-10"
    >
      <SectionHead
        title="Portofolio"
        sub="Hasil kerja terbaru — live production dan project sekolah."
      />

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={reduce ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.08 * i, ease: EASE }}
            className="h-full"
          >
            <BorderGlow
              className="h-full"
              backgroundColor="#181818"
              borderRadius={24}
              edgeSensitivity={41}
              glowColor="0 0 100"
              glowIntensity={1}
              fillOpacity={0.4}
            >
              <div className="group p-6 flex flex-col gap-4 h-full">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/20 aspect-video">
                  <SafeImg
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    fallback={
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-4xl font-extrabold text-white/15 tracking-tight">
                          {p.title.slice(0, 2).toUpperCase()}
                        </span>
                      </div>
                    }
                  />
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/25 text-white/70 text-[10px] font-bold px-2.5 py-1 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    {p.status}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-bold">{p.title}</h3>
                  <span className="font-mono text-[11px] text-white/35 shrink-0">{p.year}</span>
                </div>
                <p className="text-sm text-white/55 leading-relaxed">{p.desc}</p>

                <div className="flex gap-2 flex-wrap">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] text-white/50 border border-white/10 rounded-full px-2.5 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="space-y-1.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-[13px] text-white/65">
                      <Check size={13} className="text-white/80 shrink-0" aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2.5 mt-auto pt-3">
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-[12px] font-semibold rounded-lg px-3.5 py-2 transition-all duration-300 active:scale-[0.99] ${
                        l.type === "primary"
                          ? "border border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                          : "border border-white/10 text-white/60 hover:text-white hover:border-white/30 hover:bg-white/[0.05]"
                      }`}
                    >
                      {l.label.includes("Repo") ? (
                        <FolderGit2 size={14} aria-hidden="true" />
                      ) : l.label.includes("Video") ? (
                        <Play size={14} aria-hidden="true" />
                      ) : (
                        <ExternalLink size={14} aria-hidden="true" />
                      )}
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </BorderGlow>
          </motion.div>
        ))}

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
          className="h-full"
        >
          <BorderGlow
            className="h-full"
            backgroundColor="#181818"
            borderRadius={24}
            edgeSensitivity={41}
            glowColor="0 0 100"
            glowIntensity={1.3}
            fillOpacity={0.5}
          >
            <div className="p-6 flex flex-col justify-center gap-5 text-center h-full">
              <span className="text-3xl">✨</span>
              <div>
                <h3 className="text-xl font-extrabold mb-2">Punya Project Seperti Ini?</h3>
                <p className="text-sm text-white/55 leading-relaxed">
                  Website kamu bisa jadi di sini — mulai dari Rp 250rb, warna dan fitur sesuai keinginan.
                </p>
              </div>
              <a
                href={wa("Halo Hitou! Saya mau buat website, boleh konsultasi?")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black text-sm font-bold px-5 py-3.5 transition-all duration-300 hover:bg-white/90 active:scale-[0.99]"
              >
                <MessageCircle size={16} aria-hidden="true" />
                Chat WhatsApp
              </a>
              <div>
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-1 text-[13px] font-semibold text-white/70 hover:text-white transition-colors"
                >
                  atau lihat paket dulu
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              </div>
            </div>
          </BorderGlow>
        </motion.div>
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
        className="mt-20"
      >
        <p className="text-center font-mono text-[11px] tracking-[0.25em] uppercase text-white/40 mb-8">
          Teknologi yang Saya Pakai
        </p>
        <div className="w-full overflow-hidden">
          <LogoLoop
            logos={techStack.flatMap((g) => g.items).map((t) => ({ src: t.logo, alt: t.name, title: t.name }))}
            speed={55}
            direction="left"
            logoHeight={20}
            gap={56}
            fadeOut
            fadeOutColor="#151515"
            scaleOnHover
            ariaLabel="Teknologi yang saya pakai"
          />
        </div>
      </motion.div>
    </section>
  );
}