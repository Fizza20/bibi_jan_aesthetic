import { CLINIC_CONFIG } from "@/data/clinic-data";
import { ShieldCheck, Sparkles, Cpu, HeartHandshake } from "lucide-react";

const ICON_MAP = {
  ShieldCheck: ShieldCheck,
  Sparkles: Sparkles,
  Cpu: Cpu,
  HeartHandshake: HeartHandshake,
};

export default function TrustSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="trust">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold tracking-widest uppercase mb-4">
            <span>Our Foundation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-clinical-dark leading-tight">
            Science-led skincare.{" "}
            <span className="italic font-serif text-brand-600">
              Thoughtful aesthetic care.
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-clinical-slate font-light leading-relaxed">
            At BIBI JAN AESTHETIC, we integrate medical dermatological precision with an editorial aesthetic eye. We believe optimal skin health is never about aggressive intervention, but about respectful diagnostic evaluation, customized barrier restoration, and treatments tailored to your unique anatomical harmony.
          </p>
        </div>

        {/* 4 Trust Pillars Grid with Asymmetric Editorial Nuance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CLINIC_CONFIG.trustPillars.map((pillar, idx) => {
            const Icon = ICON_MAP[pillar.icon as keyof typeof ICON_MAP] || ShieldCheck;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl bg-clinical-surface hover:bg-white border border-clinical-border hover:border-brand-300 transition-all duration-300 shadow-subtle hover:shadow-premium flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-clinical-dark mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-clinical-slate leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                
                <div className="pt-6 mt-6 border-t border-clinical-border/60 flex items-center justify-between text-xs text-brand-700 font-semibold uppercase tracking-wider">
                  <span>Pillar 0{idx + 1}</span>
                  <div className="w-6 h-[1px] bg-brand-300 group-hover:w-10 transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
