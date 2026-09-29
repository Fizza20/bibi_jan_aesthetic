"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TREATMENTS_DATA, Treatment } from "@/data/clinic-data";
import { ArrowRight, Clock, Activity, Calendar } from "lucide-react";

export default function TreatmentsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Dermatology", "Aesthetic Treatments", "Advanced Treatments"];

  const filteredTreatments = selectedCategory === "All"
    ? TREATMENTS_DATA
    : TREATMENTS_DATA.filter((t) => t.category === selectedCategory);

  return (
    <section className="py-24 bg-clinical-surface relative" id="treatments">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header & Category Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-600 block mb-3">
              Curated Clinical Protocols
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-clinical-dark">
              Treatments Tailored to Your Physiology
            </h2>
            <p className="mt-4 text-clinical-slate text-base">
              Explore our evidence-led dermatological procedures and non-invasive aesthetic treatments, designed for enduring cellular health and subtle beauty.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-brand-500 text-white shadow-md shadow-brand-500/20"
                    : "bg-white text-clinical-slate hover:text-brand-600 border border-clinical-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTreatments.map((treatment, idx) => {
            const isWide = idx === 0 || idx === 3;

            return (
              <div
                key={treatment.id}
                className={`group rounded-3xl overflow-hidden bg-white border border-clinical-border hover:border-brand-300 shadow-subtle hover:shadow-premium transition-all duration-500 flex flex-col justify-between ${
                  isWide ? "md:col-span-2 lg:col-span-2" : "col-span-1"
                }`}
              >
                <div>
                  {/* Image Container */}
                  <div className={`relative w-full overflow-hidden bg-slate-100 ${isWide ? "h-64 sm:h-80" : "h-60"}`}>
                    <Image
                      src={treatment.heroImage}
                      alt={treatment.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase text-brand-700 border border-white/60">
                      {treatment.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8">
                    {/* Clinical Specs */}
                    <div className="flex items-center gap-4 text-xs text-clinical-muted mb-3 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-brand-500" />
                        <span>{treatment.duration}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-brand-500" />
                        <span>{treatment.downtime}</span>
                      </div>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-clinical-dark group-hover:text-brand-700 transition-colors">
                      {treatment.title}
                    </h3>

                    <p className="mt-3 text-sm text-clinical-slate leading-relaxed">
                      {treatment.shortDescription}
                    </p>

                    {/* Target Concerns Chips */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {treatment.targetConcerns.slice(0, 3).map((concern, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2.5 py-1 rounded-md bg-clinical-ice text-brand-800 text-[11px] font-medium"
                        >
                          {concern}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-4 border-t border-clinical-border/60 flex items-center justify-between">
                  <Link
                    href={`/treatments/${treatment.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-clinical-dark hover:text-brand-600 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-500 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href={`/book-appointment?treatment=${encodeURIComponent(treatment.title)}`}
                    className="px-4 py-2 rounded-full bg-brand-50 hover:bg-brand-500 text-brand-700 hover:text-white text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5"
                  >
                    <Calendar className="w-3 h-3" />
                    <span>Book</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA to all treatments */}
        <div className="mt-16 text-center">
          <Link
            href="/treatments"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-brand-500 text-brand-700 hover:bg-brand-500 hover:text-white font-semibold text-xs uppercase tracking-widest transition-all duration-300"
          >
            <span>View All Medical & Aesthetic Protocols</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
