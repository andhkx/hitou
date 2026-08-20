// Frame device (laptop / phone) murni CSS — ringan, GPU-friendly.
// Isi layar: screenshot asli via `src`, atau placeholder sendiri via `children`.
// Animasi float pakai transform; nonaktif saat reduced-motion (lihat globals.css).
// `crop="half"`: frame phone nongol bagian atas, bawah kepotong + fade (pola layanan).
export default function DeviceMockup({
  device = "phone",
  src,
  alt = "",
  className = "",
  float = "slow",
  crop,
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

  const frame = (
    <div className={`relative ${crop ? "" : floatClass}`} style={crop ? undefined : style}>
      <div className={`relative rounded-[24px] border border-white/15 bg-[#0c0c0c] p-2 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] ${crop ? "w-[200px]" : "mx-auto w-[230px]"}`}>
        <div className="absolute left-1/2 top-[7px] z-10 h-[16px] w-20 -translate-x-1/2 rounded-full bg-black/90" />
        <div className="aspect-[9/19] w-full overflow-hidden rounded-[18px] bg-[#121212]">
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

  if (crop === "half") {
    return (
      <div className={`relative ${floatClass} ${className}`} style={style}>
        <div className="relative h-[270px] w-[200px] overflow-hidden rounded-b-[24px]">
          {frame}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#151515] via-[#151515]/60 to-transparent" />
        </div>
      </div>
    );
  }

  return frame;
}