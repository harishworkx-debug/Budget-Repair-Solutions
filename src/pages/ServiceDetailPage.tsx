import { CheckCircle2, AlertTriangle, ArrowRight, HelpCircle, ShieldAlert, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS, locationLabel } from '@/config/business';
import { PageHeader } from '@/components/PageHeader';
import { PhoneButton } from '@/components/PhoneButton';
import { FaqList } from '@/components/FaqList';
import { CallBand } from '@/components/CallBand';
import { Link } from '@/lib/router';
import { useSeo } from '@/lib/seo';
import { SERVICE_AREAS } from '@/data/areas';
import { serviceUrl, servicesWithTag, type Service } from '@/data/services';

const RELATED_LIMIT = 4;

export function ServiceDetailPage({ service }: { service: Service }) {
  const seoTitle = service.seoTitle || `${service.name} in ${locationLabel} | ${BUSINESS.name}`;
  const seoDescription =
    service.seoDescription || `${service.summary} Call ${BUSINESS.name} in ${locationLabel} to discuss your needs.`;

  const relatedPool = service.tags.flatMap((tag) => servicesWithTag(tag));
  const related = [...new Set(relatedPool)]
    .filter((item) => item.slug !== service.slug)
    .slice(0, RELATED_LIMIT);
  const Icon = service.icon;

  const hubCrumb =
    service.tags.includes('cooling') && !service.tags.includes('heating')
      ? { label: 'Air Conditioning Services', to: '/air-conditioning-services' }
      : service.tags.includes('heating') && !service.tags.includes('cooling')
      ? { label: 'Heating Services', to: '/heating-services' }
      : { label: 'HVAC Services', to: '/hvac-services' };

  const crumbs = [
    { label: 'Home', to: '/' },
    hubCrumb,
    { label: service.name },
  ];

  useSeo({
    title: seoTitle,
    description: seoDescription,
    path: serviceUrl(service),
    breadcrumbs: crumbs,
    serviceSchema: {
      name: service.h1 || `${service.name} in ${locationLabel}`,
      description: service.summary,
      serviceType: service.name,
    },
    faqs: service.faqs,
  });

  return (
    <>
      <PageHeader
        eyebrow={`HVAC Service • ${locationLabel}`}
        title={service.h1 || `${service.name} in ${locationLabel}`}
        description={service.summary}
        crumbs={crumbs}
        actions={
          <>
            <PhoneButton label={`Call for ${service.name}`} variant="primary" className="px-8 py-4 text-base" />
            <Link
              to={hubCrumb.to}
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-4 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
            >
              {hubCrumb.label}
            </Link>
          </>
        }
        image={{ src: service.image, alt: service.imageAlt }}
      />

      {/* Main Intro & Call Box */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-3">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-800">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="text-3xl font-bold text-navy-900">About {service.name}</h2>
            </div>
            <p className="text-lg leading-relaxed text-slate-600">{service.intro}</p>

            {/* Contextual Cross-Linking for AC Repair Lawrenceville */}
            {service.slug === 'ac-repair' && (
              <div className="rounded-2xl border border-sky-200 bg-sky-50/70 p-6 text-sm text-slate-700">
                <p className="font-bold text-navy-900 text-base mb-1">
                  Surrounding Georgia Service Locations & Upgrades:
                </p>
                <p className="leading-relaxed">
                  Homeowners in nearby communities can also explore our{' '}
                  <Link
                    to="/ac-repair-snellville-ga"
                    className="font-bold text-sky-800 underline underline-offset-2 hover:text-navy-900"
                  >
                    AC Repair Services in Snellville
                  </Link>
                  ,{' '}
                  <Link
                    to="/ac-repair-lilburn-ga"
                    className="font-bold text-sky-800 underline underline-offset-2 hover:text-navy-900"
                  >
                    AC Repair in Lilburn
                  </Link>
                  , and{' '}
                  <Link
                    to="/ac-repair-duluth-ga"
                    className="font-bold text-sky-800 underline underline-offset-2 hover:text-navy-900"
                  >
                    AC Repair in Duluth
                  </Link>
                  . If your system is over 12–15 years old and repairs are no longer cost-effective, learn about our{' '}
                  <Link
                    to="/air-conditioning-installation-lawrenceville-ga"
                    className="font-bold text-sky-800 underline underline-offset-2 hover:text-navy-900"
                  >
                    Air Conditioning Installation Services
                  </Link>
                  .
                </p>
              </div>
            )}

            {/* Contextual Cross-Linking for Other Services */}
            {service.slug !== 'ac-repair' && (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700">
                <p className="font-bold text-navy-900 mb-1">Related System Guidance:</p>
                <p className="leading-relaxed">
                  Need complementary cooling or heating support? Explore our{' '}
                  <Link
                    to="/ac-repair-lawrenceville-ga"
                    className="font-semibold text-sky-700 underline underline-offset-2 hover:text-navy-900"
                  >
                    AC Repair Lawrenceville
                  </Link>{' '}
                  services, schedule preventive care through{' '}
                  <Link
                    to="/hvac-maintenance-lawrenceville-ga"
                    className="font-semibold text-sky-700 underline underline-offset-2 hover:text-navy-900"
                  >
                    HVAC Maintenance
                  </Link>
                  , or browse all{' '}
                  <Link
                    to="/service-areas"
                    className="font-semibold text-sky-700 underline underline-offset-2 hover:text-navy-900"
                  >
                    Georgia Service Areas
                  </Link>
                  .
                </p>
              </div>
            )}
          </div>

          <aside className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-xs">
            <h2 className="text-lg font-bold text-navy-900">Direct Phone Scheduling</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Speak directly with our team to discuss your system symptoms, confirm availability, and schedule diagnostic service across Lawrenceville.
            </p>
            <PhoneButton label={`Call ${BUSINESS.phoneDisplay}`} className="w-full" />
            <p className="text-center text-xs text-slate-500">No automated call centers • Direct dispatch</p>
          </aside>
        </div>
      </section>

      {/* Symptoms & Work Included */}
      <section className="border-t border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="flex items-center gap-3 text-xl font-bold text-navy-900">
              <AlertTriangle className="h-5 w-5 text-amber-500" aria-hidden="true" />
              {service.symptomsTitle || 'Common Problems & Symptoms'}
            </h2>
            <ul className="mt-6 grid gap-4">
              {service.problems.map((problem) => (
                <li key={problem} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" aria-hidden="true" />
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="flex items-center gap-3 text-xl font-bold text-navy-900">
              <CheckCircle2 className="h-5 w-5 text-sky-600" aria-hidden="true" />
              {service.workIncludedTitle || 'Work Included'}
            </h2>
            <ul className="mt-6 grid gap-4">
              {service.workIncluded.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* Technical Deep Dive (SEER2, Ignition, Reversing Valves, C-Wire, etc.) */}
      {service.deepDive && (
        <section className="border-t border-slate-200 bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-800">
                <Sparkles className="h-3.5 w-3.5" />
                Technical Insight
              </span>
              <h2 className="mt-3 text-3xl font-bold text-navy-900">{service.deepDive.title}</h2>
              <p className="mt-3 text-base text-slate-600">{service.deepDive.overview}</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {service.deepDive.points.map((pt) => (
                <article key={pt.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-xs">
                  <h3 className="text-lg font-bold text-navy-900">{pt.label}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{pt.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Diagnostic & Repair Process */}
      {service.diagnosticProcess && (
        <section className="border-t border-slate-200 bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">Step-by-Step</p>
              <h2 className="mt-2 text-3xl font-bold text-navy-900">Our Troubleshooting & Service Process</h2>
              <p className="mt-3 text-base text-slate-600">
                Clear diagnostic steps before any work is performed, so you always know what is being tested and why.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {service.diagnosticProcess.map((step) => (
                <div key={step.step} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                  <span className="text-3xl font-black text-sky-500/30">{step.step}</span>
                  <h3 className="mt-3 text-lg font-bold text-navy-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* When to Repair vs. Replace Framework */}
      {service.repairVsReplace && (
        <section className="border-t border-slate-200 bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-800">
                <ShieldAlert className="h-3.5 w-3.5 text-navy-700" />
                Decision Guide
              </span>
              <h2 className="mt-3 text-3xl font-bold text-navy-900">When to Repair vs. When to Replace</h2>
              <p className="mt-3 text-base text-slate-600">
                We believe in honest, practical guidance. Here is how we evaluate whether a repair or replacement makes the most financial sense.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-600">
                  <tr>
                    <th className="px-6 py-4">Evaluation Factor</th>
                    <th className="px-6 py-4 text-sky-700">Recommended to Repair</th>
                    <th className="px-6 py-4 text-navy-900">Consider Replacement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {service.repairVsReplace.map((row) => (
                    <tr key={row.factor} className="hover:bg-slate-50/50">
                      <td className="px-6 py-4 font-bold text-navy-900">{row.factor}</td>
                      <td className="px-6 py-4 text-slate-600">{row.repair}</td>
                      <td className="px-6 py-4 text-slate-600">{row.replace}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Frequently Asked Questions */}
      <section className="border-t border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">Common Questions</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-navy-900">{service.name} FAQs</h2>
            <p className="mt-3 text-sm text-slate-600">
              Clear answers to the questions homeowners in Lawrenceville frequently ask our technicians.
            </p>
          </div>
          <div className="lg:col-span-2">
            <FaqList faqs={service.faqs} />
          </div>
        </div>
      </section>

      {/* Surrounding Areas Served */}
      <section className="border-t border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">Local Coverage</p>
            <h2 className="mt-2 text-2xl font-bold text-navy-900 sm:text-3xl">Areas Served Around Lawrenceville</h2>
            <p className="mt-2 text-sm text-slate-600">
              In addition to our primary base in Lawrenceville, GA, our team provides heating and cooling service across neighboring communities.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {SERVICE_AREAS.slice(1).map((area) => (
              <Link
                key={area.slug}
                to={`/${area.slug}`}
                className="group flex items-center justify-between gap-2 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs font-bold text-navy-900 transition hover:border-sky-300 hover:bg-white hover:shadow-xs"
              >
                <div className="flex items-center gap-2 truncate">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-sky-600" />
                  <span className="truncate">AC Repair in {area.city}, GA</span>
                </div>
                <ArrowRight className="h-3.5 w-3.5 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-sky-600" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="border-t border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Related HVAC Services in {locationLabel}</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  to={serviceUrl(item)}
                  className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
                >
                  <item.icon className="h-5 w-5 text-sky-600" aria-hidden="true" />
                  <span className="font-bold text-navy-900">{item.name}</span>
                  <span className="text-xs text-slate-500">in {locationLabel}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CallBand headline={`Need ${service.name}? Call Budget Repair Solutions.`} label={`Call for ${service.name}`} />
    </>
  );
}
