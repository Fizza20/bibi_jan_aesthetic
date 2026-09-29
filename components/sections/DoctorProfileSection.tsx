import Image from "next/image";
import Link from "next/link";
import { CLINIC_CONFIG } from "@/data/clinic-data";
import { ArrowRight, CheckCircle2, Calendar } from "lucide-react";

export default function DoctorProfileSection() {
  const { doctor } = CLINIC_CONFIG;

  return (
    <section className="py-24 bg-clinical-surface relative" id="doctor">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Pill */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-600 block mb-3">
            Clinical Direction
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-clinical-dark">
            Meet the Specialist
          </h2>
          <p className="mt-3 text-clinical-slate text-sm sm:text-base">
            Guided by evidence-based dermatological rigor and dedicated to individualized, natural aesthetic refinement.
          </p>
        </div>

        {/* Doctor Card Profile */}
        <div className="bg-white rounded-2xl border border-clinical-border shadow-premium overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Doctor Portrait Image */}
            <div className="lg:col-span-5 relative min-h-[400px] sm:min-h-[500px] bg-slate-100">
              <Image
                src={doctor.image}
                alt={`${doctor.name} - ${doctor.title}`}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-clinical-dark/60 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-white/60">
                <span className="text-xs font-bold text-brand-700 uppercase tracking-widest block">
                  {doctor.role}
                </span>
                <p className="font-serif text-base font-medium text-clinical-dark">
                  {doctor.title}
                </p>
              </div>
            </div>

            {/* Doctor Details & Credentials */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-brand-600">
                  Dermatological Assessment & Care
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-clinical-dark mt-1">
                  {doctor.name}
                </h3>
                <p className="text-sm font-medium text-clinical-muted mt-1">
                  {doctor.title}
                </p>

                {/* Biography */}
                <div className="mt-6 space-y-4 text-sm sm:text-base text-clinical-slate leading-relaxed font-light">
                  {doctor.bio.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {/* Areas of Focus / Expertise */}
                <div className="mt-8 pt-6 border-t border-clinical-border">
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-clinical-dark mb-3">
                    Areas of Clinical Focus
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {doctor.specialties.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-clinical-charcoal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Qualifications & Credentials */}
                <div className="mt-6 pt-6 border-t border-clinical-border">
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-clinical-slate mb-2">
                    Professional Standing & Certifications
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {doctor.credentialsPlaceholder.map((cred, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-clinical-slate text-xs"
                      >
                        {cred}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Consultation CTA */}
              <div className="mt-10 pt-6 border-t border-clinical-border flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/book-appointment"
                  className="px-6 py-3 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-md hover:shadow-brand-500/20 active:scale-95"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Consultation with Specialist</span>
                </Link>

                <Link
                  href="/about"
                  className="px-6 py-3.5 rounded-full border border-clinical-border hover:border-brand-500 text-clinical-charcoal font-medium text-xs uppercase tracking-widest flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Learn About Our Clinic</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-500" />
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
