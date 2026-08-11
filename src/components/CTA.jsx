"use client";

import { motion, useReducedMotion } from "motion/react";
import { Mail, MessageCircle, Phone } from "lucide-react";
import BorderGlow from "./reactbits/BorderGlow/BorderGlow.jsx";
import { about, contactInfo, profile, socials, wa } from "@/data/portfolio";

const EASE = [0.16, 1, 0.3, 1];

const SOCIAL_PATHS = {
  linkedin: {
    viewBox: "0 0 448 512",
    d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
  },
  instagram: {
    viewBox: "0 0 448 512",
    d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
  },
  youtube: {
    viewBox: "0 0 576 512",
    d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z",
  },
  github: {
    viewBox: "0 0 496 512",
    d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
  },
  tiktok: {
    viewBox: "0 0 448 512",
    d: "M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z",
  },
};

const gridSocials = socials.filter((s) => s.icon !== "whatsapp");

export default function CTA() {
  const reduce = useReducedMotion();

  return (
    <section
      id="contact"
      className="w-full max-w-[1200px] mx-auto px-8 md:px-12 lg:px-20 pt-24 pb-24 relative z-10 text-white"
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <BorderGlow
          className="w-full"
          backgroundColor="#181818"
          borderRadius={28}
          edgeSensitivity={35}
          glowColor="0 0 100"
          glowIntensity={1.2}
          fillOpacity={0.45}
        >
        <div className="p-8 md:p-12">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
              Siap Order Website?
            </h2>
            <p className="text-white/55 text-sm md:text-base mb-8 max-w-md mx-auto lg:mx-0">
              Konsultasi gratis, respon cepat via WhatsApp. Ceritakan saja kebutuhanmu.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 mb-8 justify-center lg:justify-start">
              <a
                href={wa("Halo Andhika! Saya siap order website.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl bg-white text-black text-[16px] font-extrabold px-8 py-4 transition-all duration-300 hover:bg-white/90 hover:-translate-y-0.5 active:scale-[0.99]"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Chat WhatsApp
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 text-white text-sm font-semibold px-6 py-4 transition-all duration-300 hover:bg-white/10 hover:border-white/40"
              >
                <Mail size={16} aria-hidden="true" />
                {contactInfo.email}
              </a>
            </div>

            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/35 mb-4">
              Atau temui aku di
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {gridSocials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-black/20 px-3.5 py-3 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06]"
                >
                  <svg viewBox={SOCIAL_PATHS[s.icon]?.viewBox ?? "0 0 24 24"} width="16" height="16" fill="currentColor" aria-hidden="true">
                    <path d={SOCIAL_PATHS[s.icon]?.d ?? ""} />
                  </svg>
                  <span className="text-[13px] font-medium">{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, x: 40, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
            className="shrink-0 flex flex-col items-center gap-4"
          >
            <div className="p-3 rounded-full border border-border bg-black/20">
              {about.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={about.photo}
                  alt={profile.name}
                  width={160}
                  height={160}
                  className="w-40 h-40 rounded-full object-cover block"
                />
              ) : (
                <div className="w-40 h-40 rounded-full flex items-center justify-center text-5xl font-extrabold text-muted">
                  AP
                </div>
              )}
            </div>
            <div className="text-center">
              <p className="font-bold text-[15px]">{profile.name}</p>
              <p className="font-mono text-[11px] text-white/40">Web Developer — Cimahi</p>
            </div>
            <div className="flex items-center gap-2 text-[12px] text-white/70">
              <Phone size={13} aria-hidden="true" />
              {contactInfo.phone}
            </div>
          </motion.div>
        </div>
        </div>
        </BorderGlow>
      </motion.div>
    </section>
  );
}