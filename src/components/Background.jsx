"use client";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 md:w-56 md:h-56 rounded-full bg-white blur-[90px] opacity-30"></div>
        <div className="absolute top-10 right-10 w-40 h-40 md:w-56 md:h-56 rounded-full bg-zinc-300 blur-[100px] opacity-25"></div>
        <div className="absolute bottom-10 left-10 w-44 h-44 md:w-60 md:h-60 rounded-full bg-zinc-400 blur-[110px] opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 md:w-56 md:h-56 rounded-full bg-white blur-[100px] opacity-20"></div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:26px_26px]"></div>
    </div>
  );
}