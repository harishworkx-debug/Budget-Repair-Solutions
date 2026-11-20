import { Phone, MapPin, Thermometer, ShieldCheck } from 'lucide-react';
import { LANDING_CONFIG } from './landingData';

export function LandingFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-900 bg-navy-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Column 1: Identity */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-600 text-white shadow-sm">
                <Thermometer className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-lg font-black tracking-tight text-white">
                {LANDING_CONFIG.fullIdentity}
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
              Professional heating and air conditioning diagnostics, emergency repairs, and energy-efficient system replacements for Lawrenceville and Gwinnett County homeowners.
            </p>
            <div className="flex items-center gap-2 text-xs text-sky-400 font-semibold">
              <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-400" />
              <span>{LANDING_CONFIG.certificationNote}</span>
            </div>
          </div>

          {/* Column 2: Quick Jump Anchors */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Page Navigation
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-xs">
              <li>
                <a href="#services" className="transition hover:text-white">Services</a>
              </li>
              <li>
                <a href="#about" className="transition hover:text-white">About Craftsmanship</a>
              </li>
              <li>
                <a href="#service-area" className="transition hover:text-white">Service Areas</a>
              </li>
              <li>
                <a href="#why-us" className="transition hover:text-white">Why Choose Us</a>
              </li>
              <li>
                <a href="#faq" className="transition hover:text-white">Homeowner FAQs</a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-white">Request Service</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Base */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Direct Contact
            </h4>
            <div className="mt-4 space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                <a
                  href={`tel:${LANDING_CONFIG.phoneTel}`}
                  className="font-bold text-white transition hover:text-sky-300"
                >
                  {LANDING_CONFIG.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                <span>{LANDING_CONFIG.baseLocationDisplay}</span>
              </div>
              <p className="pt-2 text-[11px] text-slate-500">
                Central Gwinnett County dispatch along GA-120, US-29, and GA-316.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {currentYear} {LANDING_CONFIG.fullIdentity}, GA. All rights reserved.</p>
          <p className="text-[11px]">
            Licensed, EPA-Certified HVAC Service • {LANDING_CONFIG.county}, Georgia
          </p>
        </div>
      </div>
    </footer>
  );
}
