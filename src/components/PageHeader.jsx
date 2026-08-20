import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PageHeader({ kicker, title, desc }) {
  return (
    <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-20 pt-32 pb-10 text-center text-white">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45 hover:text-white transition-colors mb-6"
      >
        <ArrowLeft size={13} aria-hidden="true" />
        Kembali ke Beranda
      </Link>
      {kicker && (
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/45 mb-3">
          {kicker}
        </p>
      )}
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] mb-4">
        {title}
      </h1>
      {desc && (
        <p className="text-white/55 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          {desc}
        </p>
      )}
    </div>
  );
}