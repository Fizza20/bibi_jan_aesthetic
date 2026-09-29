import type { Metadata } from "next";
import TreatmentsSection from "@/components/sections/TreatmentsSection";
import FAQSection from "@/components/sections/FAQSection";
import AppointmentSection from "@/components/sections/AppointmentSection";

export const metadata: Metadata = {
  title: "Clinical & Aesthetic Treatments | BIBI JAN AESTHETIC",
  description: "Explore our comprehensive directory of dermatological treatments, acne therapies, pigment management, and non-surgical aesthetic enhancements.",
};

export default function TreatmentsPage() {
  return (
    <div className="pt-20">
      {/* Treatments Directory Component */}
      <TreatmentsSection />

      {/* Relevant FAQs */}
      <FAQSection />

      {/* Appointment Booking */}
      <AppointmentSection />
    </div>
  );
}
