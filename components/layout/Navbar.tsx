"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Calendar, ArrowRight, ShieldCheck } from "lucide-react";
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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-white/90 backdrop-blur-md border-b border-brand-500/10 shadow-sm"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Official Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg p-1"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="BIBI JAN AESTHETIC Official Logo"
                fill
                priority
                sizes="(max-width: 768px) 44px, 48px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-base sm:text-lg tracking-wider text-clinical-dark uppercase leading-none">
                BIBI JAN
              </span>
              <span className="text-[10px] sm:text-xs tracking-[0.25em] text-brand-600 font-medium uppercase mt-0.5">
                AESTHETICS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-clinical-slate">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative py-1 transition-colors duration-200 hover:text-brand-600 ${
                    isActive ? "text-brand-700 font-semibold" : "text-clinical-charcoal"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand-500 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action / CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="tel:+10000000000"
              className="text-xs uppercase tracking-wider text-clinical-muted hover:text-brand-600 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-brand-500" />
              <span>Direct Concierge</span>
            </Link>

            <MagneticButton strength={0.2}>
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-brand-500 hover:bg-brand-600 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-brand-500/20 active:scale-95"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </Link>
            </MagneticButton>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              href="/book-appointment"
              className="p-2 rounded-full bg-brand-500 text-white text-xs font-medium flex items-center justify-center"
              aria-label="Book Appointment"
            >
              <Calendar className="w-4 h-4" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-clinical-dark hover:text-brand-600 transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[65px] bg-white z-30 lg:hidden flex flex-col justify-between p-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-5 pt-4">
              <div className="flex items-center gap-2 pb-4 border-b border-brand-500/10 text-xs font-semibold uppercase tracking-widest text-brand-600">
                <ShieldCheck className="w-4 h-4" />
                <span>Clinical & Aesthetic Care</span>
              </div>

              <div className="flex flex-col gap-3">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-lg font-medium py-2 px-3 rounded-lg flex items-center justify-between transition-colors ${
                        isActive
                          ? "bg-brand-50 text-brand-700 font-semibold"
                          : "text-clinical-charcoal hover:bg-slate-50"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="w-4 h-4 text-brand-400" />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-brand-500/10 flex flex-col gap-3">
              <Link
                href="/book-appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 px-6 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold text-center text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </Link>
              <div className="text-center text-xs text-clinical-muted mt-2">
                Discreet & Confidential Consultations
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
