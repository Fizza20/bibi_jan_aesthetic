import Image from "next/image";
import Link from "next/link";
import { CLINIC_CONFIG } from "@/data/clinic-data";
import { ArrowRight, CheckCircle2, Calendar } from "lucide-react";

export default function DoctorProfileSection() {
  const { doctor } = CLINIC_CONFIG;

  return (
    <section
      className="relative overflow-hidden bg-clinical-surface py-24 sm:py-28"
      id="doctor"
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10">

        {/* Section Introduction */}
        <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
          <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-600 sm:text-xs">
            Clinical Direction
          </span>

          <h2 className="font-serif text-3xl font-medium leading-tight tracking-tight text-clinical-dark sm:text-4xl lg:text-[3.2rem]">
            Meet the Specialist
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-clinical-slate sm:text-base">
            Guided by evidence-based dermatological rigor and dedicated to
            individualized, natural aesthetic refinement.
          </p>
        </div>

        {/* Doctor Profile */}
        <div className="overflow-hidden rounded-[1.5rem] border border-clinical-border bg-white shadow-premium">
          <div className="grid grid-cols-1 lg:grid-cols-12">

            {/* Doctor Portrait */}
            <div className="relative min-h-[460px] overflow-hidden bg-slate-100 sm:min-h-[560px] lg:col-span-5">
              <Image
                src={doctor.image}
                alt={`${doctor.name} - ${doctor.title}`}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-clinical-dark/70 via-transparent to-transparent" />

              {/* Image Caption */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="border-l-2 border-brand-400 pl-4">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-300">
                    {doctor.role}
                  </span>

                  <p className="mt-1 font-serif text-lg font-medium text-white">
                    {doctor.title}
                  </p>
                </div>
              </div>
            </div>

            {/* Doctor Information */}
            <div className="flex flex-col justify-between p-7 sm:p-10 lg:col-span-7 lg:p-12 xl:p-14">

              <div>
                {/* Eyebrow */}
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-600 sm:text-xs">
                  Dermatological Assessment & Care
                </span>

                {/* Name */}
                <h3 className="mt-2 font-serif text-2xl font-medium leading-tight text-clinical-dark sm:text-3xl lg:text-[2.15rem]">
                  {doctor.name}
                </h3>

                <p className="mt-1 text-sm text-clinical-muted">
                  {doctor.title}
                </p>

                {/* Biography */}
                <div className="mt-7 max-w-2xl space-y-4 text-sm leading-7 text-clinical-slate sm:text-[15px]">
                  {doctor.bio.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {/* Areas of Focus */}
                <div className="mt-8 border-t border-clinical-border pt-6">
                  <h3 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-clinical-dark">
                    Areas of Clinical Focus
                  </h3>

                  <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                    {doctor.specialties.map((spec, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-start gap-2.5 text-xs text-clinical-charcoal sm:text-sm"
                      >
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-500" />

                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Credentials */}
                <div className="mt-7 border-t border-clinical-border pt-6">
                  <h3 className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-clinical-slate">
                    Professional Standing & Certifications
                  </h3>

                  <div className="flex flex-wrap gap-x-5 gap-y-2">
                    {doctor.credentialsPlaceholder.map((cred, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-xs text-clinical-slate before:mr-2 before:text-brand-400 before:content-['•']"
                      >
                        {cred}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Consultation Actions */}
              <div className="mt-9 flex flex-col gap-3 border-t border-clinical-border pt-6 sm:flex-row sm:items-center">
                <Link
                  href="/book-appointment"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white shadow-sm transition-all duration-300 hover:bg-brand-600 hover:shadow-md hover:shadow-brand-500/20 active:scale-[0.98]"
                >
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Request Consultation with Specialist</span>
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-clinical-charcoal transition-colors hover:text-brand-600"
                >
                  <span>Learn About Our Clinic</span>

                  <ArrowRight className="h-3.5 w-3.5 text-brand-500 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}