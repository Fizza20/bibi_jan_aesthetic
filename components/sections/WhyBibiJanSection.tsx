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
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-600 sm:text-xs">
            The BIBI JAN Standard
          </span>

          <h2 className="mt-3 font-serif text-3xl font-medium leading-[1.15] tracking-tight text-clinical-dark sm:text-4xl lg:text-[3.15rem]">
            A Thoughtful Blend of Medical Assessment & Subtle Artistry
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-clinical-slate sm:text-base">
            In an industry often clouded by fleeting trends and aggressive
            interventions, BIBI JAN AESTHETIC champions disciplined medical
            care, unhurried consultations, and patient safety above all.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Image */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-clinical-border bg-clinical-surface shadow-premium">
              <Image
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop"
                alt="BIBI JAN Aesthetic Clinical Environment"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-clinical-dark/65 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">
                <div className="rounded-xl border border-white/50 bg-white/90 p-4 backdrop-blur-md sm:p-5">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-700">
                    Clinic Principle
                  </span>

                  <p className="mt-1.5 font-serif text-sm italic leading-6 text-clinical-dark">
                    &ldquo;True aesthetic refinement is measured not by what
                    is noticed, but by the effortless radiance of healthy
                    skin.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="divide-y divide-clinical-border/80">
            {values.map((val, idx) => {
              const Icon = val.icon;

              return (
                <div
                  key={idx}
                  className="group flex items-start gap-5 py-6 first:pt-0 last:pb-0 sm:gap-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand-200/70 bg-clinical-ice text-brand-600 transition-all duration-300 group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="font-serif text-lg font-medium text-clinical-dark sm:text-xl">
                        {val.title}
                      </h3>

                      <span className="hidden text-[10px] font-medium uppercase tracking-[0.14em] text-brand-600 sm:inline">
                        {val.subtitle}
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-clinical-slate">
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