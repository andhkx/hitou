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
  title: "Andhika Andriana Putra",
  description:
    "Fullstack Developer - Portfolio. Menciptakan website modern dengan tampilan clean, responsif, dan elegan.",
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