import { useState } from 'react';
import { ExternalLink, MessageSquarePlus, Phone, Star } from 'lucide-react';
import { BUSINESS, locationLabel, telHref } from '@/config/business';
import { PageHeader } from '@/components/PageHeader';
import { PhoneButton } from '@/components/PhoneButton';
import { CallBand } from '@/components/CallBand';
import { Link } from '@/lib/router';
import { useSeo } from '@/lib/seo';
import { GOOGLE_REVIEWS_SUMMARY, REVIEWS } from '@/data/reviews';
import { ReviewCard, StarRating } from '@/components/ReviewCard';

export function AboutPage() {
  useSeo({
    title: `About Budget Repair Solutions | HVAC Contractor in ${BUSINESS.regionName}`,
    description: `Learn about ${BUSINESS.name}, an HVAC contractor serving ${BUSINESS.regionName} from ${locationLabel}. Call to talk with the team.`,
    path: '/about',
  });

  const principles = [
    {
      title: 'Start with the problem',
      body: 'Every visit begins with understanding what your system is doing, when it started, and what you have already tried. That shapes the recommendation.',
    },
    {
      title: 'Explain the options',
      body: 'Repair, maintenance, or replacement can all be the right answer depending on the equipment and your budget. We walk through the trade-offs in plain language.',
    },
    {
      title: 'Keep communication direct',
      body: 'Customers reach the business by phone. You speak with the team directly about your heating and cooling needs.',
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="A heating and cooling contractor focused on clear answers"
        description={`${BUSINESS.name} provides heating and air conditioning service for homeowners and property owners across ${BUSINESS.regionName}, working from ${locationLabel}.`}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
        actions={<PhoneButton label="Call Now" variant="primary" className="px-8 py-4 text-base" />}
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">How we work</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">What you can expect when you call</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {principles.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-navy-900">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">Who we serve</p>
            <h2 className="text-3xl font-bold leading-tight text-navy-900">Homes and commercial properties</h2>
            <p className="text-base leading-relaxed text-slate-600">
              Homeowners call us about cooling that cannot keep up, heat that stops working, and systems that need attention before the next season. Property owners call about heating and cooling for their buildings.
            </p>
          </div>
          <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-8">
            <h2 className="text-xl font-bold text-navy-900">Find us</h2>
            <p className="flex items-center gap-3 text-sm text-slate-600">
              <Phone className="h-4 w-4 text-sky-600" aria-hidden="true" />
              <a href={telHref} className="font-semibold text-navy-900 hover:underline">
                {BUSINESS.phoneDisplay}
              </a>
            </p>
            <p className="text-sm text-slate-600">Main location: {locationLabel}</p>
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-navy-800 hover:text-sky-600"
            >
              Open our Google Maps listing
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link to="/contact" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-navy-800 hover:text-sky-600">
              Contact information
            </Link>
          </div>
        </div>
      </section>

      <CallBand />
    </>
  );
}

export function ReviewsPage() {
  const [filter, setFilter] = useState<'all' | 'positive' | 'negative' | 'punctuality'>('all');

  useSeo({
    title: `Google Reviews (${GOOGLE_REVIEWS_SUMMARY.rating} Stars, 6 Reviews) | ${BUSINESS.name}`,
    description: `Read genuine Google reviews for ${BUSINESS.name}. 3.7-star rating across 6 customer reviews in Lawrenceville, GA.`,
    path: '/reviews',
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
        eyebrow="Customer Reviews"
        title="Google Reviews for Budget Repair Solutions"
        description="Read genuine, unedited customer reviews from our Google Maps profile. See what homeowners in Lawrenceville and Georgia have shared."
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
  useSeo({
    title: `Contact Budget Repair Solutions | HVAC Contractor in ${locationLabel}`,
    description: `Call ${BUSINESS.name} at ${BUSINESS.phoneDisplay} for heating and air conditioning service in ${locationLabel}. Find our location on the map.`,
    path: '/contact',
  });

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Call Budget Repair Solutions"
        description="Phone is the way to reach us. Call to describe your heating or cooling needs and confirm availability."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3">
          <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-8 lg:col-span-1">
            <h2 className="text-xl font-bold text-navy-900">Phone</h2>
            <PhoneButton label={`Call ${BUSINESS.phoneDisplay}`} className="w-full" />
            <h2 className="text-xl font-bold text-navy-900">Location</h2>
            <p className="text-sm leading-relaxed text-slate-600">{locationLabel}</p>
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-navy-800 hover:text-sky-600"
            >
              Open our Google Maps listing
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm lg:col-span-2">
            <iframe
              src={BUSINESS.mapEmbedSrc}
              title={`${BUSINESS.name} location on Google Maps`}
              className="aspect-[4/3] h-full min-h-[320px] w-full border-0 md:aspect-[16/10]"
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
