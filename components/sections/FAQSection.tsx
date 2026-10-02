"use client";

import { useState } from "react";
import { FAQS_DATA } from "@/data/clinic-data";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(FAQS_DATA[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      className="py-24 bg-clinical-surface relative overflow-hidden"
      id="faqs"
    >
      {/* Controlled centered content width */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold tracking-widest uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-brand-500" />
            <span>Questions & Guidance</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-clinical-dark">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-clinical-slate text-sm sm:text-base leading-relaxed">
            Transparent answers regarding our clinical consultation process,
            treatment safety, and aftercare standards.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-white border border-clinical-border overflow-hidden transition-all duration-300 shadow-subtle"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                >
                  <span className="font-serif text-base sm:text-lg font-medium text-clinical-dark">
                    {faq.question}
                  </span>

                  <div
                    className={`w-8 h-8 rounded-full bg-clinical-ice flex items-center justify-center text-brand-600 shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 bg-brand-500 text-white"
                        : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-clinical-slate font-light leading-relaxed border-t border-clinical-border/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <p className="text-sm text-clinical-slate mb-3">
            Have a question about a specific condition or customized protocol?
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700 hover:text-brand-800 transition-colors"
          >
            <span>Inquire Directly With Our Clinical Concierge</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}