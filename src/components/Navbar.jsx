"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";

export default function Navbar() {
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 32);
  });

  return (
    <>
      <motion.header
        initial={reduce ? false : { y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-white/[0.03] border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-12 h-16">
          <a
            href="#home"
            className="flex items-baseline text-[15px] font-bold tracking-tight text-foreground hover:text-white transition-colors"
          >
            <span className="text-foreground">Andhika</span>
            <span className="text-secondary">&nbsp;Andriana</span>
            <span className="text-muted">&nbsp;Putra</span>
          </a>

          <div className="flex items-center gap-8">
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="font-mono text-[13px] text-secondary hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <span className="hidden lg:inline-block font-mono text-[11px] tracking-[0.2em] uppercase text-secondary">
              ✦ {profile.eyebrow.replace("✦ ", "")}
            </span>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="md:hidden w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-white"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>

        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="h-[2px] bg-white origin-left"
        />
      </motion.header>

      {open && (
        <div className="md:hidden fixed top-16 inset-x-4 z-40 rounded-2xl border border-white/10 bg-black/90 backdrop-blur-xl p-4">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-xl font-mono text-[13px] text-secondary hover:text-white hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}