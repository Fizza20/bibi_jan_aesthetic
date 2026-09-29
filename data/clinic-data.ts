export interface Treatment {
  id: string;
  slug: string;
  title: string;
  category: "Dermatology" | "Aesthetic Treatments" | "Advanced Treatments";
  shortDescription: string;
  tagline: string;
  heroImage: string;
  galleryImages: string[];
  duration: string;
  downtime: string;
  sessionsRecommended: string;
  targetConcerns: string[];
  introduction: string;
  whoItIsFor: string[];
  treatmentApproach: string[];
  whatToExpect: string[];
  preparation: string[];
  aftercare: string[];
  faqs: { question: string; answer: string }[];
  featured?: boolean;
}

export interface DoctorProfile {
  name: string;
  title: string;
  role: string;
  specialties: string[];
  bio: string[];
  approach: string;
  philosophy: string;
  image: string;
  credentialsPlaceholder: string[];
}

export interface Testimonial {
  id: string;
  patientName: string;
  treatmentType: string;
  quote: string;
  verifiedReview: boolean;
  datePlaceholder: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Consultation" | "Treatments" | "Aftercare";
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Clinic" | "Consultation" | "Treatment Environment" | "Skincare" | "Lifestyle";
  image: string;
  aspect: "landscape" | "portrait" | "square";
  description: string;
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  treatmentName: string;
  timeline: string;
  beforeImage: string;
  afterImage: string;
  notes: string;
}

export const CLINIC_CONFIG = {
  name: "BIBI JAN AESTHETIC",
  tagline: "Where Dermatology Meets Refined Beauty",
  subheading: "Advanced dermatological care and aesthetic treatments designed around your individual skin needs and confidence.",
  mission: "Science-led skincare. Thoughtful aesthetic care. We integrate clinical dermatological precision with an editorial aesthetic vision to enhance your natural skin health.",
  
  contact: {
    address: "[Clinic Address Placeholder — e.g., Suite 400, Medical Arts District]",
    city: "[City / Metro Area]",
    postalCode: "[Postal Code]",
    phone: "[+1 (000) 000-0000 / Phone Number Placeholder]",
    whatsapp: "[+1 (000) 000-0000 / WhatsApp Placeholder]",
    email: "concierge@bibijanaesthetic.com",
    consultationHours: [
      { days: "Monday – Friday", hours: "09:00 AM – 06:00 PM" },
      { days: "Saturday", hours: "10:00 AM – 04:00 PM" },
      { days: "Sunday", hours: "By Advance Appointment Only" },
    ],
  },

  socials: {
    instagram: "https://instagram.com/bibijanaesthetic",
    facebook: "https://facebook.com/bibijanaesthetic",
    linkedin: "https://linkedin.com/company/bibijanaesthetic",
    whatsapp: "https://wa.me/placeholder",
  },

  trustPillars: [
    {
      title: "Advanced Dermatology",
      description: "Evidence-grounded medical assessment tailored to complex skin conditions and barrier restoration.",
      icon: "ShieldCheck",
    },
    {
      title: "Personalized Care",
      description: "No standardized protocols. Every treatment path begins with comprehensive individualized analysis.",
      icon: "Sparkles",
    },
    {
      title: "Modern Clinical Approach",
      description: "Utilizing modern modalities and refined techniques prioritising gentle, natural-looking outcomes.",
      icon: "Cpu",
    },
    {
      title: "Patient-Centered Experience",
      description: "A serene, discreet clinic environment designed for personal comfort, privacy, and thorough consultations.",
      icon: "HeartHandshake",
    },
  ],

  patientJourney: [
    {
      step: "01",
      title: "In-Depth Consultation",
      subtitle: "Understanding Your Skin",
      description: "A private consultation to examine your skin history, lifestyle factors, barrier health, and personal goals.",
      duration: "30–45 mins",
    },
    {
      step: "02",
      title: "Clinical Assessment",
      subtitle: "Diagnostic Precision",
      description: "Detailed skin evaluation examining hydration, pigmentation depth, vascular reactivity, and structural harmony.",
      duration: "15–20 mins",
    },
    {
      step: "03",
      title: "Personalized Plan",
      subtitle: "Bespoke Pathway",
      description: "Formulation of a customized, progressive protocol matching clinical safety with subtle aesthetic enhancement.",
      duration: "Customized",
    },
    {
      step: "04",
      title: "Targeted Treatment",
      subtitle: "Precision Care",
      description: "Gentle execution using medical-grade techniques with continuous comfort monitoring and patient dialogue.",
      duration: "Varies by procedure",
    },
    {
      step: "05",
      title: "Guided Follow-Up",
      subtitle: "Long-term Skin Health",
      description: "Post-procedure check-ins, medical aftercare guidance, and skin barrier maintenance regimen.",
      duration: "Continuous",
    },
  ],

  doctor: {
    name: "Dr. [Lead Specialist Name]",
    title: "Dermatologist & Aesthetic Specialist",
    role: "Clinical Director",
    specialties: [
      "Clinical Dermatology",
      "Facial Rejuvenation & Harmonization",
      "Pigmentation & Melasma Management",
      "Advanced Skin Barrier Restoration",
      "Non-Surgical Aesthetic Medicine",
    ],
    bio: [
      "Dr. [Name] is dedicated to delivering evidence-based dermatological care combined with an intuitive aesthetic philosophy. Believing that skin vitality requires both medical precision and thoughtful aesthetic balance, Dr. [Name] prioritizes natural-looking, harmonious results.",
      "With specialized focus on complex skin concerns, sensitive barrier rejuvenation, and modern laser and aesthetic modalities, every patient receives a comprehensive, unhurried assessment tailored to their individual physiology.",
    ],
    approach: "We practice an unhurried, patient-first approach where listening is just as important as diagnostic evaluation. Skin is dynamic; our treatment plans evolve with you.",
    philosophy: "The goal is never to alter identity, but to restore skin health, refine natural contours, and cultivate enduring skin confidence.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop",
    credentialsPlaceholder: [
      "Board Certification Placeholder [Specialty]",
      "Medical Licensure Placeholder [Jurisdiction]",
      "Professional Dermatological Society Placeholder",
      "Advanced Aesthetic Fellowship Training Placeholder",
    ],
  } as DoctorProfile,

  disclaimer: "Medical Disclaimer: The information provided on this website is for general informational and educational purposes only and is not intended as medical advice, diagnosis, or treatment. Individual results may vary based on physiological characteristics and medical history. Always seek the advice of a qualified physician or licensed healthcare provider with any questions you may have regarding a medical condition. Before and after images illustrate individual patient experiences; they do not constitute a guarantee of identical outcomes.",
};

export const TREATMENTS_DATA: Treatment[] = [
  {
    id: "acne-treatment",
    slug: "acne-treatment",
    title: "Acne Assessment & Treatment",
    category: "Dermatology",
    tagline: "Comprehensive clinical care targeting root causes of active blemishes and barrier inflammation.",
    shortDescription: "A clinical, multi-factorial protocol focusing on calming active inflammation, balancing follicular turnover, and restoring long-term barrier resilience.",
    heroImage: "https://images.unsplash.com/photo-1512290900672-1f55b9a7c3df?q=80&w=1400&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1512290900672-1f55b9a7c3df?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
    ],
    duration: "45–60 mins",
    downtime: "Minimal (0–24 hours mild redness)",
    sessionsRecommended: "3–6 sessions spaced 3–4 weeks apart",
    targetConcerns: ["Inflammatory acne", "Comedonal congestion", "Post-breakout redness", "Compromised skin flora"],
    introduction: "Acne is a complex inflammatory condition influenced by genetics, hormones, microbial balance, and barrier integrity. At BIBI JAN AESTHETIC, we avoid aggressive stripping methods in favor of calming, medically monitored solutions.",
    whoItIsFor: [
      "Individuals experiencing persistent hormonal or adult acne",
      "Patients dealing with recurring congestive breakouts",
      "Sensitive skin types reacting adversely to over-the-counter drying agents",
    ],
    treatmentApproach: [
      "Detailed skin surface assessment and barrier evaluation",
      "Gentle medical cleansing and follicular pore decongestion",
      "Targeted antimicrobial and anti-inflammatory formulations",
      "Customized topical homecare guidance to prevent recurrence",
    ],
    whatToExpect: [
      "Thorough skin cleansing and gentle preparation",
      "Application of professional active solutions tailored to your tolerance level",
      "Calming post-treatment thermal soothing mask and barrier seal",
      "Immediate reduction in visible surface inflammation and heat",
    ],
    preparation: [
      "Avoid strong active retinoids, AHA/BHA, or chemical exfoliants 48 hours prior",
      "Avoid sun exposure and self-tanning products",
      "Arrive with clean skin free of heavy makeup if convenient",
    ],
    aftercare: [
      "Maintain high-SPF broad-spectrum mineral sun protection daily",
      "Use only gentle, non-foaming hydrating cleansers for the first 3 days",
      "Avoid direct sauna, intense workouts, or swimming for 24 hours",
    ],
    faqs: [
      {
        question: "How soon can I expect visible skin improvement?",
        answer: "Initial calming of inflammation is often visible within days, while progressive clarity and balanced sebum production typically develop over a multi-week structured series.",
      },
      {
        question: "Will this dry out my sensitive skin?",
        answer: "Our medical approach focuses on preserving barrier hydration while addressing inflammation, avoiding the dehydrating rebound effect of harsh drying agents.",
      },
    ],
    featured: true,
  },
  {
    id: "pigmentation-melasma",
    slug: "pigmentation-melasma",
    title: "Pigmentation & Melasma Management",
    category: "Dermatology",
    tagline: "Evidence-led approaches to regulate melanogenesis and restore even skin luminescence.",
    shortDescription: "Precise clinical management for stubborn hyperpigmentation, sun damage, and hormonal melasma utilizing gentle, melanin-suppressive modalities.",
    heroImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1400&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop",
    ],
    duration: "45–60 mins",
    downtime: "Mild flaking over 2–4 days",
    sessionsRecommended: "4–6 sessions tailored to depth",
    targetConcerns: ["Hormonal melasma", "Solar lentigines / Sun spots", "Post-inflammatory hyperpigmentation (PIH)", "Uneven skin tone"],
    introduction: "Melanin hyperactivity requires a respectful, measured strategy. Over-aggressive treatments can trigger post-inflammatory rebound. BIBI JAN AESTHETIC employs progressive, cooling, pigment-inhibiting protocols designed for skin longevity.",
    whoItIsFor: [
      "Those experiencing patchy discoloration or pregnancy-associated melasma",
      "Skin prone to lingering dark marks after acne or minor trauma",
      "Individuals seeking gradual, safe brightening without skin thinning",
    ],
    treatmentApproach: [
      "Polarized clinical light evaluation to determine dermal vs. epidermal pigment depth",
      "Tyrosinase-inhibiting preparatory regimens",
      "Non-thermal or calibrated energy and medical peel peeling solutions",
      "Protective cellular repair and rigorous photoprotection counseling",
    ],
    whatToExpect: [
      "Mild tingling sensation during application of active brightening serums",
      "Temporary pinkness followed by subtle microscopic exfoliation over 72 hours",
      "Progressive illumination and blending of irregular pigment boundaries",
    ],
    preparation: [
      "Strict photoprotection with broad-spectrum SPF 50+ for 2 weeks prior",
      "Discontinue chemical peels or laser treatments 3 weeks prior",
    ],
    aftercare: [
      "Reapply broad-spectrum sunscreen every 2–3 hours during daylight hours",
      "Wear wide-brimmed hats when exposed to direct sunlight",
      "Refrain from picking or mechanically scrubbing peeling skin",
    ],
    faqs: [
      {
        question: "Can melasma be permanently cured?",
        answer: "Melasma is a chronic condition influenced by UV exposure and hormones. While it can be significantly brightened and controlled, maintenance care and disciplined sun defense are crucial to preventing reactivation.",
      },
    ],
    featured: true,
  },
  {
    id: "facial-rejuvenation",
    slug: "facial-rejuvenation",
    title: "Signature Facial Rejuvenation",
    category: "Aesthetic Treatments",
    tagline: "Artful cellular renewal combining dermatological science with refined aesthetic wellness.",
    shortDescription: "A multi-phase luxury aesthetic treatment that deeply clarifies, micro-infuses essential peptides, and revitalizes dermal elasticity.",
    heroImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1400&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop",
    ],
    duration: "75 mins",
    downtime: "Zero downtime (instant radiance)",
    sessionsRecommended: "Monthly maintenance or pre-event ritual",
    targetConcerns: ["Dull skin texture", "Fine dehydration lines", "Loss of radiance", "Fatigued skin barrier"],
    introduction: "Designed as an editorial skin refinement experience, this treatment merges medical micro-infusion with lymphatic drainage techniques to restore a buoyant, dewy complexion without irritation.",
    whoItIsFor: [
      "Clients preparing for special events or seeking recurring skin preservation",
      "Stressed, city-exposed skin needing deep oxygenation and antioxidant replenishment",
      "Anyone desiring a refreshed, lifted, luminous appearance immediately",
    ],
    treatmentApproach: [
      "Acoustic ultrasonic dermal exfoliation",
      "Personalized serum cocktail infusion containing pure hyaluronic acids and botanical peptides",
      "Cryo-cooling lymphatic sculpt to de-puff facial contours",
      "Intensive bioactive barrier mask under LED photobiomodulation",
    ],
    whatToExpect: [
      "Deeply relaxing, sensory clinical treatment with zero discomfort",
      "Cooling sensation and soothing rhythmic facial contouring",
      "Glass-skin glow and silky skin texture upon completion",
    ],
    preparation: ["No special preparation required. Come ready to relax."],
    aftercare: [
      "Keep skin hydrated and drink adequate water",
      "Enjoy immediate results; makeup may be applied immediately if desired",
    ],
    faqs: [
      {
        question: "Can I have this treatment done right before an event?",
        answer: "Yes, this treatment is specially engineered with zero downtime and produces immediate luminosity, making it ideal 24–48 hours prior to an event.",
      },
    ],
    featured: true,
  },
  {
    id: "chemical-peels",
    slug: "chemical-peels",
    title: "Precision Chemical Resurfacing",
    category: "Aesthetic Treatments",
    tagline: "Calibrated acid complexes to dissolve cellular cohesion and reveal fresh, velvety skin.",
    shortDescription: "Doctor-formulated chemical peels calibrated to your Fitzpatrick skin type, addressing texture irregularities, fine lines, and stubborn congestive build-up.",
    heroImage: "https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=1400&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=800&auto=format&fit=crop",
    ],
    duration: "40 mins",
    downtime: "2–5 days of subtle micro-peeling",
    sessionsRecommended: "3–4 sessions spaced 4 weeks apart",
    targetConcerns: ["Textural roughness", "Enlarged pore appearance", "Superficial fine lines", "Uneven tone"],
    introduction: "Modern chemical resurfacing has moved far beyond outdated aggressive shedding. We employ biomimetic hydroxy-acid formulas with buffered release to stimulate cellular turnover safely and comfortably.",
    whoItIsFor: ["Those looking to soften skin grain, refine enlarged pores, and restore a youthful glow."],
    treatmentApproach: ["Degreasing primer", "Layered acid complex application", "Neutralization and barrier infusion"],
    whatToExpect: ["Mild warm sensation during active minutes", "Smooth, polished skin that begins gentle shedding day 3"],
    preparation: ["Discontinue topical acids 3 days prior"],
    aftercare: ["Strict gentle hydration and mineral SPF protection"],
    faqs: [
      {
        question: "Will my skin visibly peel off in large sheets?",
        answer: "No. Modern aesthetic peel formulations promote microscopic cellular desquamation, presenting as light dryness rather than unsightly flaking.",
      },
    ],
    featured: false,
  },
  {
    id: "skin-tightening",
    slug: "skin-tightening",
    title: "Non-Surgical Skin Tightening",
    category: "Advanced Treatments",
    tagline: "Stimulating deep dermal neocollagenesis to firm and contour lax facial structures.",
    shortDescription: "Advanced radiofrequency and ultrasound energy modalities engineered to tighten structural tissue, define jawline contours, and lift soft tissues non-invasively.",
    heroImage: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1400&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop",
    ],
    duration: "60–90 mins",
    downtime: "Minimal (mild warmth for a few hours)",
    sessionsRecommended: "1–3 sessions with annual maintenance",
    targetConcerns: ["Mild to moderate tissue laxity", "Submental fullness", "Softened jawline definition", "Crepey neck skin"],
    introduction: "Preserving youthful architectural elasticity requires stimulating collagen at the foundational SMAS and deep dermal layers. BIBI JAN AESTHETIC utilizes calibrated thermal energy to encourage natural tissue remodeling.",
    whoItIsFor: ["Patients seeking visible firming and contour refinement without surgical intervention or extensive downtime."],
    treatmentApproach: ["Precise anatomical mapping", "Temperature-controlled energy delivery", "Collagen induction stimulation"],
    whatToExpect: ["Comfortable deep warming sensation", "Instant subtle contraction with peak collagen synthesis at 90 days"],
    preparation: ["Maintain optimal internal hydration prior to your session"],
    aftercare: ["Resume normal activities immediately; avoid ice packs on treated areas"],
    faqs: [
      {
        question: "When are full results noticeable?",
        answer: "While immediate skin contraction provides an initial lift, true neocollagenesis unfolds naturally over 2 to 3 months.",
      },
    ],
    featured: true,
  },
  {
    id: "laser-skin-resurfacing",
    slug: "laser-skin-resurfacing",
    title: "Advanced Laser Treatments",
    category: "Advanced Treatments",
    tagline: "Coherent light precision targeting vascular lesions, deep texture, and photodamage.",
    shortDescription: "State-of-the-art dermatological lasers targeting selective chromophores to clear broken capillaries, erase sun spots, and smooth stubborn acne scars.",
    heroImage: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1400&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop",
    ],
    duration: "45–60 mins",
    downtime: "1–3 days depending on setting",
    sessionsRecommended: "2–4 sessions",
    targetConcerns: ["Atrophic acne scars", "Facial telangiectasias (spider veins)", "Deep photodamage", "Uneven skin texture"],
    introduction: "Our clinical lasers deliver precise wavelengths that bypass surrounding healthy tissue to selectively treat targeted skin concerns with remarkable accuracy and safety.",
    whoItIsFor: ["Individuals with concentrated vascular redness, persistent pigmentation, or uneven scar tissue."],
    treatmentApproach: ["Topical comfort numbing if required", "Calibrated pulse passes with integrated dynamic skin cooling", "Thermal calming post-treatment"],
    whatToExpect: ["Snapping sensation cushioned by cooling airflow", "Post-treatment erythema resembling a mild sunburn"],
    preparation: ["No direct sun exposure or tanning 4 weeks prior"],
    aftercare: ["Strict barrier balms and SPF 50+"],
    faqs: [
      {
        question: "Is the procedure painful?",
        answer: "Most patients report only mild, brief prickling sensations, as our devices utilize state-of-the-art contact cooling to protect the skin surface.",
      },
    ],
    featured: false,
  },
  {
    id: "injectable-treatments",
    slug: "injectable-treatments",
    title: "Aesthetic Injectables & Skin Boosters",
    category: "Advanced Treatments",
    tagline: "Micro-droplet bioremodeling and nuanced aesthetic medicine for natural facial harmony.",
    shortDescription: "Medical-grade hyaluronic acid skin boosters and delicate neuromodulation tailored to enhance facial balance while maintaining natural expression.",
    heroImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1400&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
    ],
    duration: "45 mins",
    downtime: "24–48 hours mild swelling/tenderness",
    sessionsRecommended: "Protocol customized per assessment",
    targetConcerns: ["Loss of volume", "Dynamic expression lines", "Deep dermal dehydration", "Asymmetry"],
    introduction: "In aesthetic medicine, restraint is elegance. We believe injectables should never overpower your personal features, but rather subtly restore volume, deeply hydrate, and soften tension lines.",
    whoItIsFor: ["Patients seeking subtle facial rejuvenation with an emphasis on undetectable, natural results."],
    treatmentApproach: ["Facial symmetry assessment", "Anatomical safety mapping", "Micro-precision delivery"],
    whatToExpect: ["Minimal discomfort with topical numbing", "Refined, refreshed contours without stiffness"],
    preparation: ["Avoid blood-thinning supplements (e.g. fish oil, aspirin) 3 days prior with physician approval"],
    aftercare: ["Remain upright for 4 hours; avoid strenuous exercise for 24 hours"],
    faqs: [
      {
        question: "Will my face look frozen or overfilled?",
        answer: "Never. Our philosophy is dedicated to undetectable refinement. We use conservative dosages to soften lines while preserving all natural emotive expressions.",
      },
    ],
    featured: false,
  },
  {
    id: "hair-scalp-rejuvenation",
    slug: "hair-scalp-rejuvenation",
    title: "Hair & Scalp Density Therapy",
    category: "Dermatology",
    tagline: "Revitalizing the follicular microenvironment for denser, healthier hair growth.",
    shortDescription: "Clinical trichology protocols and concentrated growth-factor infusions designed to nourish dormant hair follicles and stimulate cellular density.",
    heroImage: "https://images.unsplash.com/photo-1522337094346-297f6c382216?q=80&w=1400&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1522337094346-297f6c382216?q=80&w=800&auto=format&fit=crop",
    ],
    duration: "60 mins",
    downtime: "Zero downtime (wash hair after 12 hours)",
    sessionsRecommended: "4–6 sessions every 3 weeks",
    targetConcerns: ["Early hair thinning", "Post-stress shedding", "Sluggish scalp microcirculation", "Loss of hair vitality"],
    introduction: "Hair wellness starts at the follicular base. By delivering bio-nutrients, peptides, and cellular growth factors directly to the scalp, we support stronger anchorage and sustained density.",
    whoItIsFor: ["Men and women experiencing generalized thinning or seeking proactive follicular maintenance."],
    treatmentApproach: ["Scalp trichoscopic imaging", "Micro-channel bio-infusion", "Low-level light therapy activation"],
    whatToExpect: ["Mild tingling scalp sensation", "Zero systemic side effects"],
    preparation: ["Wash hair the morning of your treatment"],
    aftercare: ["Avoid washing hair or using styling products for 12 hours post-treatment"],
    faqs: [
      {
        question: "How long before shedding decreases?",
        answer: "Most patients note reduced shedding after the second session, with new fine follicular growth visible after 3 to 4 months.",
      },
    ],
    featured: false,
  },
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: "case-1",
    title: "Inflammatory Acne & Barrier Repair",
    treatmentName: "Acne Assessment & Barrier Protocol",
    timeline: "12 Weeks (4 Sessions)",
    beforeImage: "https://images.unsplash.com/photo-1512290900672-1f55b9a7c3df?q=80&w=1000&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop",
    notes: "Significant reduction in erythematous papules and restored epidermal lipid barrier with improved skin texture.",
  },
  {
    id: "case-2",
    title: "Hormonal Melasma & Tone Clarification",
    treatmentName: "Pigmentation & Melasma Management",
    timeline: "16 Weeks (5 Sessions)",
    beforeImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop",
    notes: "Visible dissipation of dermal-epidermal pigment patches and balanced overall skin luminosity.",
  },
  {
    id: "case-3",
    title: "Facial Contouring & Skin Firming",
    treatmentName: "Non-Surgical Skin Tightening",
    timeline: "90 Days Post-Treatment",
    beforeImage: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1000&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=1000&auto=format&fit=crop",
    notes: "Improved definition along mandibular border and lifted periorbital tissue architecture.",
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    patientName: "Sophia M.",
    treatmentType: "Pigmentation & Melasma Protocol",
    quote: "BIBI JAN Aesthetic completely reshaped my perspective on skincare. Rather than recommending harsh aggressive peels, the clinical team listened carefully and designed a gentle, progressive plan that restored my skin's natural luminescence without downtime.",
    verifiedReview: true,
    datePlaceholder: "Verified Patient — 3 Months Ago",
  },
  {
    id: "t2",
    patientName: "Elena R.",
    treatmentType: "Signature Facial Rejuvenation",
    quote: "The clinic atmosphere is unmatched — serene, refined, and deeply professional. The doctor explained every step with remarkable scientific clarity. It feels less like an appointment and more like an elite bespoke wellness experience.",
    verifiedReview: true,
    datePlaceholder: "Verified Patient — 1 Month Ago",
  },
  {
    id: "t3",
    patientName: "Marcus K.",
    treatmentType: "Acne Assessment & Barrier Care",
    quote: "After struggling with persistent adult breakouts for over four years, having a medical team focus on barrier restoration rather than drying formulas made all the difference. My skin feels resilient and calm for the first time in memory.",
    verifiedReview: true,
    datePlaceholder: "Verified Patient — 2 Months Ago",
  },
  {
    id: "t4",
    patientName: "Camilla D.",
    treatmentType: "Non-Surgical Tightening",
    quote: "The emphasis on natural-looking enhancement is what truly sets BIBI JAN apart. The results were so elegant that friends commented on how radiant and rested I looked, without ever suspecting I had undergone a clinical procedure.",
    verifiedReview: true,
    datePlaceholder: "Verified Patient — 4 Months Ago",
  },
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "How do I book an appointment?",
    answer: "You can book directly through our online appointment request form on this website, or connect with our concierge team via WhatsApp or telephone. We will promptly coordinate a time that best suits your schedule.",
    category: "General",
  },
  {
    id: "faq-2",
    question: "Do I need a consultation first?",
    answer: "Yes, we prioritize diagnostic precision. Every new patient receives an in-depth clinical consultation prior to any treatment to assess barrier health, discuss aesthetic goals, and curate an individualized plan.",
    category: "Consultation",
  },
  {
    id: "faq-3",
    question: "What happens during the first consultation?",
    answer: "Your specialist will conduct a thorough medical skin analysis, evaluate underlying structural and pigment layers, discuss your current regimen and medical history, and outline tailored recommendations without any obligation.",
    category: "Consultation",
  },
  {
    id: "faq-4",
    question: "How should I prepare for my appointment?",
    answer: "We recommend arriving with a clean face free of heavy makeup. Refrain from using aggressive chemical exfoliants, topical retinoids, or tanning solutions for at least 48 to 72 hours before your appointment.",
    category: "Treatments",
  },
  {
    id: "faq-5",
    question: "How long does a consultation take?",
    answer: "Initial consultations typically range between 30 and 45 minutes, ensuring ample unhurried time to review your skin history, answer questions, and design your bespoke pathway.",
    category: "Consultation",
  },
  {
    id: "faq-6",
    question: "Are treatments suitable for all skin types and tones?",
    answer: "Yes. Our protocols and energy parameters are specifically customized across all Fitzpatrick skin classifications, ensuring both clinical safety and peak efficacy for melanin-rich and sensitive skin alike.",
    category: "Treatments",
  },
  {
    id: "faq-7",
    question: "What happens after treatment?",
    answer: "You will receive detailed written aftercare guidance, medical barrier recommendations, and follow-up support from our clinical team to monitor your skin's healing and progress.",
    category: "Aftercare",
  },
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "g1",
    title: "Private Consultation Suite",
    category: "Clinic",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop",
    aspect: "landscape",
    description: "Serene, confidential consultation space designed for quiet dialogue and diagnostic assessment.",
  },
  {
    id: "g2",
    title: "Clinical Treatment Suite",
    category: "Treatment Environment",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop",
    aspect: "portrait",
    description: "State-of-the-art medical aesthetic equipment maintained in a pristine, calming atmosphere.",
  },
  {
    id: "g3",
    title: "Bespoke Skincare Formulations",
    category: "Skincare",
    image: "https://images.unsplash.com/photo-1608248597359-58b6c5df5316?q=80&w=1000&auto=format&fit=crop",
    aspect: "square",
    description: "Medical-grade barrier restorative actives curated for post-procedure recovery.",
  },
  {
    id: "g4",
    title: "Diagnostic Light Analysis",
    category: "Consultation",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop",
    aspect: "landscape",
    description: "High-resolution polarized imaging revealing subcutaneous melanin and vascular health.",
  },
  {
    id: "g5",
    title: "The Reception Sanctuary",
    category: "Clinic",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    aspect: "portrait",
    description: "A welcoming, architectural reception area balancing minimalist clinical lines with warm natural tones.",
  },
  {
    id: "g6",
    title: "Refined Post-Care Rituals",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop",
    aspect: "landscape",
    description: "Gentle cryo-thermal soothing protocols to seal moisture and enhance cellular recovery.",
  },
];
