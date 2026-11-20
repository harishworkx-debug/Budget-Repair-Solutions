import { WHY_CHOOSE_US_PILLARS } from './landingData';

export function LandingWhyUs() {
  return (
    <section id="why-us" className="scroll-mt-20 border-t border-slate-200 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-600 sm:text-sm">
            Core Standards & Principles
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-navy-950 sm:text-4xl">
            Why Homeowners Call Us for HVAC in Lawrenceville
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            Practical diagnostics, verified credentials, and straightforward communication without high-pressure sales quotas.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_US_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/60 p-7 shadow-xs transition hover:border-sky-300 hover:bg-white hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                  Standard {idx + 1}
                </div>
                <h3 className="mt-1.5 text-lg font-bold text-navy-950">{pillar.title}</h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
