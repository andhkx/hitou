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
  heroMicrocopy: "Mulai dari Rp 250k · Beres 3–5 hari · Dijamin suka",
  typedDescriptions: [
    "Bikin website buat usaha dan personal — hasil rapi, harga bersahabat.",
    "Mulai Rp 250rb, jadi 3–5 hari. Kamu cerita kebutuhan, sisanya aku yang urus.",
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
    price: "Rp 250k",
    popular: false,
    desc: "Landing page & profil usaha yang langsung online",
    for: "UMKM, katering, jasa foto, profil usaha",
    features: [
      "Landing page 1–2 halaman",
      "Responsive design",
      "Basic SEO",
      "2–3x revisi",
      "Support 1 minggu",
      "Delivery 3–5 hari",
    ],
    cta: "Pesan Paket Starter",
  },
  {
    id: "standar",
    name: "STANDAR",
    price: "Rp 500k",
    popular: true,
    desc: "5–7 halaman, bisa edit konten sendiri",
    for: "katalog produk, jasa profesional, sekolah",
    features: [
      "Website 5–7 halaman",
      "Admin panel sederhana",
      "SEO optimized",
      "Bantuan domain & hosting",
      "3–5x revisi",
      "Support 2 minggu",
      "Delivery 5–7 hari",
    ],
    cta: "Pesan Paket Standar",
  },
  {
    id: "premium",
    name: "PREMIUM",
    price: "Rp 1.2jt",
    popular: false,
    desc: "Website dengan database & backend — contohnya booking travel",
    for: "booking travel, toko online, aplikasi sekolah",
    example: "https://mahessaholiday.my.id",
    features: [
      "Website full custom",
      "Advanced admin panel",
      "Database + backend logic",
      "Payment integration (opsional)",
      "5–7x revisi",
      "Support 1 bulan",
      "Delivery 10–14 hari",
    ],
    cta: "Pesan Paket Premium",
  },
  {
    id: "custom",
    name: "CUSTOM",
    price: "Konsul",
    popular: false,
    desc: "Kebutuhan khusus? Kita diskusikan dulu, gratis",
    for: "kebutuhan khusus atau sistem internal",
    features: [
      "Website sesuai kebutuhan",
      "Fitur & integrasi custom",
      "Desain eksklusif",
      "Prioritas support",
      "Estimasi transparan",
      "Tidak ada komitmen di awal",
    ],
    cta: "Konsultasi Gratis",
  },
];

export const projects = [
  {
    id: 1,
    title: "Mahessa Holiday",
    status: "Live Production",
    desc: "Platform booking travel & tour untuk tour operator — berjalan di produksi.",
    tech: ["Laravel", "MySQL", "SEO Optimized"],
    points: ["Admin panel", "Package management", "Integrasi WhatsApp", "Responsive"],
    year: "2026",
    image: "/assets/projects/1.jpg",
    link: "https://mahessaholiday.my.id",
    linkLabel: "Kunjungi Website",
  },
  {
    id: 2,
    title: "BK Guidance System",
    status: "Tugas Akhir — Deployed",
    desc: "Aplikasi bimbingan konseling sekolah dengan autentikasi multi-role.",
    tech: ["Flask", "SQL", "Multi-role (5 roles)"],
    points: ["Student guidance tracking", "Admin dashboard", "Data management"],
    year: "2025",
    image: "/assets/projects/2.jpg",
    link: "#",
    linkLabel: "Lihat Detail",
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
  { title: "Admin panel / CMS", desc: "Kamu bisa kelola konten sendiri" },
  { title: "Database setup", desc: "Data tersimpan rapi & aman" },
  { title: "Support after deploy", desc: "Ada yang aneh? Tinggal chat" },
  { title: "Konsultasi domain & hosting", desc: "Diarahkan memilih yang paling hemat" },
];

export const faqs = [
  {
    q: "Berapa lama delivery?",
    a: "Tergantung paket: Starter 3–5 hari, Standar 5–7 hari, Premium 10–14 hari. Request cepat bisa dibahas.",
  },
  {
    q: "Bisa revisi berapa kali?",
    a: "Starter 2–3x, Standar 3–5x, Premium 5–7x revisi. Revisi kecil dilayani juga setelah itu.",
  },
  {
    q: "Setelah website live, ada support?",
    a: "Ya, support included 1 minggu sampai 1 bulan tergantung paket.",
  },
  {
    q: "Bisa pakai template atau custom?",
    a: "Bisa dua-duanya. Template lebih cepat & murah, custom mengikuti visi kamu.",
  },
  {
    q: "Bagaimana soal domain & hosting?",
    a: "Saya bantu rekomendasi & setup. Biaya domain & hosting dibayar terpisah — justru lebih murah.",
  },
  {
    q: "Bisa integrasi payment gateway?",
    a: "Bisa, included di paket Premium & Custom.",
  },
  {
    q: "Bagaimana proses pembayaran?",
    a: "50% di awal (sebelum mulai), 50% sebelum deploy. Bisa diatur cicilan.",
  },
];

export const testimonialsPlaceholder =
  "Testimonial dari klien segera hadir — mau jadi yang pertama?";

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
      { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql/cccccc" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", logo: "https://cdn.simpleicons.org/git/cccccc" },
      { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/cccccc" },
      { name: "Figma", logo: "https://cdn.simpleicons.org/figma/cccccc" },
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
  email: "hitoodiningrat@gmail.com",
  phone: "+62 817-9172-900",
  location: "Cimahi, Indonesia",
  footer: "© 2026 Hitou Studio — Jasa Pembuatan Website",
};

export const about = {
  photo: "/assets/profile.jpg",
  paragraph:
    "Halo! Saya Hitou, membantu UMKM & personal punya website — cepat, murah, dan terpercaya.",
};