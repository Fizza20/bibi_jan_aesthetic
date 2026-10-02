import { CLINIC_CONFIG } from "@/data/clinic-data";
import {
  ShieldCheck,
  Sparkles,
  Cpu,
  HeartHandshake,
} from "lucide-react";

const ICON_MAP = {
  ShieldCheck: ShieldCheck,
  Sparkles: Sparkles,
  Cpu: Cpu,
  HeartHandshake: HeartHandshake,
};

export default function TrustSection() {
  return (
    <section
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
      id="trust"
    >
      <div className="site-container">
        {/* Section Introduction */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-700">
            <span>Our Foundation</span>
          </div>

          <h2 className="font-serif text-3xl font-normal leading-[1.15] tracking-tight text-clinical-dark sm:text-4xl lg:text-[3.25rem]">
            Science-led skincare.{" "}
            <span className="italic text-brand-600">
              Thoughtful aesthetic care.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-clinical-slate sm:text-base sm:leading-7">
            At BIBI JAN AESTHETIC, we integrate medical dermatological
            precision with an editorial aesthetic eye. We believe optimal
            skin health is never about aggressive intervention, but about
            respectful diagnostic evaluation, customized barrier restoration,
            and treatments tailored to your unique anatomical harmony.
          </p>
        </div>

        {/* Trust Pillars */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {CLINIC_CONFIG.trustPillars.map((pillar, idx) => {
            const Icon =
              ICON_MAP[pillar.icon as keyof typeof ICON_MAP] ||
              ShieldCheck;

            return (
              <div
                key={idx}
                className="group relative flex min-h-[290px] flex-col justify-between border border-clinical-border bg-clinical-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:bg-white hover:shadow-premium sm:p-8"
              >
                {/* Icon */}
                <div>
                  <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-xl border border-brand-100 bg-brand-50 text-brand-600 transition-all duration-300 group-hover:border-brand-200 group-hover:bg-brand-500 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="font-serif text-xl font-normal leading-tight text-clinical-dark">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-clinical-slate">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom Detail */}
                <div className="mt-8 flex items-center justify-between border-t border-clinical-border/70 pt-5">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-brand-700">
                    Pillar 0{idx + 1}
                  </span>

                  <div className="h-px w-6 bg-brand-300 transition-all duration-300 group-hover:w-10" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}