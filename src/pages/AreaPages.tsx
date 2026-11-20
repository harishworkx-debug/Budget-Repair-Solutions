import {
  AlertTriangle,
  ArrowRight,
  Calendar,
  Car,
  CheckCircle2,
  Compass,
  MapPin,
  ShieldCheck,
  Star,
  Wrench,
} from 'lucide-react';
import { BUSINESS } from '@/config/business';
import { PageHeader } from '@/components/PageHeader';
import { PhoneButton } from '@/components/PhoneButton';
import { FaqList } from '@/components/FaqList';
import { CallBand } from '@/components/CallBand';
import { Link } from '@/lib/router';
import { useSeo } from '@/lib/seo';
import { SERVICE_AREAS, type ServiceArea } from '@/data/areas';
import { SERVICES, serviceUrl } from '@/data/services';
import { GOOGLE_REVIEWS_SUMMARY } from '@/data/reviews';

export function AreaDetailPage({ area }: { area: ServiceArea }) {
  const crumbs = [
    { label: 'Home', to: '/' },
    { label: 'Service Areas', to: '/service-areas' },
    { label: `AC Repair in ${area.city}` },
  ];

  useSeo({
    title: area.seoTitle || `AC Repair in ${area.city}, ${BUSINESS.region} | ${BUSINESS.name}`,
    description:
      area.seoDescription ||
      `Expert AC repair and HVAC services in ${area.city}, ${BUSINESS.regionName}. Prompt diagnosis, emergency repairs, and maintenance from ${BUSINESS.name}. Call ${BUSINESS.phoneDisplay}.`,
    path: `/${area.slug}`,
    breadcrumbs: crumbs,
    faqs: area.faqs,
  });

  return (
    <>
      <PageHeader
        eyebrow={`AC Repair • ${area.city}, ${BUSINESS.region}`}
        title={area.h1 || `Air Conditioning Repair in ${area.city}, ${BUSINESS.region}`}
        description={
          area.subheading ||
          `When your air conditioner struggles with heat or stops cooling in ${area.city}, Budget Repair Solutions delivers honest diagnostics and reliable repairs to restore your comfort.`
        }
        crumbs={crumbs}
        actions={
          <PhoneButton
            label={`Call for AC Repair in ${area.city}`}
            variant="primary"
            className="px-8 py-4 text-base"
          />
        }
      />

      {/* Suggested Opening Lead Section */}
      <section className="border-b border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50/70 via-white to-slate-50 p-6 shadow-sm sm:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3.5 py-1 text-xs font-bold text-sky-800">
                  <MapPin className="h-3.5 w-3.5 text-sky-600" />
                  Local Cooling Support in {area.city}, GA
                </div>
                <p className="mt-4 text-lg font-medium leading-relaxed text-navy-900 sm:text-xl">
                  {area.openingText}
                </p>
                <p className="mt-3 text-sm text-slate-600">
                  Call our technician team directly at{' '}
                  <a
                    href={`tel:${BUSINESS.phoneTel}`}
                    className="font-bold text-navy-900 underline underline-offset-2 hover:text-sky-600"
                  >
                    {BUSINESS.phoneDisplay}
                  </a>{' '}
                  to discuss your air conditioning symptoms and schedule a diagnostic visit.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <PhoneButton
                  label={`Call ${BUSINESS.phoneDisplay}`}
                  variant="primary"
                  className="px-6 py-3.5 text-sm"
                />
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-navy-800 shadow-xs transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Request Service Online
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Atlanta Coverage & Dispatch Notice */}
      {area.citySlug === 'atlanta-ga' && (
        <section className="border-b border-sky-100 bg-sky-50/60 py-10">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-2xl border border-sky-200 bg-white p-6 shadow-xs sm:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-800">
                    <MapPin className="h-3.5 w-3.5" />
                    Metro Atlanta Service Logistics
                  </span>
                  <h2 className="mt-2 text-2xl font-bold text-navy-900">
                    Authentic Service Coverage Across the I-85 / I-285 Corridor
                  </h2>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
                    {area.coverageAndAppointments.travelRoute}
                  </p>
                </div>
                <div className="shrink-0">
                  <PhoneButton label="Check Address Coverage" variant="primary" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section 1: AC Problems Commonly Experienced by Homeowners */}
      <section className="border-b border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
              Diagnostic & Troubleshooting
            </p>
            <h2 className="mt-2 text-3xl font-bold text-navy-900 sm:text-4xl">
              AC Problems Commonly Experienced by {area.city} Homeowners
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Georgia’s combination of summer temperatures exceeding 90°F and high relative humidity places tremendous mechanical stress on cooling systems. Here are the most frequent issues our technicians diagnose across {area.city}:
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="flex items-center gap-3 text-xl font-bold text-navy-900">
                <AlertTriangle className="h-5 w-5 text-amber-500" aria-hidden="true" />
                Frequent AC Breakdown Symptoms We Fix in {area.city}
              </h3>
              <ul className="mt-6 grid gap-4 text-sm text-slate-700">
                {(area.localProblems || []).map((problem) => (
                  <li key={problem} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-500" aria-hidden="true" />
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div>
                <h3 className="flex items-center gap-3 text-xl font-bold text-navy-900">
                  <Compass className="h-5 w-5 text-sky-600" aria-hidden="true" />
                  Housing Architecture & Climate Factors in {area.city}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {area.housingAndClimate}
                </p>
              </div>

              <div className="border-t border-slate-100 pt-6">
                <h4 className="text-base font-bold text-navy-900">
                  Common Needs We Frequently Hear About in {area.city}:
                </h4>
                <ul className="mt-4 grid gap-3 text-sm text-slate-600">
                  {(area.customerNeeds || []).map((need) => (
                    <li key={need} className="flex gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" aria-hidden="true" />
                      <span>{need}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Section 2: Available Repair & Maintenance Services */}
      <section className="border-b border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
              Targeted Cooling Solutions
            </p>
            <h2 className="mt-2 text-3xl font-bold text-navy-900 sm:text-4xl">
              Available AC Repair & Maintenance Services in {area.city}
            </h2>
            <p className="mt-3 text-base text-slate-600">
              We provide practical cooling services tailored to your system's design and age—focusing on restoring cold air without pushing premature replacements.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(area.availableServices || []).map((srv, idx) => (
              <div
                key={srv.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-sky-300 hover:bg-white hover:shadow-md"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sm font-bold text-sky-700">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-bold text-navy-900">{srv.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {srv.description}
                </p>
              </div>
            ))}
          </div>

          {/* Contextual Service Cross-Linking */}
          <div className="mt-12 rounded-2xl border border-sky-100 bg-sky-50/70 p-6 sm:p-8 text-sm text-slate-700">
            <h4 className="font-bold text-navy-900 text-base mb-2">
              Need Additional Heating or Cooling Assistance in {area.city}?
            </h4>
            <p className="leading-relaxed">
              If you need additional heating and cooling assistance, explore our{' '}
              <Link
                to="/hvac-repair-lawrenceville-ga"
                className="font-bold text-sky-800 underline underline-offset-2 hover:text-navy-900"
              >
                HVAC Repair Services in Lawrenceville
              </Link>
              . You can also learn about our{' '}
              <Link
                to="/air-conditioning-installation-lawrenceville-ga"
                className="font-bold text-sky-800 underline underline-offset-2 hover:text-navy-900"
              >
                Air Conditioning Installation Services
              </Link>
              , or browse our complete{' '}
              <Link
                to="/hvac-services"
                className="font-bold text-sky-800 underline underline-offset-2 hover:text-navy-900"
              >
                residential HVAC services lineup
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Actual Coverage & Appointment Information */}
      <section className="border-b border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-200 px-3 py-1 text-xs font-bold text-slate-800">
              <ShieldCheck className="h-3.5 w-3.5 text-sky-600" />
              Transparent Dispatch Logistics
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
              Actual Coverage & Scheduling Information for {area.city}
            </h2>
            <p className="mt-3 text-base text-slate-600">
              We believe in complete transparency. We never fabricate fictitious satellite offices or claim technicians stationed on every street corner. Here is exactly how we dispatch to {area.city}:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                <Car className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-navy-900">Dispatch Base</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {area.coverageAndAppointments.dispatchBase}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                <Compass className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-navy-900">Travel Route & Corridors</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {area.coverageAndAppointments.travelRoute}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                <Calendar className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-navy-900">Appointment Process</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {area.coverageAndAppointments.bookingProcess}
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-xs">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
              <div>
                <span className="font-bold text-navy-900">Authentic Service Policy: </span>
                <span>{area.coverageAndAppointments.policyNote}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Living and Working in City */}
      <section className="border-b border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl">
            Living and Working in {area.city}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
            {area.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Nearby Communities Genuinely Served */}
      <section className="border-b border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
              Regional Coverage
            </p>
            <h2 className="mt-2 text-3xl font-bold text-navy-900 sm:text-4xl">
              Nearby Communities We Genuinely Serve Around {area.city}
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Our service coverage extends across Gwinnett County and bordering corridors. If you live near {area.city}, our technicians provide reliable diagnostic visits across these communities:
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(area.nearbyCommunities || []).map((comm) => (
              <div
                key={comm.name}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-xs"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 shrink-0 text-sky-600" />
                    <h3 className="font-bold text-navy-900">{comm.name}</h3>
                  </div>
                  <p className="mt-2 text-xs text-slate-500">{comm.notes}</p>
                </div>
                {comm.slug && (
                  <Link
                    to={`/${comm.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-navy-900"
                  >
                    View {comm.name.split(',')[0]} AC Repair
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Customer Experience & Verified Feedback */}
      <section className="border-b border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900">
                    <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                    Verified Google Reviews ({GOOGLE_REVIEWS_SUMMARY.rating} Stars • {GOOGLE_REVIEWS_SUMMARY.totalReviews} Reviews)
                  </span>
                </div>
                <h2 className="mt-3 text-2xl font-bold text-navy-900 sm:text-3xl">
                  Customer Experience & Trusted Service in {area.city}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  Homeowners across {area.city} and Gwinnett County turn to Budget Repair Solutions because we treat you like a neighbor, not a sales quota. Our technicians prioritize repairing what is broken—whether that is a capacitor, fan motor, contactor, or condensate clog—giving you an honest, transparent diagnostic report before any work begins.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold text-slate-700">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-1.5 shadow-2xs">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Zero high-pressure sales
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-1.5 shadow-2xs">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Upfront diagnostic pricing
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-1.5 shadow-2xs">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> EPA-certified technicians
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-6 text-center shadow-xs">
                <p className="text-sm font-semibold text-navy-900">Want to see what our customers say?</p>
                <p className="text-xs text-slate-500">
                  Read genuine feedback from verified local homeowners across our Georgia service area.
                </p>
                <Link
                  to="/reviews"
                  className="mt-2 inline-flex items-center justify-center rounded-lg bg-navy-900 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-sky-700"
                >
                  Read Authentic Reviews
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
                <a
                  href={BUSINESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-slate-500 hover:text-sky-600"
                >
                  View Google Maps Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: HVAC Services in Area */}
      <section className="border-b border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
                Complete Residential Solutions
              </p>
              <h2 className="mt-2 text-3xl font-bold text-navy-900">
                Heating & Air Conditioning Services in {area.city}
              </h2>
            </div>
            <Link
              to="/hvac-services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-sky-600"
            >
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

      {/* Section 8: City FAQs */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">Got Questions?</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-navy-900">
              {area.city} AC Repair FAQs
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Common questions answered by our local technicians regarding air conditioning troubleshooting and service in {area.city}.
            </p>
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
  const crumbs = [{ label: 'Home', to: '/' }, { label: 'Service Areas' }];

  useSeo({
    title: `HVAC Service Areas in Georgia | Budget Repair Solutions`,
    description: `Explore HVAC service areas in Georgia served by Budget Repair Solutions. Your local HVAC company near Lawrenceville providing dependable local AC services and heating care. Call ${BUSINESS.phoneDisplay}.`,
    path: '/service-areas',
    breadcrumbs: crumbs,
  });

  return (
    <>
      <PageHeader
        eyebrow="Service Areas"
        title="HVAC Service Areas in Georgia"
        description={`Budget Repair Solutions is an established HVAC company near Lawrenceville, delivering trusted local AC services and heating solutions throughout Gwinnett County and the Atlanta metro area.`}
        crumbs={crumbs}
        actions={<PhoneButton label="Call Now" variant="primary" className="px-8 py-4 text-base" />}
      />

      {/* Main Base Hub Card */}
      <section className="border-b border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-sky-200 bg-sky-50/70 p-8 sm:p-10 shadow-xs">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-800">
                  <MapPin className="h-3.5 w-3.5" />
                  Primary Central Facility
                </span>
                <h2 className="mt-2 text-2xl font-bold text-navy-900 sm:text-3xl">
                  AC Repair in Lawrenceville, GA (Central Location)
                </h2>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
                  Our primary shop and equipment warehouse are located in Lawrenceville. From this verified central hub, our technicians dispatch directly to single-family homes, townhomes, and local businesses across Gwinnett County.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <Link
                  to="/ac-repair-lawrenceville-ga"
                  className="inline-flex items-center justify-center rounded-xl bg-navy-900 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-sky-700"
                >
                  View Lawrenceville AC Repair <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <PhoneButton label={`Call ${BUSINESS.phoneDisplay}`} variant="secondary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured City Directory Section (As Requested by User) */}
      <section className="border-b border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
              Crawlable City Directory
            </p>
            <h2 className="mt-2 text-2xl font-bold text-navy-900 sm:text-3xl">
              AC Repair Services in Nearby Georgia Cities
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Direct access to our dedicated location pages with transparent dispatch logistics, local housing context, and authentic appointment information:
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              to="/ac-repair-snellville-ga"
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 font-bold text-navy-900 transition hover:border-sky-300 hover:shadow-xs"
            >
              <span>AC Repair in Snellville, GA</span>
              <ArrowRight className="h-4 w-4 text-slate-400" />
            </Link>

            <Link
              to="/ac-repair-lilburn-ga"
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 font-bold text-navy-900 transition hover:border-sky-300 hover:shadow-xs"
            >
              <span>AC Repair in Lilburn, GA</span>
              <ArrowRight className="h-4 w-4 text-slate-400" />
            </Link>

            <Link
              to="/ac-repair-duluth-ga"
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 font-bold text-navy-900 transition hover:border-sky-300 hover:shadow-xs"
            >
              <span>AC Repair in Duluth, GA</span>
              <ArrowRight className="h-4 w-4 text-slate-400" />
            </Link>

            <Link
              to="/ac-repair-suwanee-ga"
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 font-bold text-navy-900 transition hover:border-sky-300 hover:shadow-xs"
            >
              <span>AC Repair in Suwanee, GA</span>
              <ArrowRight className="h-4 w-4 text-slate-400" />
            </Link>

            <Link
              to="/ac-repair-loganville-ga"
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 font-bold text-navy-900 transition hover:border-sky-300 hover:shadow-xs"
            >
              <span>AC Repair in Loganville, GA</span>
              <ArrowRight className="h-4 w-4 text-slate-400" />
            </Link>

            <Link
              to="/ac-repair-grayson-ga"
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 font-bold text-navy-900 transition hover:border-sky-300 hover:shadow-xs"
            >
              <span>AC Repair in Grayson, GA</span>
              <ArrowRight className="h-4 w-4 text-slate-400" />
            </Link>

            <Link
              to="/ac-repair-dacula-ga"
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 font-bold text-navy-900 transition hover:border-sky-300 hover:shadow-xs"
            >
              <span>AC Repair in Dacula, GA</span>
              <ArrowRight className="h-4 w-4 text-slate-400" />
            </Link>

            <Link
              to="/ac-repair-norcross-ga"
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 font-bold text-navy-900 transition hover:border-sky-300 hover:shadow-xs"
            >
              <span>AC Repair in Norcross, GA</span>
              <ArrowRight className="h-4 w-4 text-slate-400" />
            </Link>

            <Link
              to="/ac-repair-atlanta-ga"
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 font-bold text-navy-900 transition hover:border-sky-300 hover:shadow-xs"
            >
              <span>AC Repair in Atlanta, GA</span>
              <ArrowRight className="h-4 w-4 text-slate-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* Detailed City Cards */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
              Local Dispatch & Community Overviews
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Learn how we solve specific cooling and heating challenges across each Georgia municipality:
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                to={`/${area.slug}`}
                className="group flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50/50 p-8 shadow-xs transition hover:-translate-y-1 hover:border-sky-300 hover:bg-white hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <MapPin className="h-6 w-6 text-sky-600" aria-hidden="true" />
                  {area.citySlug === BUSINESS.locationSlug && (
                    <span className="rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-bold text-sky-800">
                      Central Base
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-navy-900">
                  AC Repair in {area.city}, {BUSINESS.region}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">{area.intro[0]}</p>
                <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-navy-800 group-hover:text-sky-600">
                  Explore {area.city} service details
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>

          {/* Contextual Links to Services Hubs */}
          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <div>
              <p className="font-bold text-navy-900 text-base">Looking for specific heating or AC repairs?</p>
              <p className="text-sm text-slate-600">
                Explore our comprehensive service lineup or contact our team directly.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/hvac-services"
                className="inline-flex items-center gap-1.5 rounded-lg bg-navy-900 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-sky-700"
              >
                All HVAC Services <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                to="/air-conditioning-services"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-navy-900 transition hover:bg-slate-50"
              >
                Air Conditioning Hub
              </Link>
              <Link
                to="/heating-services"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-navy-900 transition hover:bg-slate-50"
              >
                Heating Hub
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CallBand />
    </>
  );
}
