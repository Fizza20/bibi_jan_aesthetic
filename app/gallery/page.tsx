import type { Metadata } from "next";
import GallerySection from "@/components/sections/GallerySection";
import BeforeAfterSlider from "@/components/sections/BeforeAfterSlider";
import AppointmentSection from "@/components/sections/AppointmentSection";

export const metadata: Metadata = {
  title: "Clinical Observations & Gallery | BIBI JAN AESTHETIC",
  description: "Browse our clinic sanctuary, treatment environments, and interactive before-and-after observations.",
};

export default function GalleryPage() {
  return (
    <div className="pt-20">
      {/* Before & After interactive slider */}
      <BeforeAfterSlider />

      {/* Editorial Sanctuary Gallery */}
      <GallerySection />

      {/* Appointment CTA */}
      <AppointmentSection />
    </div>
  );
}
