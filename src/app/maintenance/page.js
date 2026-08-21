import Link from "next/link";
import { Wrench } from "lucide-react";
import Background from "@/components/Background";

export default function MaintenancePage() {
  return (
    <main className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden p-6 text-center text-white">
      <Background />
      <div className="relative z-10 max-w-md">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-white/[0.05] border border-white/10 shadow-2xl">
          <Wrench size={36} className="text-white/40" aria-hidden="true" />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
          Sedang Perbaikan.
        </h1>
        <p className="text-white/55 text-sm md:text-base leading-relaxed mb-8">
          Hitou Studio sedang melakukan pembaruan besar agar websitemu jadi lebih keren. Kami akan segera kembali!
        </p>
        <Link
          href="https://wa.me/628179172900"
          target="_blank"
          className="inline-flex items-center rounded-xl bg-white px-6 py-3 text-sm font-bold text-black transition-all hover:bg-white/90 active:scale-[0.98]"
        >
          Hubungi via WhatsApp
        </Link>
      </div>
    </main>
  );
}