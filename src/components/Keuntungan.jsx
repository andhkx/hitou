"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, CheckCheck, MessageCircle, Search, Send } from "lucide-react";
import { keuntunganSlides, keuntunganSteps, wa } from "@/data/portfolio";

const EASE = [0.16, 1, 0.3, 1];
const TOTAL = keuntunganSlides.length;

function GoogleMockup({ name }) {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "");
  return (
    <div className="w-full max-w-[360px] rounded-2xl bg-white p-5 text-black shadow-2xl">
      <div className="flex items-center gap-2 mb-4">
        <span className="font-bold text-[18px] tracking-tight">
          G<span className="text-blue-600">o</span>
          <span className="text-red-500">o</span>
          <span className="text-amber-500">g</span>
          <span className="text-blue-600">l</span>
          <span className="text-green-600">e</span>
        </span>
        <span className="ml-2 flex flex-1 items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1.5 text-[12px] text-neutral-400">
          <Search size={12} aria-hidden="true" />
          {name} website
        </span>
      </div>
      <p className="text-[10px] text-neutral-400 mb-3">1.240 hasil (0,34 detik)</p>
      <div className="border border-neutral-100 rounded-xl p-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="flex h-4 w-4 items-center justify-center rounded bg-neutral-200 text-[8px] font-bold">
            {name.charAt(0).toUpperCase()}
          </span>
          <span className="text-[10px] text-neutral-500">{slug}.com</span>
        </div>
        <p className="text-[13px] font-semibold text-blue-700 mb-0.5">
          Official Website — {name}
        </p>
        <p className="text-[11px] text-neutral-600 leading-relaxed">
          Produk lengkap, harga jelas, cara pesan gampang. Aktif 24 jam, langsung bisa pesan.
        </p>
      </div>
    </div>
  );
}

function WaMockup({ name }) {
  return (
    <div className="w-64 rounded-2xl border border-green-900/60 bg-[#0b141a] p-4 text-white shadow-2xl">
      <div className="flex items-center gap-2.5 border-b border-white/10 pb-3 mb-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20 text-[11px] font-bold text-green-400">
          TK
        </span>
        <div>
          <p className="text-[12px] font-bold leading-tight">{name}</p>
          <p className="text-[10px] text-green-400">online</p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="rounded-xl rounded-tl-sm bg-white/10 px-3 py-2 text-[11px] w-fit max-w-[85%]">
          Bang, stok {name} ready hari ini? 😅
          <span className="ml-1 text-[8px] text-white/40">20.41</span>
        </div>
        <div className="ml-auto w-fit max-w-[85%] rounded-xl rounded-tr-sm bg-green-700 px-3 py-2 text-[11px]">
          Halo kak, semuanya lengkap — cek aja di website {name}.com ya 😊
          <span className="ml-1 inline-flex items-center gap-0.5 text-[8px] text-green-200">
            20.42
            <CheckCheck size={10} aria-hidden="true" />
          </span>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
        <span className="flex-1 text-[11px] text-white/40">Ketik pesan</span>
        <Send size={13} className="text-green-400" aria-hidden="true" />
      </div>
    </div>
  );
}

function ClockMockup() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative h-28 w-28 rounded-full border-2 border-white/25 bg-white/[0.04]">
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/40"
            style={{
              left: `${50 + 48 * Math.sin((i * 30 * Math.PI) / 180)}%`,
              top: `${50 - 48 * Math.cos((i * 30 * Math.PI) / 180)}%`,
            }}
            aria-hidden="true"
          />
        ))}
        <div className="absolute left-1/2 top-1/2 h-[52%] w-[2px] -translate-x-1/2 -translate-y-full origin-bottom rounded bg-white/80 animate-spin-slow" />
        <div className="absolute left-1/2 top-1/2 h-[38%] w-[2px] -translate-x-1/2 -translate-y-full origin-bottom rounded bg-white/40" />
        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
      </div>
      <p className="font-mono text-[20px] font-bold tracking-widest text-white">24 JAM</p>
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
        Tetap online, nonstop
      </p>
    </div>
  );
}

function SiteMockup({ name }) {
  return (
    <div className="w-[300px] rounded-xl border border-white/15 bg-[#121212] shadow-2xl">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-white h-1.5 w-1.5" aria-hidden="true" />
          <span className="text-[11px] font-bold text-white">{name}</span>
        </div>
        <div className="flex gap-1.5 mb-4">
          {["Produk", "Harga", "Cara Pesan", "FAQ"].map((t, i) => (
            <span
              key={t}
              className={`rounded-full px-2.5 py-1 text-[9px] font-semibold ${
                i === 0 ? "bg-white text-black" : "bg-white/10 text-white/60"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="space-y-2">
          {[80, 60, 70].map((w, i) => (
            <div key={i} className="h-2.5 rounded-full bg-white/10" style={{ width: `${w}%` }} />
          ))}
        </div>
        <div className="mt-4 h-7 rounded-lg bg-white/90" />
      </div>
    </div>
  );
}

function FeedMockup() {
  return (
    <div className="w-[220px] space-y-3 opacity-80">
      {[0, 1, 2].map((i) => (
        <div key={i} className="rounded-xl border border-white/10 bg-white/[0.05] p-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-6 w-6 rounded-full bg-white/15" />
            <span className="h-2 w-16 rounded-full bg-white/15" />
          </div>
          <div className="h-16 rounded-lg bg-white/10" style={{ opacity: 1 - i * 0.15 }} />
          <div className="mt-2 h-2 w-24 rounded-full bg-white/10" />
        </div>
      ))}
      <p className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
        Cuma segini??
      </p>
    </div>
  );
}

export default function Keuntungan() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [name, setName] = useState("");

  const storeName = name || "Toko Kamu";
  const slide = keuntunganSlides[step];
  const inputStep = Boolean(slide.input);
  const canNext = !inputStep || name.trim().length >= 2;

  const go = (n) => {
    if (n < 0 || n >= TOTAL) return;
    setDir(n > step ? 1 : -1);
    setStep(n);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") go(step + 1);
      if (e.key === "ArrowLeft") go(step - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  const mockup =
    step === 0 ? (
      <FeedMockup />
    ) : step === 2 ? (
      <GoogleMockup name={storeName} />
    ) : step === 3 ? (
      <div className="flex flex-col md:flex-row items-center gap-8">
        <ClockMockup />
        <WaMockup name={storeName} />
      </div>
    ) : step === 4 ? (
      <SiteMockup name={storeName} />
    ) : null;

  return (
    <section
      id="keuntungan"
      className="w-full max-w-[1000px] mx-auto px-6 md:px-12 pb-24 relative z-10 text-white"
    >
      {/* Progress */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono text-[11px] tracking-[0.2em] text-white/45">
          {("0" + (step + 1)).slice(-2)} / {("0" + TOTAL).slice(-2)}
        </span>
        <div className="flex flex-1 gap-1.5">
          {keuntunganSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Langkah ${i + 1} — ${keuntunganSteps[i]}`}
              className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                i <= step ? "bg-white/90" : "bg-white/15"
              }`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait" custom={dir} initial={false}>
        <motion.div
          key={step}
          custom={dir}
          initial={reduce ? false : { opacity: 0, x: dir * 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={reduce ? undefined : { opacity: 0, x: dir * -60 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="grid md:grid-cols-2 gap-10 items-center mb-12"
        >
          <div className="order-2 md:order-1">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/45 mb-3">
              0{step + 1} — {keuntunganSteps[step]}
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.1] mb-4">
              {slide.title}
            </h2>
            <p className="text-white/60 text-[15px] leading-relaxed mb-6">{slide.body}</p>

            {inputStep && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (canNext) go(step + 1);
                }}
                className="mb-6"
              >
                <div className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.05] px-3 py-1 focus-within:border-white/50 transition-colors">
                  <span className="text-white/40 font-mono text-[13px]">→</span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Toko Kamu, Bang Joni Store"
                    maxLength={30}
                    aria-label="Nama usaha kamu"
                    className="flex-1 bg-transparent py-2.5 text-[14px] text-white placeholder:text-white/30 outline-none"
                  />
                </div>
                <p className="text-[11px] text-white/40 mt-2">
                  Minimal 2 huruf — coba ketik nama usahamu.
                </p>
              </form>
            )}

            <div className="flex items-center gap-3">
              <button
                onClick={() => go(step - 1)}
                disabled={step === 0}
                aria-label="Langkah sebelumnya"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent"
              >
                <ArrowLeft size={16} aria-hidden="true" />
              </button>
              {step < TOTAL - 1 ? (
                <button
                  onClick={() => go(step + 1)}
                  disabled={!canNext}
                  className="inline-flex items-center gap-2 rounded-full bg-white text-black text-sm font-bold px-6 py-3 transition-all duration-300 hover:bg-white/90 active:scale-[0.99] disabled:opacity-40 disabled:hover:bg-white"
                >
                  Lanjut
                  <ArrowRight size={15} aria-hidden="true" />
                </button>
              ) : (
                <a
                  href={wa(`Halo Hitou! Saya mau mulai bikin website untuk ${name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-black text-sm font-bold px-6 py-3 transition-all duration-300 hover:bg-white/90 active:scale-[0.99]"
                >
                  <MessageCircle size={15} aria-hidden="true" />
                  Mulai Chat
                </a>
              )}
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            {mockup}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Step labels */}
      <div className="flex items-center justify-between gap-2 border-t border-white/10 pt-5">
        {keuntunganSteps.map((s, i) => (
          <button
            key={s}
            onClick={() => go(i)}
            className={`font-mono text-[10px] uppercase tracking-[0.12em] transition-colors ${
              i === step ? "text-white" : "text-white/35 hover:text-white/70"
            }`}
          >
            <span className="mr-1 text-white/45">{("0" + (i + 1)).slice(-2)}</span>
            {s}
          </button>
        ))}
      </div>
    </section>
  );
}