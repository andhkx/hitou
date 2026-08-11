"use client";

import { useEffect, useState } from "react";

// React Bits - TextAnimations/Typewriter (JS port) - fixed loop bug
// https://www.reactbits.dev/text-animations/typewriter

export default function Typewriter({
  text = ["Code.", "Sleep.", "Repeat."],
  speed = 70,
  initialDelay = 0,
  waitTime = 2000,
  deleteSpeed = 30,
  loop = true,
  className = "",
  showCursor = true,
  hideCursorOnType = false,
  cursorChar = "|",
  cursorColor = "auto",
  cursorClassName = "",
  textColor = "auto",
}) {
  const [numDisplayedChars, setNumDisplayedChars] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const currentText = text[textIndex];
  const isFull = numDisplayedChars >= currentText.length;
  const showFullText = !isDeleting && isFull;
  const cursorOpacity =
    showCursor && (hideCursorOnType ? showFullText : true) ? "opacity-100" : "opacity-0";

  useEffect(() => {
    if (isDone) return;
    const full = numDisplayedChars >= text[textIndex].length;

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          if (numDisplayedChars === 0) {
            // selesai menghapus -> pindah ke teks berikutnya
            setTextIndex((prev) => (prev + 1) % text.length);
            setIsDeleting(false);
          } else {
            setNumDisplayedChars((n) => n - 1);
          }
        } else if (full) {
          if (!loop) {
            setIsDone(true);
            return;
          }
          // jeda (waitTime) lalu mulai hapus
          setIsDeleting(true);
        } else {
          setNumDisplayedChars((n) => n + 1);
        }
      },
      isDeleting
        ? numDisplayedChars === 0
          ? 300
          : deleteSpeed
        : full
          ? waitTime
          : speed
    );

    return () => clearTimeout(timeout);
  }, [
    numDisplayedChars,
    isDeleting,
    text,
    textIndex,
    waitTime,
    speed,
    deleteSpeed,
    loop,
    isDone,
  ]);

  return (
    <div className={`inline-block whitespace-pre-wrap tracking-tight ${className}`}>
      <span
        className="inline"
        style={{ color: textColor === "auto" ? undefined : textColor }}
      >
        {currentText.slice(0, numDisplayedChars)}
      </span>
      <span
        className={`ml-1 inline-block ${cursorOpacity} ${cursorClassName}`}
        style={{ color: cursorColor === "auto" ? undefined : cursorColor }}
      >
        {cursorChar}
      </span>
    </div>
  );
}