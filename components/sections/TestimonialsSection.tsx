import { TESTIMONIALS_DATA } from "@/data/clinic-data";
import { Quote, CheckCircle2 } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-clinical-ice/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-600 block mb-3">
            Patient Observations & Experiences
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-clinical-dark">
            Reflections on Care
          </h2>
          <p className="mt-3 text-clinical-slate text-sm sm:text-base">
            Genuine experiences shared by verified patients undergoing clinical and aesthetic protocols.
          </p>
        </div>

        {/* Editorial Layout — 2x2 Clean Minimalist Typography */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-clinical-border shadow-subtle hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 mb-6">
                  <Quote className="w-5 h-5" />
                </div>
                
                <p className="font-serif text-base sm:text-lg text-clinical-dark leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-clinical-border flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-sm text-clinical-dark">
                    {t.patientName}
                  </h4>
                  <span className="text-xs text-brand-700 font-medium block">
                    {t.treatmentType}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-clinical-muted bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-500" />
                  <span>{t.datePlaceholder}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
