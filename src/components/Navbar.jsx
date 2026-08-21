"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, MessageCircle, X } from "lucide-react";
import { navLinks, wa } from "@/data/portfolio";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
          scrolled ? "border-white/10 bg-[#0a0c10]/85 backdrop-blur-xl" : "border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-[1300px] items-center justify-between px-5 sm:px-8 md:px-12">
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logo_hitou.png"
              alt="Hitou Studio"
              width={112}
              height={24}
              className="h-6 w-auto object-contain brightness-0 invert"
            />
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative font-mono text-[13px] transition-colors ${
                    active ? "text-white" : "text-white/55 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-[#53bdeb] transition-all duration-300 ${
                      active ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <a
              href={wa("Halo Hitou! Saya ingin konsultasi website.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#53bdeb] px-4 py-2.5 text-[13px] font-bold text-black transition-transform active:scale-[0.98] hover:scale-[1.02]"
            >
              <MessageCircle size={14} aria-hidden="true" />
              Tanya Admin
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
        <motion.div style={{ scaleX: scrollYProgress }} className="h-[2px] origin-left bg-[#53bdeb]" />
      </motion.header>

      {open && (
        <div className="fixed inset-x-4 top-20 z-40 rounded-[20px] border border-white/10 bg-[#10141c]/95 p-3 shadow-2xl backdrop-blur-xl md:hidden">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block rounded-2xl px-4 py-3 font-mono text-[13px] ${
                  active ? "bg-white/[0.06] text-white" : "text-white/60"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
