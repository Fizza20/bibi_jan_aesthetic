import Link from "next/link";
import Image from "next/image";
import { CLINIC_CONFIG } from "@/data/clinic-data";
import {
  ArrowUpRight,
  ShieldCheck,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      <div
        className="absolute -top-40 right-0 w-[520px] h-[520px] bg-brand-500/[0.06] rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div
        className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-brand-900/[0.12] rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 py-16 sm:py-20">

          <div className="lg:col-span-5 lg:pr-10">
            <Link
              href="/"
              aria-label="BIBI JAN AESTHETIC Home"
              className="inline-flex group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded-lg"
            >
              <div className="relative w-[185px] sm:w-[200px] lg:w-[210px] aspect-[3/1]">
                <Image
                  src="/logo-white.png"
                  alt="BIBI JAN AESTHETIC Official Logo"
                  fill
                  sizes="(max-width: 640px) 185px, (max-width: 1024px) 200px, 210px"
                  className="object-contain object-left transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </Link>

            <div className="mt-7 w-12 h-px bg-brand-500/60" />

            <p className="mt-6 text-sm text-slate-300 leading-7 max-w-md">
              {CLINIC_CONFIG.subheading}
            </p>

            <div className="mt-6 flex items-start gap-2.5 max-w-md">
              <ShieldCheck className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />

              <span className="text-xs leading-5 text-slate-400">
                Medical Dermatology & Refined Aesthetic Excellence
              </span>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-brand-400 font-semibold mb-6">
              Explore
            </h3>

            <ul className="space-y-3.5 text-sm text-slate-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About the Clinic
                </Link>
              </li>

              <li>
                <Link
                  href="/treatments"
                  className="hover:text-white transition-colors"
                >
                  Treatments
                </Link>
              </li>

              <li>
                <Link
                  href="/doctor"
                  className="hover:text-white transition-colors"
                >
                  Doctor Profile
                </Link>
              </li>

              <li>
                <Link
                  href="/gallery"
                  className="hover:text-white transition-colors"
                >
                  Clinical Gallery
                </Link>
              </li>

              <li>
                <Link
                  href="/faqs"
                  className="hover:text-white transition-colors"
                >
                  FAQs
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Concierge
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-brand-400 font-semibold mb-6 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" />
              <span>Consultation Hours</span>
            </h3>

            <div className="space-y-3 text-xs">
              {CLINIC_CONFIG.contact.consultationHours.map((sched, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between gap-4 pb-2.5 border-b border-white/[0.07]"
                >
                  <span className="text-slate-500">
                    {sched.days}
                  </span>

                  <span className="text-slate-300 font-medium text-right">
                    {sched.hours}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 mt-7 text-[11px] uppercase tracking-[0.12em] text-brand-400 hover:text-brand-300 font-semibold group transition-colors"
            >
              <span>Request Consultation</span>

              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-brand-400 font-semibold mb-6">
              Clinic Address
            </h3>

            <div className="space-y-5 text-xs text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />

                <span className="leading-5">
                  {CLINIC_CONFIG.contact.address},{" "}
                  {CLINIC_CONFIG.contact.city}
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />

                <span className="leading-5 break-all">
                  {CLINIC_CONFIG.contact.email}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.08]" />

        <div className="py-7 flex flex-col md:flex-row items-center justify-between gap-5 text-xs text-slate-500">
          <div className="text-center md:text-left">
            © {currentYear} BIBI JAN AESTHETIC. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link
              href="/privacy-policy"
              className="hover:text-slate-200 transition-colors"
            >
              Privacy Policy
            </Link>

            <span className="text-slate-700 hidden sm:inline">|</span>

            <Link
              href="/terms-conditions"
              className="hover:text-slate-200 transition-colors"
            >
              Terms & Conditions
            </Link>

            <span className="text-slate-700 hidden sm:inline">|</span>

            <Link
              href="/medical-disclaimer"
              className="hover:text-slate-200 transition-colors"
            >
              Medical Disclaimer
            </Link>
          </div>
        </div>

        <div className="border-t border-white/[0.05] py-6">
          <p className="text-[11px] leading-5 text-slate-600 max-w-5xl">
            {CLINIC_CONFIG.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}