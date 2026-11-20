import { CheckCircle2, ShieldCheck, Thermometer, Wind, Home } from 'lucide-react';
import { LANDING_CONFIG } from './landingData';

export function LandingAbout() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-slate-200 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Text Column */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-sky-600 sm:text-sm">
              Local Craftsmanship & Principles
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-navy-950 sm:text-4xl">
              Straightforward Heating & Air Conditioning in Lawrenceville, GA
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                Operating in the heart of Gwinnett County, our service model is centered entirely around thorough root-cause diagnostic testing, clear explanations, and reliable mechanical repairs.
              </p>
              <p>
                Lawrenceville homes face unique heating and cooling demands. Long, humid summers frequently push relative humidity above 70%, creating heavy condensate runoff and elevating compressor head pressures. In addition, local residential housing spans mid-century ranch homes with older attic ductwork, two-story 1990s and 2000s subdivisions with split systems, and modern townhomes with tight mechanical closet clearances.
              </p>
              <p>
                We believe homeowners deserve honest assessments. If replacing a heat-stressed dual-run capacitor, clearing an algae-clogged drain trap, or cleaning a flame sensor safely restores your comfort, that is exactly what we perform. We do not employ commissioned salespeople or push premature full-system replacements.
              </p>
            </div>

            {/* Verifiable Standards Checkmarks */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-2.5 rounded-xl border border-slate-200/80 bg-slate-50 p-3.5 text-xs font-semibold text-slate-700">
                <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-600" />
                <span>EPA Section 608 Certified Refrigerant Handling</span>
              </div>
              <div className="flex items-start gap-2.5 rounded-xl border border-slate-200/80 bg-slate-50 p-3.5 text-xs font-semibold text-slate-700">
                <Home className="h-4 w-4 shrink-0 text-sky-600" />
                <span>Georgia Mechanical & Fuel Gas Code Standards</span>
              </div>
              <div className="flex items-start gap-2.5 rounded-xl border border-slate-200/80 bg-slate-50 p-3.5 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                <span>Upfront, Itemized Diagnostic Pricing</span>
              </div>
              <div className="flex items-start gap-2.5 rounded-xl border border-slate-200/80 bg-slate-50 p-3.5 text-xs font-semibold text-slate-700">
                <Wind className="h-4 w-4 shrink-0 text-sky-600" />
                <span>Manual J Heat Load Engineering</span>
              </div>
            </div>
          </div>

          {/* Right Image Feature */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
              <img
                src={LANDING_CONFIG.coolingImage}
                alt="HVAC outdoor cooling unit mounted in residential yard"
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            {/* Overlay Badge */}
            <div className="absolute -bottom-6 -left-4 sm:left-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                  <Thermometer className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-black text-navy-950">
                    Lawrenceville Central Hub
                  </div>
                  <div className="text-xs text-slate-500">
                    ZIP 30046 • Gwinnett County Dispatch
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
