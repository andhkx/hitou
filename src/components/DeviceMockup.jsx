// Frame device (laptop / phone) murni CSS — ringan, GPU-friendly.
// Isi layar: screenshot asli via `src`, atau placeholder sendiri via `children`.
// Animasi float pakai transform; nonaktif saat reduced-motion (lihat globals.css).
export default function DeviceMockup({
  device = "phone",
  src,
  alt = "",
  className = "",
  float = "slow",
  children,
  style = {},
}) {
  const floatClass = float === "tiny" ? "animate-float-tiny" : "animate-float-slow";

  if (device === "laptop") {
    return (
      <div className={`relative ${floatClass} ${className}`} style={{ ...style, "--tilt": "-2deg" }}>
        <div className="relative rounded-[14px] border border-white/15 bg-[#0c0c0c] p-2 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)]">
          <div className="flex items-center gap-1.5 px-1.5 pb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="ml-auto h-3 w-20 rounded-full bg-white/10" />
          </div>
          <div className="aspect-video w-full overflow-hidden rounded-[8px] bg-[#121212]">
            {src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={src} alt={alt} width={1280} height={720} loading="lazy" decoding="async" className="h-full w-full object-cover" />
            ) : (
              children
            )}
          </div>
        </div>
        <div className="mx-auto h-[10px] w-[38%] rounded-b-lg border border-t-0 border-white/15 bg-[#0c0c0c]" />
      </div>
    );
  }

  return (
    <div className={`relative ${floatClass} ${className}`} style={style}>
      <div className="relative mx-auto w-[230px] rounded-[26px] border border-white/15 bg-[#0c0c0c] p-2 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)]">
        <div className="absolute left-1/2 top-[7px] z-10 h-[18px] w-24 -translate-x-1/2 rounded-full bg-black/90" />
        <div className="aspect-[9/19] w-full overflow-hidden rounded-[20px] bg-[#121212]">
          {src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={src} alt={alt} width={1080} height={2280} loading="lazy" decoding="async" className="h-full w-full object-cover" />
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
}