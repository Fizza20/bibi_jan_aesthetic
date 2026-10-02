"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Shield,
  ChevronDown,
} from "lucide-react";
import BiomimeticSkinCanvas from "../3d/BiomimeticSkinCanvas";
import MagneticButton from "../animations/MagneticButton";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-gradient-to-b from-clinical-surface via-white to-clinical-ice/30 pb-16 pt-28 sm:min-h-screen">
      <BiomimeticSkinCanvas intensity={0.8} />

      {/* Decorative Organic Arcs */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full border border-brand-500/10 opacity-60"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-20 -top-20 h-[450px] w-[450px] rounded-full border border-brand-500/15 opacity-40"
        aria-hidden="true"
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">

          {/* Left Content */}
          <div className="flex flex-col items-start lg:col-span-7">

            {/* Brand Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3.5 py-1.5 shadow-subtle"
            >
              <span
                className="h-2 w-2 rounded-full bg-brand-500"
                aria-hidden="true"
              />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
                Bibi Jan Aesthetic Clinic
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-3xl font-serif text-4xl font-normal leading-[1.08] tracking-[-0.02em] text-clinical-dark sm:text-5xl md:text-6xl lg:text-[4.2rem]"
            >
              Where Dermatology Meets{" "}
              <span className="font-serif italic font-medium text-brand-600">
                Refined Beauty.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-xl text-base font-light leading-relaxed text-clinical-slate sm:text-lg"
            >
              Advanced dermatological care and aesthetic treatments designed
              around your individual skin needs, physiological balance, and
              enduring confidence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center"
            >
              <MagneticButton strength={0.15}>
                <Link
                  href="/book-appointment"
                  className="flex items-center justify-center gap-2.5 rounded-full bg-brand-500 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white shadow-lg shadow-brand-500/20 transition-all duration-300 hover:bg-brand-600 hover:shadow-xl hover:shadow-brand-500/30 active:scale-95"
                >
                  <span>Book an Appointment</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </MagneticButton>

              <Link
                href="/treatments"
                className="flex items-center justify-center rounded-full border border-clinical-border bg-white px-7 py-4 text-xs font-medium uppercase tracking-widest text-clinical-charcoal shadow-sm transition-colors hover:bg-brand-50/60"
              >
                <span>Explore Treatments</span>
              </Link>
            </motion.div>

            {/* Trust Points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-10 grid w-full max-w-xl grid-cols-1 gap-4 border-t border-brand-500/10 pt-7 sm:grid-cols-3 sm:gap-5"
            >
              <div className="flex items-center gap-2.5">
                <Shield className="h-4 w-4 shrink-0 text-brand-500" />
                <span className="text-xs font-medium text-clinical-charcoal">
                  Medical Assessment
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Sparkles className="h-4 w-4 shrink-0 text-brand-500" />
                <span className="text-xs font-medium text-clinical-charcoal">
                  Tailored Pathways
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"
                  aria-hidden="true"
                />

                <span className="text-xs font-medium text-clinical-charcoal">
                  Natural Enhancement
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="group relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[1.5rem] border border-brand-200/60 shadow-2xl sm:max-w-lg"
            >
              <Image
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop"
                alt="BIBI JAN Aesthetic Clinical Treatment"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Image Overlay */}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-clinical-dark/60 via-transparent to-transparent"
                aria-hidden="true"
              />

              {/* Image Information */}
              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/40 bg-white/90 p-4 shadow-lg backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-brand-700">
                      Evidence-Led Protocol
                    </span>

                    <p className="mt-0.5 font-serif text-sm font-medium text-clinical-dark">
                      Bespoke Dermal Restoration
                    </p>
                  </div>

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-600">
                    <Sparkles className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="#trust"
            className="group inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-clinical-slate shadow-subtle backdrop-blur-sm transition-all hover:border-brand-500 hover:text-brand-600"
          >
            <span>Explore Experience</span>

            <ChevronDown className="h-3.5 w-3.5 text-brand-500 transition-transform group-hover:translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}