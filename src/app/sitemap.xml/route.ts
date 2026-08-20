export const dynamic = "force-static";

const PATHS = [
  { path: "", changefreq: "weekly", priority: 1.0 },
  { path: "/harga", changefreq: "monthly", priority: 0.9 },
  { path: "/portofolio", changefreq: "monthly", priority: 0.8 },
  { path: "/keuntungan", changefreq: "monthly", priority: 0.8 },
];

export function GET() {
  const lastMod = new Date().toISOString().split("T")[0];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PATHS.map(
  (p) => `  <url>
    <loc>https://hitou.my.id${p.path}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
).join("\n")}
</urlset>`;
  return new Response(body, {
    headers: { "Content-Type": "application/xml" },
  });
}