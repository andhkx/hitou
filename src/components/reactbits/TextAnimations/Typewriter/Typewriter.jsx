"use client";

import { useEffect, useRef, useState } from "react";

// React Bits - TextAnimations/Typewriter (JS port)
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
  const [showFullText, setShowFullText] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const timeoutRef = useRef(null);

  const currentText = text[textIndex];
  const displayText = currentText.slice(0, numDisplayedChars);

  useEffect(() => {
    if (isDone || isPaused) return;

    const handleTyping = () => {
      const shouldStartDeleting =
        !isDeleting && numDisplayedChars === currentText.length;

      if (shouldStartDeleting) {
        if (!loop) {
          setIsDone(true);
          return;
        }
        setIsPaused(true);
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
          setShowFullText(true);
          setIsPaused(false);
        }, waitTime);
      } else if (isDeleting) {
        if (numDisplayedChars === 0) {
          setIsPaused(true);
          timeoutRef.current = setTimeout(() => {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % text.length);
            setShowFullText(false);
            setIsPaused(false);
          }, 300);
        } else {
          timeoutRef.current = setTimeout(() => {
            setNumDisplayedChars((prev) => prev - 1);
          }, deleteSpeed);
        }
      } else {
        timeoutRef.current = setTimeout(() => {
          setNumDisplayedChars((prev) => prev + 1);
        }, speed);
      }
    };

    if (initialDelay > 0 && numDisplayedChars === 0 && !isDeleting) {
      timeoutRef.current = setTimeout(() => {
        setNumDisplayedChars(1);
      }, initialDelay);
    } else {
      handleTyping();
    }

    return () => clearTimeout(timeoutRef.current);
  }, [
    numDisplayedChars,
    isDeleting,
    isPaused,
    textIndex,
    text,
    currentText,
    initialDelay,
    waitTime,
    speed,
    deleteSpeed,
    loop,
    isDone,
  ]);

  const cursorOpacity =
    showCursor && (hideCursorOnType ? showFullText : true) ? "opacity-100" : "opacity-0";

  return (
    <div
      className={`inline-block whitespace-pre-wrap tracking-tight ${className}`}
    >
      <span
        className="inline"
        style={{ color: textColor === "auto" ? undefined : textColor }}
      >
        {displayText}
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