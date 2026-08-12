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
        className="pointer-events-none fixed z-[60] w-9 h-9 -ml-[18px] -mt-[18px] rounded-full"
        style={{ x: cx, y: cy, scale: pressScale }}
      >
        <div className="w-full h-full rounded-full border border-white/25 bg-white/10 backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_0_12px_rgba(255,255,255,0.15)]" />
        <div className="absolute top-1.5 left-1.5 w-2 h-2 rounded-full bg-white/40 blur-[1px]" />
      </motion.div>
    </>
  );
}