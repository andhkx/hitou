"use client";

import { navLinks, socials, contactInfo, profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#101010] relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logo_hitou.png"
              alt="Hitou Studio"
              width={28}
              height={22}
              className="h-5 w-auto object-contain"
            />
            <p className="text-lg font-bold">
              Hitou<span className="text-secondary"> Studio</span>
            </p>
          </div>
          <p className="text-sm text-white/55 leading-relaxed max-w-xs">{profile.bio}</p>
        </div>
        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/45 mb-4">
            Menu
          </h3>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/45 mb-4">
            Services
          </h3>
          <ul className="space-y-2.5">
            {["Web Development", "UI / UX Design", "REST API", "Deployment"].map((s) => (
              <li key={s}>
                <span className="text-sm text-white/60">{s}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/45 mb-4">
            Social
          </h3>
          <ul className="space-y-2.5">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/40">{contactInfo.footer}</p>
          <p className="text-xs text-white/40">Built with Next.js &amp; React Bits</p>
        </div>
      </div>
    </footer>
  );
}