import { CLINIC_CONFIG } from "@/data/clinic-data";
import { MapPin, Phone, Mail, MessageSquare, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  const { contact, socials } = CLINIC_CONFIG;

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-600 block mb-3">
            Concierge & Location
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-clinical-dark">
            Connect With BIBI JAN
          </h2>
          <p className="mt-4 text-clinical-slate text-base leading-relaxed">
            Our clinical concierge is dedicated to providing discreet, responsive assistance for inquiries, bookings, and pre-consultation questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Contact Details Card Grid */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address */}
            <div className="p-6 rounded-2xl bg-clinical-surface border border-clinical-border flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-clinical-muted">
                  Clinic Location
                </h4>
                <p className="text-sm font-medium text-clinical-dark mt-1">
                  {contact.address}
                </p>
                <p className="text-xs text-clinical-slate mt-0.5">
                  {contact.city}, {contact.postalCode}
                </p>
              </div>
            </div>

            {/* Direct Telephone */}
            <div className="p-6 rounded-2xl bg-clinical-surface border border-clinical-border flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-clinical-muted">
                  Telephone Concierge
                </h4>
                <p className="text-sm font-medium text-clinical-dark mt-1">
                  {contact.phone}
                </p>
                <p className="text-xs text-clinical-slate mt-0.5">
                  Mon – Sat, 9:00 AM – 6:00 PM
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="p-6 rounded-2xl bg-clinical-surface border border-clinical-border flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-clinical-muted">
                  WhatsApp Direct
                </h4>
                <p className="text-sm font-medium text-clinical-dark mt-1">
                  {contact.whatsapp}
                </p>
                <a
                  href={socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-brand-600 hover:text-brand-700 transition-colors inline-block mt-1"
                >
                  Start WhatsApp Chat →
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="p-6 rounded-2xl bg-clinical-surface border border-clinical-border flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-clinical-muted">
                  Electronic Mail
                </h4>
                <p className="text-sm font-medium text-clinical-dark mt-1">
                  {contact.email}
                </p>
                <p className="text-xs text-clinical-slate mt-0.5">
                  Responses within 24 business hours
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Architectural Map Placeholder & Opening Hours */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Elegant Map Placeholder */}
            <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-clinical-border shadow-premium h-80 sm:h-96 flex items-center justify-center p-8 text-center text-white">
              {/* Map background stylistic texture */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#1599a8_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="relative z-10 max-w-sm">
                <div className="w-12 h-12 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center mx-auto mb-4 border border-brand-500/40">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-medium">
                  {CLINIC_CONFIG.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {contact.address}, {contact.city}
                </p>
                <div className="mt-5 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-xs text-white border border-white/20">
                  <span>Interactive Map Placeholder</span>
                </div>
              </div>
            </div>

            {/* Hours card */}
            <div className="mt-6 p-6 rounded-2xl bg-clinical-ice border border-brand-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-500 text-white flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-clinical-dark">
                    Schedule Your Appointment
                  </h4>
                  <p className="text-xs text-clinical-slate">
                    Consultations are by appointment to ensure unhurried medical focus.
                  </p>
                </div>
              </div>

              <Link
                href="/book-appointment"
                className="px-5 py-2.5 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold text-xs uppercase tracking-wider flex items-center gap-2 whitespace-nowrap shadow-sm"
              >
                <span>Book Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
