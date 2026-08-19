"use client";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0">
        <div className="bg-orb absolute top-10 left-10 w-56 h-56 md:w-72 md:h-72 rounded-full bg-white blur-[110px] opacity-40"></div>
        <div className="bg-orb-soft absolute top-1/4 right-10 w-64 h-64 md:w-80 md:h-80 rounded-full bg-zinc-300 blur-[130px] opacity-35"></div>
        <div className="bg-orb absolute top-1/2 left-1/4 w-72 h-72 rounded-full bg-zinc-400 blur-[140px] opacity-30"></div>
        <div className="bg-orb-soft absolute bottom-10 left-10 w-64 h-64 md:w-80 md:h-80 rounded-full bg-white blur-[130px] opacity-40"></div>
        <div className="bg-orb absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-zinc-300 blur-[150px] opacity-30"></div>
        <div className="bg-orb-soft absolute top-1/3 left-2/3 w-60 h-60 rounded-full bg-white blur-[120px] opacity-25"></div>
        <div className="bg-orb absolute top-2/3 left-1/2 w-64 h-64 rounded-full bg-zinc-400 blur-[140px] opacity-25"></div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:26px_26px]"></div>
    </div>
  );
}