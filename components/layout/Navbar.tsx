"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  Calendar,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import MagneticButton from "../animations/MagneticButton";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Treatments", href: "/treatments" },
  { label: "Doctor", href: "/doctor" },
  { label: "Results & Gallery", href: "/gallery" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Main Navbar */}
      <header
        className={`fixed left-0 right-0 top-6 z-40 overflow-visible border-b border-slate-100/80 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 shadow-[0_4px_24px_rgba(15,23,42,0.05)] backdrop-blur-xl"
            : "bg-white/95 backdrop-blur-md"
        }`}
      >
        <div
          className={`relative mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12 transition-all duration-500 ${
            scrolled ? "min-h-[68px]" : "min-h-[74px]"
          }`}
        >
          {/* Brand */}
          <Link
            href="/"
            className="group relative flex shrink-0 items-center rounded-lg p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            aria-label="BIBI JAN AESTHETIC Home"
          >
            {/* Floating Logo */}
            <div
              className={`absolute left-0 top-1/2 z-20 -translate-y-1/2 transition-all duration-500 ${
                scrolled
                  ? "h-[76px] w-[76px]"
                  : "h-[84px] w-[84px]"
              }`}
            >
              {/* Logo Circle */}
              <div className="absolute inset-0 rounded-full bg-white shadow-[0_7px_24px_rgba(15,23,42,0.09)]" />

              <Image
                src="/logo.png"
                alt="BIBI JAN AESTHETIC Official Logo"
                fill
                priority
                sizes="84px"
                className="relative z-10 object-contain p-1.5 transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>

            {/* Brand Name */}
            <div className="ml-[96px] hidden flex-col sm:flex">
              <span className="font-sans text-[15px] font-semibold uppercase leading-none tracking-[0.16em] text-clinical-dark">
                BIBI JAN
              </span>

              <span className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.3em] text-brand-600">
                AESTHETICS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center lg:flex">
            <div className="flex items-center gap-6 xl:gap-7">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative py-3 text-[13px] font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-brand-700"
                        : "text-clinical-charcoal hover:text-brand-600"
                    }`}
                  >
                    {item.label}

                    <span
                      className={`absolute bottom-1 left-0 h-px bg-brand-500 transition-all duration-300 ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-5 lg:flex">
            <Link
              href="tel:+18005552424"
              className="group flex items-center gap-2 text-[11px] font-medium tracking-wide text-clinical-slate transition-colors hover:text-brand-600"
            >
              <Phone className="h-3.5 w-3.5 text-brand-500 transition-transform duration-200 group-hover:scale-105" />
              <span>Direct Concierge</span>
            </Link>

            <MagneticButton strength={0.2}>
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 rounded-full border border-brand-500 bg-brand-500 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-transparent hover:text-brand-600 active:scale-[0.98]"
              >
                <Calendar className="h-3.5 w-3.5" />
                <span>Book Appointment</span>
              </Link>
            </MagneticButton>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <Link
              href="/book-appointment"
              className="flex h-10 w-10 items-center justify-center border border-brand-500 bg-brand-500 text-white transition-colors hover:bg-brand-600"
              aria-label="Book Appointment"
            >
              <Calendar className="h-4 w-4" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center border border-slate-200 text-clinical-dark transition-colors hover:border-brand-300 hover:text-brand-600 focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[100px] z-30 flex flex-col justify-between overflow-y-auto border-t border-slate-200 bg-white px-6 pb-6 pt-5 lg:hidden"
          >
            <div>
              <div className="flex items-center gap-2 border-b border-slate-200 pb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-600">
                <ShieldCheck className="h-4 w-4" />
                <span>Clinical & Aesthetic Care</span>
              </div>

              <nav className="mt-4 flex flex-col">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`group flex items-center justify-between border-b border-slate-100 py-4 text-base font-medium transition-colors ${
                        isActive
                          ? "text-brand-700"
                          : "text-clinical-charcoal hover:text-brand-600"
                      }`}
                    >
                      <span>{item.label}</span>

                      <ArrowRight
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isActive
                            ? "translate-x-0.5 text-brand-500"
                            : "text-slate-300 group-hover:translate-x-0.5 group-hover:text-brand-400"
                        }`}
                      />
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-5">
              <Link
                href="/book-appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 border border-brand-500 bg-brand-500 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-600"
              >
                <Calendar className="h-4 w-4" />
                <span>Book an Appointment</span>
              </Link>

              <p className="mt-3 text-center text-[11px] text-clinical-muted">
                Discreet & Confidential Consultations
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}