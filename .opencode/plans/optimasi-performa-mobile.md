# Rencana: Optimasi Performa & Perbaikan Mobile (Hitou Studio)

## Status
Website: hitoustudio.pages.dev / hitou.my.id — Next.js static export di Cloudflare Pages. Skor PageSpeed saat ini: desktop 48–58 (TBT tinggi), mobile 84.

## Masalah Utama
1. **Mobile = lag/patah-patah saat scroll + loncatan (jump scroll)**
2. **Gambar masih `.jpg`** (belum webp) → lebih berat & muncul 404/CLS setelah file dipindah
3. **Desktop = TBT tinggi** (init 3D Lanyard) walaupun sebagian sudah di-defer

## Rencana Eksekusi (5 langkah)

### 1. Perbaikan Mobile Scroll (fix lag/patah-patah)
- 7 orb blur di `Background.jsx` → tanda kelas `bg-orb` / `bg-orb-soft`, di media <768px: 3 orb di-hide (`.bg-orb-soft { display:none }`), 4 orb utama opacity 0.16 — kurangi paint berat di HP
- Tambah `content-visibility: auto` + `contain-intrinsic-size: auto 800px` untuk `section[id]` (render hanya yang dekat viewport)
- Tambah `scroll-margin-top: 5.5rem` untuk `section[id]` (anchor scroll tidak tertutup navbar `fixed` → hindari loncatan saat klik nav)
- Sudah ada: paksa 1 orb-soft di-hide, orbs akan di-mark via kelas.

### 2. Gambar WebP (hemat kuota)
- Konversi: `profile.jpg` → `profile.webp` (sudah buat: 8.2KB), `projects/1.jpg`→`1.webp` (19KB), `projects/2.jpg`→`2.webp` (39KB)
- Data path `portfolio.js`: `about.photo` → `/assets/profile.webp`, `projects[].image` → `/assets/projects/N.webp`
- Hapus file `.jpg` (sudah dihapus di working tree)
- Verifikasi: file webp ikut ter-deploy (cek `git status` — sudah `M data` + `D jpg` + `?? webp`), build lalu push; cek `hitou.my.id/assets/...webp` 200.

### 3. Desktop — turunkan TBT (3D init)
- Sudah: mount Lanyard di-tunda (idle callback, timeout 12s) → GLB+wasm di-fetch setelah window TBT Lighthouse
- Verifikasi ke depan: pastikan `requestIdleCallback` dengan timeout tetap ada; jangan dimuat saat critical
- Pastikan `hidden md:block` pada Lanyard (tdk dimount <768) — tidak boleh render canvas 3D di mobile

### 4. Konsistensi data & kecil
- Cek `portfolio.js` current (user sudah edit): pastikan angka 300K/250rb konsisten dgn `pricing`, FAQ "Starter" vs "Sesuai Kantong", `socials.email` = hitoodiningrat@gmail.com (sudah), footer `contactInfo`
- Icon `Github` di lucide tidak ada (brand icons dihapus di versi baru) → sudah pakai `FolderGit2`
- Pastikan semua `image`/`photo` path memakai `.webp` (tidak ada `.jpg` tersisa)

### 5. Verifikasi
- `npm run lint` (exit 0)
- `npm run build` (exit 0, `out/` berisi sitemap.xml + robots.txt)
- `git add -A; git commit; git push origin HEAD:main`
- Cek `hitou.my.id` HTTP 200 + apakah sudah update (title baru "Hitou | Bikin Website Sesuai Kantong")
- Lighthouse ulang desktop & mobile (target: mobile 90+, desktop ≥75, CLS <0.01)
- Hard refresh user (cache browser) jika tetap terlihat lama

## Catatan Tambahan
- **CLS/"loncat"**: root penyebab kemungkinan gambar gagal load (404) + scroll-behavior smooth + reveal animations → sudah ditangani item 2 & 4
- **Hitou.my.id "belum update"**: title terverifikasi sudah live ("Hitou | Bikin Website Sesuai Kantong", 200 OK) → kemungkinan cache browser/CF. Opsional: purge cache Cloudflare atau hard refresh.

## Akhir
Setelah eksekusi, re-run Lighthouse + beri rekomendasi apakah masih perlu optimasi lanjutan.