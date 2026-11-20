import { Phone, ArrowRight, ShieldCheck, CheckCircle2, MapPin, Clock } from 'lucide-react';
import { LANDING_CONFIG } from './landingData';

export function LandingHero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      {/* Background Media with Dark Gradient Overlay */}
      <img
        src={LANDING_CONFIG.heroImage}
        alt="Modern residential HVAC condensing unit installed outdoors"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/40"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        {/* Location Badge */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-sky-950/60 px-3.5 py-1 text-xs font-bold text-sky-200 backdrop-blur-sm">
            <MapPin className="h-3.5 w-3.5 text-sky-400" aria-hidden="true" />
            {LANDING_CONFIG.baseLocationDisplay} Central Hub
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-950/60 px-3.5 py-1 text-xs font-bold text-emerald-200 backdrop-blur-sm">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
            EPA Section 608 Certified
          </span>
        </div>

        {/* Niche + Location H1 */}
        <h1 className="max-w-3xl text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          {LANDING_CONFIG.headlineIdentity}
        </h1>

        {/* Value Proposition Description */}
        <div className="max-w-2xl space-y-3 text-base text-slate-200 sm:text-lg leading-relaxed">
          <p>
            Dependable heating and air conditioning diagnostics, repairs, and system replacements for homeowners in Lawrenceville, Georgia, and surrounding Gwinnett County communities.
          </p>
          <p className="text-sm sm:text-base text-slate-300">
            From emergency cooling restoration and capacitor replacements to furnace troubleshooting and energy-efficient heat pump installations, all work is performed with upfront diagnostic pricing and zero high-pressure sales commissions.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center">
          <a
            href={`tel:${LANDING_CONFIG.phoneTel}`}
            className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-sky-600 px-7 py-4 text-base font-bold text-white shadow-lg shadow-sky-600/30 transition hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            <span>Call {LANDING_CONFIG.phoneDisplay}</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur-xs transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            <span>Request Diagnostic Visit</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        {/* Trust Strip */}
        <div className="mt-6 pt-8 border-t border-white/10 grid grid-cols-2 gap-4 sm:grid-cols-4 text-xs font-semibold text-slate-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0" />
            <span>Upfront Itemized Pricing</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0" />
            <span>Root-Cause Diagnostics</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0" />
            <span>Direct Phone Access</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-sky-400 shrink-0" />
            <span>Mon–Sat Dispatch Schedule</span>
          </div>
        </div>
      </div>
    </section>
  );
}
