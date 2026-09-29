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
    <section className="py-24 bg-clinical-ice/40 relative overflow-hidden" id="results">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold tracking-widest uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 text-brand-500" />
              <span>Clinical Observations</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-clinical-dark">
              Restoring Skin Vitality & Balance
            </h2>
            <p className="mt-3 text-base text-clinical-slate max-w-xl">
              Visual documentation of individualized dermatological and aesthetic protocols. Hover or drag the slider to observe progressive transformation.
            </p>
          </div>

          {/* Case Selector Tabs */}
          <div className="flex flex-wrap gap-2">
            {BEFORE_AFTER_CASES.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveCaseIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  activeCaseIndex === idx
                    ? "bg-brand-500 text-white shadow-sm"
                    : "bg-white text-clinical-charcoal hover:bg-brand-50 border border-clinical-border"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Window */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[360px] sm:h-[480px] md:h-[540px] rounded-2xl overflow-hidden shadow-premium border border-brand-500/20 cursor-ew-resize select-none bg-slate-900"
          >
            {/* After Image (Background layer) */}
            <div className="absolute inset-0">
              <Image
                src={activeCase.afterImage}
                alt={`${activeCase.title} — After Observation`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-clinical-dark/75 backdrop-blur-md text-white text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full border border-white/20">
                After Protocol
              </div>
            </div>

            {/* Before Image (Clipped layer) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative w-full h-full" style={{ width: containerRef.current?.clientWidth || "100%" }}>
                <Image
                  src={activeCase.beforeImage}
                  alt={`${activeCase.title} — Before Observation`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-cover"
                />
              </div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-clinical-dark text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full border border-clinical-border shadow-sm">
                Before Care
              </div>
            </div>

            {/* Draggable Slider Divider Line & Thumb */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-brand-500 text-white shadow-xl flex items-center justify-center border-2 border-white pointer-events-auto">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3m8-6l4 3-4 3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Case Description & Clinical Details */}
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-xl bg-white border border-clinical-border">
            <div>
              <span className="text-xs uppercase tracking-wider text-brand-600 font-semibold block">
                {activeCase.treatmentName} • {activeCase.timeline}
              </span>
              <p className="text-sm text-clinical-slate mt-1">
                {activeCase.notes}
              </p>
            </div>
            <div className="shrink-0 text-xs text-clinical-muted flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
              <Info className="w-3.5 h-3.5 text-brand-500 shrink-0" />
              <span>Drag slider horizontally</span>
            </div>
          </div>

          {/* Medical Disclaimer Note */}
          <div className="mt-4 text-center">
            <p className="text-xs text-clinical-muted leading-relaxed">
              * Note: Individual clinical results vary by skin anatomy, lifestyle, and adherence to protocol. Documented cases represent individual clinical responses and do not constitute a guarantee of identical results.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
