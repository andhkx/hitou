import Background from "@/components/Background";
import IntroLoader from "@/components/IntroLoader";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Keuntungan from "@/components/Keuntungan";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Keuntungan | Hitou — Kenapa Bisnis Kamu Perlu Website",
  description:
    "Simulasi interaktif: apa jadinya kalau bisnis kamu punya website sendiri — ketemu di Google, aktif 24 jam, dan pelanggan lebih gampang pesan.",
  alternates: { canonical: "/keuntungan" },
  openGraph: {
    title: "Keuntungan | Hitou — Kenapa Perlu Website",
    description:
      "Simulasi singkat keuntungan punya website untuk bisnis UMKM, katalog, dan toko online.",
    type: "website",
    url: "https://hitou.my.id/keuntungan",
  },
};

export default function KeuntunganPage() {
  return (
    <main className="relative overflow-hidden">
      <IntroLoader />
      <Background />
      <Navbar />
      <div className="relative z-[2]">
        <PageHeader
          kicker="Simulasi Interaktif"
          title="Kalau bisnis kamu punya website sendiri?"
          desc="Tekan Lanjut untuk melihat apa yang berubah — dari sekarang sampai bisnis kamu ditemukan pelanggan."
        />
        <Keuntungan />
        <CTA />
      </div>
      <Footer />
    </main>
  );
}