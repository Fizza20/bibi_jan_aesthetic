import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";
import AppointmentSection from "@/components/sections/AppointmentSection";

export const metadata: Metadata = {
  title: "Contact & Concierge | BIBI JAN AESTHETIC",
  description: "Get in touch with the BIBI JAN AESTHETIC clinical concierge. Inquire about consultations, clinic hours, and directions.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactSection />
      <AppointmentSection />
    </div>
  );
}
