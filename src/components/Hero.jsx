"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, MessageCircle } from "lucide-react";
import Typewriter from "./reactbits/TextAnimations/Typewriter/Typewriter.jsx";
import { profile, wa } from "@/data/portfolio";

const Lanyard = dynamic(
  () => import("./reactbits/Backgrounds/Lanyard/Lanyard.jsx"),
  { ssr: false }
);

const EASE = [0.16, 1, 0.3, 1];

export default function Hero() {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window.requestIdleCallback === "function") {
      const id = requestIdleCallback(() => setReady(true), { timeout: 5000 });
      return () => cancelIdleCallback(id);
    }
    const t = setTimeout(() => setReady(true), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="px-6 md:pl-[260px] md:pr-[60px] min-h-[100dvh] flex items-center justify-start relative overflow-hidden"
    >
      {ready && (
        <div className="hidden md:block absolute inset-0 z-0 opacity-70 lg:opacity-100 pointer-events-auto">
          {/* PENGATURAN KARTU 3D:
              position = posisi kamera: [x, y, z] -> z 20 = dekat/besar, 25 = jauh/kecil
              fov      = zoom lensa: 13 = kartu besar, 18 = kartu kecil
              gravity  = gravitasi: -40 = normal, -20 = kartu lebih melayang
              lanyardWidth = lebar tali: 2 = sedang, 3 = tebal, 1 = tipis */}
          <Lanyard position={[0, 0, 22]} fov={13} gravity={[0, -40, 0]} lanyardWidth={1} />
        </div>
      )}

      <div className="md:max-w-[640px] w-full relative z-10">
        <motion.div
          initial={reduce ? false : { opacity: 0, filter: "blur(12px)", y: 30 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: EASE }}
          className="mb-5"
        >
          <span className="font-mono text-[12px] text-secondary tracking-[0.2em] uppercase">
            {profile.eyebrow}
          </span>
        </motion.div>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: EASE }}
          className="text-2xl md:text-3xl text-secondary mb-2"
        >
          {profile.greeting}{" "}
          <span className="font-bold text-foreground">{profile.heroName}</span>
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 60, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: EASE }}
          className="text-[clamp(38px,7vw,72px)] font-extrabold leading-[1.02] tracking-[-0.03em] text-foreground mb-6"
        >
          {profile.heroRole}
          <span className="text-secondary">.</span>
        </motion.h1>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 40, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.65, ease: EASE }}
          className="mb-8 w-full max-w-[520px]"
        >
          {reduce ? (
            <p className="text-[15px] text-secondary leading-[1.9]">
              {profile.typedDescriptions[0]}
            </p>
          ) : (
            <div className="min-h-[96px] md:min-h-[66px]">
              <div className="text-[15px] text-secondary leading-[1.9]">
                <Typewriter
                  text={profile.typedDescriptions}
                  speed={24}
                  waitTime={3200}
                  deleteSpeed={14}
                  loop={true}
                  showCursor={true}
                  cursorChar="_"
                />
              </div>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.85, ease: EASE }}
          className="flex items-center gap-3 flex-wrap mb-5"
        >
          <a
            href={wa("Halo Hitou! Saya mau pesan website.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white text-black text-[15px] font-bold px-6 py-3.5 transition-all duration-300 hover:bg-white/90 hover:-translate-y-0.5 active:scale-[0.99]"
          >
            <MessageCircle size={16} aria-hidden="true" />
            {profile.ctaPrimary}
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-lg border border-white/25 text-white text-[15px] font-semibold px-6 py-3.5 transition-all duration-300 hover:bg-white/10 hover:border-white/50"
          >
            {profile.ctaSecondary}
            <ArrowDown size={16} aria-hidden="true" />
          </a>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: EASE }}
          className="mb-8"
        >
          <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted">
            {profile.heroMicrocopy}
          </p>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30, scale: 0.88 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 1.15, ease: EASE }}
          className="flex gap-2 flex-wrap mb-7"
        >
          {profile.heroTags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] text-secondary border border-border rounded-full px-3 py-[5px] bg-card"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.6, ease: EASE }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="flex items-center justify-center gap-2">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted">
            Scroll
          </span>
          <span className="text-base text-secondary leading-none">↓</span>
        </div>
      </motion.div>
    </section>
  );
}