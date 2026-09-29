"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Calendar } from "lucide-react";

export default function FeaturedTreatmentSection() {
  return (
    <section className="py-24 bg-clinical-dark text-white relative overflow-hidden">
      {/* Subtle background ambient brand glow */}
      <div 
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Campaign Label */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-[1px] bg-brand-400" />
          <span className="text-xs uppercase tracking-[0.25em] text-brand-300 font-semibold">
            Signature Clinical Spotlight
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Large Image Editorial Feature */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1600&auto=format&fit=crop"
                alt="Signature Pigmentation and Melasma Clinical Protocol"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-clinical-dark/80 via-transparent to-transparent" />
              
              {/* Floating Clinical Metric Badge */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-sm p-4 rounded-xl bg-clinical-onyx/85 backdrop-blur-md border border-white/15">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-white">
                      Cellular Melanin Regulation
                    </h3>
                    <p className="text-xs text-slate-300 mt-1">
                      Non-stripping enzymatic & light-based modulation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Content Side */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-400 mb-2">
              Advanced Dermatology Protocol
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
              Pigmentation & Melasma Management
            </h2>
            <p className="mt-6 text-base text-slate-300 leading-relaxed font-light">
              Melanin hyperactivity requires a respectful, measured strategy. Over-aggressive treatments often cause rebound hyperpigmentation. At BIBI JAN AESTHETIC, we employ progressive, cooling, pigment-inhibiting protocols calibrated specifically to your skin&apos;s barrier integrity.
            </p>

            {/* Scientific Highlights */}
            <div className="mt-8 space-y-3.5 w-full">
              {[
                "Polarized light diagnostic assessment of pigment depth",
                "Non-thermal tyrosinase suppression protocols",
                "Strict barrier-preservation to avoid inflammatory rebound",
                "Personalized post-treatment medical homecare regimen",
              ].map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                  <span className="text-sm text-slate-200">{highlight}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Link
                href="/book-appointment?treatment=Pigmentation%20%26%20Melasma%20Management"
                className="px-7 py-3.5 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand-500/30"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Clinical Consultation</span>
              </Link>

              <Link
                href="/treatments/pigmentation-melasma"
                className="px-6 py-3.5 rounded-full border border-white/20 hover:border-brand-400 text-slate-300 hover:text-white font-medium text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors"
              >
                <span>Read Full Protocol</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
