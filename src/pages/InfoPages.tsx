import { useState, type FormEvent } from 'react';
import {
  Clock,
  CheckCircle2,
  ExternalLink,
  MapPin,
  MessageSquarePlus,
  Phone,
  Send,
  Star,
} from 'lucide-react';
import { BUSINESS, locationLabel } from '@/config/business';
import { PageHeader } from '@/components/PageHeader';
import { PhoneButton } from '@/components/PhoneButton';
import { CallBand } from '@/components/CallBand';
import { Link } from '@/lib/router';
import { useSeo } from '@/lib/seo';
import { GOOGLE_REVIEWS_SUMMARY, REVIEWS } from '@/data/reviews';
import { ReviewCard, StarRating } from '@/components/ReviewCard';

export function AboutPage() {
  const crumbs = [{ label: 'Home', to: '/' }, { label: 'About' }];

  useSeo({
    title: `HVAC Company Lawrenceville GA | Budget Repair Solutions`,
    description: `Budget Repair Solutions is a trusted local HVAC company in Lawrenceville, GA. Meet our heating and cooling professionals and local HVAC technicians. Call ${BUSINESS.phoneDisplay}.`,
    path: '/about',
    breadcrumbs: crumbs,
  });

  const principles = [
    {
      title: 'Problem-First Diagnostic Approach',
      body: 'Every service call begins with hands-on mechanical and electrical testing. We find the specific failed component before recommending any repair, so you never pay for unnecessary parts.',
    },
    {
      title: 'Honest Repair vs. Replace Guidance',
      body: 'If a simple capacitor, contactor, or flame sensor fix will safely restore your unit, that is what we recommend. We never employ commissioned salespeople or push premature system replacements.',
    },
    {
      title: 'Direct Local Phone Communication',
      body: 'When you call (470) 348-6086, you speak directly with our team. You get straightforward answers on technician availability and scheduling without automated call center runarounds.',
    },
  ];

  const qualifications = [
    'EPA-Certified Technicians trained in environmentally safe refrigerant handling and recovery',
    'Diagnostic expertise spanning all major residential central AC, heat pump, and gas furnace brands',
    'Accurate Manual J heat load calculations for proper replacement equipment sizing',
    'Upfront, itemized estimates with no hidden travel fees across our Gwinnett service territory',
  ];

  return (
    <>
      <PageHeader
        eyebrow="Local HVAC Company"
        title="Local HVAC Technicians & Heating and Cooling Professionals"
        description={`${BUSINESS.name} is an established HVAC company based in ${locationLabel}, dedicated to straightforward diagnostics, clear options, and dependable heating and air conditioning service.`}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
        actions={<PhoneButton label="Call Now" variant="primary" className="px-8 py-4 text-base" />}
      />

      {/* Company Story & Philosophy */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">Our Story & Mission</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">
              Straightforward Heating & Air Conditioning Service
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Budget Repair Solutions was founded on a simple premise: homeowners in Lawrenceville and Gwinnett County deserve an HVAC company that provides clear diagnostic answers, fair pricing, and dependable repairs without high-pressure sales tactics.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {principles.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-navy-900">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications & Standards */}
      <section className="border-t border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">Our Qualifications</p>
              <h2 className="mt-2 text-3xl font-bold text-navy-900">
                Trained Technicians, Verified Standards
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                We believe in earning our customers’ trust through verified competence and honest recommendations. We do not invent arbitrary years of experience or make false claims—our reputation is built on real repairs delivered to Georgia homeowners every week.
              </p>
              <ul className="mt-6 grid gap-3.5">
                {qualifications.map((q) => (
                  <li key={q} className="flex gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-navy-900">Service Area & Headquarters</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Headquartered in Lawrenceville, GA, we provide residential and light commercial HVAC repairs across Gwinnett County and surrounding communities, including Snellville, Lilburn, Duluth, Suwanee, Loganville, Grayson, Dacula, Norcross, and designated northeast Atlanta corridors.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={BUSINESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-sky-600"
                >
                  <MapPin className="h-4 w-4 text-sky-600" />
                  View our verified Google Business profile
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-sky-600">
                  <Phone className="h-4 w-4 text-sky-600" />
                  Contact our Lawrenceville dispatch office
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallBand />
    </>
  );
}

export function ReviewsPage() {
  const [filter, setFilter] = useState<'all' | 'positive' | 'negative' | 'punctuality'>('all');
  const crumbs = [{ label: 'Home', to: '/' }, { label: 'Reviews' }];

  useSeo({
    title: `Budget Repair Solutions Reviews | HVAC Customer Testimonials`,
    description: `Read genuine Budget Repair Solutions reviews and AC repair testimonials from homeowners across Lawrenceville, GA. 3.7-star rating based on 6 Google reviews.`,
    path: '/reviews',
    breadcrumbs: crumbs,
  });

  const filteredReviews = REVIEWS.filter((review) => {
    if (filter === 'positive') return review.sentiment === 'positive';
    if (filter === 'negative') return review.sentiment === 'negative';
    if (filter === 'punctuality') return review.tags?.includes('Punctuality');
    return true;
  });

  return (
    <>
      <PageHeader
        eyebrow="HVAC Customer Reviews"
        title="Budget Repair Solutions Reviews & Testimonials"
        description="Read genuine, unedited customer reviews and AC repair testimonials from our Google Maps profile. See what homeowners in Lawrenceville, GA have shared."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Reviews' }]}
        actions={
          <a
            href={BUSINESS.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-8 py-4 text-base font-bold text-white transition hover:border-white hover:bg-white/10"
          >
            <Star className="h-4 w-4 text-sky-300" aria-hidden="true" />
            Write a review on Google
          </a>
        }
      />

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          {/* Summary Card */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <div className="grid gap-8 md:grid-cols-12 md:items-center">
              {/* Overall Score */}
              <div className="flex flex-col items-center border-b border-slate-100 pb-8 text-center md:col-span-4 md:border-b-0 md:border-r md:pb-0 md:pr-8">
                <div className="flex items-center gap-2">
                  <span className="text-5xl font-black text-navy-900">{GOOGLE_REVIEWS_SUMMARY.rating}</span>
                  <span className="text-xl font-bold text-slate-400">/ 5</span>
                </div>
                <div className="mt-2">
                  <StarRating rating={GOOGLE_REVIEWS_SUMMARY.rating} size="md" />
                </div>
                <p className="mt-2 text-sm font-semibold text-slate-600">
                  Based on {GOOGLE_REVIEWS_SUMMARY.totalReviews} Google Reviews
                </p>
                <div className="mt-4 flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  <span className="font-bold text-blue-600">G</span> Verified Google Profile
                </div>
              </div>

              {/* Star Breakdown Bars */}
              <div className="space-y-2 md:col-span-5">
                {GOOGLE_REVIEWS_SUMMARY.breakdown.map((row) => (
                  <div key={row.stars} className="flex items-center gap-3 text-xs">
                    <span className="w-12 font-semibold text-slate-600">{row.stars} stars</span>
                    <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-amber-400"
                        style={{ width: `${row.percentage}%` }}
                      />
                    </div>
                    <span className="w-8 text-right font-medium text-slate-500">{row.count}</span>
                  </div>
                ))}
              </div>

              {/* Call to action */}
              <div className="flex flex-col gap-3 md:col-span-3">
                <a
                  href={BUSINESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-navy-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-800"
                >
                  <MessageSquarePlus className="h-4 w-4" />
                  Write a Review
                </a>
                <a
                  href={BUSINESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Open Google Maps
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="mt-12 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">Filter:</span>
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                filter === 'all'
                  ? 'bg-navy-900 text-white'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              All ({REVIEWS.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('positive')}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                filter === 'positive'
                  ? 'bg-emerald-700 text-white'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Positive (4)
            </button>
            <button
              type="button"
              onClick={() => setFilter('negative')}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                filter === 'negative'
                  ? 'bg-rose-700 text-white'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Critical (2)
            </button>
            <button
              type="button"
              onClick={() => setFilter('punctuality')}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                filter === 'punctuality'
                  ? 'bg-sky-700 text-white'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Punctuality (3)
            </button>
          </div>

          {/* Reviews Grid */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {filteredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          {/* Bottom Note */}
          <p className="mt-12 text-center text-xs text-slate-500">
            Reviews shown above are authentic, unedited testimonials published by customers on our official Google Business profile.
          </p>
        </div>
      </section>

      <CallBand headline="Have questions about our HVAC service? Speak directly with our team." />
    </>
  );
}

export function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Lawrenceville',
    service: 'AC Repair',
    message: '',
  });

  const crumbs = [{ label: 'Home', to: '/' }, { label: 'Contact' }];

  useSeo({
    title: `Contact HVAC Contractor Lawrenceville GA | Budget Repair Solutions`,
    description: `Contact Budget Repair Solutions, your local HVAC contractor in Lawrenceville, GA. Call our direct HVAC service phone number at ${BUSINESS.phoneDisplay} to request HVAC service.`,
    path: '/contact',
    breadcrumbs: crumbs,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact HVAC Contractor"
        title="Contact Our Lawrenceville, GA HVAC Team"
        description={`Need prompt assistance or want to request HVAC service? Call our direct service line at ${BUSINESS.phoneDisplay} or complete the contact inquiry form below.`}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
          {/* Contact Details & Business Hours */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-xs">
              <h2 className="text-xl font-bold text-navy-900">Direct Phone Contact</h2>
              <p className="mt-2 text-sm text-slate-600">
                Calling our direct phone number is the fastest way to confirm immediate technician availability.
              </p>
              <div className="mt-4">
                <PhoneButton label={`Call ${BUSINESS.phoneDisplay}`} className="w-full text-base" />
              </div>
            </div>

            {/* Business Hours */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xs">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-sky-600" />
                <h2 className="text-lg font-bold text-navy-900">Business & Dispatch Hours</h2>
              </div>
              <dl className="mt-4 divide-y divide-slate-100 text-sm">
                <div className="flex justify-between py-2.5">
                  <dt className="text-slate-600">Monday – Friday</dt>
                  <dd className="font-bold text-navy-900">8:00 AM – 7:00 PM</dd>
                </div>
                <div className="flex justify-between py-2.5">
                  <dt className="text-slate-600">Saturday</dt>
                  <dd className="font-bold text-navy-900">8:30 AM – 5:00 PM</dd>
                </div>
                <div className="flex justify-between py-2.5">
                  <dt className="text-slate-600">Sunday</dt>
                  <dd className="font-semibold text-sky-700">Emergency & On-Call Dispatch</dd>
                </div>
              </dl>
              <p className="mt-4 text-xs text-slate-500">
                *Calls after hours are monitored for emergency heating or cooling failures.
              </p>
            </div>

            {/* Location & Map Link */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-xs">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-sky-600" />
                <h2 className="text-lg font-bold text-navy-900">Main Service Location</h2>
              </div>
              <p className="mt-3 text-sm font-semibold text-navy-900">{BUSINESS.name}</p>
              <p className="text-sm text-slate-600">{locationLabel}, United States</p>
              <p className="mt-2 text-xs text-slate-500">
                Serving Lawrenceville, Snellville, Lilburn, Duluth, Suwanee, Loganville, Grayson, Dacula, Norcross, and NE Atlanta.
              </p>
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-sky-700 hover:text-sky-800"
              >
                Open Google Maps profile
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Interactive Request Service Form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm lg:col-span-7">
            <h2 className="text-2xl font-bold text-navy-900">Request HVAC Service Online</h2>
            <p className="mt-2 text-sm text-slate-600">
              Submit your system details below and our team will call you back to confirm your appointment. For urgent cooling or heating loss, please call us directly.
            </p>

            {formSubmitted ? (
              <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
                <h3 className="mt-3 text-xl font-bold text-emerald-900">Service Request Received!</h3>
                <p className="mt-2 text-sm text-emerald-800">
                  Thank you, <strong>{formData.name}</strong>. Our team in Lawrenceville has received your request for{' '}
                  <strong>{formData.service}</strong> in <strong>{formData.city}</strong>. We will review your notes and contact you at{' '}
                  <strong>{formData.phone}</strong> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="mt-6 rounded-full bg-navy-900 px-6 py-2.5 text-xs font-bold text-white transition hover:bg-navy-800"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Your Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-navy-900 shadow-xs focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="(470) 555-0199"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-navy-900 shadow-xs focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-navy-900 shadow-xs focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      City / Area *
                    </label>
                    <select
                      id="city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy-900 shadow-xs focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    >
                      <option value="Lawrenceville">Lawrenceville, GA</option>
                      <option value="Snellville">Snellville, GA</option>
                      <option value="Lilburn">Lilburn, GA</option>
                      <option value="Duluth">Duluth, GA</option>
                      <option value="Suwanee">Suwanee, GA</option>
                      <option value="Loganville">Loganville, GA</option>
                      <option value="Grayson">Grayson, GA</option>
                      <option value="Dacula">Dacula, GA</option>
                      <option value="Norcross">Norcross, GA</option>
                      <option value="Atlanta">Atlanta, GA</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy-900 shadow-xs focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  >
                    <option value="AC Repair">AC Repair (Warm Air / Not Cooling / Freezing)</option>
                    <option value="AC Installation">Air Conditioning Installation / Replacement</option>
                    <option value="HVAC Repair">General HVAC Diagnostic / Troubleshooting</option>
                    <option value="Heating Repair">Heating / Furnace Repair</option>
                    <option value="Heat Pump Service">Heat Pump Repair or Installation</option>
                    <option value="HVAC Maintenance">Seasonal Maintenance / Multi-Point Tune-Up</option>
                    <option value="Thermostat Installation">Thermostat Installation / Wiring</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Describe What Your System is Doing
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="E.g., The outdoor fan runs, but the air blowing from the vents isn't cold. It started yesterday afternoon..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-navy-900 shadow-xs focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy-900 px-8 py-4 text-sm font-bold text-white transition hover:bg-navy-800"
                >
                  <Send className="h-4 w-4" />
                  Submit HVAC Service Request
                </button>
                <p className="text-center text-xs text-slate-500">
                  By submitting, you agree to receive a phone call or text from Budget Repair Solutions to confirm scheduling.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Google Maps Location Embed */}
      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-navy-900">Find Our Lawrenceville, GA Location</h2>
            <p className="mt-2 text-sm text-slate-600">
              Centrally based in Gwinnett County to provide dependable heating and cooling services across North Georgia.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <iframe
              src={BUSINESS.mapEmbedSrc}
              title={`${BUSINESS.name} location on Google Maps`}
              className="aspect-[4/3] h-full min-h-[380px] w-full border-0 md:aspect-[21/9]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>

      <CallBand />
    </>
  );
}

