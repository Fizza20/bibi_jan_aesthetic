import type { Metadata } from "next";
import DoctorProfileSection from "@/components/sections/DoctorProfileSection";
import WhyBibiJanSection from "@/components/sections/WhyBibiJanSection";
import AppointmentSection from "@/components/sections/AppointmentSection";

export const metadata: Metadata = {
  title: "Doctor & Specialist Profile | BIBI JAN AESTHETIC",
  description: "Meet our Clinical Director and Dermatological Specialist, dedicated to patient safety, diagnostic care, and natural aesthetic results.",
};

export default function DoctorPage() {
  return (
    <div className="pt-20">
      <DoctorProfileSection />
      <WhyBibiJanSection />
      <AppointmentSection />
    </div>
  );
}
