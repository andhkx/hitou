"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, CheckCheck, MessageCircle, Search, Send } from "lucide-react";
import { keuntunganSlides, keuntunganSteps, wa } from "@/data/portfolio";

const EASE = [0.4, 0, 0.2, 1];
const TOTAL = keuntunganSlides.length;

function GoogleMockup({ name }) {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "") || "tokokamu";
  return (
    <div className="w-full max-w-[420px] rounded-[24px] border border-white/10 bg-[#14181f] p-5 shadow-2xl">
      <div className="mb-4 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-black">
        <Search size={16} aria-hidden="true" />
        <span className="text-sm font-bold text-black/70">{name} website</span>
      </div>
      <p className="mb-3 font-mono text-[10px] text-white/35">Sekitar 1.240 hasil (0,34 detik)</p>
      <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-4">
        <p className="mb-1 text-[12px] font-bold text-[#53bdeb]">https://{slug}.com</p>
        <h3 className="mb-1 text-lg font-extrabold text-white">{name} — Website Resmi</h3>
        <p className="text-sm leading-relaxed text-white/60">Produk lengkap, harga jelas, cara pesan gampang, dan aktif 24 jam.</p>
        <div className="mt-4 flex gap-2">
          {["Produk", "Harga", "Kontak"].map((x) => (
            <span key={x} className="rounded-full bg-[#53bdeb]/10 px-3 py-1 text-[11px] font-bold text-[#53bdeb]">{x}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function WaMockup({ name }) {
  return (
    <div className="w-[300px] rounded-[24px] border border-white/10 bg-[#0b141a] p-4 shadow-2xl">
      <div className="mb-3 flex items-center gap-3 border-b border-white/10 pb-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#53bdeb]/15 text-[12px] font-extrabold text-[#53bdeb]">H</span>
        <div>
          <p className="text-sm font-extrabold text-white">{name}</p>
          <p className="text-[11px] font-bold text-green-400">online</p>
        </div>
      </div>
      <div className="space-y-2 text-[12px]">
        <div className="w-fit max-w-[85%] rounded-2xl rounded-tl-sm bg-white/10 px-3 py-2 text-white/75">Bang, masih open order?</div>
        <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-tr-sm bg-[#53bdeb] px-3 py-2 font-bold text-black">
          Open kak. Cek katalog di website {name}.com ya.
          <CheckCheck size={12} className="ml-1 inline" aria-hidden="true" />
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
        <span className="flex-1 text-[11px] text-white/35">Ketik pesan</span>
        <Send size={14} className="text-[#53bdeb]" aria-hidden="true" />
      </div>
    </div>
  );
}

function SimpleMockup({ step, name }) {
  if (step === 2) return <GoogleMockup name={name} />;
  if (step === 3) return <WaMockup name={name} />;
  return (
    <div className="w-full max-w-[420px] rounded-[24px] border border-white/10 bg-[#14181f] p-6 shadow-2xl">
      <div className="mb-5 flex items-center justify-between">
        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#53bdeb]">{name}.com</span>
        <span className="rounded-full bg-green-500/10 px-3 py-1 text-[11px] font-bold text-green-400">online</span>
      </div>
      <div className="space-y-3">
        {["Produk", "Harga", "Cara Pesan", "FAQ"].map((x, i) => (
          <div key={x} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
            <span className="text-sm font-bold text-white">{x}</span>
            <span className={`h-2 rounded-full ${i === 0 ? "w-24 bg-[#53bdeb]" : "w-16 bg-white/15"}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Keuntungan() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [name, setName] = useState("");
  const storeName = name.trim() || "Toko Kamu";
  const slide = keuntunganSlides[step];
  const needsName = Boolean(slide.input);
  const canNext = !needsName || name.trim().length >= 2;

  const go = (next) => {
    if (next < 0 || next >= TOTAL) return;
    setDir(next > step ? 1 : -1);
    setStep(next);
  };

  return (
    <section id="keuntungan" className="relative z-10 mx-auto w-full max-w-[1100px] px-5 pb-20 text-white sm:px-8 md:px-12">
      <div className="mb-8 flex items-center gap-3">
        <button onClick={() => go(step - 1)} disabled={step === 0} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#14181f] text-white disabled:opacity-35">
          <ArrowLeft size={16} aria-hidden="true" />
        </button>
        <div className="flex-1">
          <div className="mb-2 flex items-center justify-between font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">
            <span>{keuntunganSteps[step]}</span>
            <span>{step + 1} / {TOTAL}</span>
          </div>
          <div className="flex gap-1.5">
            {keuntunganSlides.map((_, i) => (
              <button key={i} onClick={() => go(i)} className={`h-1.5 flex-1 rounded-full transition-colors ${i <= step ? "bg-[#53bdeb]" : "bg-white/10"}`} aria-label={`Langkah ${i + 1}`} />
            ))}
          </div>
        </div>
        <button onClick={() => go(step + 1)} disabled={!canNext || step === TOTAL - 1} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#14181f] text-white disabled:opacity-35">
          <ArrowRight size={16} aria-hidden="true" />
        </button>
      </div>

      <AnimatePresence mode="wait" custom={dir} initial={false}>
        <motion.div
          key={step}
          initial={reduce ? false : { opacity: 0, x: dir * 32 }}
          animate={{ opacity: 1, x: 0 }}
          exit={reduce ? undefined : { opacity: 0, x: dir * -32 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="grid items-center gap-10 md:grid-cols-2"
        >
          <div>
            <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-[#53bdeb]">0{step + 1} — {keuntunganSteps[step]}</p>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">{slide.title}</h1>
            <p className="mb-6 text-sm leading-relaxed text-white/60 md:text-base">{slide.body}</p>
            {needsName && (
              <form onSubmit={(e) => { e.preventDefault(); if (canNext) go(step + 1); }} className="mb-6">
                <label className="mb-2 block text-sm font-bold text-white">Nama usaha kamu</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={30}
                  className="w-full rounded-2xl border border-white/10 bg-[#14181f] px-4 py-3 text-sm font-bold text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#53bdeb]"
                  placeholder="Contoh: Hitou Store"
                />
              </form>
            )}
            <div className="flex flex-wrap gap-3">
              {step < TOTAL - 1 ? (
                <button onClick={() => go(step + 1)} disabled={!canNext} className="inline-flex items-center gap-2 rounded-xl bg-[#53bdeb] px-5 py-3.5 text-sm font-extrabold text-black disabled:opacity-40">
                  Lanjut <ArrowRight size={16} aria-hidden="true" />
                </button>
              ) : (
                <a href={wa(`Halo Hitou! Saya mau mulai bikin website untuk ${storeName}.`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#53bdeb] px-5 py-3.5 text-sm font-extrabold text-black">
                  <MessageCircle size={16} aria-hidden="true" /> Mulai Chat
                </a>
              )}
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <SimpleMockup step={step} name={storeName} />
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
