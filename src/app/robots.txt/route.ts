export const dynamic = "force-static";

export function GET() {
  const body =
    "User-agent: *\nAllow: /\n\nSitemap: https://hitou.my.id/sitemap.xml";
  return new Response(body, {
    headers: { "Content-Type": "text/plain" },
  });
}