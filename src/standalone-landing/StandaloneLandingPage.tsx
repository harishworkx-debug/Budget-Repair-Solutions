import { useEffect } from 'react';
import { Phone, Calendar } from 'lucide-react';
import { LANDING_CONFIG } from './landingData';
import { LandingHeader } from './LandingHeader';
import { LandingHero } from './LandingHero';
import { LandingServices } from './LandingServices';
import { LandingAbout } from './LandingAbout';
import { LandingServiceArea } from './LandingServiceArea';
import { LandingWhyUs } from './LandingWhyUs';
import { LandingFaq } from './LandingFaq';
import { LandingContact } from './LandingContact';
import { LandingFooter } from './LandingFooter';

export function StandaloneLandingPage() {
  useEffect(() => {
    // 1. Manage Document Title
    const originalTitle = document.title;
    document.title = `${LANDING_CONFIG.headlineIdentity} | Professional Heating & Air Conditioning Services`;

    // 2. Manage Meta Description
    let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : null;
    const landingDesc = `Need HVAC service in Lawrenceville, GA? Professional air conditioning repair, heating service, and maintenance across Gwinnett County. Call ${LANDING_CONFIG.phoneDisplay}.`;

    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', landingDesc);

    // 3. Isolated JSON-LD Schema (Zero company name, strictly Niche + Location)
    const schemaId = 'standalone-landing-schema';
    let scriptTag = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = schemaId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'HVACBusiness',
      name: LANDING_CONFIG.fullIdentity,
      description:
        'Professional heating and air conditioning diagnostics, repairs, installations, and seasonal maintenance in Lawrenceville, GA and Gwinnett County.',
      telephone: LANDING_CONFIG.phoneTel,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: LANDING_CONFIG.city,
        addressRegion: LANDING_CONFIG.state,
        postalCode: LANDING_CONFIG.zip,
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 33.9562,
        longitude: -83.988,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '19:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday'],
          opens: '08:30',
          closes: '17:00',
        },
      ],
      areaServed: [
        { '@type': 'City', name: 'Lawrenceville, GA' },
        { '@type': 'City', name: 'Snellville, GA' },
        { '@type': 'City', name: 'Lilburn, GA' },
        { '@type': 'City', name: 'Duluth, GA' },
        { '@type': 'City', name: 'Suwanee, GA' },
        { '@type': 'City', name: 'Loganville, GA' },
        { '@type': 'City', name: 'Grayson, GA' },
        { '@type': 'City', name: 'Dacula, GA' },
        { '@type': 'City', name: 'Norcross, GA' },
        { '@type': 'City', name: 'Atlanta, GA' },
      ],
      hasMap: LANDING_CONFIG.mapEmbedUrl,
    };

    scriptTag.textContent = JSON.stringify(schemaData);

    // Cleanup when unmounting or navigating away
    return () => {
      document.title = originalTitle;
      if (metaDesc && originalDesc !== null) {
        metaDesc.setAttribute('content', originalDesc);
      }
      const existingScript = document.getElementById(schemaId);
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-700 antialiased selection:bg-sky-500 selection:text-white">
      {/* Skip to Main Content */}
      <a
        href="#main-landing"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-navy-950 focus:ring-2 focus:ring-sky-500"
      >
        Skip to main content
      </a>

      {/* Standalone Landing Header */}
      <LandingHeader />

      {/* Main Sections */}
      <main id="main-landing" className="pb-20 md:pb-0">
        <LandingHero />
        <LandingServices />
        <LandingAbout />
        <LandingServiceArea />
        <LandingWhyUs />
        <LandingFaq />
        <LandingContact />
      </main>

      {/* Standalone Landing Footer */}
      <LandingFooter />

      {/* Floating Mobile Tap-to-Call Bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3 backdrop-blur-md shadow-lg md:hidden">
        <div className="grid grid-cols-2 gap-2">
          <a
            href={`tel:${LANDING_CONFIG.phoneTel}`}
            className="flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-4 py-3 text-xs font-bold text-white shadow-sm transition active:scale-98"
          >
            <Phone className="h-4 w-4" />
            <span>Call Now</span>
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-xs font-bold text-navy-950 shadow-2xs transition active:scale-98"
          >
            <Calendar className="h-4 w-4 text-sky-600" />
            <span>Book Visit</span>
          </a>
        </div>
      </div>
    </div>
  );
}
