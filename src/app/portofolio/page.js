import Background from "@/components/Background";
import IntroLoader from "@/components/IntroLoader";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Portfolio from "@/components/Portfolio";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Portofolio | Hitou — Contoh Website UMKM, Katalog & Toko Online",
  description:
    "Lihat hasil kerja nyata: website production dan project sekolah. Platform booking, sistem bimbingan konseling, dan lainnya — di-Host di depan mata.",
  alternates: { canonical: "/portofolio" },
  openGraph: {
    title: "Portofolio | Hitou — Contoh Website",
    description:
      "Website live production dan project sekolah yang selesai dikerjakan Hitou.",
    type: "website",
    url: "https://hitou.my.id/portofolio",
  },
};

export default function PortofolioPage() {
  return (
    <main className="relative overflow-hidden">
      <IntroLoader />
      <Background />
      <Navbar />
      <div className="relative z-[2]">
        <PageHeader
          kicker="Portofolio"
          title="Beberapa proyek yang sudah dibuat"
          desc="Website production yang berjalan maupun tugas akhir — hasilnya bisa kamu tiru untuk bisnis kamu."
        />
        <Portfolio showLogoLoop showCtaCard />
        <CTA />
      </div>
      <Footer />
    </main>
  );
}