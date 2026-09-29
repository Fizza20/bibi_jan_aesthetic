import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import TreatmentsSection from "@/components/sections/TreatmentsSection";
import FeaturedTreatmentSection from "@/components/sections/FeaturedTreatmentSection";
import WhyBibiJanSection from "@/components/sections/WhyBibiJanSection";
import DoctorProfileSection from "@/components/sections/DoctorProfileSection";
import BeforeAfterSlider from "@/components/sections/BeforeAfterSlider";
import PatientJourneySection from "@/components/sections/PatientJourneySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GallerySection from "@/components/sections/GallerySection";
import FAQSection from "@/components/sections/FAQSection";
import AppointmentSection from "@/components/sections/AppointmentSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust / Introduction Section */}
      <TrustSection />

      {/* 3. Treatments Section */}
      <TreatmentsSection />

      {/* 4. Featured Treatment Section */}
      <FeaturedTreatmentSection />

      {/* 5. Why BIBI JAN Storytelling Section */}
      <WhyBibiJanSection />

      {/* 6. Doctor / Clinical Specialist Section */}
      <DoctorProfileSection />

      {/* 7. Interactive Before & After Observation Slider */}
      <BeforeAfterSlider />

      {/* 8. Patient Journey Protocol */}
      <PatientJourneySection />

      {/* 9. Patient Testimonials & Reflections */}
      <TestimonialsSection />

      {/* 10. Sanctuary & Clinical Gallery */}
      <GallerySection />

      {/* 11. Frequently Asked Questions */}
      <FAQSection />

      {/* 12. Appointment Request Section */}
      <AppointmentSection />

      {/* 13. Concierge & Location Section */}
      <ContactSection />
    </>
  );
}
