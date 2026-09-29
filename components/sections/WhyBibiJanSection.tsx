import Image from "next/image";
import { Sparkles, HeartHandshake, Eye, Award } from "lucide-react";

export default function WhyBibiJanSection() {
  const values = [
    {
      icon: HeartHandshake,
      title: "Personalized Care",
      subtitle: "Rooted in Individual Listening",
      description:
        "Every treatment pathway begins with understanding your unique lifestyle, past experiences, skin sensitivities, and expectations. We never offer one-size-fits-all packages.",
    },
    {
      icon: Eye,
      title: "Professional Approach",
      subtitle: "Diagnostic Dermatological Assessment",
      description:
        "All procedures are guided by appropriate medical analysis of underlying dermal structures, melanin distribution, and barrier health before any intervention begins.",
    },
    {
      icon: Sparkles,
      title: "Modern Techniques",
      subtitle: "Contemporary Scientific Modalities",
      description:
        "We utilize modern equipment and progressive aesthetic formulations where clinically appropriate, designed for enhanced comfort, efficacy, and barrier preservation.",
    },
    {
      icon: Award,
      title: "Natural-Looking Results",
      subtitle: "Refined, Undetectable Enhancement",
      description:
        "Our aesthetic philosophy focuses on enhancing individual confidence and innate features, avoiding artificial or overfilled appearances without making unrealistic guarantees.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-600 block mb-3">
            The BIBI JAN Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-clinical-dark leading-tight">
            A Thoughtful Blend of Medical Assessment & Subtle Artistry
          </h2>
          <p className="mt-4 text-clinical-slate text-base leading-relaxed">
            In an industry often clouded by fleeting trends and aggressive interventions, BIBI JAN AESTHETIC champions disciplined medical care, unhurried consultations, and patient safety above all.
          </p>
        </div>

        {/* Storytelling Layout — Asymmetric split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Storytelling Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] border border-clinical-border">
              <Image
                src="https://images.unsplash.com/photo-1512290900672-1f55b9a7c3df?q=80&w=1200&auto=format&fit=crop"
                alt="BIBI JAN Aesthetic Clinical Environment"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-clinical-dark/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/60">
                <span className="text-[10px] uppercase tracking-widest text-brand-700 font-bold block">
                  Clinic Principle
                </span>
                <p className="font-serif text-sm text-clinical-dark italic mt-1">
                  &ldquo;True aesthetic refinement is measured not by what is noticed, but by the effortless radiance of healthy skin.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Editorial Value Streams */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-clinical-border/80">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="py-7 first:pt-0 last:pb-0 flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-clinical-ice border border-brand-200/60 flex items-center justify-center text-brand-600 shrink-0 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-serif text-lg sm:text-xl font-medium text-clinical-dark">
                        {val.title}
                      </h3>
                      <span className="text-xs uppercase tracking-wider text-brand-600 font-medium hidden sm:inline-block">
                        — {val.subtitle}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-clinical-slate leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
