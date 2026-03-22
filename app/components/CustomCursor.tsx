"use client";

import { useEffect, useRef, useCallback } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);
  const hoverState = useRef<string>("");

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const animate = useCallback(() => {
    pos.current.x = lerp(pos.current.x, target.current.x, 0.12);
    pos.current.y = lerp(pos.current.y, target.current.y, 0.12);

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
    }

    raf.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Don't show on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const onMouseOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const cursor = cursorRef.current;
      if (!cursor) return;

      // Check for interactive elements
      const isLink =
        el.tagName === "A" ||
        el.closest("a") ||
        el.tagName === "BUTTON" ||
        el.closest("button");
      const isText =
        el.dataset.cursorText !== undefined ||
        el.closest("[data-cursor-text]");
      const isHover =
        el.dataset.cursorHover !== undefined ||
        el.closest("[data-cursor-hover]");

      if (isLink) {
        cursor.className = "cursor-blob hovering-link";
        hoverState.current = "link";
      } else if (isText) {
        cursor.className = "cursor-blob hovering-text";
        hoverState.current = "text";
      } else if (isHover) {
        cursor.className = "cursor-blob hovering";
        hoverState.current = "hover";
      } else {
        cursor.className = "cursor-blob";
        hoverState.current = "";
      }
    };

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseover", onMouseOver, { passive: true });
    raf.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(raf.current);
    };
  }, [animate]);

  return <div ref={cursorRef} className="cursor-blob" />;
}
