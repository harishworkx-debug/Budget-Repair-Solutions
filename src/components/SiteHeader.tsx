import { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  ChevronDown,
  Flame,
  MapPin,
  Menu,
  Phone,
  Snowflake,
  Wrench,
  X,
} from 'lucide-react';
import { BUSINESS } from '@/config/business';
import { SERVICES, serviceUrl } from '@/data/services';
import { SERVICE_AREAS } from '@/data/areas';
import { Link, usePathname } from '@/lib/router';
import { PhoneButton } from '@/components/PhoneButton';

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [areasDropdownOpen, setAreasDropdownOpen] = useState(false);

  // Mobile accordion states
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);

  const servicesRef = useRef<HTMLLIElement>(null);
  const areasRef = useRef<HTMLLIElement>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const areasTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false);
    setServicesDropdownOpen(false);
    setAreasDropdownOpen(false);
    setMobileServicesOpen(false);
    setMobileAreasOpen(false);
  }, [pathname]);

  // Click outside to close desktop dropdowns
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (servicesRef.current && !servicesRef.current.contains(target)) {
        setServicesDropdownOpen(false);
      }
      if (areasRef.current && !areasRef.current.contains(target)) {
        setAreasDropdownOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setServicesDropdownOpen(false);
        setAreasDropdownOpen(false);
        setMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Desktop hover handlers with smooth delay
  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    if (areasTimeoutRef.current) clearTimeout(areasTimeoutRef.current);
    setAreasDropdownOpen(false);
    setServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  const handleAreasMouseEnter = () => {
    if (areasTimeoutRef.current) clearTimeout(areasTimeoutRef.current);
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesDropdownOpen(false);
    setAreasDropdownOpen(true);
  };

  const handleAreasMouseLeave = () => {
    areasTimeoutRef.current = setTimeout(() => {
      setAreasDropdownOpen(false);
    }, 150);
  };

  // Active route helpers
  const isServicesActive =
    pathname === '/hvac-services' ||
    pathname === '/air-conditioning-services' ||
    pathname === '/heating-services' ||
    pathname.endsWith(`-${BUSINESS.locationSlug}`);

  const isAreasActive =
    pathname === '/service-areas' ||
    SERVICE_AREAS.some(
      (area) => pathname === `/${area.slug}` || pathname === `/${area.citySlug}`
    );

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Brand / Logo */}
        <Link to="/" className="flex items-center gap-3" aria-label={`${BUSINESS.name} home`}>
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-sky-300">
            <Snowflake className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base font-bold text-navy-900">{BUSINESS.name}</span>
            <span className="text-xs font-medium text-slate-500">
              HVAC Contractor, {BUSINESS.city}, {BUSINESS.region}
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {/* Home Link */}
            <li>
              <Link
                to="/"
                aria-current={pathname === '/' ? 'page' : undefined}
                className={`rounded-full px-3.5 py-2 text-sm font-semibold transition-colors duration-200 ${
                  pathname === '/'
                    ? 'bg-navy-50 text-navy-900 font-bold'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-navy-900'
                }`}
              >
                Home
              </Link>
            </li>

            {/* Services Dropdown */}
            <li
              ref={servicesRef}
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button
                type="button"
                onClick={() => setServicesDropdownOpen((prev) => !prev)}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-semibold transition-colors duration-200 ${
                  isServicesActive || servicesDropdownOpen
                    ? 'bg-navy-50 text-navy-900 font-bold'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-navy-900'
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              {/* Desktop Services Dropdown Card */}
              {servicesDropdownOpen && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2 z-50 w-[720px]">
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl ring-1 ring-black/5">
                    <div className="grid grid-cols-12 divide-x divide-slate-100">
                      {/* Left: Categories Overview */}
                      <div className="col-span-5 flex flex-col justify-between bg-slate-50/70 p-5">
                        <div>
                          <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            Service Categories
                          </p>
                          <div className="space-y-2">
                            <Link
                              to="/hvac-services"
                              onClick={() => setServicesDropdownOpen(false)}
                              className="group flex items-start gap-3 rounded-xl p-2.5 transition hover:bg-white hover:shadow-sm"
                            >
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-100 text-navy-800 transition group-hover:bg-navy-900 group-hover:text-white">
                                <Wrench className="h-4 w-4" />
                              </span>
                              <div>
                                <div className="text-sm font-bold text-navy-900">
                                  All HVAC Services
                                </div>
                                <div className="text-xs text-slate-500">
                                  Complete heating, cooling & repair lineup
                                </div>
                              </div>
                            </Link>

                            <Link
                              to="/air-conditioning-services"
                              onClick={() => setServicesDropdownOpen(false)}
                              className="group flex items-start gap-3 rounded-xl p-2.5 transition hover:bg-white hover:shadow-sm"
                            >
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-800 transition group-hover:bg-sky-600 group-hover:text-white">
                                <Snowflake className="h-4 w-4" />
                              </span>
                              <div>
                                <div className="text-sm font-bold text-navy-900">
                                  Air Conditioning
                                </div>
                                <div className="text-xs text-slate-500">
                                  AC repairs, installs & seasonal tune-ups
                                </div>
                              </div>
                            </Link>

                            <Link
                              to="/heating-services"
                              onClick={() => setServicesDropdownOpen(false)}
                              className="group flex items-start gap-3 rounded-xl p-2.5 transition hover:bg-white hover:shadow-sm"
                            >
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-800 transition group-hover:bg-amber-600 group-hover:text-white">
                                <Flame className="h-4 w-4" />
                              </span>
                              <div>
                                <div className="text-sm font-bold text-navy-900">
                                  Heating Services
                                </div>
                                <div className="text-xs text-slate-500">
                                  Furnaces, heat pumps & winter readiness
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>

                        {/* Call Banner in dropdown */}
                        <div className="mt-4 rounded-xl border border-navy-100 bg-white p-3 shadow-xs">
                          <p className="text-xs font-semibold text-navy-900">Need immediate help?</p>
                          <p className="mt-0.5 text-xs text-slate-500">Speak directly with our team:</p>
                          <a
                            href={`tel:${BUSINESS.phoneTel}`}
                            className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-800"
                          >
                            <Phone className="h-3.5 w-3.5" />
                            {BUSINESS.phoneDisplay}
                          </a>
                        </div>
                      </div>

                      {/* Right: Direct Service Pages */}
                      <div className="col-span-7 p-5">
                        <div className="mb-3 flex items-center justify-between">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            Specific Services ({SERVICES.length})
                          </span>
                          <Link
                            to="/hvac-services"
                            onClick={() => setServicesDropdownOpen(false)}
                            className="flex items-center gap-1 text-xs font-semibold text-sky-600 hover:text-sky-700"
                          >
                            View overview <ArrowRight className="h-3 w-3" />
                          </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                          {SERVICES.map((s) => {
                            const Icon = s.icon;
                            return (
                              <Link
                                key={s.slug}
                                to={serviceUrl(s)}
                                onClick={() => setServicesDropdownOpen(false)}
                                className="group flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs font-semibold text-slate-700 transition hover:bg-navy-50 hover:text-navy-900"
                              >
                                <Icon className="h-3.5 w-3.5 shrink-0 text-slate-400 group-hover:text-sky-600" />
                                <span className="truncate">{s.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* Service Areas Dropdown */}
            <li
              ref={areasRef}
              className="relative"
              onMouseEnter={handleAreasMouseEnter}
              onMouseLeave={handleAreasMouseLeave}
            >
              <button
                type="button"
                onClick={() => setAreasDropdownOpen((prev) => !prev)}
                aria-expanded={areasDropdownOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-semibold transition-colors duration-200 ${
                  isAreasActive || areasDropdownOpen
                    ? 'bg-navy-50 text-navy-900 font-bold'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-navy-900'
                }`}
              >
                <span>Service Areas</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    areasDropdownOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              {/* Desktop Service Areas Dropdown Card */}
              {areasDropdownOpen && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2 z-50 w-[540px]">
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl ring-1 ring-black/5">
                    {/* View All Areas Link */}
                    <div className="mb-4">
                      <Link
                        to="/service-areas"
                        onClick={() => setAreasDropdownOpen(false)}
                        className="flex items-center justify-between rounded-xl border border-sky-100 bg-sky-50/70 px-4 py-3 text-sm transition hover:bg-sky-100/70"
                      >
                        <div className="flex items-center gap-2.5">
                          <MapPin className="h-4 w-4 text-sky-600" />
                          <span className="font-bold text-navy-900">All Service Areas & Maps</span>
                        </div>
                        <span className="flex items-center gap-1 text-xs font-semibold text-sky-700">
                          View Coverage <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </Link>
                    </div>

                    <p className="mb-2.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Locations We Serve
                    </p>

                    <div className="grid grid-cols-2 gap-1.5">
                      {SERVICE_AREAS.map((area) => {
                        const isMain = area.citySlug === BUSINESS.locationSlug;
                        return (
                          <Link
                            key={area.slug}
                            to={`/${area.slug}`}
                            onClick={() => setAreasDropdownOpen(false)}
                            className="group flex items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-navy-50 hover:text-navy-900"
                          >
                            <div className="flex items-center gap-2 truncate">
                              <MapPin className="h-3.5 w-3.5 shrink-0 text-slate-400 group-hover:text-sky-600" />
                              <span className="truncate">
                                {area.city}, {BUSINESS.region}
                              </span>
                            </div>
                            {isMain && (
                              <span className="rounded bg-sky-100 px-1.5 py-0.5 text-[10px] font-bold text-sky-800">
                                Main
                              </span>
                            )}
                          </Link>
                        );
                      })}
                    </div>

                    <div className="mt-4 border-t border-slate-100 pt-3 text-center text-xs text-slate-500">
                      Serving {BUSINESS.regionName}. Call{' '}
                      <a href={`tel:${BUSINESS.phoneTel}`} className="font-bold text-navy-900 hover:underline">
                        {BUSINESS.phoneDisplay}
                      </a>{' '}
                      to verify coverage for your home.
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* Standard Nav Links */}
            <li>
              <Link
                to="/about"
                aria-current={pathname === '/about' ? 'page' : undefined}
                className={`rounded-full px-3.5 py-2 text-sm font-semibold transition-colors duration-200 ${
                  pathname === '/about'
                    ? 'bg-navy-50 text-navy-900 font-bold'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-navy-900'
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/reviews"
                aria-current={pathname === '/reviews' ? 'page' : undefined}
                className={`rounded-full px-3.5 py-2 text-sm font-semibold transition-colors duration-200 ${
                  pathname === '/reviews'
                    ? 'bg-navy-50 text-navy-900 font-bold'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-navy-900'
                }`}
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                aria-current={pathname === '/contact' ? 'page' : undefined}
                className={`rounded-full px-3.5 py-2 text-sm font-semibold transition-colors duration-200 ${
                  pathname === '/contact'
                    ? 'bg-navy-50 text-navy-900 font-bold'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-navy-900'
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right side CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <PhoneButton label="Call Now" variant="primary" className="hidden px-5 py-2.5 sm:inline-flex" />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-navy-900 transition hover:bg-slate-50 lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        id="mobile-menu"
        className={`overflow-y-auto border-t border-slate-200 bg-white transition-all duration-300 lg:hidden ${
          menuOpen ? 'max-h-[85vh] py-6 shadow-xl' : 'max-h-0 border-t-0 py-0'
        }`}
      >
        <nav aria-label="Mobile navigation" className="mx-auto max-w-7xl px-6">
          <ul className="grid gap-1">
            {/* Mobile Home */}
            <li>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className={`block rounded-xl px-4 py-3 text-base font-semibold ${
                  pathname === '/' ? 'bg-navy-50 text-navy-900' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                Home
              </Link>
            </li>

            {/* Mobile Services Accordion */}
            <li>
              <button
                type="button"
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                aria-expanded={mobileServicesOpen}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-semibold ${
                  isServicesActive ? 'bg-navy-50 text-navy-900' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-5 w-5 text-slate-500 transition-transform duration-200 ${
                    mobileServicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="my-1 ml-3 border-l-2 border-navy-100 pl-3">
                  <div className="space-y-1 py-1">
                    <p className="px-3 pt-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Overview Pages
                    </p>
                    <Link
                      to="/hvac-services"
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm font-semibold text-navy-900 hover:bg-slate-100"
                    >
                      All HVAC Services
                    </Link>
                    <Link
                      to="/air-conditioning-services"
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm font-semibold text-navy-900 hover:bg-slate-100"
                    >
                      Air Conditioning Services
                    </Link>
                    <Link
                      to="/heating-services"
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm font-semibold text-navy-900 hover:bg-slate-100"
                    >
                      Heating Services
                    </Link>

                    <p className="px-3 pt-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      All HVAC Repairs & Installs
                    </p>
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        to={serviceUrl(s)}
                        onClick={() => setMenuOpen(false)}
                        className="block rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-navy-900"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>

            {/* Mobile Service Areas Accordion */}
            <li>
              <button
                type="button"
                onClick={() => setMobileAreasOpen((prev) => !prev)}
                aria-expanded={mobileAreasOpen}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-semibold ${
                  isAreasActive ? 'bg-navy-50 text-navy-900' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>Service Areas</span>
                <ChevronDown
                  className={`h-5 w-5 text-slate-500 transition-transform duration-200 ${
                    mobileAreasOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {mobileAreasOpen && (
                <div className="my-1 ml-3 border-l-2 border-navy-100 pl-3">
                  <div className="space-y-1 py-1">
                    <Link
                      to="/service-areas"
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm font-bold text-sky-700 hover:bg-slate-100"
                    >
                      All Service Areas & Map
                    </Link>
                    {SERVICE_AREAS.map((area) => (
                      <Link
                        key={area.slug}
                        to={`/${area.slug}`}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center justify-between rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-navy-900"
                      >
                        <span>
                          {area.city}, {BUSINESS.region}
                        </span>
                        {area.citySlug === BUSINESS.locationSlug && (
                          <span className="rounded bg-sky-100 px-1.5 py-0.5 text-[10px] font-bold text-sky-800">
                            Main
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>

            {/* About Link */}
            <li>
              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className={`block rounded-xl px-4 py-3 text-base font-semibold ${
                  pathname === '/about' ? 'bg-navy-50 text-navy-900' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                About
              </Link>
            </li>

            {/* Reviews Link */}
            <li>
              <Link
                to="/reviews"
                onClick={() => setMenuOpen(false)}
                className={`block rounded-xl px-4 py-3 text-base font-semibold ${
                  pathname === '/reviews' ? 'bg-navy-50 text-navy-900' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                Reviews
              </Link>
            </li>

            {/* Contact Link */}
            <li>
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className={`block rounded-xl px-4 py-3 text-base font-semibold ${
                  pathname === '/contact' ? 'bg-navy-50 text-navy-900' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>

          <PhoneButton label="Call Now" className="mt-6 w-full" />
        </nav>
      </div>
    </header>
  );
}
