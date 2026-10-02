"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Calendar } from "lucide-react";

export default function FeaturedTreatmentSection() {
  return (
    <section className="relative overflow-hidden bg-clinical-dark py-24 text-white">
      {/* Subtle background ambient brand glow */}
      <div
        className="pointer-events-none absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-brand-500/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* Campaign Label */}
        <div className="mb-12 flex items-center gap-3 sm:mb-14">
          <span className="h-px w-8 bg-brand-400" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-300 sm:text-xs">
            Signature Clinical Spotlight
          </span>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">

          {/* Large Image Editorial Feature */}
          <div className="relative lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-2xl sm:aspect-[16/11]">
              <Image
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1600&auto=format&fit=crop"
                alt="Signature Pigmentation and Melasma Clinical Protocol"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-clinical-dark/80 via-transparent to-transparent" />

              {/* Floating Clinical Metric Badge */}
              <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/15 bg-clinical-onyx/85 p-4 backdrop-blur-md sm:right-auto sm:max-w-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/20 text-brand-400">
                    <Sparkles className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold text-white">
                      Cellular Melanin Regulation
                    </h3>

                    <p className="mt-1 text-xs text-slate-300">
                      Non-stripping enzymatic & light-based modulation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Content Side */}
          <div className="flex flex-col items-start lg:col-span-5">
            <span className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-400">
              Advanced Dermatology Protocol
            </span>

            <h2 className="font-serif text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Pigmentation & Melasma Management
            </h2>

            <p className="mt-6 text-base font-light leading-relaxed text-slate-300">
              Melanin hyperactivity requires a respectful, measured strategy.
              Over-aggressive treatments often cause rebound hyperpigmentation.
              At BIBI JAN AESTHETIC, we employ progressive, cooling,
              pigment-inhibiting protocols calibrated specifically to your
              skin&apos;s barrier integrity.
            </p>

            {/* Scientific Highlights */}
            <div className="mt-8 w-full space-y-3.5">
              {[
                "Polarized light diagnostic assessment of pigment depth",
                "Non-thermal tyrosinase suppression protocols",
                "Strict barrier-preservation to avoid inflammatory rebound",
                "Personalized post-treatment medical homecare regimen",
              ].map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-400" />

                  <span className="text-sm text-slate-200">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
              <Link
                href="/book-appointment?treatment=Pigmentation%20%26%20Melasma%20Management"
                className="flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-white shadow-lg shadow-brand-500/30 transition-all hover:bg-brand-600"
              >
                <Calendar className="h-4 w-4" />

                <span>Book Clinical Consultation</span>
              </Link>

              <Link
                href="/treatments/pigmentation-melasma"
                className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-xs font-medium uppercase tracking-widest text-slate-300 transition-colors hover:border-brand-400 hover:text-white"
              >
                <span>Read Full Protocol</span>

                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}