# Rencana Eksekusi — Mobile Smooth + WebP + Desktop Ringan

Status: siap eksekusi (menunggu izin keluar plan mode).

## A. Mobile ringan (fix "patah-patah"/jump scroll)
1. `src/components/Background.jsx` — 7 orb diberi kelas `bg-orb` / `bg-orb-soft`
   (3 orb-soft disembunyikan + 4 orb opasitas turun di `max-width:767px` via media query yang sudah ada di globals.css)
2. `src/components/reactbits/BorderGlow/BorderGlow.jsx` — guard di `handlePointerMove`:
   `if (typeof window !== "undefined" && !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;`
   → menghilangkan forced-layout (`getBoundingClientRect` + `setProperty`) saat touch-scroll di atas kartu (root-cause jank HP)
3. Sudah aktif: `content-visibility:auto` + `contain-intrinsic-size` per section, `scroll-margin-top:5.5rem`, marquee/specular IO pause, meshline NaN guard

## B. Gambar WebP (sudah dilakukan di working tree)
- `about.photo` → `/assets/profile.webp`, `projects[].image` → `.webp` (1.webp/2.webp)
- File `.jpg` dihapus (hemat ±64KB)

## C. Desktop ringan (pertahankan skor ≥95)
- Tidak ada perubahan material — semua aktor berat (Lanyard 12s idle skip-window, SpecularButton skip-render+IO, LogoLoop IO pause, image webp) sudah aktif

## D. Verifikasi
1. `npm run lint`
2. `next build` (pastikan `.webp` ikut ke `out/assets`)
3. `git add -A && git commit && git push` → auto-deploy `hitou.my.id`
4. Lighthouse desktop & mobile ulang (target: mobile ≥85, CLS ≤0.01, desktop ≥95)

## File yang akan diubah
- `src/components/Background.jsx` (edit #1)
- `src/components/reactbits/BorderGlow/BorderGlow.jsx` (edit #2)
- (data gambar + globals.css sudah berubah di working tree, belum di-commit)