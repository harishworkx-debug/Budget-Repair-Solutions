import { MapPin, Navigation, Car, ShieldCheck } from 'lucide-react';
import { LANDING_CONFIG, NEARBY_COMMUNITIES } from './landingData';

export function LandingServiceArea() {
  return (
    <section id="service-area" className="scroll-mt-20 border-t border-slate-200 bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-600 sm:text-sm">
            Regional Coverage
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-navy-950 sm:text-4xl">
            Service Areas Across Gwinnett County & Surrounding Corridors
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            Headquartered in Lawrenceville, GA 30046. We provide transparent local dispatch across verified neighboring communities.
          </p>
        </div>

        {/* Central Hub Spotlight */}
        <div className="mt-12 rounded-2xl border border-sky-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3.5 py-1 text-xs font-bold text-sky-800">
                <MapPin className="h-3.5 w-3.5 text-sky-600" />
                Primary Operating Base: Lawrenceville, GA
              </div>
              <h3 className="mt-3 text-2xl font-bold text-navy-950">
                Direct Dispatch from Lawrenceville (ZIP 30046)
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Technicians depart directly from our Lawrenceville base, travelling along GA-120 (Duluth Hwy), US-29 (Lawrenceville Hwy), GA-124 (Scenic Hwy), and GA-316 to reach local homes promptly with equipped diagnostic vans.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <div className="flex items-center gap-2 rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-xs font-semibold text-slate-700">
                <Car className="h-4 w-4 text-sky-600" />
                <span>Highway 120 / US-29 / GA-316 Corridors</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-xs font-semibold text-slate-700">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>Zero Fictitious Satellite Offices</span>
              </div>
            </div>
          </div>
        </div>

        {/* Surrounding Communities Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {NEARBY_COMMUNITIES.map((area) => (
            <div
              key={area.name}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-2xs transition hover:border-sky-300 hover:shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-bold text-navy-950">
                    <Navigation className="h-4 w-4 text-sky-600" />
                    <span>{area.name}</span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500">
                    {area.distance}
                  </span>
                </div>
                <div className="mt-2 text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">ZIP Codes:</span> {area.zipCodes}
                </div>
                <div className="mt-1 text-xs text-slate-600 leading-relaxed">
                  {area.dispatchCorridor}
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-sky-700">
                <span>{area.county}</span>
                <span>Dispatch Available</span>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Google Maps Embed (Centered on Lawrenceville, GA with NO business parameters) */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-slate-50/80 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600">
              <MapPin className="h-4 w-4 text-sky-600" />
              Service Coverage Map: Lawrenceville & Gwinnett County
            </div>
            <span className="text-xs text-slate-500">Base: 30046</span>
          </div>
          <div className="aspect-[16/9] w-full sm:aspect-[21/9]">
            <iframe
              title="Service Area Map - Lawrenceville GA"
              src={LANDING_CONFIG.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
