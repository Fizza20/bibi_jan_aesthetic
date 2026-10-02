import { TESTIMONIALS_DATA } from "@/data/clinic-data";
import { Quote, CheckCircle2 } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-clinical-ice/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-brand-500" />

            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-brand-600">
              Patient Experiences
            </span>

            <div className="w-8 h-[1px] bg-brand-500" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-clinical-dark leading-tight">
            Reflections on{" "}
            <span className="italic text-brand-600">Care</span>
          </h2>

          <p className="mt-4 text-clinical-slate text-sm sm:text-base leading-relaxed">
            Personal experiences shared by patients following their clinical
            and aesthetic care journey at BIBI JAN AESTHETIC.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="p-8 sm:p-10 rounded-2xl bg-white border border-clinical-border shadow-subtle hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Quote Icon */}
                <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 mb-6">
                  <Quote className="w-5 h-5" />
                </div>

                {/* Testimonial */}
                <p className="font-serif text-base sm:text-lg text-clinical-dark leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Patient Information */}
              <div className="mt-8 pt-6 border-t border-clinical-border flex items-center justify-between gap-4">
                <div>
                  <p className="font-medium text-sm text-clinical-dark">
                    {t.patientName}
                  </p>

                  <span className="text-xs text-brand-700 font-medium block mt-1">
                    {t.treatmentType}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-clinical-muted bg-slate-50 px-3 py-1 rounded-full border border-slate-200 shrink-0">
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