"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TREATMENTS_DATA } from "@/data/clinic-data";
import { ArrowRight, Clock, Activity, Calendar } from "lucide-react";

export default function TreatmentsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Dermatology",
    "Aesthetic Treatments",
    "Advanced Treatments",
  ];

  const filteredTreatments =
    selectedCategory === "All"
      ? TREATMENTS_DATA
      : TREATMENTS_DATA.filter(
          (treatment) => treatment.category === selectedCategory
        );

  return (
    <section
      className="relative overflow-hidden bg-clinical-surface py-20 sm:py-24 lg:py-28"
      id="treatments"
    >
      <div className="site-container">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 block text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-600">
            Curated Clinical Protocols
          </span>

          <h2 className="font-serif text-3xl font-normal leading-[1.15] tracking-tight text-clinical-dark sm:text-4xl lg:text-[3.25rem]">
            Treatments Tailored to Your Physiology
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-clinical-slate sm:text-base">
            Explore our evidence-led dermatological procedures and non-invasive
            aesthetic treatments, designed for enduring cellular health and
            subtle beauty.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-10 flex justify-start overflow-x-auto pb-2 sm:justify-center">
          <div className="flex min-w-max items-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-brand-500 text-white shadow-sm"
                    : "border border-clinical-border bg-white text-clinical-slate hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Treatment Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTreatments.map((treatment) => (
            <article
              key={treatment.id}
              className="group flex flex-col overflow-hidden border border-clinical-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-premium"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image
                  src={treatment.heroImage}
                  alt={treatment.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute left-4 top-4 border border-white/60 bg-white/95 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-brand-700 shadow-sm backdrop-blur-md">
                  {treatment.category}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                {/* Treatment Details */}
                <div className="mb-4 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.08em] text-clinical-muted">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-brand-500" />
                    <span>{treatment.duration}</span>
                  </div>

                  <span className="text-clinical-border">•</span>

                  <div className="flex items-center gap-1.5">
                    <Activity className="h-3.5 w-3.5 text-brand-500" />
                    <span>{treatment.downtime}</span>
                  </div>
                </div>

                <h3 className="font-serif text-xl font-normal leading-tight text-clinical-dark transition-colors duration-300 group-hover:text-brand-700 sm:text-[1.4rem]">
                  {treatment.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-clinical-slate">
                  {treatment.shortDescription}
                </p>

                {/* Concerns */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {treatment.targetConcerns
                    .slice(0, 3)
                    .map((concern, concernIndex) => (
                      <span
                        key={concernIndex}
                        className="bg-clinical-ice px-2.5 py-1 text-[10px] font-medium text-brand-700"
                      >
                        {concern}
                      </span>
                    ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between border-t border-clinical-border/70 px-6 py-4 sm:px-7">
                <Link
                  href={`/treatments/${treatment.slug}`}
                  className="group/link inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-clinical-dark transition-colors hover:text-brand-600"
                >
                  <span>Learn More</span>

                  <ArrowRight className="h-3.5 w-3.5 text-brand-500 transition-transform duration-200 group-hover/link:translate-x-1" />
                </Link>

                <Link
                  href={`/book-appointment?treatment=${encodeURIComponent(
                    treatment.title
                  )}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-brand-500 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-brand-600 hover:shadow-md hover:shadow-brand-500/20 active:scale-95"
                >
                  <Calendar className="h-3 w-3" />
                  <span>Book</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* All Treatments CTA */}
        <div className="mt-12 flex justify-center sm:mt-14">
          <Link
            href="/treatments"
            className="inline-flex items-center gap-2 rounded-full border border-brand-500 px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-700 transition-all duration-300 hover:bg-brand-500 hover:text-white"
          >
            <span>View All Medical & Aesthetic Protocols</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}