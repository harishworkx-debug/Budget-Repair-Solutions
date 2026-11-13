import { ExternalLink, MapPin, Phone, Snowflake } from 'lucide-react';
import { BUSINESS, locationLabel, telHref } from '@/config/business';
import { SERVICE_AREAS } from '@/data/areas';
import { Link } from '@/lib/router';

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Column 1: Company & Contact Information */}
        <div className="flex flex-col gap-5">
          <Link to="/" className="flex items-center gap-3 text-white">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-sky-300">
              <Snowflake className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="text-base font-bold">{BUSINESS.name}</span>
          </Link>
          <p className="text-xs leading-relaxed text-slate-300">
            Professional HVAC contractor serving Lawrenceville, Gwinnett County, and surrounding Georgia communities with honest diagnostics and dependable heating and cooling care.
          </p>
          <a
            href={telHref}
            className="inline-flex items-center gap-2.5 text-base font-bold text-white transition hover:text-sky-300"
          >
            <Phone className="h-4 w-4 text-sky-300" aria-hidden="true" />
            {BUSINESS.phoneDisplay}
          </a>
          <p className="flex items-start gap-2.5 text-xs text-slate-300">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" aria-hidden="true" />
            <span>{locationLabel}</span>
          </p>
          <a
            href={BUSINESS.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-1.5 text-xs font-semibold text-sky-300 hover:text-sky-200"
          >
            View Google Maps Profile
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>

          <div className="mt-2 border-t border-white/10 pt-4">
            <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-white">Company Information</h2>
            <ul className="grid gap-2 text-xs">
              <li>
                <Link to="/about" className="transition hover:text-white">
                  About Our HVAC Technicians
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="transition hover:text-white">
                  Customer Reviews & Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition hover:text-white">
                  Contact & Request Service
                </Link>
              </li>
              <li>
                <Link to="/service-areas" className="transition hover:text-white">
                  All Georgia Service Areas
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 2: Cooling & General HVAC Services */}
        <div>
          <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
            Cooling & HVAC Services
          </h2>
          <ul className="grid gap-2.5 text-xs">
            <li>
              <Link to="/hvac-services" className="font-semibold text-sky-300 hover:text-white">
                All HVAC Services Hub
              </Link>
            </li>
            <li>
              <Link to="/air-conditioning-services" className="font-semibold text-sky-300 hover:text-white">
                Air Conditioning Services Hub
              </Link>
            </li>
            <li className="my-1 border-t border-white/10" />
            <li>
              <Link to="/ac-repair-lawrenceville-ga" className="transition hover:text-white">
                AC Repair Lawrenceville GA
              </Link>
            </li>
            <li>
              <Link to="/air-conditioning-installation-lawrenceville-ga" className="transition hover:text-white">
                Air Conditioning Installation
              </Link>
            </li>
            <li>
              <Link to="/hvac-repair-lawrenceville-ga" className="transition hover:text-white">
                HVAC Repair Lawrenceville
              </Link>
            </li>
            <li>
              <Link to="/hvac-installation-lawrenceville-ga" className="transition hover:text-white">
                HVAC Installation & Replacement
              </Link>
            </li>
            <li>
              <Link to="/thermostat-installation-lawrenceville-ga" className="transition hover:text-white">
                Thermostat Installation & Repair
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Heating & Maintenance Services */}
        <div>
          <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
            Heating & Maintenance
          </h2>
          <ul className="grid gap-2.5 text-xs">
            <li>
              <Link to="/heating-services" className="font-semibold text-sky-300 hover:text-white">
                Heating Services Hub
              </Link>
            </li>
            <li className="my-1 border-t border-white/10" />
            <li>
              <Link to="/heating-repair-lawrenceville-ga" className="transition hover:text-white">
                Heating Repair Lawrenceville
              </Link>
            </li>
            <li>
              <Link to="/furnace-repair-lawrenceville-ga" className="transition hover:text-white">
                Furnace Repair & Ignition
              </Link>
            </li>
            <li>
              <Link to="/furnace-installation-lawrenceville-ga" className="transition hover:text-white">
                Furnace Installation & Replacement
              </Link>
            </li>
            <li>
              <Link to="/heat-pump-repair-lawrenceville-ga" className="transition hover:text-white">
                Heat Pump Repair & Diagnostics
              </Link>
            </li>
            <li>
              <Link to="/heat-pump-installation-lawrenceville-ga" className="transition hover:text-white">
                Heat Pump Installation
              </Link>
            </li>
            <li>
              <Link to="/hvac-maintenance-lawrenceville-ga" className="transition hover:text-white">
                Seasonal HVAC Maintenance & Tune-Ups
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Service Areas (All 10 Cities) */}
        <div>
          <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
            Georgia Service Areas
          </h2>
          <ul className="grid gap-2.5 text-xs">
            {SERVICE_AREAS.map((area) => (
              <li key={area.slug}>
                <Link to={`/${area.slug}`} className="transition hover:text-white">
                  AC Repair in {area.city}, {BUSINESS.region}
                  {area.citySlug === BUSINESS.locationSlug && (
                    <span className="ml-1.5 rounded bg-sky-900 px-1 py-0.5 text-[10px] text-sky-200">
                      HQ
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} {BUSINESS.name}. All rights reserved.</p>
          <p>{BUSINESS.category} • Licensed, EPA-Certified HVAC Service • {locationLabel}</p>
        </div>
      </div>
    </footer>
  );
}
