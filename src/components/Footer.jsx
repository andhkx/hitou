"use client";

import Link from "next/link";
import { navLinks, socials, contactInfo, profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-white/10 bg-[#080a0d]">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-10 px-5 py-12 sm:grid-cols-2 md:px-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logo_hitou.png"
              alt="Hitou Studio"
              width={110}
              height={24}
              className="h-7 w-auto object-contain brightness-0 invert"
            />
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/55">{profile.bio}</p>
        </div>
        <div>
          <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[#53bdeb]">
            Navigasi
          </h3>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/60 transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[#53bdeb]">
            Layanan
          </h3>
          <ul className="space-y-2.5">
            {["Website UMKM", "Katalog Produk", "Top Up & JB Game", "Sistem Custom"].map((s) => (
              <li key={s}>
                <span className="text-sm text-white/60">{s}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[#53bdeb]">
            Social
          </h3>
          <ul className="space-y-2.5">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1300px] flex-col items-center justify-between gap-2 px-5 py-5 sm:flex-row md:px-12">
          <p className="text-xs text-white/50">{contactInfo.footer}</p>
          <p className="text-xs text-white/50">Dark Dibikinin-style website for Hitou</p>
        </div>
      </div>
    </footer>
  );
}
