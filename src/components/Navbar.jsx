"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, MessageCircle, X } from "lucide-react";
import { navLinks, wa } from "@/data/portfolio";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 32);
  });

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-black/40 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-12 h-16">
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logo_hitou.png"
              alt="Hitou Studio"
              width={110}
              height={20}
              className="h-6 w-auto object-contain brightness-0 invert"
            />
          </Link>

          <div className="flex items-center gap-6">
            <ul className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative font-mono text-[13px] pb-1 transition-colors duration-300 ${
                        active ? "text-white" : "text-secondary hover:text-foreground"
                      }`}
                    >
                      {link.label}
                      <span
                        className={`absolute left-0 -bottom-0.5 h-[1.5px] bg-white transition-all duration-300 ${
                          active ? "w-full opacity-100" : "w-0 opacity-0"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <a
              href={wa("Halo Hitou! Saya mau tanya-tanya soal website.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-lg bg-white text-black text-[13px] font-bold px-4 py-2.5 transition-all duration-300 hover:bg-white/90 active:scale-[0.99]"
            >
              <MessageCircle size={14} aria-hidden="true" />
              Tanya Admin
            </a>

            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Tutup menu" : "Buka menu"}
              aria-expanded={open}
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
        <div className="md:hidden fixed top-16 inset-x-4 z-40 rounded-2xl border border-white/10 bg-black/95 backdrop-blur-xl p-4">
          <ul className="space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`block px-4 py-3 rounded-xl font-mono text-[13px] transition-colors ${
                      active
                        ? "text-white bg-white/5"
                        : "text-secondary hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <a
                href={wa("Halo Hitou! Saya mau tanya-tanya soal website.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-white text-black text-[13px] font-bold px-4 py-3 transition-all duration-300 hover:bg-white/90"
              >
                <MessageCircle size={14} aria-hidden="true" />
                Tanya Admin
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}