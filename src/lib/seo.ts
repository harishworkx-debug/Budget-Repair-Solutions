import { useEffect } from 'react';
import { BUSINESS, absoluteUrl } from '@/config/business';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceSchemaConfig {
  name: string;
  description: string;
  serviceType?: string;
}

export interface SeoOptions {
  title: string;
  description: string;
  path: string;
  breadcrumbs?: BreadcrumbItem[];
  serviceSchema?: ServiceSchemaConfig;
  faqs?: FaqItem[];
  areaServed?: string | string[];
}

const VERIFIED_AREAS = [
  'Lawrenceville, GA',
  'Snellville, GA',
  'Lilburn, GA',
  'Duluth, GA',
  'Suwanee, GA',
  'Loganville, GA',
  'Grayson, GA',
  'Dacula, GA',
  'Norcross, GA',
  'Atlanta, GA',
];

function setMeta(key: string, value: string, attribute: 'name' | 'property' = 'name') {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = value;
}

function buildGraphSchema(options: SeoOptions) {
  const { path, breadcrumbs, serviceSchema, faqs } = options;
  const pageUrl = absoluteUrl(path);
  const homeUrl = absoluteUrl('/');
  const graph: Record<string, unknown>[] = [];

  // 1. Homepage & Root Entities: WebSite + Organization + HVACBusiness
  if (path === '/') {
    graph.push({
      '@type': 'WebSite',
      '@id': `${homeUrl}#website`,
      url: homeUrl,
      name: BUSINESS.name,
      description: 'Reliable HVAC & Air Conditioning Services in Lawrenceville, GA',
      publisher: {
        '@id': `${homeUrl}#organization`,
      },
    });

    graph.push({
      '@type': 'Organization',
      '@id': `${homeUrl}#organization`,
      name: BUSINESS.name,
      url: homeUrl,
      logo: `${homeUrl}favicon.svg`,
      telephone: BUSINESS.phoneTel,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: BUSINESS.phoneTel,
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: 'English',
      },
    });

    graph.push({
      '@type': 'HVACBusiness',
      '@id': `${homeUrl}#business`,
      name: BUSINESS.name,
      url: homeUrl,
      telephone: BUSINESS.phoneTel,
      priceRange: '$$',
      image: `${homeUrl}favicon.svg`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: BUSINESS.city,
        addressRegion: BUSINESS.region,
        postalCode: '30046',
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
      areaServed: VERIFIED_AREAS.map((city) => ({
        '@type': 'City',
        name: city,
      })),
      hasMap: BUSINESS.mapsUrl,
      sameAs: [BUSINESS.mapsUrl],
    });
  } else if (path === '/about') {
    graph.push({
      '@type': 'AboutPage',
      '@id': `${pageUrl}#about`,
      url: pageUrl,
      name: `About ${BUSINESS.name}`,
      description:
        'Local HVAC company in Lawrenceville, GA providing certified heating and cooling diagnostics without sales commissions.',
      mainEntity: {
        '@type': 'Organization',
        name: BUSINESS.name,
        url: homeUrl,
        telephone: BUSINESS.phoneTel,
        address: {
          '@type': 'PostalAddress',
          addressLocality: BUSINESS.city,
          addressRegion: BUSINESS.region,
          postalCode: '30046',
          addressCountry: 'US',
        },
      },
    });
  }

  // 2. Individual Service Schema
  if (serviceSchema) {
    graph.push({
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: serviceSchema.name,
      serviceType: serviceSchema.serviceType || serviceSchema.name,
      description: serviceSchema.description,
      provider: {
        '@type': 'HVACBusiness',
        name: BUSINESS.name,
        url: homeUrl,
        telephone: BUSINESS.phoneTel,
        address: {
          '@type': 'PostalAddress',
          addressLocality: BUSINESS.city,
          addressRegion: BUSINESS.region,
          postalCode: '30046',
          addressCountry: 'US',
        },
      },
      areaServed: {
        '@type': 'City',
        name: `${BUSINESS.city}, ${BUSINESS.region}`,
      },
    });
  }

  // 3. BreadcrumbList Schema
  if (breadcrumbs && breadcrumbs.length > 0) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumbs`,
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.label,
        item: crumb.to ? absoluteUrl(crumb.to) : pageUrl,
      })),
    });
  }

  // 4. FAQPage Schema
  if (faqs && faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${pageUrl}#faq`,
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
  }

  // Fallback entity if graph is empty (e.g. basic page)
  if (graph.length === 0) {
    graph.push({
      '@type': 'HVACBusiness',
      '@id': `${homeUrl}#business`,
      name: BUSINESS.name,
      url: pageUrl,
      telephone: BUSINESS.phoneTel,
      address: {
        '@type': 'PostalAddress',
        addressLocality: BUSINESS.city,
        addressRegion: BUSINESS.region,
        postalCode: '30046',
        addressCountry: 'US',
      },
      areaServed: { '@type': 'State', name: BUSINESS.regionName },
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

function updateJsonLd(options: SeoOptions) {
  let script = document.getElementById('jsonld-schema') as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.id = 'jsonld-schema';
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  const data = buildGraphSchema(options);
  script.textContent = JSON.stringify(data);
}

export function useSeo(options: SeoOptions) {
  const { title, description, path } = options;

  useEffect(() => {
    const url = absoluteUrl(path);
    document.title = title;
    setMeta('description', description);
    setMeta('robots', 'index, follow');
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', url, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:site_name', BUSINESS.name, 'property');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    updateJsonLd(options);
  }, [title, description, path, options]);
}
