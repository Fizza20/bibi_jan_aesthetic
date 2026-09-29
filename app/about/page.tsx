import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CLINIC_CONFIG } from "@/data/clinic-data";
import { ShieldCheck, Sparkles, HeartHandshake, Eye, ArrowRight, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Clinical Dermatology & Aesthetic Philosophy",
  description: "Learn about BIBI JAN AESTHETIC — our medical foundation, unhurried patient approach, and commitment to evidence-based skincare.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Page Hero */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-600 block mb-3">
            Our Purpose & Heritage
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-clinical-dark tracking-tight leading-tight">
            Elevating Skin Health Through Clinical Rigor & Artful Restraint
          </h1>
          <p className="mt-6 text-base sm:text-lg text-clinical-slate font-light leading-relaxed">
            BIBI JAN AESTHETIC was established to bridge the gap between clinical dermatology and modern aesthetic wellness. We believe that true skin confidence is built on biological health, disciplined diagnosis, and unhurried personalized care.
          </p>
        </div>

        {/* Feature Visual Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-24">
          <div className="lg:col-span-7 relative h-96 sm:h-[460px] rounded-3xl overflow-hidden shadow-2xl border border-clinical-border">
            <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1400&auto=format&fit=crop"
              alt="Inside BIBI JAN Aesthetic Sanctuary"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center p-6 sm:p-10 rounded-3xl bg-clinical-ice/50 border border-brand-200">
            <span className="text-xs uppercase tracking-widest font-semibold text-brand-700 block mb-2">
              Our Clinical Manifesto
            </span>
            <h3 className="font-serif text-2xl font-medium text-clinical-dark mb-4">
              Restoring Biological Equilibrium
            </h3>
            <p className="text-sm text-clinical-slate leading-relaxed mb-6 font-light">
              We reject the aggressive trend toward over-treatment and exaggerated transformations. Instead, we treat the skin as a living, dynamic organ requiring balance, cellular hydration, and gentle progressive care.
            </p>
            <div className="flex items-center gap-3 text-xs text-brand-800 font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-brand-500" />
              <span>Safety First • Diagnostic Excellence • Subtle Harmony</span>
            </div>
          </div>
        </div>

        {/* The 4 Principles of BIBI JAN */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-600 block mb-2">
              Core Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-clinical-dark">
              How We Practice Medicine
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Eye,
                title: "Diagnostic Depth",
                text: "Every patient begins with a high-resolution microscopic and polarized analysis of epidermal thickness, vascular reactivity, and pigment depth.",
              },
              {
                icon: Sparkles,
                title: "Biomimetic Formulations",
                text: "We choose actives and modalities that mirror your skin's innate cellular matrix, restoring lipids and collagen without inducing persistent distress.",
              },
              {
                icon: HeartHandshake,
                title: "Unhurried Guidance",
                text: "Consultations are strictly scheduled to provide generous time for honest dialogue, thorough education, and unhurried deliberation.",
              },
              {
                icon: ShieldCheck,
                title: "Safety & Ethics",
                text: "We decline treatments that compromise long-term tissue health or create unnatural silhouettes. Your wellbeing is our only benchmark.",
              },
            ].map((p, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white border border-clinical-border shadow-subtle flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5">
                    <p.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-clinical-dark mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-clinical-slate leading-relaxed">
                    {p.text}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-clinical-border text-[11px] font-semibold text-brand-600 uppercase tracking-widest">
                  Principle 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Doctor Highlight Callout */}
        <div className="p-8 sm:p-12 rounded-3xl bg-clinical-dark text-white mb-24 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-brand-400 font-semibold block mb-2">
              Clinical Leadership
            </span>
            <h3 className="font-serif text-3xl font-medium mb-4">
              Under the Direction of {CLINIC_CONFIG.doctor.name}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-light mb-6">
              Our clinical director brings specialized focus to evidence-led clinical dermatology, sensitive barrier rehabilitation, and nuanced aesthetic medicine.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/doctor"
                className="px-6 py-3 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold text-xs uppercase tracking-widest flex items-center gap-2 transition-colors"
              >
                <span>Read Specialist Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/book-appointment"
                className="px-6 py-3 rounded-full border border-white/20 hover:border-brand-400 text-slate-200 hover:text-white font-medium text-xs uppercase tracking-widest transition-colors"
              >
                <span>Schedule Consultation</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Booking CTA banner */}
        <div className="text-center max-w-xl mx-auto">
          <h3 className="font-serif text-2xl font-medium text-clinical-dark mb-3">
            Experience the Difference of Thoughtful Care
          </h3>
          <p className="text-sm text-clinical-slate mb-6">
            Reserve your private consultation with our clinical specialists today.
          </p>
          <Link
            href="/book-appointment"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold text-xs uppercase tracking-widest transition-all shadow-md"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Appointment</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
