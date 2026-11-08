import { useState, type FormEvent } from 'react';
import { ArrowRight, MapPin, Search, Wrench } from 'lucide-react';
import { BUSINESS } from '@/config/business';
import { SERVICES, serviceUrl } from '@/data/services';
import { SERVICE_AREAS } from '@/data/areas';
import { navigate } from '@/lib/router';

interface ServiceAreaFinderProps {
  className?: string;
  theme?: 'dark' | 'light';
}

export function ServiceAreaFinder({ className = '', theme = 'dark' }: ServiceAreaFinderProps) {
  const [selectedService, setSelectedService] = useState('');
  const [selectedArea, setSelectedArea] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (selectedService) {
      navigate(selectedService);
    } else if (selectedArea) {
      navigate(selectedArea);
    } else {
      navigate('/hvac-services');
    }
  };

  const isDark = theme === 'dark';

  return (
    <div
      className={`rounded-2xl border p-5 sm:p-6 backdrop-blur-md transition-shadow ${
        isDark
          ? 'border-white/20 bg-white/10 shadow-xl shadow-navy-950/40 text-white'
          : 'border-slate-200 bg-white shadow-lg text-navy-900'
      } ${className}`}
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span
            className={`flex h-7 w-7 items-center justify-center rounded-lg ${
              isDark ? 'bg-sky-400/20 text-sky-300' : 'bg-navy-50 text-navy-800'
            }`}
          >
            <Search className="h-4 w-4" aria-hidden="true" />
          </span>
          <h2 className="text-sm font-bold uppercase tracking-wider">
            Quick Service & Area Lookup
          </h2>
        </div>
        <span className={`text-xs ${isDark ? 'text-white/70' : 'text-slate-500'}`}>
          Serving {BUSINESS.regionName}
        </span>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-12">
        {/* Service Dropdown */}
        <div className="sm:col-span-5">
          <label htmlFor="finder-service" className="sr-only">
            Select HVAC Service
          </label>
          <div className="relative">
            <Wrench
              className={`pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 ${
                isDark ? 'text-slate-400' : 'text-slate-400'
              }`}
              aria-hidden="true"
            />
            <select
              id="finder-service"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className={`w-full appearance-none rounded-xl border py-3 pl-10 pr-9 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-sky-400 ${
                isDark
                  ? 'border-white/20 bg-navy-900 text-white placeholder-white/50'
                  : 'border-slate-200 bg-slate-50 text-slate-800'
              }`}
            >
              <option value="">Choose a Service (All Services)</option>
              <optgroup label="Categories">
                <option value="/hvac-services">All HVAC Services</option>
                <option value="/air-conditioning-services">Air Conditioning Services</option>
                <option value="/heating-services">Heating Services</option>
              </optgroup>
              <optgroup label="Specific HVAC Services">
                {SERVICES.map((s) => (
                  <option key={s.slug} value={serviceUrl(s)}>
                    {s.name}
                  </option>
                ))}
              </optgroup>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400">
              ▼
            </span>
          </div>
        </div>

        {/* Service Area Dropdown */}
        <div className="sm:col-span-4">
          <label htmlFor="finder-area" className="sr-only">
            Select Service Area
          </label>
          <div className="relative">
            <MapPin
              className={`pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 ${
                isDark ? 'text-slate-400' : 'text-slate-400'
              }`}
              aria-hidden="true"
            />
            <select
              id="finder-area"
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              className={`w-full appearance-none rounded-xl border py-3 pl-10 pr-9 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-sky-400 ${
                isDark
                  ? 'border-white/20 bg-navy-900 text-white placeholder-white/50'
                  : 'border-slate-200 bg-slate-50 text-slate-800'
              }`}
            >
              <option value="">Choose Area / City (All Areas)</option>
              <option value="/service-areas">All Service Areas Overview</option>
              <optgroup label="Local Georgia Cities (AC Repair)">
                {SERVICE_AREAS.map((area) => (
                  <option key={area.slug} value={`/${area.slug}`}>
                    AC Repair in {area.city}, {BUSINESS.region}{' '}
                    {area.citySlug === BUSINESS.locationSlug ? '(Main Office)' : ''}
                  </option>
                ))}
              </optgroup>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400">
              ▼
            </span>
          </div>
        </div>

        {/* Submit / Find Button */}
        <div className="sm:col-span-3">
          <button
            type="submit"
            className="flex h-full w-full items-center justify-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-bold text-navy-950 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300 active:scale-[0.99]"
          >
            <span>Find Service</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </form>
    </div>
  );
}

