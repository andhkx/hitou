"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  // glow besar: lambat & lembut
  const gx = useSpring(x, { stiffness: 120, damping: 24 });
  const gy = useSpring(y, { stiffness: 120, damping: 24 });
  // lingkaran glass: cepat dengan sedikit overshoot (kesan liquid)
  const cx = useSpring(x, { stiffness: 420, damping: 26, mass: 0.6 });
  const cy = useSpring(y, { stiffness: 420, damping: 26, mass: 0.6 });
  const pressScale = useSpring(1, { stiffness: 300, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const down = () => pressScale.set(0.82);
    const up = () => pressScale.set(1);
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousedown", down, { passive: true });
    window.addEventListener("mouseup", up, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [x, y, pressScale]);

  return (
    <>
      {/* glow besar lembut di belakang */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed z-[3] w-96 h-96 -ml-48 -mt-48 rounded-full bg-white/[0.05] blur-[90px]"
        style={{ x: gx, y: gy }}
      />
      {/* lingkaran liquid glass mengikuti pointer */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed z-[60] w-12 h-12 -ml-6 -mt-6 rounded-full"
        style={{ x: cx, y: cy, scale: pressScale }}
      >
        <div className="absolute inset-0 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/30 shadow-[inset_0_1px_2px_rgba(255,255,255,0.35),inset_0_-2px_6px_rgba(255,255,255,0.08),0_0_16px_rgba(255,255,255,0.12),0_4px_16px_rgba(0,0,0,0.35)] ring-1 ring-white/10" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/25 via-transparent to-transparent" />
        <div className="absolute top-[7px] left-[9px] w-2.5 h-1.5 rounded-full bg-white/50 blur-[2px]" />
      </motion.div>
    </>
  );
}