import { ArrowRight, CheckCircle2, AlertTriangle, Phone } from 'lucide-react';
import { LANDING_CONFIG, LANDING_SERVICES } from './landingData';

export function LandingServices() {
  return (
    <section id="services" className="scroll-mt-20 bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-600 sm:text-sm">
            Genuine HVAC Solutions
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-navy-950 sm:text-4xl">
            Complete Heating & Cooling Services in Lawrenceville
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            Practical mechanical and electrical solutions tailored to Georgia single-family homes, townhomes, and split systems.
          </p>
        </div>

        {/* Services Grid (6 Genuine Services) */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {LANDING_SERVICES.map((srv) => {
            const Icon = srv.icon;
            return (
              <article
                key={srv.id}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-xs transition hover:border-sky-300 hover:shadow-md"
              >
                {/* Header with Icon and Tag */}
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-700">
                    {srv.shortTag}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-navy-950">{srv.name}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{srv.summary}</p>

                {/* Common Diagnostic Signals */}
                <div className="mt-5 rounded-xl border border-amber-200/70 bg-amber-50/60 p-4 text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-amber-900">
                    <AlertTriangle className="h-3.5 w-3.5 text-amber-600" />
                    Common Symptoms:
                  </div>
                  <ul className="mt-2 space-y-1.5 text-amber-950/80">
                    {srv.commonIssues.map((issue) => (
                      <li key={issue} className="flex gap-1.5">
                        <span className="text-amber-500">•</span>
                        <span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Service Scope Highlights */}
                <div className="mt-5 space-y-2 border-t border-slate-100 pt-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    What We Inspect & Perform:
                  </p>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {srv.highlights.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky-600" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Action */}
                <div className="mt-auto pt-6">
                  <a
                    href="#contact"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-bold text-navy-900 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-800"
                  >
                    <span>Request {srv.name}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Urgent Service Call Banner */}
        <div className="mt-14 rounded-2xl border border-sky-200 bg-sky-50/80 p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h4 className="text-lg font-bold text-navy-950">
                Experiencing sudden heating or cooling loss?
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                Speak directly with a local technician for immediate diagnostic troubleshooting and dispatch advice.
              </p>
            </div>
            <a
              href={`tel:${LANDING_CONFIG.phoneTel}`}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-navy-900 px-6 py-3.5 text-xs font-bold text-white transition hover:bg-sky-600"
            >
              <Phone className="h-4 w-4" />
              <span>Call {LANDING_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
