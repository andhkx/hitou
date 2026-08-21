"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { ArrowRight, ExternalLink, FolderGit2, MessageCircle, Play } from "lucide-react";
import { projects, techStack, wa } from "@/data/portfolio";

const EASE = [0.4, 0, 0.2, 1];

function SafeImg({ src, alt, className, fallback }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={className} loading="lazy" decoding="async" />;
}

function SectionHead({ title, sub }) {
  return (
    <div className="mb-8 text-center">
      <h2 className="mb-3 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-5xl">{title}</h2>
      {sub && <p className="mx-auto max-w-xl px-2 text-sm leading-relaxed text-white/60 md:text-base">{sub}</p>}
    </div>
  );
}

export default function Portfolio({ limit, viewAllHref, hideHeading, showLogoLoop = true, showCtaCard = true }) {
  const reduce = useReducedMotion();
  const list = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="portfolio" className={`relative z-10 mx-auto w-full max-w-[1300px] px-5 text-white sm:px-8 md:px-12 ${hideHeading ? "pt-6" : "py-16 md:py-24"}`}>
      {!hideHeading && <SectionHead title="Portofolio" sub="Hasil kerja terbaru, dari live production sampai project sekolah." />}

      <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
        {list.map((p, i) => (
          <motion.article
            key={p.id}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
            className="flex min-h-full w-[84vw] max-w-[360px] flex-shrink-0 snap-start flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#14181f] md:w-auto"
          >
            <div className="relative aspect-video overflow-hidden bg-black/30">
              <SafeImg src={p.image} alt={p.title} className="h-full w-full object-cover" fallback={null} />
              <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                {p.status}
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-4 p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-extrabold leading-tight md:text-xl">{p.title}</h3>
                <span className="font-mono text-[11px] text-white/45">{p.year}</span>
              </div>
              <p className="text-sm leading-relaxed text-white/60">{p.desc}</p>

              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-bold text-white/55">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-2.5 pt-2">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-[12px] font-bold transition-colors ${
                      l.type === "primary"
                        ? "bg-white text-black hover:bg-white/90"
                        : "border border-white/10 text-white/65 hover:border-white/25 hover:text-white"
                    }`}
                  >
                    {l.label.includes("Repo") ? <FolderGit2 size={14} aria-hidden="true" /> : l.label.includes("Video") ? <Play size={14} aria-hidden="true" /> : <ExternalLink size={14} aria-hidden="true" />}
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {showCtaCard && (
        <div className="mt-10 rounded-[24px] border border-white/10 bg-[#14181f] p-6 text-center md:mt-14">
          <p className="mb-2 text-xl font-extrabold tracking-tight md:text-2xl">Punya project seperti ini?</p>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
            Website kamu bisa jadi di sini — mulai dari Rp 250rb, warna dan fitur sesuai keinginan.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a href={wa("Halo Hitou! Saya mau buat website, boleh konsultasi?")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-extrabold text-black hover:bg-white/90">
              <MessageCircle size={16} aria-hidden="true" /> Chat WhatsApp
            </a>
            <Link href="/harga" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3.5 text-sm font-bold text-white/80 hover:bg-white/[0.04]">
              Lihat Paket <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}

      {showLogoLoop && (
        <div className="mt-14">
          <p className="mb-6 text-center font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">Teknologi yang saya pakai</p>
          <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#14181f] p-4">
            <div className="flex gap-10 overflow-x-auto scrollbar-none md:justify-center">
              {techStack.flatMap((g) => g.items).map((t) => (
                <div key={t.name} className="flex items-center gap-2 whitespace-nowrap text-white/55">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.logo} alt={t.name} className="h-5 w-5 opacity-90" loading="lazy" decoding="async" />
                  <span className="text-sm font-semibold">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {viewAllHref && (
        <div className="mt-10 text-center">
          <Link href={viewAllHref} className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3.5 text-sm font-bold text-white hover:bg-white/[0.04]">
            Lihat Semua Portofolio <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      )}
    </section>
  );
}
