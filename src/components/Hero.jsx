"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "motion/react";
import Typewriter from "./reactbits/TextAnimations/Typewriter/Typewriter.jsx";
import { profile } from "@/data/portfolio";

const Lanyard = dynamic(
  () => import("./reactbits/Backgrounds/Lanyard/Lanyard.jsx"),
  { ssr: false }
);

const EASE = [0.16, 1, 0.3, 1];

export default function Hero() {
  const reduce = useReducedMotion();
  const [showLanyard, setShowLanyard] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowLanyard(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="px-6 md:pl-[120px] md:pr-[60px] min-h-[100dvh] flex items-center justify-start relative overflow-hidden"
    >
      {showLanyard && (
        <div className="absolute inset-y-0 right-0 w-full h-full lg:w-[42%] z-0 opacity-70 lg:opacity-100 pointer-events-none lg:pointer-events-auto">
          <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} lanyardWidth={1.2} />
        </div>
      )}

      <div className="md:max-w-[600px] w-full relative z-10">
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

        <div>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 60, scale: 0.88 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.35, ease: EASE }}
            className="text-[clamp(32px,6vw,62px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground"
          >
            {profile.headLinePrimary}
          </motion.h1>
          <motion.h1
            initial={reduce ? false : { opacity: 0, x: -90, rotate: -5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: EASE }}
            className="text-[clamp(32px,6vw,62px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-secondary mb-6"
          >
            {profile.headLineSecondary}
          </motion.h1>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, x: 50, filter: "blur(8px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.65, ease: EASE }}
          className="mb-3"
        >
          <div className="font-mono text-[15px] text-secondary tracking-[0.1em]">
            <Typewriter
              text={profile.typedRoles}
              speed={65}
              waitTime={2200}
              deleteSpeed={30}
              showCursor={true}
              cursorChar="_"
            />
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 60, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: EASE }}
          className="mb-7 w-full max-w-[460px] text-[14px] text-secondary leading-[1.9] tracking-[0.01em] text-pretty"
        >
          {reduce ? (
            profile.bio
          ) : (
            <Typewriter
              text={[profile.bio]}
              speed={16}
              waitTime={60000}
              deleteSpeed={20}
              loop={false}
              showCursor={true}
              cursorChar="_"
            />
          )}
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30, scale: 0.88 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 1.1, ease: EASE }}
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

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3, ease: EASE }}
          className="flex flex-col gap-1.5"
        >
          {profile.hints.map((hint) => (
            <span key={hint} className="font-mono text-[13px] text-muted">
              {hint}
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