import type { Metadata } from "next";
import Link from "next/link";
import { CLINIC_CONFIG } from "@/data/clinic-data";
import { ShieldAlert, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Medical Disclaimer | BIBI JAN AESTHETIC",
  description: "Important clinical disclosure regarding health information, treatment suitability, and diagnostic care.",
};

export default function MedicalDisclaimerPage() {
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
            <ShieldAlert className="w-5 h-5" />
          </div>
          <span className="text-xs uppercase tracking-widest font-semibold text-brand-600">
            Clinical Compliance
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl font-medium text-clinical-dark mb-8">
          Medical Disclaimer
        </h1>

        <div className="prose prose-slate max-w-none text-sm sm:text-base text-clinical-slate space-y-6 leading-relaxed font-light">
          <p className="p-4 rounded-xl bg-clinical-ice border border-brand-200 font-normal text-clinical-charcoal">
            {CLINIC_CONFIG.disclaimer}
          </p>

          <h2 className="font-serif text-xl font-medium text-clinical-dark pt-4">
            1. Informational & Educational Scope
          </h2>
          <p>
            The content provided on this website—including articles, treatment descriptions, visual comparisons, and blog materials—is designed solely for informational and educational awareness. It is not intended to substitute for individualized medical evaluation, diagnosis, or professional dermatological treatment.
          </p>

          <h2 className="font-serif text-xl font-medium text-clinical-dark pt-4">
            2. Necessity of In-Person Clinical Assessment
          </h2>
          <p>
            Skin physiology, barrier health, melanin distribution, and systemic medical history vary substantially between individuals. No treatment, procedure, or medical skincare product described on this site should be undertaken without a comprehensive, in-person consultation with a qualified medical doctor or licensed aesthetic specialist.
          </p>

          <h2 className="font-serif text-xl font-medium text-clinical-dark pt-4">
            3. Photographic Documentation & Outcomes
          </h2>
          <p>
            Before and after photographs displayed on this site document specific outcomes achieved by individual patients. They do not constitute an explicit or implied warranty or guarantee of identical results for any other individual. Variations occur due to individual genetic predispositions, healing response, treatment adherence, and lifestyle parameters.
          </p>

          <h2 className="font-serif text-xl font-medium text-clinical-dark pt-4">
            4. Emergency Situations
          </h2>
          <p>
            If you are experiencing an acute medical emergency, severe allergic reaction, or sudden skin infection, please immediately contact your local emergency medical services or proceed to the nearest emergency medical department. Do not rely on web inquiries or contact forms for acute emergency care.
          </p>
        </div>

      </div>
    </div>
  );
}
