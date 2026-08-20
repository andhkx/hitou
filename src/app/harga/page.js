import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Harga | Hitou — Paket Website Mulai Rp 50rb",
  description:
    "Pilih paket bikin website sesuai kantong: Sesuai Kantong (mulai Rp 50rb), Standar (Rp 250rb), dan Premium (Rp 1.5jt). Domain, hosting, dan revisi sudah termasuk.",
  alternates: { canonical: "/harga" },
  openGraph: {
    title: "Harga | Hitou — Paket Website Mulai Rp 50rb",
    description:
      "Paket website UMKM, katalog, dan toko online. Transparan, tanpa biaya tersembunyi, revisi sampai puas.",
    type: "website",
    url: "https://hitou.my.id/harga",
  },
};

export default function HargaPage() {
  return (
    <main className="relative overflow-hidden">
      <Background />
      <Navbar />
      <div className="relative z-[2]">
        <PageHeader
          kicker="Paket Harga"
          title="Pilih sesuai kantong"
          desc="Tanpa biaya tersembunyi. Konsultasi & revisi sampai puas sudah termasuk."
        />
        <Pricing hideHeading />
        <CTA />
      </div>
      <Footer />
    </main>
  );
}