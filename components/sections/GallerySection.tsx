"use client";

import { useState } from "react";
import Image from "next/image";
import { GALLERY_DATA, GalleryItem } from "@/data/clinic-data";
import { Maximize2, X, Sparkles } from "lucide-react";

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeLightboxItem, setActiveLightboxItem] =
    useState<GalleryItem | null>(null);

  const categories = [
    "All",
    "Clinic",
    "Consultation",
    "Treatment Environment",
    "Skincare",
    "Lifestyle",
  ];

  const filteredItems =
    activeCategory === "All"
      ? GALLERY_DATA
      : GALLERY_DATA.filter((item) => item.category === activeCategory);

  return (
    <section
      className="py-24 bg-white relative overflow-hidden"
      id="gallery"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Heading & Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">

          {/* Heading */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold tracking-widest uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 text-brand-500" />
              <span>Sanctuary & Environment</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-clinical-dark">
              Inside BIBI JAN Aesthetic
            </h2>

            <p className="mt-3 text-base text-clinical-slate max-w-xl">
              Immerse yourself in our serene medical sanctuary,
              state-of-the-art diagnostic suites, and restorative
              treatment spaces.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-brand-500 text-white shadow-sm"
                    : "bg-clinical-surface text-clinical-slate hover:bg-brand-50 border border-clinical-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Uniform Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-slate-100 cursor-pointer shadow-subtle hover:shadow-premium transition-all duration-300 h-80"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-clinical-dark/80 via-clinical-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Image Information */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-white z-10">
                <span className="text-xs uppercase tracking-widest text-brand-300 font-semibold block mb-1">
                  {item.category}
                </span>

                <h3 className="font-serif text-lg font-medium leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Zoom Indicator */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-clinical-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                <Maximize2 className="w-4 h-4 text-brand-600" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveLightboxItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-clinical-dark rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveLightboxItem(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-brand-500 transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Large Image */}
            <div className="relative w-full h-[360px] sm:h-[500px]">
              <Image
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
              />
            </div>

            {/* Lightbox Information */}
            <div className="p-6 bg-clinical-onyx text-white">
              <span className="text-xs uppercase tracking-widest text-brand-400 font-semibold block">
                {activeLightboxItem.category}
              </span>

              <h3 className="font-serif text-xl font-medium mt-1">
                {activeLightboxItem.title}
              </h3>

              <p className="text-sm text-slate-300 mt-2">
                {activeLightboxItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}