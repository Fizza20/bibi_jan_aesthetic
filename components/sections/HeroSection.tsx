"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, ChevronDown } from "lucide-react";
import BiomimeticSkinCanvas from "../3d/BiomimeticSkinCanvas";
import MagneticButton from "../animations/MagneticButton";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-clinical-surface via-white to-clinical-ice/30">
      {/* Dynamic 3D Biomimetic Cellular Membrane Ambient Canvas */}
      <BiomimeticSkinCanvas intensity={0.8} />

      {/* Decorative Subtle Organic Arcs (inspired by the uploaded logo's crescent arc) */}
      <div 
        className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-brand-500/10 opacity-60"
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute -top-20 -right-20 w-[450px] h-[450px] rounded-full border border-brand-500/15 opacity-40"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Typography & Action */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Clinical Brand Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-200 shadow-subtle mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-700">
                Bibi Jan Aesthetic Clinic
              </span>
            </motion.div>

            {/* Cinematic Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] text-clinical-dark font-normal leading-[1.12] tracking-tight"
            >
              Where Dermatology Meets{" "}
              <span className="italic font-serif text-brand-600 font-medium">
                Refined Beauty.
              </span>
            </motion.h1>

            {/* Editorial Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-clinical-slate font-light leading-relaxed max-w-xl"
            >
              Advanced dermatological care and aesthetic treatments designed around your individual skin needs, physiological balance, and enduring confidence.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <MagneticButton strength={0.15}>
                <Link
                  href="/book-appointment"
                  className="px-8 py-4 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all duration-300 shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/35"
                >
                  <span>Book an Appointment</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </MagneticButton>

              <Link
                href="/treatments"
                className="px-7 py-4 rounded-full bg-white hover:bg-brand-50/60 text-clinical-charcoal border border-clinical-border font-medium text-xs uppercase tracking-widest flex items-center justify-center transition-colors shadow-sm"
              >
                <span>Explore Treatments</span>
              </Link>
            </motion.div>

            {/* Trust Micro-Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-12 pt-8 border-t border-brand-500/10 grid grid-cols-2 sm:grid-cols-3 gap-6 w-full max-w-xl"
            >
              <div className="flex items-center gap-2.5">
                <Shield className="w-4 h-4 text-brand-500 shrink-0" />
                <span className="text-xs font-medium text-clinical-charcoal">Medical Assessment</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-brand-500 shrink-0" />
                <span className="text-xs font-medium text-clinical-charcoal">Tailored Pathways</span>
              </div>
              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                <span className="text-xs font-medium text-clinical-charcoal">Natural Enhancement</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Premium Editorial Image Reveal */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative w-full max-w-md sm:max-w-lg aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-brand-200/60 group"
            >
              {/* Primary Image */}
              <Image
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop"
                alt="BIBI JAN Aesthetic Clinical Treatment"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-clinical-dark/60 via-transparent to-transparent pointer-events-none" />

              {/* Floating Editorial Card at bottom */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-white/40 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-brand-700 font-semibold block">
                      Evidence-Led Protocol
                    </span>
                    <p className="font-serif text-sm font-medium text-clinical-dark mt-0.5">
                      Bespoke Dermal Restoration
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-brand-500/10 flex items-center justify-center text-brand-600">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Scroll Indicator / Explore Experience CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="#trust"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-brand-500/20 text-xs uppercase tracking-wider font-semibold text-clinical-slate hover:text-brand-600 hover:border-brand-500 transition-all shadow-subtle group"
          >
            <span>Explore Experience</span>
            <ChevronDown className="w-3.5 h-3.5 text-brand-500 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
