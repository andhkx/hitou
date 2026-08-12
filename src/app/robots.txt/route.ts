export const dynamic = "force-static";

export function GET() {
  const body =
    "User-agent: *\nAllow: /\n\nSitemap: https://hitoustudio.pages.dev/sitemap.xml";
  return new Response(body, {
    headers: { "Content-Type": "text/plain" },
  });
}