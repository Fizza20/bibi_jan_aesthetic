import type { Metadata } from "next";
import { Suspense } from "react";
import AppointmentSection from "@/components/sections/AppointmentSection";
import PatientJourneySection from "@/components/sections/PatientJourneySection";

export const metadata: Metadata = {
  title: "Book a Consultation | BIBI JAN AESTHETIC",
  description: "Schedule your private dermatological assessment and aesthetic consultation with our clinical specialists.",
};

export default function BookAppointmentPage() {
  return (
    <div className="pt-24">
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center">Loading booking system...</div>}>
        <AppointmentSection />
      </Suspense>
      <PatientJourneySection />
    </div>
  );
}
