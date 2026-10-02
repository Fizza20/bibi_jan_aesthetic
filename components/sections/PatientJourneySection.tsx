import { CLINIC_CONFIG } from "@/data/clinic-data";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function PatientJourneySection() {
  const steps = CLINIC_CONFIG.patientJourney;

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-brand-500" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-600 sm:text-xs">
              The Clinical Protocol
            </span>

            <span className="h-px w-8 bg-brand-500" />
          </div>

          <h2 className="font-serif text-3xl font-medium leading-tight tracking-tight text-clinical-dark sm:text-4xl lg:text-[3.15rem]">
            Your Structured Patient Pathway
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-clinical-slate sm:text-base">
            From your very first conversation to long-term barrier maintenance,
            experience a serene, structured journey prioritized around comfort,
            safety, and natural elegance.
          </p>
        </div>

        {/* Journey */}
        <div className="relative">

          {/* Desktop Connector */}
          <div
            className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-brand-200 lg:block"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="group relative"
              >
                {/* Step Number */}
                <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-brand-300 bg-white font-serif text-lg font-medium text-brand-700 shadow-sm transition-all duration-300 group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white">
                  {item.step}
                </div>

                {/* Content */}
                <div className="border-t border-clinical-border pt-5 lg:min-h-[220px]">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-600">
                    {item.subtitle}
                  </span>

                  <h3 className="mt-2 font-serif text-lg font-medium leading-snug text-clinical-dark">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-clinical-slate">
                    {item.description}
                  </p>

                  {/* Duration */}
                  <div className="mt-5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-clinical-muted">
                    <CheckCircle className="h-3.5 w-3.5 text-brand-500" />
                    <span>{item.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Consultation Callout */}
        <div className="mt-16 flex flex-col gap-6 border-y border-brand-200 bg-brand-50/40 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="max-w-xl">
            <h3 className="font-serif text-xl font-medium text-clinical-dark sm:text-2xl">
              Begin With an In-Depth Clinical Assessment
            </h3>

            <p className="mt-2 text-xs leading-6 text-clinical-slate sm:text-sm">
              No pressure. A thorough diagnostic conversation tailored
              exclusively to your skin goals.
            </p>
          </div>

          <Link
            href="/book-appointment"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white shadow-sm transition-all duration-300 hover:bg-brand-600 hover:shadow-md hover:shadow-brand-500/20 active:scale-[0.98]"
          >
            <span>Book Assessment</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}