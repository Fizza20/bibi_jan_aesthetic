import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | BIBI JAN AESTHETIC",
  description: "Terms of service, clinical appointment policies, cancellation etiquette, and website terms.",
};

export default function TermsConditionsPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700 hover:text-brand-800 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return Home</span>
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
            <FileText className="w-5 h-5" />
          </div>
          <span className="text-xs uppercase tracking-widest font-semibold text-brand-600">
            Clinic Protocols
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl font-medium text-clinical-dark mb-8">
          Terms & Conditions
        </h1>

        <div className="prose prose-slate max-w-none text-sm sm:text-base text-clinical-slate space-y-6 leading-relaxed font-light">
          <p>
            Welcome to the BIBI JAN AESTHETIC website. By browsing this platform or booking clinical consultations with our specialists, you agree to comply with and be bound by the following operational terms and conditions.
          </p>

          <h2 className="font-serif text-xl font-medium text-clinical-dark pt-4">
            1. Consultation & Scheduling Policies
          </h2>
          <p>
            Due to the personalized nature of our diagnostic appointments and reserved clinical suites, we request at least 24 hours advance notice for any rescheduling or cancellations. This permits our concierge to offer unhurried care to waiting patients.
          </p>

          <h2 className="font-serif text-xl font-medium text-clinical-dark pt-4">
            2. Medical Disclosure & Accurate History
          </h2>
          <p>
            Patients must provide comprehensive, accurate information regarding their medical history, known allergies, prescription medications, past aesthetic procedures, and active topical regimens prior to undergoing any clinical evaluation or treatment.
          </p>

          <h2 className="font-serif text-xl font-medium text-clinical-dark pt-4">
            3. Intellectual Property
          </h2>
          <p>
            All website trademarks, brand marks (including the BIBI JAN AESTHETIC logo), visual layout designs, clinical copywriting, and photographic works are the intellectual property of BIBI JAN AESTHETIC and may not be reproduced or distributed without formal written permission.
          </p>
        </div>

      </div>
    </div>
  );
}
