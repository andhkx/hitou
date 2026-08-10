// Ganti data placeholder di file ini dengan data pribadi kamu.

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

export const profile = {
  name: "Andhika Andriana Putra",
  firstName: "Andhika",
  lastName: "Putra",
  nameParts: ["Andhika", "Andriana", "Putra"],
  headLinePrimary: "Fullstack",
  headLineSecondary: "Developer",
  eyebrow: "✦ Available for work",
  typedRoles: ["Building clean, modern web apps.", "Turning ideas into digital experiences.", "Code. Design. Ship."],
  bio: "Menciptakan website modern dengan tampilan clean, responsif, dan elegan. Mengubah ide dan desain menjadi pengalaman digital yang menarik dan mudah digunakan.",
  hints: ["↓ explore my work below", "↗ open to full-time & freelance opportunities"],
  heroTags: ["Typescript", "React.js", "Tailwind", "Next.js", "Node.js"],
};

export const about = {
  paragraph:
    "Fresh Graduate SMK Rekayasa Perangkat Lunak dengan passion di bidang fullstack development dan UI modern. Berfokus pada pembuatan website clean, responsif, dan visual yang kuat untuk menghadirkan pengalaman digital yang optimal.",
  quote: "Turning ideas into clean, modern, and meaningful digital experiences.",
  // Taruh foto di public/assets/profile.png, atau ubah path ini.
  photo: "",
  // Ganti dengan link Google Drive / file CV kamu.
  cvUrl: "#",
};

export const projects = [
  {
    id: 1,
    title: "Project Name 1",
    description: "Deskripsi singkat project kamu. Ceritakan masalah yang diselesaikan dan teknologi yang dipakai.",
    tags: ["Next.js", "Tailwind", "Supabase"],
    year: "2026",
    live: "#",
    repo: "#",
  },
  {
    id: 2,
    title: "Project Name 2",
    description: "Deskripsi singkat project kamu. Ceritakan masalah yang diselesaikan dan teknologi yang dipakai.",
    tags: ["React", "Node.js", "PostgreSQL"],
    year: "2025",
    live: "#",
    repo: "#",
  },
  {
    id: 3,
    title: "Project Name 3",
    description: "Deskripsi singkat project kamu. Ceritakan masalah yang diselesaikan dan teknologi yang dipakai.",
    tags: ["Typescript", "Express", "MongoDB"],
    year: "2025",
    live: "#",
    repo: "#",
  },
];

export const certificates = [
  { id: 1, title: "Certificate Name 1", issuer: "Issuer / Platform", year: "2025" },
  { id: 2, title: "Certificate Name 2", issuer: "Issuer / Platform", year: "2024" },
  { id: 3, title: "Certificate Name 3", issuer: "Issuer / Platform", year: "2024" },
];

// logo: CDN simple-icons (gambar otomatis, tanpa file). Ganti dengan path lokal
// (misal "/img/typescript.svg") cukup dengan mengubah string ini.
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
      { name: "Express", logo: "https://cdn.simpleicons.org/express/cccccc" },
      { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/cccccc" },
      { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb/cccccc" },
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
  { label: "LinkedIn", handle: "@linkedin", icon: "linkedin", url: "#" },
  { label: "Instagram", handle: "@instagram", icon: "instagram", url: "#" },
  { label: "Youtube", handle: "@youtube", icon: "youtube", url: "#" },
  { label: "Github", handle: "@github", icon: "github", url: "#" },
  { label: "TikTok", handle: "@tiktok", icon: "tiktok", url: "#" },
];

export const contactInfo = {
  email: "andhikaputrach273@gmail.com",
  location: "Indonesia",
  footer: "© 2026 Andhika Andriana Putra — All rights reserved.",
};