import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | BIBI JAN AESTHETIC",
  description: "Our standards on patient data confidentiality, privacy protection, and health record security.",
};

export default function PrivacyPolicyPage() {
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
            <Lock className="w-5 h-5" />
          </div>
          <span className="text-xs uppercase tracking-widest font-semibold text-brand-600">
            Confidentiality Standards
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl font-medium text-clinical-dark mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-slate max-w-none text-sm sm:text-base text-clinical-slate space-y-6 leading-relaxed font-light">
          <p>
            At BIBI JAN AESTHETIC, patient confidentiality and trust are central to our medical practice. This Privacy Policy details our procedures regarding the collection, retention, and protection of information submitted through our digital platforms and clinical appointments.
          </p>

          <h2 className="font-serif text-xl font-medium text-clinical-dark pt-4">
            1. Information Collection
          </h2>
          <p>
            When requesting an appointment or communicating with our clinical concierge, we collect personal details including your name, contact telephone, email address, preferred appointment windows, and clinical skin concerns. During in-person visits, additional medical history and treatment records are maintained strictly within our secure clinical health records system.
          </p>

          <h2 className="font-serif text-xl font-medium text-clinical-dark pt-4">
            2. Medical & Personal Data Protection
          </h2>
          <p>
            We implement stringent electronic, physical, and procedural safeguards in accordance with health privacy regulations. Medical records and personal identifiers are never sold, rented, or traded to third-party commercial entities.
          </p>

          <h2 className="font-serif text-xl font-medium text-clinical-dark pt-4">
            3. Patient Consent for Photography
          </h2>
          <p>
            Clinical photographic records taken during treatment evaluation are utilized solely for diagnostic tracking and progression analysis within your confidential patient file. No visual media is ever shared publicly or on educational platforms without explicit, signed patient authorization.
          </p>

          <h2 className="font-serif text-xl font-medium text-clinical-dark pt-4">
            4. Inquiries & Data Rights
          </h2>
          <p>
            You retain the right to inspect, update, or request the deletion of your non-statutory personal communication records by contacting our clinical privacy officer at concierge@bibijanaesthetic.com.
          </p>
        </div>

      </div>
    </div>
  );
}
