"use client";

import { useSyncExternalStore } from "react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import Typewriter from "./reactbits/TextAnimations/Typewriter/Typewriter.jsx";
import SpecularButton from "./reactbits/SpecularButton/SpecularButton.jsx";
import DeviceMockup from "./DeviceMockup.jsx";
import { profile, wa } from "@/data/portfolio";

const EASE = [0.16, 1, 0.3, 1];

const coarseMedia =
  typeof window !== "undefined" ? window.matchMedia("(pointer: coarse)") : null;

function subscribeCoarse(callback) {
  coarseMedia?.addEventListener("change", callback);
  return () => coarseMedia?.removeEventListener("change", callback);
}

function getCoarse() {
  return coarseMedia?.matches ?? false;
}

export default function Hero() {
  const reduce = useReducedMotion();
  const coarse = useSyncExternalStore(subscribeCoarse, getCoarse, () => false);

  return (
    <section
      id="home"
      className="px-6 md:px-12 lg:px-20 min-h-[100dvh] flex items-center relative overflow-hidden pt-28 md:pt-20 pb-20"
    >
      <div className="w-full max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
        <div className="relative z-10">
          <motion.div
            initial={reduce ? false : { opacity: 0, filter: "blur(12px)", y: 30 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
            className="mb-5"
          >
            <span className="font-mono text-[12px] text-secondary tracking-[0.2em] uppercase">
              <span className="hero-star text-white" aria-hidden="true">✦</span>{" "}
              {profile.eyebrow.replace("✦ ", "")}
            </span>
          </motion.div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 60, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: EASE }}
            className="text-[clamp(32px,6vw,52px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground mb-6"
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
            {reduce || coarse ? (
              <p className="text-[15px] text-secondary leading-[1.9]">
                {profile.typedDescriptions[0]}
              </p>
            ) : (
              <div className="min-h-[96px] md:min-h-[66px]">
                <div className="text-[15px] text-secondary leading-[1.9]">
                  <Typewriter
                    text={profile.typedDescriptions}
                    speed={30}
                    waitTime={1500}
                    deleteSpeed={12}
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
            <SpecularButton
              size="lg"
              radius={14}
              tint="#ffffff"
              tintOpacity={0.05}
              blur={6}
              textColor="#ffffff"
              lineColor="#ffffff"
              baseColor="#9a9a9a"
              intensity={1.1}
              shineSize={8}
              shineFade={35}
              thickness={1.2}
              speed={0.4}
              followMouse
              proximity={250}
              autoAnimate
              onClick={() => window.open(wa("Halo Hitou! Saya mau pesan website."), "_blank")}
            >
              <MessageCircle size={16} aria-hidden="true" />
              {profile.ctaPrimary}
            </SpecularButton>
            <Link
              href="/harga"
              className="inline-flex items-center gap-2 rounded-lg border border-white/25 text-white text-[15px] font-semibold px-6 py-3.5 transition-all duration-300 hover:bg-white/10 hover:border-white/50"
            >
              {profile.ctaSecondary}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </motion.div>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: EASE }}
            className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted mb-7"
          >
            {profile.heroMicrocopy}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30, scale: 0.88 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 1.15, ease: EASE }}
            className="flex gap-2 flex-wrap"
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

        {/* Kanan: mockup device melayang (desktop) */}
        <div className="hidden lg:block relative z-0 h-[460px] select-none">
          <div className="absolute left-0 top-8 w-[300px] -rotate-6">
            <DeviceMockup device="phone" src="/assets/projects/2.webp" alt="Screenshot aplikasi BK Guidance System" />
          </div>
          <div className="absolute right-0 top-0 w-[420px] rotate-2">
            <DeviceMockup device="laptop" src="/assets/projects/1.webp" alt="Screenshot website Mahessa Holiday" float="tiny" />
          </div>
          <div className="absolute bottom-6 right-8 animate-float-tiny">
            <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-xl px-4 py-3 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)]">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                <MessageCircle size={16} aria-hidden="true" />
              </span>
              <div>
                <p className="text-[12px] font-bold leading-tight">Respon cepat.</p>
                <p className="font-mono text-[10px] text-white/50">via WhatsApp</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mockup phone kecil untuk mobile (di bawah copy) */}
      <div className="lg:hidden mt-14 flex justify-center">
        <DeviceMockup device="phone" src="/assets/projects/2.webp" alt="Screenshot aplikasi BK Guidance System" />
      </div>
    </section>
  );
}