// ------- KONFIGURASI PRIBADI — ganti semua data di file ini -------

export const wa = (message = "") =>
  `https://wa.me/628179172900${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const navLinks = [
  { id: "home", label: "Beranda" },
  { id: "pricing", label: "Paket" },
  { id: "portfolio", label: "Portofolio" },
  { id: "contact", label: "Kontak" },
];

export const profile = {
  name: "Hitou",
  brand: "Hitou Studio",
  firstName: "Hitou",
  lastName: "",
  nameParts: ["Hitou"],
  eyebrow: "✦ Jasa Pembuatan Website",
  tagline: "JASA PEMBUATAN WEBSITE",
  greeting: "Halo! Saya",
  heroName: "Hitou",
  heroRole: "Web Developer",
  heroMicrocopy: "Mulai dari Rp 300k · Beres 3–5 hari · Dijamin suka",
  typedDescriptions: [
    "Bikin website buat usaha dan personal — hasil rapi, harga bersahabat.",
    "Mulai Rp 300k, jadi 3–5 hari. Kamu cerita kebutuhan, sisanya aku yang urus.",
    "Udah pernah bikin platform booking travel yang live & aplikasi bimbingan sekolah yang dipakai beneran.",
  ],
  bio: "Jasa pembuatan website untuk UMKM & personal — cepat, murah, terpercaya.",
  heroTags: ["Laravel", "Next.js", "React", "Flask"],
  ctaPrimary: "Pesan Sekarang",
  ctaSecondary: "Lihat Paket",
};

export const pricing = [
  {
    id: "starter",
    name: "STARTER",
    price: "Rp 300k",
    popular: false,
    desc: "Landing page & profil usaha yang langsung online",
    for: "UMKM, katering, jasa foto, profil usaha",
    features: [
      "Landing page 1–3 halaman",
      "Responsive design",
      "Basic SEO",
      "Domain .web.id included (tahun pertama)",
      "Hosting Cloudflare Pages (gratis)",
      "2–3x revisi",
      "Support 1 minggu",
      "Delivery 3–5 hari",
    ],
    cta: "Pesan Paket Starter",
    note: "Tidak ada admin panel atau backend",
  },
  {
    id: "standar",
    name: "STANDAR",
    price: "Rp 600k",
    popular: true,
    desc: "Website 5–7 halaman dengan admin panel bisa edit konten",
    for: "katalog produk, jasa profesional, website sekolah",
    features: [
      "Website 5–7 halaman",
      "Admin panel sederhana (edit konten)",
      "Database basic",
      "SEO optimized",
      "Domain .com included (tahun pertama)",
      "Hosting included",
      "3–5x revisi",
      "Support 2 minggu",
      "Delivery 5–7 hari",
    ],
    cta: "Pesan Paket Standar",
    note: "Ada backend & admin panel",
  },
  {
    id: "premium",
    name: "PREMIUM",
    price: "Rp 1.5jt",
    popular: false,
    desc: "Website dengan database, backend, payment integration — production-ready",
    for: "booking travel, toko online advanced, aplikasi sekolah",
    example: "https://mahessaholiday.my.id",
    features: [
      "Website full custom development",
      "Advanced admin panel (multi-user, roles)",
      "Database + backend logic kompleks",
      "Payment integration (Stripe/Midtrans/GCash)",
      "Domain .com / .co.id included (tahun pertama)",
      "Hosting included",
      "Bebas revisi sampai puas",
      "Support 1 bulan",
      "Delivery 10–14 hari",
    ],
    cta: "Pesan Paket Premium",
    note: "Production-ready seperti Mahessa Holiday & BK System",
  },
  {
    id: "custom",
    name: "CUSTOM",
    price: "Konsultasi",
    popular: false,
    desc: "Kebutuhan khusus? Kita diskusikan dulu, gratis konsultasi",
    for: "kebutuhan unik atau sistem internal kompleks",
    features: [
      "Website sesuai kebutuhan spesifik",
      "Fitur & integrasi custom unlimited",
      "Desain eksklusif",
      "Prioritas support tinggi",
      "Estimasi & timeline transparan",
      "Tidak ada komitmen di awal",
      "Mulai dari Rp 2jt+ (tergantung scope)",
    ],
    cta: "Konsultasi Gratis",
    note: "Hubungi untuk diskusi detail kebutuhan",
  },
];

export const projects = [
  {
    id: 1,
    title: "Mahessa Holiday",
    status: "Live Production",
    desc: "Platform booking travel & sewa mobil.",
    tech: ["Laravel", "MySQL", "SEO Optimized"],
    points: ["Admin panel", "Package management", "Integrasi WhatsApp", "Responsive"],
    year: "2026",
    image: "/assets/projects/1.jpg",
    links: [
      { label: "Kunjungi Website", url: "https://mahessaholiday.my.id", type: "primary" },
      { label: "Lihat Repo", url: "https://github.com/andhkx/MahessaTransHoliday", type: "secondary" },
    ],
  },
  {
    id: 2,
    title: "BK Guidance System",
    status: "Tugas Akhir — Deployed",
    desc: "Aplikasi bimbingan konseling sekolah dengan autentikasi multi-role.",
    tech: ["Flask", "SQL", "Multi-role (5 roles)"],
    points: ["Dashboard Interaktif", "Master Data", "Generate Surat", "35+ Fitur"],
    year: "2025",
    image: "/assets/projects/2.jpg",
    links: [
      { label: "Lihat Video YT", url: "https://youtu.be/VncL3zn87rU?si=ynTrhIagEgPv9hy0", type: "primary" },
      { label: "Lihat Repo", url: "https://github.com/andhkx/AplikasiBimbinganDanPenyuluhanBK", type: "secondary" },
    ],
  },
];

export const process = [
  {
    step: "01",
    title: "Konsultasi",
    time: "1 hari",
    desc: "Kamu cerita kebutuhan, kami buatkan plan & penawaran.",
  },
  {
    step: "02",
    title: "Design & Development",
    time: "3–5 hari",
    desc: "Website dibangun sesuai brief, dikerjakan bertahap.",
  },
  {
    step: "03",
    title: "Review & Revisi",
    time: "2–3 hari",
    desc: "Kamu lihat hasilnya, kasih feedback, kami revisi.",
  },
  {
    step: "04",
    title: "Deploy & Support",
    time: "Live + support",
    desc: "Website online, kami standby bantu perawatan.",
  },
];

export const features = [
  { title: "Responsive design", desc: "Rapi di mobile, tablet, dan desktop" },
  { title: "SEO basic setup", desc: "Lebih mudah ditemukan di Google" },
  { title: "Fast loading", desc: "Optimasi kecepatan dari awal" },
  { title: "Admin panel / CMS", desc: "Kamu bisa kelola konten sendiri (Standar ke atas)" },
  { title: "Database setup", desc: "Data tersimpan rapi & aman (Standar ke atas)" },
  { title: "Support after deploy", desc: "Ada yang aneh? Tinggal chat" },
  { title: "Konsultasi domain & hosting", desc: "Diarahkan memilih yang paling hemat" },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "Website Mahessa yang Andhika bikin sangat profesional, fitur lengkap, dan support-nya responsif. Hasilnya benar-benar membuat bisnis kami lebih kredibel di mata customer.",
    name: "CEO Mahessa Trans Holiday",
    role: "Pemilik Mahessa Trans Holiday",
    rating: 5,
    avatar: "🎯",
  },
  {
    id: 2,
    quote:
      "Andhika menunjukkan kemampuan teknis yang solid. BK System-nya well-structured, problem-solving yang matang, dan penguasaan coding yang impressive untuk usia sekarang.",
    name: "Pak Gugum Gumilar, S.T, M.T",
    role: "Penguji Tugas Akhir",
    rating: 5,
    avatar: "⭐",
  },
  {
    id: 3,
    quote:
      "Andhika punya dedikasi tinggi, belajarnya cepat, dan potensi besar di bidang teknologi. Saya yakin dia akan sukses sebagai developer profesional.",
    name: "Ibu Tini Hermawati, S.Psi",
    role: "Guru BK",
    rating: 5,
    avatar: "💡",
  },
];

export const faqs = [
  {
    q: "Berapa lama website dibuat?",
    a: "Tergantung paket: Starter 3–5 hari, Standar 5–7 hari, Premium 10–14 hari. Untuk request cepat, bisa kita diskusikan.",
  },
  {
    q: "Bisa revisi berapa kali?",
    a: "Starter: 2–3x, Standar: 3–5x, Premium: bebas revisi. Semua revisi gratis sampai kamu puas.",
  },
  {
    q: "Setelah website live, ada support?",
    a: "Ya! Starter: 1 minggu, Standar: 2 minggu, Premium: 1 bulan. Setelah itu bisa maintenance tahunan atau support berbayar.",
  },
  {
    q: "Bisa pakai template atau custom?",
    a: "Kedua-duanya bisa. Template lebih cepat & murah, custom sesuai brand & visi kamu untuk hasil yang unik.",
  },
  {
    q: "Bagaimana soal domain & hosting?",
    a: "Domain & hosting INCLUDED dalam semua paket. Kamu pilih domainnya: Starter .web.id, Standar .com, Premium .com/.co.id — biaya ±Rp 150–300k/tahun sudah termasuk dalam harga paket. Hosting pakai Cloudflare Pages (gratis & cepat).",
  },
  {
    q: "Bisa integrasi payment gateway?",
    a: "Bisa! Stripe, Midtrans, GCash, dll. Included di paket Premium & Custom. Paket Starter/Standar bisa add-on.",
  },
  {
    q: "Bagaimana proses pembayaran?",
    a: "50% di awal (sebelum mulai), 50% sebelum deploy. Bisa dicicil 2–3x untuk paket Premium ke atas.",
  },
  {
    q: "Gimana kalau tidak puas atau mau ganti pikiran?",
    a: "Revisi sesuai paket sudah included. Jika masih ada kekurangan, kita diskusikan. Garansi: website stable 1 bulan setelah deploy.",
  },
];

export const techStack = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", logo: "https://cdn.simpleicons.org/react/cccccc" },
      { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/cccccc" },
      { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss/cccccc" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/cccccc" },
      { name: "Laravel", logo: "https://cdn.simpleicons.org/laravel/cccccc" },
      { name: "Flask", logo: "https://cdn.simpleicons.org/flask/cccccc" },
      { name: "Python", logo: "https://cdn.simpleicons.org/python/cccccc" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql/cccccc" },
      { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/cccccc" },
      { name: "Supabase", logo: "https://cdn.simpleicons.org/supabase/cccccc" },
    ],
  },
  {
    category: "Tools & Deployment",
    items: [
      { name: "Git", logo: "https://cdn.simpleicons.org/git/cccccc" },
      { name: "Figma", logo: "https://cdn.simpleicons.org/figma/cccccc" },
      { name: "Postman", logo: "https://cdn.simpleicons.org/postman/cccccc" },
      { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/cccccc" },
      { name: "Cloudflare", logo: "https://cdn.simpleicons.org/cloudflare/cccccc" },
    ],
  },
];

export const socials = [
  { label: "WhatsApp", handle: "+62 817-9172-900", icon: "whatsapp", url: wa() },
  { label: "Instagram", handle: "@andhkx_", icon: "instagram", url: "https://www.instagram.com/andhkx_" },
  { label: "LinkedIn", handle: "@andhika-andriana-putra", icon: "linkedin", url: "https://www.linkedin.com/in/andhika-andriana-putra-1aa031388" },
  { label: "GitHub", handle: "@andhkx", icon: "github", url: "https://github.com/andhkx" },
];

export const contactInfo = {
  email: "andhikaputrach273@gmail.com",
  phone: "+62 817-9172-900",
  location: "Cimahi, Indonesia",
  footer: "© 2026 Hitou Studio — Jasa Pembuatan Website",
};

export const about = {
  photo: "/assets/profile.jpg",
  paragraph:
    "Halo! Saya Hitou, membantu UMKM & personal punya website — cepat, murah, dan terpercaya.",
};