// ------- KONFIGURASI PRIBADI — ganti semua data di file ini -------

export const wa = (message = "") =>
  `https://wa.me/62895627174900${message ? `?text=${encodeURIComponent(message)}` : ""}`;

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
  heroPriceBadge: "Mulai dari Rp 250rb",
  typedDescriptions: [
    "Saya bantu UMKM & personal punya website — cepat, murah, dan terpercaya. Dari landing page sampai aplikasi web dengan backend.",
    "Mulai dari Rp 250rb, delivery 3–5 hari, support after deploy. Ceritakan kebutuhanmu, saya yang kerjakan.",
    "Pernah bikin platform booking travel yang live production & aplikasi sekolah multi-role. Hasil nyata, bukan cuma janji.",
  ],
  bio: "Jasa pembuatan website untuk UMKM & personal — cepat, murah, terpercaya.",
  hints: ["↓ lihat paket & portofolio", "↗ respon cepat via WhatsApp"],
  heroTags: ["Laravel", "Next.js", "React", "Tailwind"],
  ctaPrimary: "Pesan Sekarang",
  ctaSecondary: "Lihat Paket",
};

export const valueProps = [
  { title: "Cepat Delivery", desc: "Website jadi dalam 3–5 hari kerja", icon: "zap" },
  { title: "Harga Terjangkau", desc: "Mulai dari Rp 250rb, tanpa biaya tersembunyi", icon: "banknote" },
  { title: "Responsif", desc: "Mobile-first, rapi di HP, tablet, dan desktop", icon: "smartphone" },
  { title: "Support Included", desc: "Bantuan setelah website live, sesuai paket", icon: "lifebuoy" },
];

export const pricing = [
  {
    id: "starter",
    name: "STARTER",
    price: "Rp 250rb — 500rb",
    popular: false,
    desc: "Landing page & profil usaha yang langsung online",
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
    price: "Rp 500rb — 1.2jt",
    popular: true,
    desc: "Website lengkap untuk bisnis yang serius",
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
    price: "Rp 1.2jt — 2.5jt",
    popular: false,
    desc: "Aplikasi web custom dengan backend & database",
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
    price: "Konsultasi",
    popular: false,
    desc: "Kebutuhan khusus? Kita diskusikan dulu, gratis",
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
      { name: "Typescript", logo: "https://cdn.simpleicons.org/typescript/cccccc" },
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
      { name: "Docker", logo: "https://cdn.simpleicons.org/docker/cccccc" },
      { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/cccccc" },
      { name: "Figma", logo: "https://cdn.simpleicons.org/figma/cccccc" },
    ],
  },
];

export const socials = [
  { label: "WhatsApp", handle: "+62 895-6271-74900", icon: "whatsapp", url: wa() },
  { label: "LinkedIn", handle: "@linkedin", icon: "linkedin", url: "#" },
  { label: "Instagram", handle: "@instagram", icon: "instagram", url: "#" },
  { label: "Youtube", handle: "@youtube", icon: "youtube", url: "#" },
  { label: "Github", handle: "@github", icon: "github", url: "#" },
  { label: "TikTok", handle: "@tiktok", icon: "tiktok", url: "#" },
];

export const contactInfo = {
  email: "andhikaputrach273@gmail.com",
  phone: "+62 895-6271-74900",
  location: "Cimahi, Indonesia",
  footer: "© 2026 Hitou Studio — Jasa Pembuatan Website",
};

export const about = {
  photo: "/assets/profile.jpg",
  paragraph:
    "Halo! Saya Hitou, membantu UMKM & personal punya website — cepat, murah, dan terpercaya.",
};