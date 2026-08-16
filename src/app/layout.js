import { Syne, DM_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
});

export const metadata = {
  metadataBase: new URL("https://hitou.my.id"),

  title: "Hitou | Bikin Website Sesuai Kantong",
  description:
    "Jasa pembuatan website murah untuk UMKM & personal. Harga menyesuaikan kantong, mulai Rp 250rb, domain & hosting termasuk. Konsultasi gratis via WhatsApp.",

  alternates: {
    canonical: "/",
  },

  verification: {
    google: "Nj-LODOTWbShquXrYB_bzPA3rhF12vEOPOCLtYok9Hw",
  },

  openGraph: {
    title: "Hitou | Bikin Website Sesuai Kantong",
    description:
      "Jasa pembuatan website murah untuk UMKM & personal. Mulai Rp 250rb, domain & hosting termasuk, konsultasi gratis.",
    type: "website",
    url: "https://hitou.my.id",
    siteName: "Hitou Studio",
    locale: "id_ID",
  },

  icons: {
    icon: [
      {
        url: "/assets/logo_h_white.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/assets/logo_h.png",
        media: "(prefers-color-scheme: light)",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${syne.variable} ${dmMono.variable}`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}