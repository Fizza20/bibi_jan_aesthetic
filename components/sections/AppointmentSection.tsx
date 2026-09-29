"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { TREATMENTS_DATA, CLINIC_CONFIG } from "@/data/clinic-data";
import { Calendar, CheckCircle2, AlertCircle, Send, Sparkles, MessageSquare } from "lucide-react";

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  treatment: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  preferredDate?: string;
  preferredTime?: string;
  treatment?: string;
}

function AppointmentForm() {
  const searchParams = useSearchParams();
  const initialTreatment = searchParams.get("treatment") || "";

  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    phone: "",
    email: "",
    preferredDate: "",
    preferredTime: "",
    treatment: initialTreatment,
    message: "",
  });

  useEffect(() => {
    if (initialTreatment) {
      setFormData((prev) => ({ ...prev, treatment: initialTreatment }));
    }
  }, [initialTreatment]);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState("");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please provide a valid contact number";
    } else if (formData.phone.trim().length < 7) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please provide a valid email format";
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = "Select your preferred date";
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = "Select a preferred time slot";
    }

    if (!formData.treatment) {
      newErrors.treatment = "Please select a treatment or area of concern";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      const code = "BJ-" + Math.floor(100000 + Math.random() * 900000);
      setConfirmationCode(code);
    }, 800);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      preferredDate: "",
      preferredTime: "",
      treatment: "",
      message: "",
    });
    setErrors({});
  };

  if (isSuccess) {
    return (
      <div className="text-center py-12 px-4 flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mb-6">
          <Sparkles className="w-8 h-8" />
        </div>
        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-700 block mb-1">
          Consultation Request Received
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-medium text-clinical-dark mb-3">
          Thank You, {formData.fullName}
        </h3>
        <p className="text-sm text-clinical-slate max-w-md mb-6 leading-relaxed">
          Your consultation request has been lodged with reference{" "}
          <strong className="text-brand-700 font-mono">{confirmationCode}</strong>.
          Our clinical concierge will contact you via {formData.phone} or {formData.email} to finalize your arrival time.
        </p>

        <div className="p-4 rounded-xl bg-white border border-clinical-border text-left w-full max-w-sm mb-8 text-xs text-clinical-slate space-y-1.5">
          <div><strong>Selected Concern:</strong> {formData.treatment}</div>
          <div><strong>Preferred Date:</strong> {formData.preferredDate}</div>
          <div><strong>Preferred Window:</strong> {formData.preferredTime}</div>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="px-6 py-2.5 rounded-full border border-brand-500 text-brand-700 hover:bg-brand-500 hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="border-b border-clinical-border pb-4">
        <h3 className="font-serif text-xl font-medium text-clinical-dark">
          Consultation Details
        </h3>
        <p className="text-xs text-clinical-muted mt-1">
          Please provide your contact information and scheduling preferences.
        </p>
      </div>

      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-clinical-charcoal mb-1.5">
          Full Name *
        </label>
        <input
          id="fullName"
          type="text"
          value={formData.fullName}
          onChange={(e) => {
            setFormData({ ...formData, fullName: e.target.value });
            if (errors.fullName) setErrors({ ...errors, fullName: undefined });
          }}
          placeholder="e.g. Eleanor Vance"
          className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-clinical-dark transition-colors focus:outline-none ${
            errors.fullName ? "border-red-400 focus:border-red-500" : "border-clinical-border focus:border-brand-500"
          }`}
        />
        {errors.fullName && (
          <div className="flex items-center gap-1 text-red-500 text-xs mt-1.5">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.fullName}</span>
          </div>
        )}
      </div>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-clinical-charcoal mb-1.5">
            Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
              if (errors.phone) setErrors({ ...errors, phone: undefined });
            }}
            placeholder="+1 (000) 000-0000"
            className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-clinical-dark transition-colors focus:outline-none ${
              errors.phone ? "border-red-400 focus:border-red-500" : "border-clinical-border focus:border-brand-500"
            }`}
          />
          {errors.phone && (
            <div className="flex items-center gap-1 text-red-500 text-xs mt-1.5">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.phone}</span>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-clinical-charcoal mb-1.5">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: undefined });
            }}
            placeholder="eleanor@example.com"
            className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-clinical-dark transition-colors focus:outline-none ${
              errors.email ? "border-red-400 focus:border-red-500" : "border-clinical-border focus:border-brand-500"
            }`}
          />
          {errors.email && (
            <div className="flex items-center gap-1 text-red-500 text-xs mt-1.5">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.email}</span>
            </div>
          )}
        </div>
      </div>

      {/* Scheduling Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="preferredDate" className="block text-xs font-semibold uppercase tracking-wider text-clinical-charcoal mb-1.5">
            Preferred Date *
          </label>
          <input
            id="preferredDate"
            type="date"
            value={formData.preferredDate}
            onChange={(e) => {
              setFormData({ ...formData, preferredDate: e.target.value });
              if (errors.preferredDate) setErrors({ ...errors, preferredDate: undefined });
            }}
            className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-clinical-dark transition-colors focus:outline-none ${
              errors.preferredDate ? "border-red-400 focus:border-red-500" : "border-clinical-border focus:border-brand-500"
            }`}
          />
          {errors.preferredDate && (
            <div className="flex items-center gap-1 text-red-500 text-xs mt-1.5">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.preferredDate}</span>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="preferredTime" className="block text-xs font-semibold uppercase tracking-wider text-clinical-charcoal mb-1.5">
            Preferred Time Window *
          </label>
          <select
            id="preferredTime"
            value={formData.preferredTime}
            onChange={(e) => {
              setFormData({ ...formData, preferredTime: e.target.value });
              if (errors.preferredTime) setErrors({ ...errors, preferredTime: undefined });
            }}
            className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-clinical-dark transition-colors focus:outline-none ${
              errors.preferredTime ? "border-red-400 focus:border-red-500" : "border-clinical-border focus:border-brand-500"
            }`}
          >
            <option value="">Select Time Window</option>
            <option value="Morning (09:00 AM – 12:00 PM)">Morning (09:00 AM – 12:00 PM)</option>
            <option value="Afternoon (12:00 PM – 03:00 PM)">Afternoon (12:00 PM – 03:00 PM)</option>
            <option value="Late Afternoon (03:00 PM – 06:00 PM)">Late Afternoon (03:00 PM – 06:00 PM)</option>
          </select>
          {errors.preferredTime && (
            <div className="flex items-center gap-1 text-red-500 text-xs mt-1.5">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.preferredTime}</span>
            </div>
          )}
        </div>
      </div>

      {/* Treatment / Concern Selection */}
      <div>
        <label htmlFor="treatment" className="block text-xs font-semibold uppercase tracking-wider text-clinical-charcoal mb-1.5">
          Treatment of Interest / Skin Concern *
        </label>
        <select
          id="treatment"
          value={formData.treatment}
          onChange={(e) => {
            setFormData({ ...formData, treatment: e.target.value });
            if (errors.treatment) setErrors({ ...errors, treatment: undefined });
          }}
          className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-clinical-dark transition-colors focus:outline-none ${
            errors.treatment ? "border-red-400 focus:border-red-500" : "border-clinical-border focus:border-brand-500"
          }`}
        >
          <option value="">Select Treatment or Concern</option>
          <option value="Comprehensive General Dermatology Assessment">Comprehensive General Dermatology Assessment</option>
          {TREATMENTS_DATA.map((t) => (
            <option key={t.id} value={t.title}>
              {t.title} ({t.category})
            </option>
          ))}
          <option value="Other / Multiple Concerns">Other / Multiple Concerns</option>
        </select>
        {errors.treatment && (
          <div className="flex items-center gap-1 text-red-500 text-xs mt-1.5">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.treatment}</span>
          </div>
        )}
      </div>

      {/* Optional Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-clinical-charcoal mb-1.5">
          Additional Notes / Skin History (Optional)
        </label>
        <textarea
          id="message"
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Share any pertinent sensitivities, prior treatments, or specific questions..."
          className="w-full px-4 py-3 rounded-xl bg-white border border-clinical-border focus:border-brand-500 text-sm text-clinical-dark transition-colors focus:outline-none resize-none"
        />
      </div>

      {/* Submit CTA */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-6 rounded-full bg-brand-500 hover:bg-brand-600 disabled:bg-brand-300 text-white font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand-500/25 active:scale-[0.99]"
      >
        {isSubmitting ? (
          <span>Processing Consultation Request...</span>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Request an Appointment</span>
          </>
        )}
      </button>

      <p className="text-xs text-center text-clinical-muted">
        By submitting, you agree to our privacy policy. Your medical data is strictly confidential.
      </p>
    </form>
  );
}

export default function AppointmentSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="appointment">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Context & Assurances */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold tracking-widest uppercase mb-4">
                <Calendar className="w-3.5 h-3.5 text-brand-500" />
                <span>Reserve Consultation</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-clinical-dark leading-tight">
                Request a Private Consultation
              </h2>

              <p className="mt-4 text-base text-clinical-slate leading-relaxed">
                Take the first step toward revitalized skin health. Your details remain strictly confidential and will be reviewed directly by our clinical concierge.
              </p>

              {/* Guarantees */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-clinical-dark">
                      Private & Confidential Assessment
                    </h3>
                    <p className="text-xs text-clinical-slate mt-0.5">
                      Consultations are conducted in an unhurried, discreet clinical environment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-clinical-dark">
                      Personalized Treatment Blueprint
                    </h3>
                    <p className="text-xs text-clinical-slate mt-0.5">
                      No generic packages. Every recommendation is tailored strictly to your physiology.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-clinical-dark">
                      Prompt Concierge Response
                    </h3>
                    <p className="text-xs text-clinical-slate mt-0.5">
                      Our reception coordinates directly to confirm your optimal appointment slot.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="mt-12 p-6 rounded-2xl bg-clinical-ice border border-brand-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-500 text-white flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-clinical-dark">
                    Prefer Direct Messaging?
                  </h3>
                  <p className="text-xs text-clinical-slate mt-0.5">
                    Connect directly with our patient concierge via WhatsApp.
                  </p>
                </div>
              </div>
              <a
                href={CLINIC_CONFIG.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full py-2.5 px-4 rounded-xl bg-white border border-brand-300 hover:border-brand-500 text-brand-800 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <span>Open WhatsApp Concierge</span>
              </a>
            </div>
          </div>

          {/* Right Column: Appointment Request Form wrapped in Suspense */}
          <div className="lg:col-span-7 bg-clinical-surface p-8 sm:p-10 rounded-2xl border border-clinical-border shadow-premium relative">
            <Suspense fallback={<div className="p-8 text-center text-sm text-clinical-slate bg-white rounded-2xl border border-clinical-border">Preparing consultation booking portal...</div>}>
              <AppointmentForm />
            </Suspense>
          </div>

        </div>
      </div>
    </section>
  );
}
