import Link from "next/link";
import Image from "next/image";
import { CLINIC_CONFIG } from "@/data/clinic-data";
import { ArrowUpRight, ShieldCheck, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-clinical-dark text-white pt-20 pb-12 border-t border-brand-900/40 relative overflow-hidden">
      {/* Subtle background ambient teal glow */}
      <div 
        className="absolute top-0 right-1/4 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Brand Identity & Mission */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo-white.png"
                  alt="BIBI JAN AESTHETIC Official Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-sans font-bold text-lg tracking-wider text-white uppercase block leading-none">
                  BIBI JAN
                </span>
                <span className="text-xs tracking-[0.25em] text-brand-400 font-medium uppercase block mt-1">
                  AESTHETICS
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              {CLINIC_CONFIG.subheading}
            </p>

            <div className="flex items-center gap-2 text-xs text-brand-300 font-medium tracking-wide">
              <ShieldCheck className="w-4 h-4 text-brand-400" />
              <span>Medical Dermatology & Refined Aesthetic Excellence</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-widest text-brand-400 font-semibold mb-5">
              Explore
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About the Clinic</Link>
              </li>
              <li>
                <Link href="/treatments" className="hover:text-white transition-colors">Treatments</Link>
              </li>
              <li>
                <Link href="/doctor" className="hover:text-white transition-colors">Doctor Profile</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">Clinical Gallery</Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-white transition-colors">FAQs</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact Concierge</Link>
              </li>
            </ul>
          </div>

          {/* Clinic Hours & Appointments */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-widest text-brand-400 font-semibold mb-5 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" />
              <span>Consultation Hours</span>
            </h3>
            <div className="space-y-2.5 text-xs text-slate-300">
              {CLINIC_CONFIG.contact.consultationHours.map((sched, idx) => (
                <div key={idx} className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-slate-400">{sched.days}</span>
                  <span className="font-medium text-slate-200">{sched.hours}</span>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-brand-400 hover:text-brand-300 font-semibold group"
              >
                <span>Request Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Location & Inquiries */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-widest text-brand-400 font-semibold mb-5">
              Clinic Address
            </h3>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>{CLINIC_CONFIG.contact.address}, {CLINIC_CONFIG.contact.city}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <span>{CLINIC_CONFIG.contact.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Medical Disclaimer Accordance */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          <div>
            © {currentYear} BIBI JAN AESTHETIC. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-700">|</span>
            <Link href="/terms-conditions" className="hover:text-slate-200 transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-slate-700">|</span>
            <Link href="/medical-disclaimer" className="hover:text-slate-200 transition-colors">
              Medical Disclaimer
            </Link>
          </div>
        </div>

        {/* Small Bottom Disclaimer Text */}
        <div className="mt-8 pt-6 border-t border-white/5 text-xs text-slate-500 leading-relaxed">
          {CLINIC_CONFIG.disclaimer}
        </div>
      </div>
    </footer>
  );
}
