import { useState } from 'react';
import { Phone, Menu, X, Thermometer, ShieldCheck } from 'lucide-react';
import { LANDING_CONFIG } from './landingData';

export function LandingHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Service Areas', href: '#service-area' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md shadow-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Strictly Niche + Location Text Identity */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-navy-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg"
          aria-label={LANDING_CONFIG.fullIdentity}
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-600 text-white shadow-sm transition group-hover:bg-sky-700">
            <Thermometer className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="flex flex-col">
            <span className="text-base font-black tracking-tight text-navy-950 sm:text-lg">
              {LANDING_CONFIG.fullIdentity}
            </span>
            <span className="text-[11px] font-semibold text-slate-500">
              {LANDING_CONFIG.county} • Professional Service
            </span>
          </div>
        </a>

        {/* Desktop Anchor Navigation */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Landing Page Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-700 transition hover:text-sky-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Direct Call Action */}
        <div className="hidden items-center gap-3 sm:flex">
          <a
            href={`tel:${LANDING_CONFIG.phoneTel}`}
            className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Call {LANDING_CONFIG.phoneDisplay}</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex items-center justify-center rounded-xl p-2 text-slate-700 transition hover:bg-slate-100 hover:text-navy-900 focus:outline-none focus:ring-2 focus:ring-sky-500 lg:hidden"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-6 shadow-xl lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-semibold text-slate-800 transition hover:bg-sky-50 hover:text-sky-700"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col gap-3">
            <a
              href={`tel:${LANDING_CONFIG.phoneTel}`}
              className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-sky-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-sky-700"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>Call {LANDING_CONFIG.phoneDisplay}</span>
            </a>
            <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              <span>{LANDING_CONFIG.certificationNote.split('•')[0]}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
