import { ArrowRight, Flame, MapPin, Snowflake, Wrench } from 'lucide-react';
import { BUSINESS } from '@/config/business';
import { PageHeader, type Crumb } from '@/components/PageHeader';
import { PhoneButton } from '@/components/PhoneButton';
import { ServiceCard } from '@/components/ServiceCard';
import { CallBand } from '@/components/CallBand';
import { Link } from '@/lib/router';
import { useSeo } from '@/lib/seo';
import type { Service } from '@/data/services';

interface ServiceListPageProps {
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  intro: string;
  crumbs: Crumb[];
  services: Service[];
}

const HVAC_ALL_LINKS = [
  { name: 'AC Repair', path: '/ac-repair-lawrenceville-ga', desc: 'Emergency diagnostics, refrigerant leaks, capacitors & frozen coils' },
  { name: 'Air Conditioning Installation', path: '/air-conditioning-installation-lawrenceville-ga', desc: 'SEER2-compliant central AC replacements & Manual J sizing' },
  { name: 'HVAC Repair', path: '/hvac-repair-lawrenceville-ga', desc: 'Whole-system troubleshooting, electrical & airflow diagnostics' },
  { name: 'HVAC Installation', path: '/hvac-installation-lawrenceville-ga', desc: 'Complete matched heating and cooling system changeouts' },
  { name: 'Heating Repair', path: '/heating-repair-lawrenceville-ga', desc: 'Fast heat restoration for furnaces, heat pumps & controls' },
  { name: 'Furnace Repair', path: '/furnace-repair-lawrenceville-ga', desc: 'Gas & electric furnace diagnostics, flame sensors & ignitors' },
  { name: 'Furnace Installation', path: '/furnace-installation-lawrenceville-ga', desc: 'Energy-efficient gas furnace replacement & flue venting' },
  { name: 'Heat Pump Repair', path: '/heat-pump-repair-lawrenceville-ga', desc: 'Reversing valve, defrost board & dual-season cooling/heating fixes' },
  { name: 'Heat Pump Installation', path: '/heat-pump-installation-lawrenceville-ga', desc: 'High-efficiency heat pump and dual-fuel hybrid installations' },
  { name: 'HVAC Maintenance', path: '/hvac-maintenance-lawrenceville-ga', desc: '21-point seasonal tune-ups, coil washing & safety checks' },
  { name: 'Thermostat Installation', path: '/thermostat-installation-lawrenceville-ga', desc: 'Smart thermostat wiring, dedicated C-wires & staging calibration' },
];

const HEATING_SERVICE_LINKS = [
  { name: 'Heating Repair', path: '/heating-repair-lawrenceville-ga', desc: 'Emergency heating diagnostics & system restoration' },
  { name: 'Furnace Repair', path: '/furnace-repair-lawrenceville-ga', desc: 'Gas ignition, flame sensor & inducer motor troubleshooting' },
  { name: 'Furnace Installation', path: '/furnace-installation-lawrenceville-ga', desc: 'Standard & condensing high-efficiency furnace replacements' },
  { name: 'Heat Pump Repair', path: '/heat-pump-repair-lawrenceville-ga', desc: 'Defrost cycle testing & 4-way reversing valve diagnostics' },
  { name: 'Heat Pump Installation', path: '/heat-pump-installation-lawrenceville-ga', desc: 'Modern inverter heat pumps & dual-fuel hybrid heating systems' },
  { name: 'HVAC Maintenance', path: '/hvac-maintenance-lawrenceville-ga', desc: 'Pre-winter heating safety inspections & heat exchanger checks' },
];

export function ServiceListPage({
  path,
  title,
  description,
  eyebrow,
  heading,
  intro,
  crumbs,
  services,
}: ServiceListPageProps) {
  useSeo({ title, description, path, breadcrumbs: crumbs });

  return (
    <>
      <PageHeader
        eyebrow={eyebrow}
        title={heading}
        description={intro}
        crumbs={crumbs}
        actions={<PhoneButton label="Call Now" variant="primary" className="px-8 py-4 text-base" />}
      />

      {/* Featured Service Cards Grid */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-slate-500">
            Not sure which service you need? Call {BUSINESS.name} at{' '}
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="font-semibold text-navy-900 underline-offset-4 hover:underline"
            >
              {BUSINESS.phoneDisplay}
            </a>{' '}
            and describe what your system is doing.
          </p>
        </div>
      </section>

      {/* HUB SPECIFIC INTERNAL LINKING SECTION: /hvac-services */}
      {path === '/hvac-services' && (
        <section className="border-t border-slate-200 bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-navy-100 px-3 py-1 text-xs font-bold text-navy-900">
                <Wrench className="h-3.5 w-3.5" />
                Complete Service Navigation
              </span>
              <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
                Browse All 11 Residential HVAC Services
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Direct links to our specialized heating, cooling, and mechanical diagnostic services across Lawrenceville and Gwinnett County:
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {HVAC_ALL_LINKS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-6 transition duration-200 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-white hover:shadow-md"
                >
                  <div>
                    <h3 className="text-base font-bold text-navy-900 group-hover:text-sky-700">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.desc}</p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-sky-700">
                    Explore {item.name}
                    <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-700 sm:p-8">
              <p className="font-bold text-navy-900">Looking for HVAC service outside of Lawrenceville?</p>
              <p className="mt-1 text-slate-600">
                We provide genuine dispatch to surrounding communities throughout Gwinnett and the Atlanta corridor.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                <Link
                  to="/service-areas"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-navy-900 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-sky-700"
                >
                  View All Georgia Service Areas <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-navy-900 transition hover:bg-slate-50"
                >
                  Contact Our HVAC Team
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* HUB SPECIFIC INTERNAL LINKING SECTION: /air-conditioning-services */}
      {path === '/air-conditioning-services' && (
        <section className="border-t border-slate-200 bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-800">
                <Snowflake className="h-3.5 w-3.5" />
                Regional Cooling Coverage
              </span>
              <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
                Air Conditioning Services Across Georgia Communities
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Our technicians provide dependable air conditioning troubleshooting, repairs, and installations across our primary base and surrounding cities:
              </p>
            </div>

            {/* Direct Service Links in Lawrenceville */}
            <div className="mb-10 grid gap-6 sm:grid-cols-2">
              <Link
                to="/ac-repair-lawrenceville-ga"
                className="group flex flex-col justify-between rounded-2xl border border-sky-200 bg-sky-50/50 p-6 transition hover:border-sky-400 hover:bg-sky-50 hover:shadow-md"
              >
                <div>
                  <span className="rounded bg-sky-200/80 px-2 py-0.5 text-[11px] font-bold text-sky-900">
                    Primary Service Hub
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-navy-900 group-hover:text-sky-700">
                    AC Repair Lawrenceville
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Prompt diagnostics, refrigerant leak checks, and capacitor repairs for Lawrenceville homeowners.
                  </p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-sky-700">
                  View Lawrenceville AC Repair <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>

              <Link
                to="/air-conditioning-installation-lawrenceville-ga"
                className="group flex flex-col justify-between rounded-2xl border border-sky-200 bg-sky-50/50 p-6 transition hover:border-sky-400 hover:bg-sky-50 hover:shadow-md"
              >
                <div>
                  <span className="rounded bg-sky-200/80 px-2 py-0.5 text-[11px] font-bold text-sky-900">
                    System Replacement
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-navy-900 group-hover:text-sky-700">
                    Air Conditioning Installation Lawrenceville
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    SEER2-compliant, energy-efficient cooling system upgrades with precision Manual J load calculations.
                  </p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-sky-700">
                  View AC Installation Scope <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            </div>

            {/* City Landing Pages Grid */}
            <h3 className="mb-6 text-xl font-bold text-navy-900">
              AC Repair in Surrounding Georgia Cities
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link
                to="/ac-repair-snellville-ga"
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 font-bold text-navy-900 transition hover:border-sky-300 hover:shadow-xs"
              >
                <span className="flex items-center gap-2 truncate">
                  <MapPin className="h-4 w-4 text-sky-600" />
                  AC Repair Snellville
                </span>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-sky-600" />
              </Link>

              <Link
                to="/ac-repair-lilburn-ga"
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 font-bold text-navy-900 transition hover:border-sky-300 hover:shadow-xs"
              >
                <span className="flex items-center gap-2 truncate">
                  <MapPin className="h-4 w-4 text-sky-600" />
                  AC Repair Lilburn
                </span>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-sky-600" />
              </Link>

              <Link
                to="/ac-repair-duluth-ga"
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 font-bold text-navy-900 transition hover:border-sky-300 hover:shadow-xs"
              >
                <span className="flex items-center gap-2 truncate">
                  <MapPin className="h-4 w-4 text-sky-600" />
                  AC Repair Duluth
                </span>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-sky-600" />
              </Link>

              <Link
                to="/ac-repair-suwanee-ga"
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 font-bold text-navy-900 transition hover:border-sky-300 hover:shadow-xs"
              >
                <span className="flex items-center gap-2 truncate">
                  <MapPin className="h-4 w-4 text-sky-600" />
                  AC Repair Suwanee
                </span>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-sky-600" />
              </Link>

              <Link
                to="/ac-repair-loganville-ga"
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 font-bold text-navy-900 transition hover:border-sky-300 hover:shadow-xs"
              >
                <span className="flex items-center gap-2 truncate">
                  <MapPin className="h-4 w-4 text-sky-600" />
                  AC Repair Loganville
                </span>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-sky-600" />
              </Link>

              <Link
                to="/ac-repair-grayson-ga"
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 font-bold text-navy-900 transition hover:border-sky-300 hover:shadow-xs"
              >
                <span className="flex items-center gap-2 truncate">
                  <MapPin className="h-4 w-4 text-sky-600" />
                  AC Repair Grayson
                </span>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-sky-600" />
              </Link>

              <Link
                to="/ac-repair-dacula-ga"
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 font-bold text-navy-900 transition hover:border-sky-300 hover:shadow-xs"
              >
                <span className="flex items-center gap-2 truncate">
                  <MapPin className="h-4 w-4 text-sky-600" />
                  AC Repair Dacula
                </span>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-sky-600" />
              </Link>

              <Link
                to="/ac-repair-norcross-ga"
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 font-bold text-navy-900 transition hover:border-sky-300 hover:shadow-xs"
              >
                <span className="flex items-center gap-2 truncate">
                  <MapPin className="h-4 w-4 text-sky-600" />
                  AC Repair Norcross
                </span>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-sky-600" />
              </Link>

              <Link
                to="/ac-repair-atlanta-ga"
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 font-bold text-navy-900 transition hover:border-sky-300 hover:shadow-xs"
              >
                <span className="flex items-center gap-2 truncate">
                  <MapPin className="h-4 w-4 text-sky-600" />
                  AC Repair Atlanta
                </span>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-sky-600" />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-6 text-sm text-slate-600">
              <span>Preparing for cooler months?</span>
              <Link
                to="/heating-services"
                className="font-bold text-navy-900 hover:text-sky-600 underline underline-offset-2"
              >
                Explore Heating & Furnace Services Hub
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* HUB SPECIFIC INTERNAL LINKING SECTION: /heating-services */}
      {path === '/heating-services' && (
        <section className="border-t border-slate-200 bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900">
                <Flame className="h-3.5 w-3.5" />
                Heating Solutions Lineup
              </span>
              <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
                Heating, Furnace & Heat Pump Services
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Direct links to our specialized furnace and heat pump diagnostic, repair, and replacement services:
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {HEATING_SERVICE_LINKS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-6 transition duration-200 hover:-translate-y-0.5 hover:border-amber-300 hover:bg-white hover:shadow-md"
                >
                  <div>
                    <h3 className="text-base font-bold text-navy-900 group-hover:text-amber-700">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.desc}</p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-amber-700">
                    Explore {item.name}
                    <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-6 text-sm text-slate-600">
              <span>Preparing for spring and summer cooling?</span>
              <Link
                to="/air-conditioning-services"
                className="font-bold text-navy-900 hover:text-sky-600 underline underline-offset-2"
              >
                Explore Air Conditioning Services Hub
              </Link>
            </div>
          </div>
        </section>
      )}

      <CallBand />
    </>
  );
}
