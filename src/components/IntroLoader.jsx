"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { profile } from "@/data/portfolio";

const EASE = [0.22, 1, 0.36, 1];
const DURATION = 450;

export default function IntroLoader() {
  const reduce = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(!reduce);

  useEffect(() => {
    if (reduce) return;
    document.body.style.overflow = "hidden";
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / DURATION);
      setProgress(Math.round(t * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const done = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, DURATION + 250);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(done);
      document.body.style.overflow = "";
    };
  }, [reduce]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          aria-hidden="true"
          className="fixed inset-0 z-[100] bg-[#0a0a0a] flex items-center justify-center"
          exit={{ opacity: 0, y: -48, filter: "blur(8px)" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div className="flex flex-col items-center gap-6 px-6">
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
              className="font-mono text-[11px] tracking-[0.35em] uppercase text-muted"
            >
              ✦ Welcome
            </motion.span>

            <div className="flex items-center gap-4">
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
                className="font-mono text-[clamp(48px,9vw,96px)] font-light text-foreground leading-none tabular-nums"
              >
                {progress}
                <span className="text-secondary">%</span>
              </motion.span>
            </div>

            <div className="w-56 md:w-72 h-[2px] bg-white/10 overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-white origin-left"
                style={{ scaleX: progress / 100 }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
              className="flex flex-col items-center gap-2.5"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/logo_hitou.png"
                alt="Hitou Studio"
                width={140}
                height={46}
                className="h-11 w-auto object-contain brightness-0 invert"
              />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted">
                {profile.tagline}
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}