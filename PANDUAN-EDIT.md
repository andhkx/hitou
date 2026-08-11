# PANDUAN EDIT — Hitou Studio

Cara pakai: buka file di VS Code, tekan `Ctrl+Click` pada referensi `nama-file:nomor-baris` di bawah untuk lompat langsung ke lokasinya.

---

## 1. Data utama (nama, harga, paket, FAQ, project, sosmed)

**Semua isi konten (teks, harga, link WA, FAQ, project) ada di satu file:**
[`src/data/portfolio.js`](src/data/portfolio.js)

| Yang mau diubah | File:Baris | Isi |
|---|---|---|
| Nomor WhatsApp (semua tombol) | `src/data/portfolio.js:3` | `wa = (message)` → nomor `628179172900` |
| Nama & teks hero | `src/data/portfolio.js:13` | blok `profile` (mulai baris 13) |
| Baris info di bawah CTA hero | `src/data/portfolio.js:24` | `heroMicrocopy` (harga/delivery) |
| Kalimat ketik di hero | `src/data/portfolio.js:26` | `typedDescriptions` (3 kalimat berputar) |
| Bio (dipakai footer) | `src/data/portfolio.js:33` | `bio` |
| 4 paket harga + fitur | `src/data/portfolio.js:36` | `pricing` — tiap paket: `price` (harga), `desc`, `for` (cocok buat, dipisah koma → jadi badge), `example` (link contoh, dipakai Premium), `features`, `cta` |
| 2 project (Mahessa, BK) | `src/data/portfolio.js:105` | `projects` |
| Proses 4 langkah | `src/data/portfolio.js:132` | `process` |
| Checklist "Selalu Included" | `src/data/portfolio.js:159` | `features` |
| 7 pertanyaan FAQ | `src/data/portfolio.js:169` | `faqs` |
| Testimonial placeholder | `src/data/portfolio.js:200` | `testimonialsPlaceholder` |
| Tech stack / logo | `src/data/portfolio.js:203` | `techStack` |
| 4 sosmed | `src/data/portfolio.js:233` | `socials` |
| Email, nomor, lokasi, footer text | `src/data/portfolio.js:240` | `contactInfo` |
| Foto profil About/CTA | `src/data/portfolio.js:247` | `about.photo` → `/assets/profile.jpg` |

Foto project: taruh di `public/assets/projects/1.jpg`, `2.jpg`; foto profil di `public/assets/profile.jpg`.

---

## 2. Hero (tampilan awal)

[`src/components/Hero.jsx`](src/components/Hero.jsx)

| Elemen | File:Baris | Cara atur |
|---|---|---|
| "Halo! Saya" | `src/components/Hero.jsx:59` | teks greeting (ada di data) |
| Nama "Hitou" | `src/components/Hero.jsx:60` | warna putih, bold |
| Role "Web Developer." | `src/components/Hero.jsx:69` | ganti teks di `portfolio.js:22` (`heroRole`) |
| Paragraf typewriting | `src/components/Hero.jsx:87` | kalimat = `typedDescriptions`; kecepatan = `speed={24}` (baris 86), delay antar kalimat `waitTime={3200}` |
| Tombol WA putih | `src/components/Hero.jsx:109` | label = `ctaPrimary` |
| Tombol Lihat Paket | `src/components/Hero.jsx:117` | label = `ctaSecondary` |
| Baris info harga/delivery | `src/components/Hero.jsx:130` | teks = `heroMicrocopy` (di data) |
| **Posisi & ukuran kartu 3D** | `src/components/Hero.jsx:38` | `position={[0,0,20]}` (z kecil = dekat/besar), `fov={13}` (kecil = besar), `lanyardWidth={2}` (lebar tali) |
| Area tarik kartu | `src/components/Hero.jsx:37` | wrapper `inset-0` = seluruh hero bisa di-drag; kartu di **bawah** teks (z-0) |

---

## 3. Lanyard / kartu 3D (physics & animasi)

[`src/components/reactbits/Backgrounds/Lanyard/Lanyard.jsx`](src/components/reactbits/Backgrounds/Lanyard/Lanyard.jsx)

| Elemen | File:Baris | Cara atur |
|---|---|---|
| Posisi gantung (kartu geser kanan) | `Lanyard.jsx:332` | `position={[2.2, 4, 0]}` → x geser kiri/kanan, y naik/turun |
| Panjang tali (3 segmen) | `Lanyard.jsx:274-289` | angka terakhir tiap `useRopeJoint` = panjang segmen (0.8 = pendek, 1.2 = panjang) |
| Jarak kartu ke dudukan | `Lanyard.jsx:291` | `useSphericalJoint` → `[0, 1.5, 0]` |
| Lebar tali | `src/components/Hero.jsx:38` | `lanyardWidth={1}` (2 = sedang, 3 = tebal) |
| Ukuran fisik kartu | `Lanyard.jsx:351` | `scale={2.25}` → 2.6 lebih besar |

---

## 4. Paket Harga

[`src/components/Pricing.jsx`](src/components/Pricing.jsx)

| Elemen | File:Baris | Cara atur |
|---|---|---|
| Daftar paket | `Pricing.jsx:31` | render dari `pricing` (data) |
| Badge "PALING LARIS" | `Pricing.jsx:47` | muncul di paket dengan `popular: true` (data) |
| Ukuran harga | `Pricing.jsx:57-59` | `text-3xl md:text-4xl` |
| Tombol per paket → WA | `Pricing.jsx:72` | pesan WA otomatis berisi nama paket |

---

## 6. Portofolio (project + tech strip)

[`src/components/Portfolio.jsx`](src/components/Portfolio.jsx)

| Elemen | File:Baris | Cara atur |
|---|---|---|
| Kartu project | `Portfolio.jsx:52` | dari `projects` (data) |
| Gambar project | `Portfolio.jsx:63` | `p.image` → file di `public/assets/projects/` |
| Badge LIVE | `Portfolio.jsx:75` | dari `p.status` (data) |
| Link project | `Portfolio.jsx:122` | `p.link` di data |
| Logo tech di bawah | `Portfolio.jsx:40` | dari `techStack` (data) — kini marquee LogoLoop |
| Logo marquee (kecepatan) | `src/components/Portfolio.jsx` (cari `LogoLoop`) | `speed={60}` = kecepatan geser, `direction="left"`, `logoHeight={22}`, `scaleOnHover` |
| Glow border kartu | `src/components/reactbits/BorderGlow/BorderGlow.jsx` | dipakai di Pricing (`Pricing.jsx`), Portfolio card, CTA; atur `glowColor`/`glowIntensity` per pemakaian |

---

## 7. Features / Process / FAQ / Testimonial

| Komponen | File | Konten di |
|---|---|---|
| Checklist | [`src/components/Features.jsx`](src/components/Features.jsx) | `portfolio.js:159` |
| Proses 4 langkah | [`src/components/Process.jsx`](src/components/Process.jsx) | `portfolio.js:132` |
| FAQ accordion | [`src/components/FAQ.jsx`](src/components/FAQ.jsx) | `portfolio.js:169` |
| Testimonial | [`src/components/Testimonials.jsx`](src/components/Testimonials.jsx) | `portfolio.js:200` (`testimonialsPlaceholder`) |

---

## 8. CTA & Footer

[`src/components/CTA.jsx`](src/components/CTA.jsx) — tombol WA besar `CTA.jsx:66`, email `:69`, foto `:109`, nomor HP `:127`.
[`src/components/Footer.jsx`](src/components/Footer.jsx) — brand `:11`, menu `:20`, sosmed `:49`, copyright `:66`.

---

## 9. Elemen global

| Elemen | File:Baris | Cara atur |
|---|---|---|
| Navbar (menu, logo, aktif-hover) | [`src/components/Navbar.jsx`](src/components/Navbar.jsx:54) | logo gambar `:45`, link `:59` |
| Logo navbar & footer | `src/data/portfolio.js` → file `/assets/logo_hitou.png` | ganti file di `public/assets/logo_hitou.png` (ucapkan nama sama) |
| Favicon | `src/app/layout.js:21` | `icons.icon` → `/assets/logo_h.png` (ganti file di `public/assets/logo_h.png`) |
| Intro loader durasi | [`src/components/IntroLoader.jsx`](src/components/IntroLoader.jsx:8) | `DURATION = 1100` (ms) |
| Cursor glow (besar/transparan) | [`src/components/CursorGlow.jsx`](src/components/CursorGlow.jsx:24) | `w-80 h-80` ukuran, `bg-white/[0.045]` transparansi |
| Warna tema (background, teks abu) | [`src/app/globals.css`](src/app/globals.css:4) | `--bg-primary`, `--text-primary`, `--text-secondary`, `--text-muted` |
| Judul tab browser | [`src/app/layout.js`](src/app/layout.js:16) | `metadata.title` |