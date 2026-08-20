// ------- KONFIGURASI PRIBADI — ganti semua data di file ini -------

export const wa = (message = "") =>
  `https://wa.me/628179172900${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Harga", href: "/harga" },
  { label: "Portofolio", href: "/portofolio" },
  { label: "Keuntungan", href: "/keuntungan" },
];

export const layanan = [
  {
    id: "umkm",
    title: "Website UMKM",
    desc: "Landing page profesional buat toko, jasa, atau usaha personal. Murah, cepat, langsung terlihat kredibel.",
    points: ["1 halaman fokus promosi", "Profil & info kontak", "Tombol WhatsApp", "Rapi di Google"],
    starter: "Mulai Rp 50rb",
    paket: "Paket Sesuai Kantong–Standar",
  },
  {
    id: "katalog",
    title: "Website Katalog",
    desc: "Toko online display produk — baju, kuliner, elektronik, apa pun. Produk rapi, pelanggan gampang pesan.",
    points: ["Katalog produk + foto", "Harga & stok up-to-date", "Pesan via WhatsApp", "Kelola admin sendiri"],
    starter: "Mulai Rp 250rb",
    paket: "Paket Standar",
  },
  {
    id: "store",
    title: "Store / Top Up Game",
    desc: "Website buat jual voucher, top up, joki, atau akun. Sistem pesanan cepat, aman, dan terintegrasi pembayaran.",
    points: ["Katalog game & layanan", "Pemesanan otomatis", "Integrasi pembayaran", "Database + admin panel"],
    starter: "Mulai Rp 1.5jt",
    paket: "Paket Premium",
  },
];

export const processBadges = [
  {
    title: "Update di Tiap Tahap",
    desc: "Kamu selalu tahu progressnya — nggak ditinggal diam.",
  },
  {
    title: "Tepat Waktu",
    desc: "Pengerjaan sesuai target yang disepakati.",
  },
  {
    title: "Kualitas Terjaga",
    desc: "Desain modern, responsif, dan teruji.",
  },
  {
    title: "Support Penuh",
    desc: "Tetap kami bantu setelah website live.",
  },
];

export const keuntunganSlides = [
  {
    title: "Bayangkan bisnis kamu tanpa website.",
    body: "Sekarang jualan cuma lewat sosmed — produk nyarinya susah, chat numpuk, dan posisimu nggak kelihatan. Padahal calon pelanggan udah mulai cari bisnis kamu di Google.",
  },
  {
    title: "Siapa nama usaha kamu?",
    body: "Kasih tahu nama toko atau usahamu — nama itu bakal ikut di setiap contoh di halaman ini.",
    input: true,
  },
  {
    title: "Bisnis kamu ketemu di Google.",
    body: "Punya website = muncul di hasil pencarian. Pelanggan nemuin nama, produk, dan cara pesan — bukan cuma akun sosmed yang rawan ketinggalan.",
  },
  {
    title: "Aktif 24 jam, nggak pernah libur.",
    body: "Website jalan terus walau kamu tidur. Pelanggan lihat produk, cek harga, dan mulai pesan kapan saja — sistem langsung menjawab.",
  },
  {
    title: "Pertanyaan umum jadi jawaban instan.",
    body: "Produk, harga, cara pesan, sampai pertanyaan yang biasa kamu jawab berulang — semua sudah terjawab di website. Kamu tinggal terima order.",
  },
  {
    title: "Siap mulai?",
    body: "Bikin website untuk bisnis kamu sekarang — konsultasi gratis, tanpa komitmen, langsung dibalas.",
  },
];

export const keuntunganSteps = [
  "Bayangkan",
  "Nama Usaha",
  "Ditemukan",
  "24 Jam",
  "Praktis",
  "Mulai",
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
  heroMicrocopy: "Mulai dari Rp 50rb · Beres 1–14 hari · Garansi suka",
  typedDescriptions: [
    "Mau bikin website UMKM biar bisa dijangkau banyak orang? Hitou solusinya!",
    "Modal 50K sudah bisa punya website yang berfungsi, responsif, dan terpercaya.",
    "2026 WAJIB punya website — tingkatkan branding, jangkau lebih banyak orang, tanpa ribet.",
  ],
  bio: "Jasa pembuatan website untuk UMKM & personal — mulai dari 50rb, cepat diproses, hasil memuaskan.",
  heroTags: ["Laravel", "Next.js", "React", "Flask"],
  ctaPrimary: "Pesan Sekarang",
  ctaSecondary: "Lihat Paket",
};

export const pricing = [
  {
    id: "kantong",
    name: "SESUAI KANTONG",
    price: "Rp 50rb",
    popular: true,
    desc: "Budget terbatas? Diskusi dulu — kami tetap bantu dengan budget apapun.",
    for: "Kantong Tipis, Mau Coba Website, Ingin Murah",
    features: [
      "Konsultasi gratis (pahami kebutuhan kamu)",
      "Website simple sesuai budget kamu",
      "Subdomain gratis (namausaha.pages.dev)",
      "Bisa bayar bertahap tanpa bunga",
      "Support 1 minggu",
      "Delivery 1–7 hari (sesuai kerumitan)",
    ],
    cta: "Ngobrol Aja Dulu",
    note: "Fitur & timeline fleksibel, disesuaikan budget",
    waText: "Halo Hitou, budget aku cuma ada 50-100rb nih. Bisa bantu bikin website?",
  },
  {
    id: "standar",
    name: "STANDAR",
    price: "Rp 250rb",
    popular: false,
    desc: "Paket terpopuler — website profesional dengan fitur lengkap untuk UMKM.",
    for: "UMKM, Katalog Produk, Portofolio Profesional",
    features: [
      "Website 1–3 halaman dengan desain modern",
      "Fully responsive (mobile, tablet, desktop)",
      "Domain .my.id/.biz.id included (tahun pertama Rp 30k/tahun)",
      "Hosting Cloudflare Pages (super cepat & gratis)",
      "SEO basic setup (mudah ditemukan Google)",
      "Contact form & WhatsApp integration",
      "3–5x revisi tanpa biaya",
      "Support gratis 2 minggu",
      "Delivery 3–5 hari kerja",
    ],
    cta: "Pilih Paket Standar",
    note: "Cocok untuk yang ingin hadir profesional di internet",
  },
  {
    id: "premium",
    name: "PREMIUM",
    price: "Rp 1.5jt",
    popular: false,
    desc: "Website full-fledged dengan sistem admin & database — siap untuk bisnis scalable.",
    for: "Toko Online, Booking System, Website Sistem",
    features: [
      "Website full custom development (design + fitur custom)",
      "Free source code (kamu punya akses penuh)",
      "Admin panel & database (kelola konten sendiri)",
      "Domain .com included (tahun pertama Rp 220k/tahun)",
      "Hosting Cloudflare Pages (performa enterprise)",
      "Payment gateway integration (Midtrans, Stripe, GCash)",
      "Analytics & conversion tracking setup",
      "Multi-user roles & permissions (jika diperlukan)",
      "Unlimited revisi sampai puas",
      "Priority support 1 bulan (live chat, email, WA)",
      "Delivery 10–14 hari kerja",
    ],
    cta: "Pilih Paket Premium",
    note: "Website production-ready dengan semua fitur profesional",
  },
];

export const projects = [
  {
    id: 1,
    title: "Mahessa Holiday",
    status: "Live Production",
    desc: "Platform booking travel & sewa mobil dengan sistem pembayaran terintegrasi.",
    tech: ["Laravel", "MySQL", "SEO Optimized"],
    points: ["Admin panel", "Package management", "Integrasi WhatsApp", "Blog"],
    year: "2026",
    image: "/assets/projects/1.webp",
    links: [
      { label: "Kunjungi Website", url: "https://mahessaholiday.my.id", type: "primary" },
      { label: "Lihat Repo", url: "https://github.com/andhkx/MahessaTransHoliday", type: "secondary" },
    ],
  },
  {
    id: 2,
    title: "BK Guidance System",
    status: "Tugas Akhir — Deployed",
    desc: "Aplikasi bimbingan konseling sekolah dengan multi-role authentication & data management.",
    tech: ["Flask", "SQL", "Multi-role (5 roles)"],
    points: ["Dashboard Interaktif", "Master Data", "Generate Surat", "35+ Fitur"],
    year: "2025",
    image: "/assets/projects/2.webp",
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
    desc: "Diskusi kebutuhan, visi, dan budget. Kami kasih rekomendasi & proposal.",
  },
  {
    step: "02",
    title: "Design & Development",
    time: "Sesuai paket",
    desc: "Website dibangun dengan teknologi terkini, dikerjakan bertahap & transparan.",
  },
  {
    step: "03",
    title: "Review & Revisi",
    time: "1–3 hari",
    desc: "Testing, feedback kamu, revisi sesuai paket sampai hasil sempurna.",
  },
  {
    step: "04",
    title: "Deploy & Support",
    time: "Live + support",
    desc: "Website online & siap digunakan. Kami siap support selama periode garansi.",
  },
];

export const features = [
  { 
    title: "Responsive Design", 
    desc: "Tampil sempurna di semua device — mobile, tablet, desktop" 
  },
  { 
    title: "SEO Basic Setup", 
    desc: "Optimasi dasar agar mudah ditemukan di Google" 
  },
  { 
    title: "Fast Loading", 
    desc: "Website super cepat — score Lighthouse 95+ di desktop" 
  },
  { 
    title: "Admin Panel / CMS", 
    desc: "Kelola konten sendiri tanpa perlu coding (Standar ke atas)" 
  },
  { 
    title: "Database Setup", 
    desc: "Data tersimpan aman & terstruktur (Standar ke atas)" 
  },
  { 
    title: "24/7 Support", 
    desc: "Ada yang aneh? Chat WA atau email, kami langsung bantu" 
  },
  { 
    title: "Domain & Hosting Konsultasi", 
    desc: "Kami arahkan pilihan terbaik yang paling hemat untuk kamu" 
  },
  { 
    title: "SSL Security", 
    desc: "Sertifikat keamanan included — website kamu aman dari hacker" 
  },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "Website dari Hitou benar-benar profesional, fitur lengkap, dan support-nya sangat responsif. Bisnis kami jadi lebih kredibel di mata customer, dan conversion meningkat signifikan.",
    name: "CEO Mahessa Trans Holiday",
    role: "Pemilik Mahessa Trans Holiday",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Kode yang ditulis sangat clean & well-structured. Problem-solving matang, dan pemahaman konsep programming impressive untuk level pelajar. Siap untuk industri.",
    name: "Pak Gugum Gumilar, S.T, M.T",
    role: "Penguji Tugas Akhir",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Aplikasi yang dibuat sangat user-friendly dan implementasinya tepat. Fitur-fitur helpful untuk kebutuhan sekolah. Andhika punya potensi besar sebagai developer profesional.",
    name: "Ibu Tini Hermawati, S.Psi",
    role: "Guru BK",
    rating: 5,
  },
];

export const faqs = {
  kantong: [
    {
      q: "Berapa budget minimal untuk paket Sesuai Kantong?",
      a: "Mulai dari Rp 50rb sudah bisa. Tapi ngobrol aja dulu sesuaikan dengan kebutuhan.",
    },
    {
      q: "Website dengan budget 50rb bakal kayak apa?",
      a: "Akan menjadi website sederhana tapi fungsional — landing page 1 halaman, kontak form, link WhatsApp. Cocok untuk yang mau coba online pertama kali.",
    },
    {
      q: "Bisa revisi berapa kali di paket Sesuai Kantong?",
      a: "2–3x revisi gratis. Revisi tambahan dimungkinkan dengan cost tambahan Rp 25rb per revisi.",
    },
    {
      q: "Berapa lama proses? Terus bisa bayar bertahap?",
      a: "Proses 1–7 hari tergantung kompleksitas & ketersediaan kamu untuk feedback. Iya, bisa bayar bertahap — misalnya 3 kali, tanpa bunga, tanpa syarat ribet.",
    },
    {
      q: "Domain & hosting di paket ini gimana?",
      a: "Kamu pakai subdomain gratis (contoh: tokomu.pages.dev) yang aman & fast. Jika mau domain custom (.com/.my.id), itu tambahan Rp 30-220k/tahun, tapi kami bantu setup.",
    },
    {
      q: "Support selama apa? Kalau error nanti gimana?",
      a: "Support gratis 1 minggu setelah launch. Kalau ada bug, kami bantu perbaiki tanpa charge. Setelah 1 minggu, support berbayar Rp 50rb/jam atau maintenance tahunan Rp 200rb.",
    },
  ],
  standar: [
    {
      q: "Paket Standar cocok untuk apa saja?",
      a: "Cocok untuk UMKM, toko online kecil, portofolio, katalog produk, atau profil bisnis yang ingin terlihat profesional. Website 1-3 halaman yang lengkap dengan SEO & contact form.",
    },
    {
      q: "Berapa lama proses? Garansi apa?",
      a: "Proses 3–5 hari kerja dari pembayaran 50%. Garansi: website stabil 1 bulan, dan kalau ada bug, kami perbaiki gratis.",
    },
    {
      q: "Bisa revisi berapa kali? Revisi apa aja?",
      a: "3–5x revisi gratis untuk: layout, warna, text, spacing, dll. Revisi besar (tambah halaman, fitur baru) dihitung terpisah.",
    },
    {
      q: "Domain apa yang included?",
      a: "Domain .my.id atau .biz.id included gratis tahun pertama (Rp 30k). Tahun kedua tinggal perpanjang Rp 30rb. Atau pakai domain sendiri, kami setup gratis.",
    },
    {
      q: "Apakah ada admin panel? Bisa edit sendiri?",
      a: "Tergantung jenis website. Landing page tidak ada admin panel. Tapi kalau butuh (untuk blog/katalog), kami bisa kasih simple admin atau dokumentasi untuk edit HTML manual.",
    },
    {
      q: "Support setelah launch berapa lama?",
      a: "Support gratis 2 minggu dari launch. Dalam periode itu, semua bug & issue ditangani gratis. Setelah 2 minggu, ada opsi maintenance tahunan atau support on-demand.",
    },
    {
      q: "Hosting-nya aman & cepat?",
      a: "Iya! Pakai Cloudflare Pages yang punya data center di mana-mana. Website kamu loading super cepat, aman dari DDoS, dan uptime 99.9%.",
    },
  ],
  premium: [
    {
      q: "Apa yang membedakan Premium dari Standar?",
      a: "Premium punya: admin panel full (kelola konten sendiri), database custom, payment gateway, source code gratis, unlimited revisi, & support 1 bulan. Perfect untuk bisnis yang ingin scalable.",
    },
    {
      q: "Berapa lama proses? Ada garansi?",
      a: "Proses 10–14 hari kerja. Garansi: website stabil 1 bulan, bug-free, & kami sediain training singkat tentang cara pakai admin panel.",
    },
    {
      q: "Payment gateway apa yang bisa diintegrasikan?",
      a: "Midtrans (bank transfer, e-wallet, cicilan), Stripe (kartu kredit internasional), atau custom payment sesuai kebutuhan. Biaya transaksi ditanggung customer, kami hanya setup.",
    },
    {
      q: "Bisa unlimited revisi? Seberapa 'unlimited'?",
      a: "Unlimited revisi sampai kamu benar-benar puas dengan hasil. Ini termasuk: layout, fitur minor, copy, warna, gambar, dll. Tapi jika ada request feature besar yang belum di-scope, itu termasuk project baru.",
    },
    {
      q: "Admin panel-nya gampang dipakai?",
      a: "Iya, kami bikin simple & intuitif — tidak perlu technical knowledge. Kamu bisa update produk, artikel, foto, harga sendiri. Ada juga training 30 menit via zoom/call.",
    },
    {
      q: "Domain & hosting apa yang included?",
      a: "Domain .com included gratis tahun pertama (Rp 220k). Hosting Cloudflare Pages gratis selamanya. Tahun kedua, domain perpanjang Rp 220rb/tahun.",
    },
    {
      q: "Support setelah launch berapa lama?",
      a: "Support PRIORITY selama 1 bulan — live chat WA, email, atau zoom call. Respons cepat (< 1 jam). Setelah 1 bulan, ada opsi extend support atau maintenance tahunan.",
    },
    {
      q: "Source code-nya bener-bener bebas dipakai?",
      a: "Iya, 100% gratis & milik kamu. Kamu bisa simpan, modifikasi, pindahkan ke server lain, atau bahkan jual ulang (kami tidak claim ownership apapun).",
    },
    {
      q: "Fitur apa saja yang bisa dikustomisasi?",
      a: "Hampir semua — layout, styling, backend logic, database structure, fitur tambahan, integrasi API, dll. Sesuaikan dengan kebutuhan bisnis kamu, kami coding dari nol.",
    },
  ],
};

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
  { label: "Instagram", handle: "@hitoustudio", icon: "instagram", url: "https://www.instagram.com/hitoustudio" },
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
  photo: "/assets/profile.webp",
  paragraph:
    "Saya Andhika, web developer muda dari Cimahi yang passionate bikin website untuk UMKM & personal. Percaya bahwa technology harus accessible untuk semua, tidak peduli budget. Mari wujudkan online presence kamu, mulai dari sekarang.",
};
