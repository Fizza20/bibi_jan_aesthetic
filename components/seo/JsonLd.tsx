import { CLINIC_CONFIG, TREATMENTS_DATA } from "@/data/clinic-data";

export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": "https://bibijanaesthetic.com/#clinic",
        "name": CLINIC_CONFIG.name,
        "description": CLINIC_CONFIG.subheading,
        "url": "https://bibijanaesthetic.com",
        "logo": "https://bibijanaesthetic.com/logo.png",
        "image": "https://bibijanaesthetic.com/logo.png",
        "telephone": CLINIC_CONFIG.contact.phone,
        "email": CLINIC_CONFIG.contact.email,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": CLINIC_CONFIG.contact.address,
          "addressLocality": CLINIC_CONFIG.contact.city,
          "postalCode": CLINIC_CONFIG.contact.postalCode,
        },
        "medicalSpecialty": [
          "Dermatology",
          "Aesthetic Medicine",
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday"],
            "opens": "10:00",
            "closes": "16:00",
          },
        ],
      },
      {
        "@type": "Physician",
        "@id": "https://bibijanaesthetic.com/#physician",
        "name": CLINIC_CONFIG.doctor.name,
        "jobTitle": CLINIC_CONFIG.doctor.title,
        "medicalSpecialty": "Dermatology",
        "worksFor": {
          "@id": "https://bibijanaesthetic.com/#clinic",
        },
      },
      ...TREATMENTS_DATA.map((treatment) => ({
        "@type": "MedicalProcedure",
        "name": treatment.title,
        "description": treatment.shortDescription,
        "procedureType": "Non-invasive Aesthetic / Dermatological Procedure",
        "bodyLocation": "Face / Skin / Hair",
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
