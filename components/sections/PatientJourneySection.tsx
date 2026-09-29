import { CLINIC_CONFIG } from "@/data/clinic-data";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function PatientJourneySection() {
  const steps = CLINIC_CONFIG.patientJourney;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-600 block mb-3">
            The Clinical Protocol
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-clinical-dark">
            Your Structured Patient Pathway
          </h2>
          <p className="mt-4 text-clinical-slate text-base leading-relaxed">
            From your very first conversation to long-term barrier maintenance, experience a serene, structured journey prioritized around comfort, safety, and natural elegance.
          </p>
        </div>

        {/* Desktop Horizontal Storyline / Mobile Vertical Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          
          {/* Prominent Connecting Line for Desktop */}
          <div 
            className="hidden lg:block absolute top-14 left-12 right-12 h-[3px] bg-brand-300 z-0" 
            aria-hidden="true"
          />

          {steps.map((item, idx) => (
            <div
              key={idx}
              className="relative z-10 p-6 rounded-2xl bg-clinical-surface border border-clinical-border hover:border-brand-300 hover:bg-white transition-all duration-300 shadow-subtle flex flex-col justify-between group"
            >
              <div>
                {/* Step Pill - Enhanced prominence & contrast */}
                <div className="w-14 h-14 rounded-full bg-white border-2 border-brand-500 text-brand-700 flex items-center justify-center font-serif text-lg font-bold mb-6 shadow-sm group-hover:scale-105 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                  {item.step}
                </div>

                <span className="text-xs uppercase tracking-wider font-semibold text-brand-700 block mb-1">
                  {item.subtitle}
                </span>

                <h3 className="font-serif text-lg font-medium text-clinical-dark mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-clinical-slate leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Duration Tag */}
              <div className="mt-6 pt-4 border-t border-clinical-border/80 flex items-center justify-between text-xs text-clinical-slate">
                <span className="font-semibold text-brand-700">{item.duration}</span>
                <CheckCircle className="w-4 h-4 text-brand-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Consultation Callout */}
        <div className="mt-16 p-8 rounded-2xl bg-brand-50/60 border border-brand-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center sm:text-left">
            <h3 className="font-serif text-xl font-medium text-clinical-dark">
              Begin With an In-Depth Clinical Assessment
            </h3>
            <p className="text-xs sm:text-sm text-clinical-slate mt-1">
              No pressure. Thorough diagnostic conversation tailored exclusively to your skin goals.
            </p>
          </div>
          <Link
            href="/book-appointment"
            className="px-6 py-3 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold text-xs uppercase tracking-wider whitespace-nowrap transition-all shadow-sm hover:shadow-md hover:shadow-brand-500/20 active:scale-95 flex items-center gap-2"
          >
            <span>Book Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
