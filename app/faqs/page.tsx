import type { Metadata } from "next";
import FAQSection from "@/components/sections/FAQSection";
import PatientJourneySection from "@/components/sections/PatientJourneySection";
import AppointmentSection from "@/components/sections/AppointmentSection";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | BIBI JAN AESTHETIC",
  description: "Find clear answers about clinical consultations, appointments, skin prep, and aftercare protocols.",
};

export default function FAQsPage() {
  return (
    <div className="pt-20">
      <FAQSection />
      <PatientJourneySection />
      <AppointmentSection />
    </div>
  );
}
