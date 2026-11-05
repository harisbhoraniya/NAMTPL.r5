"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

type Slide = {
  img: string;
  label: string;
};

export default function ImageSlider({ slides }: { slides: Slide[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = useCallback((i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(i, slides.length - 1));
    el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" });
    setActive(clamped);
  }, [slides.length]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const i = Math.round(el.scrollLeft / el.clientWidth);
      setActive(i);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative mb-10">
      <div
        ref={trackRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory rounded-2xl card-hover [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {slides.map((s, i) => (
          <div
            key={`${i}-${s.img}`}
            className="relative shrink-0 w-full snap-start aspect-[16/9] bg-[#111113]"
          >
            <img
              src={s.img}
              alt={s.label}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.55)] to-transparent pointer-events-none" />
            <p className="absolute bottom-5 left-6 text-white text-[18px] font-semibold tracking-tight">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        type="button"
        aria-label="Previous"
        onClick={() => scrollToIndex(active - 1)}
        disabled={active === 0}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 border border-[#e8e8ed] flex items-center justify-center text-[#1d1d1f] hover:bg-white transition-colors disabled:opacity-30 disabled:pointer-events-none shadow-sm"
      >
        <RiArrowLeftSLine size={18} />
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={() => scrollToIndex(active + 1)}
        disabled={active === slides.length - 1}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 border border-[#e8e8ed] flex items-center justify-center text-[#1d1d1f] hover:bg-white transition-colors disabled:opacity-30 disabled:pointer-events-none shadow-sm"
      >
        <RiArrowRightSLine size={18} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 right-6 flex items-center gap-2">
        {slides.map((s, i) => (
          <button
            key={`dot-${i}-${s.img}`}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => scrollToIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? "w-6 bg-white" : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}