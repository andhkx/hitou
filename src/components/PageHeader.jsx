import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PageHeader({ kicker, title, desc }) {
  return (
    <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-20 pt-24 pb-8 text-left text-white">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45 hover:text-white transition-colors mb-4"
      >
        <ArrowLeft size={13} aria-hidden="true" />
        Beranda
      </Link>
      {kicker && (
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/45 mb-2">
          {kicker}
        </p>
      )}
      <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight mb-2">
        {title}
      </h1>
      {desc && (
        <p className="text-white/55 max-w-xl text-sm leading-relaxed">{desc}</p>
      )}
    </div>
  );
}