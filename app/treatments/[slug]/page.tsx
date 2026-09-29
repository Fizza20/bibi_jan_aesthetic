import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { TREATMENTS_DATA, Treatment } from "@/data/clinic-data";
import {
  Clock,
  Activity,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import AppointmentSection from "@/components/sections/AppointmentSection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return TREATMENTS_DATA.map((t) => ({
    slug: t.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const treatment = TREATMENTS_DATA.find((t) => t.slug === slug);

  if (!treatment) {
    return {
      title: "Treatment Not Found",
    };
  }

  return {
    title: `${treatment.title} | BIBI JAN AESTHETIC`,
    description: treatment.shortDescription,
  };
}

export default async function TreatmentDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const treatment = TREATMENTS_DATA.find((t) => t.slug === slug);

  if (!treatment) {
    notFound();
  }

  return (
    <div className="pt-28 pb-24">
      {/* 1. Header & Hero */}
      <section className="bg-clinical-surface py-16 border-b border-clinical-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-clinical-muted mb-6">
            <Link href="/" className="hover:text-brand-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/treatments" className="hover:text-brand-600 transition-colors">Treatments</Link>
            <span>/</span>
            <span className="text-brand-700">{treatment.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold uppercase tracking-wider mb-4">
                {treatment.category}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-clinical-dark tracking-tight">
                {treatment.title}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-clinical-slate font-light leading-relaxed">
                {treatment.tagline}
              </p>

              {/* Quick specs ribbon */}
              <div className="mt-8 flex flex-wrap items-center gap-6 py-4 px-6 rounded-2xl bg-white border border-clinical-border shadow-subtle">
                <div className="flex items-center gap-2 text-xs text-clinical-charcoal">
                  <Clock className="w-4 h-4 text-brand-500" />
                  <div>
                    <span className="text-xs text-clinical-muted uppercase tracking-wider block">Duration</span>
                    <span className="font-medium">{treatment.duration}</span>
                  </div>
                </div>

                <div className="h-6 w-[1px] bg-clinical-border hidden sm:block" />

                <div className="flex items-center gap-2 text-xs text-clinical-charcoal">
                  <Activity className="w-4 h-4 text-brand-500" />
                  <div>
                    <span className="text-xs text-clinical-muted uppercase tracking-wider block">Downtime</span>
                    <span className="font-medium">{treatment.downtime}</span>
                  </div>
                </div>

                <div className="h-6 w-[1px] bg-clinical-border hidden sm:block" />

                <div className="flex items-center gap-2 text-xs text-clinical-charcoal">
                  <Sparkles className="w-4 h-4 text-brand-500" />
                  <div>
                    <span className="text-xs text-clinical-muted uppercase tracking-wider block">Recommended</span>
                    <span className="font-medium">{treatment.sessionsRecommended}</span>
                  </div>
                </div>
              </div>

              {/* CTA button */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={`/book-appointment?treatment=${encodeURIComponent(treatment.title)}`}
                  className="px-7 py-3.5 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold text-xs uppercase tracking-widest flex items-center gap-2 transition-all shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation for This Treatment</span>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-5 relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-clinical-border">
              <Image
                src={treatment.heroImage}
                alt={treatment.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 2. Content Structure (Introduction, Who It's For, Approach, Expectation, Prep, Aftercare) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          
          {/* Introduction */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-clinical-dark mb-4">
              Clinical Overview
            </h2>
            <p className="text-base text-clinical-slate leading-relaxed font-light">
              {treatment.introduction}
            </p>
          </div>

          {/* Who It May Be For */}
          <div className="mb-16 p-8 rounded-2xl bg-clinical-surface border border-clinical-border">
            <h3 className="font-serif text-xl font-medium text-clinical-dark mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-500" />
              <span>Who It May Be Appropriate For</span>
            </h3>
            <ul className="space-y-3">
              {treatment.whoItIsFor.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-clinical-slate">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatment Approach */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-medium text-clinical-dark mb-4">
              Our Treatment Approach
            </h3>
            <p className="text-sm text-clinical-slate mb-6">
              Our clinical protocol is executed in carefully calibrated stages to protect skin barrier equilibrium:
            </p>
            <div className="space-y-4">
              {treatment.treatmentApproach.map((step, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-white border border-clinical-border shadow-subtle flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-brand-50 text-brand-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    0{idx + 1}
                  </div>
                  <span className="text-sm text-clinical-charcoal font-medium">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What to Expect */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-medium text-clinical-dark mb-4">
              What to Expect During the Session
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {treatment.whatToExpect.map((exp, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-clinical-ice/50 border border-brand-200 text-xs sm:text-sm text-clinical-slate leading-relaxed">
                  {exp}
                </div>
              ))}
            </div>
          </div>

          {/* Preparation & Aftercare Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
            
            {/* Preparation */}
            <div className="p-6 rounded-2xl bg-white border border-clinical-border shadow-subtle">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-700 block mb-2">
                Pre-Procedure Protocol
              </span>
              <h4 className="font-serif text-lg font-medium text-clinical-dark mb-4">
                How to Prepare
              </h4>
              <ul className="space-y-2.5 text-xs text-clinical-slate">
                {treatment.preparation.map((prep, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-brand-500 font-bold">•</span>
                    <span>{prep}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Aftercare */}
            <div className="p-6 rounded-2xl bg-white border border-clinical-border shadow-subtle">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-700 block mb-2">
                Post-Procedure Recovery
              </span>
              <h4 className="font-serif text-lg font-medium text-clinical-dark mb-4">
                Aftercare Guidance
              </h4>
              <ul className="space-y-2.5 text-xs text-clinical-slate">
                {treatment.aftercare.map((care, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-brand-500 font-bold">•</span>
                    <span>{care}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* FAQs Specific to this treatment */}
          {treatment.faqs && treatment.faqs.length > 0 && (
            <div className="mb-16">
              <h3 className="font-serif text-2xl font-medium text-clinical-dark mb-6">
                Common Inquiries on {treatment.title}
              </h3>
              <div className="space-y-4">
                {treatment.faqs.map((faq, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-clinical-surface border border-clinical-border">
                    <h5 className="font-medium text-sm text-clinical-dark mb-2">
                      {faq.question}
                    </h5>
                    <p className="text-xs sm:text-sm text-clinical-slate leading-relaxed font-light">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Medical Notice */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-clinical-muted flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
            <p>
              Suitability is determined during personal clinical consultation. Clinical techniques may be adjusted based on continuous medical assessment and skin tolerance.
            </p>
          </div>

        </div>
      </section>

      {/* 3. Embedded Appointment Booking CTA */}
      <AppointmentSection />
    </div>
  );
}
