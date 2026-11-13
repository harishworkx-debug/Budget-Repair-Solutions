import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock,
  Flame,
  Phone,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Thermometer,
  TrendingDown,
  Wind,
  Wrench,
  Zap,
} from 'lucide-react';
import { BUSINESS, locationLabel } from '@/config/business';
import { PhoneButton } from '@/components/PhoneButton';
import { ServiceCard } from '@/components/ServiceCard';
import { ServiceAreaFinder } from '@/components/ServiceAreaFinder';
import { CallBand } from '@/components/CallBand';
import { FaqList } from '@/components/FaqList';
import { Link } from '@/lib/router';
import { SERVICE_AREAS } from '@/data/areas';
import { findServiceBySlug, serviceUrl, type Service } from '@/data/services';
import { useSeo } from '@/lib/seo';
import { GOOGLE_REVIEWS_SUMMARY, REVIEWS } from '@/data/reviews';
import { ReviewCard, StarRating } from '@/components/ReviewCard';

const HERO_IMAGE = 'https://images.pexels.com/photos/20046693/pexels-photo-20046693.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const COOLING_IMAGE = 'https://images.pexels.com/photos/16848596/pexels-photo-16848596.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const HEATING_IMAGE = 'https://images.pexels.com/photos/7859953/pexels-photo-7859953.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const FEATURED_SLUGS = [
  'ac-repair',
  'air-conditioning-installation',
  'heating-repair',
  'furnace-repair',
  'heat-pump-repair',
  'hvac-maintenance',
];
const COOLING_SLUGS = ['ac-repair', 'air-conditioning-installation', 'thermostat-installation'];
const HEATING_SLUGS = ['heating-repair', 'furnace-repair', 'furnace-installation'];

const MAJOR_BRANDS = [
  'Carrier',
  'Trane',
  'Lennox',
  'Rheem',
  'Goodman',
  'Daikin',
  'American Standard',
  'York',
  'Bryant',
  'Ruud',
  'Amana',
  'Mitsubishi Electric',
];

const HVAC_SYMPTOMS = [
  {
    icon: Snowflake,
    title: 'Warm Air or Ineffective Cooling',
    description:
      'When your AC runs continuously but vents blow lukewarm air. Often caused by low refrigerant leaks, failing run capacitors, or a frozen evaporator coil.',
    urgency: 'High Priority',
    color: 'text-sky-600 bg-sky-50 border-sky-200',
  },
  {
    icon: Wind,
    title: 'Weak Airflow from Supply Vents',
    description:
      'Air barely trickles through registers, leaving rooms unevenly cooled. Frequently points to failing blower motors, duct leaks, or severely clogged air filters.',
    urgency: 'Medium Priority',
    color: 'text-teal-600 bg-teal-50 border-teal-200',
  },
  {
    icon: Zap,
    title: 'Loud Buzzing, Humming, or Clicking',
    description:
      'Electrical clicking upon startup or loud buzzing from the outdoor condenser unit indicates a failing contactor, bad motor capacitor, or wiring fault.',
    urgency: 'Urgent',
    color: 'text-amber-600 bg-amber-50 border-amber-200',
  },
  {
    icon: AlertTriangle,
    title: 'Water Leaking Around Indoor Unit',
    description:
      'Condensate drain lines easily clog with algae in humid Georgia summers, leading to drain pan overflows, water pooling, and safety switch shutdowns.',
    urgency: 'High Priority',
    color: 'text-rose-600 bg-rose-50 border-rose-200',
  },
  {
    icon: TrendingDown,
    title: 'Unexplained Jump in Electric Bills',
    description:
      'When energy bills spike without changes in weather, your HVAC equipment is likely short-cycling or working twice as hard due to dirty coils or worn components.',
    urgency: 'Medium Priority',
    color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
  },
  {
    icon: Flame,
    title: 'Furnace Not Igniting or Short-Cycling',
    description:
      'Dirty flame sensors, faulty ignitors, or pressure switch faults cause furnaces to shut down after running for only a few minutes in cold weather.',
    urgency: 'High Priority',
    color: 'text-orange-600 bg-orange-50 border-orange-200',
  },
];

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Direct Phone Consultation',
    description:
      'Call us directly to describe what your heating or cooling system is doing. You speak with our team immediately without automated call center delays.',
  },
  {
    number: '02',
    title: 'Comprehensive Diagnostic',
    description:
      'Our technician arrives with diagnostic gauges, multimeters, and leak detectors to test refrigerant charge, electrical parts, coils, and motors.',
  },
  {
    number: '03',
    title: 'Honest, Upfront Options',
    description:
      'We explain the root cause in plain language and provide clear pricing. We focus on practical repairs and never push unnecessary system replacements.',
  },
  {
    number: '04',
    title: 'Precision Repair & Verification',
    description:
      'We complete the repair with quality manufacturer-grade parts, calibrate controls, and test temperature drop to ensure dependable seasonal performance.',
  },
];

const MAINTENANCE_BENEFITS = [
  {
    stat: '85%',
    label: 'Fewer Sudden Breakdowns',
    description:
      'Testing electrical capacitors and cleaning condenser coils prevents unexpected failures during 95°F Georgia heat waves.',
  },
  {
    stat: '15-20%',
    label: 'Lower Monthly Energy Costs',
    description:
      'A properly charged system with clean coils and calibrated airflow uses significantly less power to cool your home.',
  },
  {
    stat: '3-5 Yrs',
    label: 'Extended Equipment Lifespan',
    description:
      'Routine maintenance prevents excessive wear on compressors and motors, helping systems last 12-15+ dependable years.',
  },
  {
    stat: '100%',
    label: 'Winter Heating Safety',
    description:
      'Furnace safety inspections check heat exchangers, gas valves, and venting to ensure your family is protected against carbon monoxide.',
  },
];

const HOME_FAQS = [
  {
    question: 'How quickly can Budget Repair Solutions service my HVAC system?',
    answer:
      'We prioritize prompt response times across Gwinnett County and the Atlanta metro area. Because we handle calls directly by phone without call center delays, we can quickly confirm technician availability and dispatch assistance to your home or commercial property.',
  },
  {
    question: 'What causes an air conditioner to blow warm air or freeze up?',
    answer:
      'Common culprits include a low refrigerant charge caused by a leak, a dirty air filter or evaporator coil choking airflow, a failed blower motor, or a bad capacitor. Running a frozen system can burn out the compressor, so we recommend shutting the system off at the thermostat and calling us for a prompt diagnostic.',
  },
  {
    question: 'Should I repair my older HVAC system or replace it?',
    answer:
      'We follow an honest assessment approach based on equipment age, condition, and repair cost. If your unit is under 10-12 years old and the repair is minor, fixing it is usually the smart choice. If the system uses obsolete R-22 Freon, has a cracked heat exchanger, or requires repairs exceeding 50% of replacement value, we discuss reliable replacement alternatives.',
  },
  {
    question: 'What HVAC brands and system types do you repair in Georgia?',
    answer:
      'We service all major central air conditioners, heat pumps, gas furnaces, electric air handlers, and ductless split systems. Our technicians work on Carrier, Trane, Lennox, Rheem, Goodman, York, Daikin, American Standard, Bryant, Ruud, and more.',
  },
  {
    question: 'How often should I schedule HVAC maintenance?',
    answer:
      'In Georgia, where systems run hard through both humid summers and cold winter snaps, we recommend servicing your cooling system in the spring and your heating system in the fall. Regular tune-ups catch failing capacitors, clear condensate drains, clean coils, and prevent up to 85% of sudden seasonal breakdowns.',
  },
  {
    question: 'Do you provide commercial HVAC repairs as well as residential?',
    answer:
      'Yes. In addition to single-family homes, townhomes, and residential properties, we service light commercial offices, retail spaces, and small business heating and cooling systems throughout our Georgia service areas.',
  },
];

function pickServices(slugs: string[]): Service[] {
  return slugs.map(findServiceBySlug).filter((service): service is Service => service !== undefined);
}

function ServiceSpotlight({
  id,
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  slugs,
  hubUrl = '/hvac-services',
  hubLabel = 'View all HVAC services',
  contextualLink,
  reversed = false,
  muted = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  slugs: string[];
  hubUrl?: string;
  hubLabel?: string;
  contextualLink?: { to: string; label: string };
  reversed?: boolean;
  muted?: boolean;
}) {
  const services = pickServices(slugs);
  const primary = services[0];

  return (
    <section id={id} className={`py-24 ${muted ? 'bg-slate-50' : 'bg-white'}`}>
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div className={`overflow-hidden rounded-3xl shadow-xl shadow-navy-900/10 ${reversed ? 'lg:order-2' : ''}`}>
          <img src={image} alt={imageAlt} loading="lazy" decoding="async" className="aspect-[4/3] h-full w-full object-cover" />
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">{eyebrow}</p>
          <h2 className="text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">{title}</h2>
          <p className="text-lg leading-relaxed text-slate-600">{description}</p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  to={serviceUrl(service)}
                  className="flex h-full items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-navy-900 transition hover:border-sky-300 hover:shadow-md"
                >
                  <service.icon className="h-4 w-4 shrink-0 text-sky-600" aria-hidden="true" />
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
            {primary && <PhoneButton label={`Call for ${primary.name}`} variant="primary" />}
            <Link to={hubUrl} className="inline-flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-sky-600">
              {hubLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          {contextualLink && (
            <p className="text-xs text-slate-500">
              Need direct assistance?{' '}
              <Link to={contextualLink.to} className="font-semibold text-sky-700 underline underline-offset-2 hover:text-navy-900">
                {contextualLink.label}
              </Link>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  useSeo({
    title: `HVAC Repair & AC Services in Lawrenceville, GA | ${BUSINESS.name}`,
    description: `Budget Repair Solutions provides heating and air conditioning services for homeowners in Lawrenceville, Georgia, and surrounding communities. Call (470) 331-4715.`,
    path: '/',
    faqs: HOME_FAQS,
  });

  const featured = pickServices(FEATURED_SLUGS);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <img
          src={HERO_IMAGE}
          alt="Modern outdoor air conditioning unit beside a residential building surrounded by landscaping"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/30" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 pb-24 pt-20 md:pt-28 lg:pb-32">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-sky-200">
            <Thermometer className="h-4 w-4" aria-hidden="true" />
            HVAC Contractor • {locationLabel}
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
            Reliable HVAC & Air Conditioning Services in Lawrenceville, GA
          </h1>
          <div className="max-w-2xl space-y-3 text-lg leading-relaxed text-white/85">
            <p>
              Budget Repair Solutions provides heating and air conditioning services for homeowners in Lawrenceville, Georgia, and surrounding communities. Whether your air conditioner is not cooling properly, your heating system needs attention, or you are planning an HVAC installation, our team can help you find the right service for your home.
            </p>
            <p className="text-base text-white/75">
              From AC troubleshooting and heating repairs to system installation and preventative maintenance, we focus on practical solutions that help keep your home comfortable throughout Georgia's changing seasons.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <PhoneButton label={`Call Budget Repair Solutions: ${BUSINESS.phoneDisplay}`} variant="primary" className="px-8 py-4 text-base" />
            <Link
              to="/hvac-services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-8 py-4 text-base font-bold text-white transition hover:border-white hover:bg-white/10"
            >
              Explore HVAC Services
            </Link>
          </div>

          {/* Crawlable High-Priority Service & Area Links */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-xs text-white/85">
            <span className="font-bold text-sky-300">Quick Links:</span>
            <Link to="/ac-repair-lawrenceville-ga" className="hover:text-white underline underline-offset-2">
              Explore our AC Repair Services
            </Link>
            <span className="text-white/40">•</span>
            <Link to="/hvac-installation-lawrenceville-ga" className="hover:text-white underline underline-offset-2">
              Learn about our HVAC Installation Services
            </Link>
            <span className="text-white/40">•</span>
            <Link to="/heating-services" className="hover:text-white underline underline-offset-2">
              View our Heating Services
            </Link>
            <span className="text-white/40">•</span>
            <Link to="/hvac-maintenance-lawrenceville-ga" className="hover:text-white underline underline-offset-2">
              HVAC Maintenance Lawrenceville
            </Link>
            <span className="text-white/40">•</span>
            <Link to="/service-areas" className="hover:text-white underline underline-offset-2">
              Service Areas
            </Link>
            <span className="text-white/40">•</span>
            <Link to="/contact" className="hover:text-white underline underline-offset-2">
              Contact
            </Link>
          </div>

          <div className="mt-2 max-w-3xl">
            <ServiceAreaFinder theme="dark" />
          </div>
        </div>
      </section>

      {/* Verified Business Details Bar */}
      <section aria-label="Verified business details" className="border-b border-slate-200 bg-white">
        <dl className="mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-widest text-slate-500">Business</dt>
            <dd className="mt-1 text-base font-bold text-navy-900">{BUSINESS.name}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-widest text-slate-500">Category</dt>
            <dd className="mt-1 text-base font-bold text-navy-900">{BUSINESS.category}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-widest text-slate-500">Main location</dt>
            <dd className="mt-1 text-base font-bold text-navy-900">{locationLabel}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-widest text-slate-500">Phone</dt>
            <dd className="mt-1">
              <a href={`tel:${BUSINESS.phoneTel}`} className="text-base font-bold text-navy-900 underline-offset-4 hover:underline">
                {BUSINESS.phoneDisplay}
              </a>
            </dd>
          </div>
        </dl>
      </section>

      {/* Emergency & Core Trust Highlights Banner */}
      <section className="border-b border-navy-800 bg-gradient-to-r from-navy-900 via-navy-950 to-navy-900 py-8 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-500/20 text-sky-400">
              <Clock className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold text-white">Prompt Local Response</p>
              <p className="text-xs text-slate-400">Direct phone dispatch across Gwinnett County</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-500/20 text-sky-400">
              <ShieldCheck className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold text-white">Certified Technicians</p>
              <p className="text-xs text-slate-400">Expert diagnostics for residential & commercial</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-500/20 text-sky-400">
              <Wrench className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold text-white">All Major Brands</p>
              <p className="text-xs text-slate-400">Carrier, Trane, Lennox, Rheem, Goodman & more</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-500/20 text-sky-400">
              <Phone className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold text-white">Direct Phone Access</p>
              <p className="text-xs text-slate-400">{BUSINESS.phoneDisplay} — no call center delays</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured HVAC Services Grid */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">HVAC Services</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">Heating, cooling, and ventilation services</h2>
            </div>
            <Link to="/hvac-services" className="inline-flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-sky-600">
              View all HVAC services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostic Symptoms Checker Section */}
      <section className="bg-white py-24 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">Troubleshooting Guide</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">
              Signs Your Heating or AC Needs Immediate Attention
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Catching heating and cooling issues early protects your compressor, prevents water damage, and saves hundreds in emergency repair bills. If you notice any of these symptoms in your Georgia home, call our team right away.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {HVAC_SYMPTOMS.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-900">
                        <Icon className="h-5 w-5 text-sky-600" aria-hidden="true" />
                      </span>
                      <span className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${item.color}`}>
                        {item.urgency}
                      </span>
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-navy-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                  </div>
                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <a
                      href={`tel:${BUSINESS.phoneTel}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-800"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      Call for diagnosis: {BUSINESS.phoneDisplay}
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-700">
            System exhibiting one of these problems? Learn how our technicians diagnose root causes on our{' '}
            <Link to="/hvac-repair-lawrenceville-ga" className="font-bold text-navy-900 underline underline-offset-2 hover:text-sky-600">
              HVAC Repair Lawrenceville
            </Link>{' '}
            page, or{' '}
            <Link to="/contact" className="font-bold text-navy-900 underline underline-offset-2 hover:text-sky-600">
              contact our Lawrenceville team
            </Link>{' '}
            for prompt diagnostic dispatch.
          </div>
        </div>
      </section>

      {/* Cooling Spotlight */}
      <ServiceSpotlight
        id="air-conditioning"
        eyebrow="Air Conditioning"
        title="Cooling problems, handled with a clear diagnosis"
        description="When your air conditioner stops cooling, makes new noises, or runs without reaching the temperature you set, the first step is finding out why. Call to describe what your system is doing and get the right service for it."
        image={COOLING_IMAGE}
        imageAlt="Outdoor air conditioning condenser unit mounted on a brick wall"
        slugs={COOLING_SLUGS}
        hubUrl="/air-conditioning-services"
        hubLabel="View our Air Conditioning Services"
        contextualLink={{ to: '/ac-repair-lawrenceville-ga', label: 'Explore our AC Repair Services in Lawrenceville' }}
        muted
      />

      {/* Heating Spotlight */}
      <ServiceSpotlight
        id="heating"
        eyebrow="Heating"
        title="Warm, dependable heat for every season"
        description="Furnaces, heat pumps, and heating controls all affect how comfortable your home stays in cold weather. Call to talk through heating problems, maintenance, or replacement options."
        image={HEATING_IMAGE}
        imageAlt="Technician adjusting a heating system with precise instruments"
        slugs={HEATING_SLUGS}
        hubUrl="/heating-services"
        hubLabel="View our Heating Services"
        contextualLink={{ to: '/heating-repair-lawrenceville-ga', label: 'Heating Repair & Furnace Services' }}
        reversed
      />

        {/* Our 4-Step Process Section */}
        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">The Budget Repair Solutions Way</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">
                How We Diagnose & Restore Your Heating & Cooling
              </h2>
              <p className="mt-4 text-base text-slate-600">
                No guesswork, no high-pressure sales pitches. We follow a methodical diagnostic process so you know exactly what is happening inside your system before any work begins.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {PROCESS_STEPS.map((step) => (
                <div
                  key={step.number}
                  className="relative flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-md"
                >
                  <span className="text-3xl font-black text-sky-500/30">{step.number}</span>
                  <h3 className="mt-3 text-lg font-bold text-navy-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <PhoneButton label="Schedule Your HVAC Inspection" variant="primary" className="px-8 py-4 text-base" />
            </div>
          </div>
        </section>

        {/* Major HVAC Brands We Service */}
        <section className="border-y border-slate-200 bg-white py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600">Universal Compatibility</p>
              <h2 className="mt-2 text-2xl font-bold text-navy-900 sm:text-3xl">We Service All Major Brands & Makes</h2>
              <p className="mt-2 text-sm text-slate-600">
                Regardless of who installed your air conditioning unit or furnace, our team carries diagnostic tools and parts for every leading manufacturer.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {MAJOR_BRANDS.map((brand) => (
                <span
                  key={brand}
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-bold text-navy-900 shadow-xs transition hover:border-sky-300 hover:bg-sky-50/50"
                >
                  <CheckCircle2 className="h-4 w-4 text-sky-600" />
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Why Budget Repair Solutions */}
        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">Why Budget Repair Solutions</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">Straight answers about your heating and cooling</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: 'Understanding the problem',
                  body: 'HVAC issues often look similar from the thermostat. We focus on what is actually happening in your system before recommending work.',
                },
                {
                  title: 'Practical repair options',
                  body: 'Some problems are a simple fix and others point toward replacement. You get an honest discussion of the options that fit your situation.',
                },
                {
                  title: 'Direct phone access',
                  body: 'Call the business directly to describe your heating or cooling needs and confirm availability. No forms, no waiting for a callback.',
                },
              ].map((item) => (
                <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-navy-900">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.body}</p>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy-800 transition hover:text-sky-600"
              >
                Meet our local HVAC technicians & learn about our diagnostic standards
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Seasonal Maintenance & Preventative Care Guide */}
        <section className="bg-white py-24 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-800">
                <Sparkles className="h-3.5 w-3.5" />
                Preventative Maintenance Guide
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">
                Why Regular HVAC Tune-Ups Save Money in Georgia
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Georgia summers push cooling systems to their limits, while sudden winter cold snaps demand reliable heating. Here is why annual preventative maintenance pays for itself.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {MAINTENANCE_BENEFITS.map((benefit) => (
                <div
                  key={benefit.label}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:border-sky-300 hover:bg-white hover:shadow-lg"
                >
                  <span className="text-4xl font-black text-navy-900">{benefit.stat}</span>
                  <p className="mt-2 text-base font-bold text-sky-700">{benefit.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-sky-100 bg-sky-50/70 p-6 sm:p-8 flex flex-col items-center justify-between gap-4 md:flex-row">
              <div>
                <p className="text-lg font-bold text-navy-900">Need a seasonal AC or heating tune-up?</p>
                <p className="text-sm text-slate-600">
                  Call {BUSINESS.name} at {BUSINESS.phoneDisplay} to schedule your multi-point HVAC inspection.
                </p>
              </div>
              <PhoneButton label="Book HVAC Tune-Up" variant="primary" />
            </div>
          </div>
        </section>

        {/* Customer Reviews Section */}
        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">Customer Feedback</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">
                Real Reviews on Google Maps
              </h2>
              <div className="mt-4 flex items-center justify-center gap-3">
                <span className="text-3xl font-black text-navy-900">{GOOGLE_REVIEWS_SUMMARY.rating}</span>
                <StarRating rating={GOOGLE_REVIEWS_SUMMARY.rating} size="md" />
                <span className="text-sm font-semibold text-slate-500">
                  ({GOOGLE_REVIEWS_SUMMARY.totalReviews} Google Reviews)
                </span>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {REVIEWS.filter((r) => r.sentiment === 'positive').slice(0, 3).map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/reviews"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-navy-800"
              >
                View all {GOOGLE_REVIEWS_SUMMARY.totalReviews} Google Reviews
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-200 bg-white px-6 py-3 text-sm font-bold text-navy-900 transition hover:border-navy-400 hover:bg-navy-50"
              >
                Read on Google Maps
              </a>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-14 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">Service Areas</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">Where we work</h2>
              <p className="mt-2 text-base text-slate-600">
                Based in {locationLabel}, we serve homeowners and businesses across Gwinnett County and neighboring Georgia cities.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICE_AREAS.map((area) => (
                <Link
                  key={area.slug}
                  to={`/${area.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className="text-lg font-bold text-navy-900 truncate">
                      AC Repair in {area.city}, {BUSINESS.region}
                    </span>
                    {area.citySlug === BUSINESS.locationSlug && (
                      <span className="rounded bg-sky-100 px-1.5 py-0.5 text-[10px] font-bold text-sky-800">
                        Main
                      </span>
                    )}
                  </div>
                  <ArrowRight className="h-5 w-5 shrink-0 text-navy-700 transition group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/service-areas"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-navy-800 shadow-xs transition hover:border-sky-300 hover:bg-slate-50 hover:text-sky-600"
              >
                Explore Full Georgia HVAC Service Areas Directory & Dispatch Logistics
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Homepage HVAC FAQs Accordion Section */}
        <section className="bg-slate-50 py-24 border-t border-slate-200">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">Frequently Asked Questions</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-navy-900">
                Common Questions About Heating & AC Repair
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Have questions about your system or service availability in Georgia? Here are answers to the most common questions our customers ask.
              </p>
              <div className="mt-6">
                <a
                  href={`tel:${BUSINESS.phoneTel}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-sky-700 hover:text-sky-800"
                >
                  <Phone className="h-4 w-4" />
                  Have a different question? Call {BUSINESS.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="lg:col-span-2">
              <FaqList faqs={HOME_FAQS} />
            </div>
          </div>
        </section>

        {/* Call to Action Band */}
        <CallBand headline="Ready for dependable heating and cooling? Call Budget Repair Solutions." />
      </>
      );
}
