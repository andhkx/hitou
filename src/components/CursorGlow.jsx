"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 260, damping: 28 });
  const sy = useSpring(y, { stiffness: 260, damping: 28 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-[3] w-80 h-80 -ml-40 -mt-40 rounded-full bg-white/[0.045] blur-[80px]"
      style={{ x: sx, y: sy }}
    />
  );
}