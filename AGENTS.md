<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Overview
Next.js 16 App Router portfolio application with React 19, Tailwind CSS v4, and React Compiler enabled. LANDS `static export` (`output: "export"`). 4 routes: `/`, `/harga`, `/portofolio`, `/keuntungan` (story-slides). Style dipengaruhi `https://dibikinin.com` (mockup device, swipe horizontal mobile, testimoni chat WA, slide keuntungan interaktif).

## Commands
- Dev: `npm.cmd run dev` · Build: `npm.cmd run build` · Start: `npm.cmd run start` (serves export) · Lint: `npm.cmd run lint`
- Panggil npm via `npm.cmd run <script>` (Windows PowerShell; `npm` kadang gagal).
- Lint rule ketat: no `setState` langsung dalam effect body (`react-hooks/set-state-in-effect`) — pindahkan ke event handler / gunakan `useMotionValue`.

## Tech Stack & Conventions
- Next.js 16 (App Router in `src/app`), React 19 + `reactCompiler: true`, Tailwind CSS v4 (`@import "tailwindcss";` in `src/app/globals.css`), alias `@/*` → `./src/*`.
- Semua copy data di `src/data/portfolio.js` (layanan, pricing, projects, keuntunganSlides, testimonials). Konten halaman/edit copy DI SINI, jangan hardcode di JSX.
- Navbar/Footer pakai `navLinks` (object `{label, href}/`). Aktif menu via `usePathname` (bukan scroll spy).

## Repo Gotchas (verified)
- **Keep source files UTF-8.** Past edits stored double-encoded emoji literally (`âœ¨`, `âœ¦`, `â†“`, `â€”`). Write real Unicode chars (`✨`, `✦`, `↓`, `—`) directly. Data file `src/data/portfolio.js` always clean — compare against it.
- **Perf budget** (target Lighthouse: mobile FCP <1s, LCP <2.5s, TBT <300ms):
  - **Tiada three.js/WebGL berat lagi.** `Lanyard.jsx` dihapus (sebabkan LCP desktop 4.2s). Jangan balik menambah 3D hero.
  - **`CursorGlow.jsx` dihapus + blok `cursor:none` di `globals.css` wajib juga dihapus** bersama custom cursor (kalau cursor dihapus tanpa blok CSS → kursor native hilang permanen di desktop).
  - Mockup device = `DeviceMockup.jsx` (CSS frame laptop/phone + `animate-float-slow/tiny`, transform-only). Placeholder konten mockup layanan sengaja dikosongkan (belum diisi AI); isi via `children`, jangan divakum menambah file. `crop="half"` → phone kepotong bawah (pola kartu layanan).
  - **IntroLoader dihapus** — gak ada intro saat masuk/pindah page. Jangan balik pasang preloader overlay.
  - Swipe mobile = class CSS `.swipe-row` (scroll-snap-x) + hint `.swipe-hint`; desktop otomatis grid 3 kolom. JANGAN ganti jadi drag library.
  - `SpecularButton.jsx`: WebGL effect early-returns di coarse pointer + reduced-motion. Keep that gate.
  - `Hero.jsx` Typewriter: static text saat reduced-motion OR coarse pointer.
- **Font**: `Plus_Jakarta_Sans` (var `--font-jakarta`) untuk sans/heading; `DM_Mono` (`--font-dm-mono`) hanya label kecil. Jangan kembalikan Syne. Heading section `text-2xl md:text-4xl` (bukan 5xl). Subpage `PageHeader` kompak + `hideHeading` di Pricing/Portfolio biar gak dobel judul.
- **Coarse-pointer gate pattern**: `useSyncExternalStore` pada `matchMedia("(pointer: coarse)")` dengan `() => false` sbg server snapshot (lihat `Hero.jsx`). Jangan panggil `window` di module scope client component (mereka SSR).
- **Keuntungan page**: slides bersifat client; navigasi via tombol prev/next + dots + step label + keyboard ←/→ (bukan swipe). Nama usaha personalisasi string — fallback `"Toko Kamu"` saat kosong. Mockup Google/WA/CSS murni.
- `sitemap.xml/route.ts` cepat-cepat sync dengan route baru (4 URL). Tiap page baru: `metadata` + `alternates.canonical` unik.
