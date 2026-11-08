import { AlertTriangle, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import { BUSINESS, locationLabel } from '@/config/business';
import { PageHeader } from '@/components/PageHeader';
import { PhoneButton } from '@/components/PhoneButton';
import { FaqList } from '@/components/FaqList';
import { CallBand } from '@/components/CallBand';
import { Link } from '@/lib/router';
import { useSeo } from '@/lib/seo';
import { SERVICE_AREAS, type ServiceArea } from '@/data/areas';
import { SERVICES, serviceUrl } from '@/data/services';

export function AreaDetailPage({ area }: { area: ServiceArea }) {
  useSeo({
    title: `AC Repair in ${area.city}, ${BUSINESS.region} | ${BUSINESS.name}`,
    description: `Expert AC repair and HVAC services in ${area.city}, ${BUSINESS.regionName}. Prompt diagnosis, emergency repairs, and maintenance from ${BUSINESS.name}. Call ${BUSINESS.phoneDisplay}.`,
    path: `/${area.slug}`,
  });

  return (
    <>
      <PageHeader
        eyebrow="AC Repair & Service Area"
        title={`AC Repair in ${area.city}, ${BUSINESS.region}`}
        description={`When your air conditioner struggles with heat or stops cooling in ${area.city}, Budget Repair Solutions delivers honest diagnostics and reliable repairs to restore your comfort.`}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Service Areas', to: '/service-areas' },
          { label: `AC Repair in ${area.city}` },
        ]}
        actions={
          <PhoneButton
            label={`Call for AC Repair in ${area.city}`}
            variant="primary"
            className="px-8 py-4 text-base"
          />
        }
      />

      {/* AC Repair Problems & Included Services */}
      <section className="border-b border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
              AC Repair Specialists in {area.city}
            </p>
            <h2 className="mt-2 text-3xl font-bold text-navy-900 sm:text-4xl">
              Air Conditioning Repair & Troubleshooting in {area.city}
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Georgia summers put heavy pressure on cooling equipment. If your AC is short-cycling, freezing up, or blowing warm air in {area.city}, our technicians test electrical and mechanical parts before recommending a repair.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="flex items-center gap-3 text-xl font-bold text-navy-900">
                <AlertTriangle className="h-5 w-5 text-amber-500" aria-hidden="true" />
                Common AC Problems We Fix in {area.city}
              </h3>
              <ul className="mt-6 grid gap-3.5 text-sm text-slate-600">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" aria-hidden="true" />
                  <span>Warm air blowing from supply vents while the air conditioner runs</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" aria-hidden="true" />
                  <span>System runs continuously without reaching the thermostat temperature</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" aria-hidden="true" />
                  <span>Frozen evaporator coil or ice accumulating along copper refrigerant lines</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" aria-hidden="true" />
                  <span>Loud buzzing, clicking, or grinding sounds from the outdoor condenser</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" aria-hidden="true" />
                  <span>Clogged condensate drain lines causing water backups near the indoor unit</span>
                </li>
              </ul>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="flex items-center gap-3 text-xl font-bold text-navy-900">
                <CheckCircle2 className="h-5 w-5 text-sky-600" aria-hidden="true" />
                What's Included in Our {area.city} AC Service
              </h3>
              <ul className="mt-6 grid gap-3.5 text-sm text-slate-600">
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" aria-hidden="true" />
                  <span>Refrigerant pressure checks and leak detection</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" aria-hidden="true" />
                  <span>Capacitor, contactor, and fan motor electrical testing</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" aria-hidden="true" />
                  <span>Condenser and evaporator coil inspection and cleaning</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" aria-hidden="true" />
                  <span>Thermostat calibration and safety control switch testing</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" aria-hidden="true" />
                  <span>Honest repair vs. replacement evaluation with no hidden fees</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Living and working in the city */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-navy-900">Living and working in {area.city}</h2>
            {area.intro.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-navy-900">Local needs we often hear about in {area.city}</h2>
            <ul className="grid gap-4">
              {area.customerNeeds.map((need) => (
                <li key={need} className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm leading-relaxed text-slate-700">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" aria-hidden="true" />
                  {need}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* HVAC Services in Area */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">Complete HVAC Lineup</p>
              <h2 className="mt-2 text-3xl font-bold text-navy-900">HVAC services in {area.city}</h2>
            </div>
            <Link to="/hvac-services" className="inline-flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-sky-600">
              View all services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link
                  to={serviceUrl(service)}
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-6 font-bold text-navy-900 transition hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <service.icon className="h-5 w-5 text-sky-600" aria-hidden="true" />
                    <span>{service.name}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-1 group-hover:text-sky-600" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">Questions</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-navy-900">{area.city} FAQs</h2>
          </div>
          <div className="lg:col-span-2">
            <FaqList faqs={area.faqs} />
          </div>
        </div>
      </section>

      <CallBand
        headline={`Need AC repair in ${area.city}? Call Budget Repair Solutions.`}
        label={`Call for AC Repair in ${area.city}`}
      />
    </>
  );
}

export function ServiceAreasPage() {
  useSeo({
    title: `AC Repair & HVAC Service Areas in Georgia | ${BUSINESS.name}`,
    description: `See the Georgia areas served by ${BUSINESS.name} for AC repair and heating service. Call to confirm coverage for your property.`,
    path: '/service-areas',
  });

  return (
    <>
      <PageHeader
        eyebrow="Service Areas"
        title="Where Budget Repair Solutions works"
        description={`Our main location is ${locationLabel}. We provide dependable AC repair and heating solutions across Gwinnett County and the Atlanta metro area.`}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Service Areas' }]}
        actions={<PhoneButton label="Call Now" variant="primary" className="px-8 py-4 text-base" />}
      />
      <section className="bg-slate-50 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICE_AREAS.map((area) => (
            <Link
              key={area.slug}
              to={`/${area.slug}`}
              className="group flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <MapPin className="h-6 w-6 text-sky-600" aria-hidden="true" />
                {area.citySlug === BUSINESS.locationSlug && (
                  <span className="rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-bold text-sky-800">
                    Main Location
                  </span>
                )}
              </div>
              <h2 className="text-2xl font-bold text-navy-900">
                AC Repair in {area.city}, {BUSINESS.region}
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">{area.intro[0]}</p>
              <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-navy-800 group-hover:text-sky-600">
                View {area.city} AC repair & HVAC services
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <CallBand />
    </>
  );
}
