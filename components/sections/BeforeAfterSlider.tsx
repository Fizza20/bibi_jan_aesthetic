"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { BEFORE_AFTER_CASES } from "@/data/clinic-data";
import { Sparkles, Info } from "lucide-react";

export default function BeforeAfterSlider() {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = BEFORE_AFTER_CASES[activeCaseIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percentage = (clampedX / rect.width) * 100;

    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section
      className="relative overflow-hidden bg-clinical-surface py-24 sm:py-28"
      id="results"
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-brand-500" />

              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-600 sm:text-xs">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Clinical Observations</span>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-medium leading-tight tracking-tight text-clinical-dark sm:text-4xl lg:text-[3.15rem]">
              Restoring Skin Vitality & Balance
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-clinical-slate sm:text-base">
              Visual documentation of individualized dermatological and
              aesthetic protocols. Drag the slider to observe each
              transformation.
            </p>
          </div>

          {/* Case Selector */}
          <div className="flex flex-wrap gap-2 lg:max-w-sm lg:justify-end">
            {BEFORE_AFTER_CASES.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveCaseIndex(idx);
                  setSliderPosition(50);
                }}
                className={`rounded-full px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] transition-all duration-300 ${
                  activeCaseIndex === idx
                    ? "bg-brand-500 text-white shadow-sm"
                    : "border border-clinical-border bg-white text-clinical-slate hover:border-brand-300 hover:text-brand-600"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison */}
        <div className="mx-auto max-w-5xl">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[360px] cursor-ew-resize select-none overflow-hidden rounded-[1.5rem] bg-slate-900 shadow-premium sm:h-[500px] md:h-[580px]"
          >
            {/* After */}
            <div className="absolute inset-0">
              <Image
                src={activeCase.afterImage}
                alt={`${activeCase.title} — After Observation`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1000px"
                className="object-cover"
              />

              <div className="absolute right-5 top-5 border border-white/20 bg-clinical-dark/70 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md sm:right-6 sm:top-6">
                After Protocol
              </div>
            </div>

            {/* Before */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div
                className="relative h-full"
                style={{
                  width: containerRef.current?.clientWidth || "100%",
                }}
              >
                <Image
                  src={activeCase.beforeImage}
                  alt={`${activeCase.title} — Before Observation`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 1000px"
                  className="object-cover"
                />
              </div>

              <div className="absolute left-5 top-5 border border-clinical-border bg-white/90 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-clinical-dark shadow-sm backdrop-blur-md sm:left-6 sm:top-6">
                Before Care
              </div>
            </div>

            {/* Slider */}
            <div
              className="pointer-events-none absolute bottom-0 top-0 z-20 w-px bg-white shadow-[0_0_12px_rgba(0,0,0,0.35)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-brand-500 text-white shadow-xl">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 9l-4 3 4 3m8-6l4 3-4 3"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Case Information */}
          <div className="mt-5 grid gap-4 border-b border-clinical-border pb-6 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-600">
                {activeCase.treatmentName} <span className="mx-1.5 text-brand-300">•</span>{" "}
                {activeCase.timeline}
              </span>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-clinical-slate">
                {activeCase.notes}
              </p>
            </div>

            <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-wider text-clinical-muted">
              <Info className="h-3.5 w-3.5 text-brand-500" />
              <span>Drag to compare</span>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="mx-auto mt-5 max-w-4xl text-center text-[10px] leading-5 text-clinical-muted">
            * Note: Individual clinical results vary by skin anatomy, lifestyle,
            and adherence to protocol. Documented cases represent individual
            clinical responses and do not constitute a guarantee of identical
            results.
          </p>
        </div>
      </div>
    </section>
  );
}