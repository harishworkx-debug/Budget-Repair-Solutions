import type { ReactNode } from 'react';
import { BUSINESS } from '@/config/business';
import { AboutPage, ContactPage, ReviewsPage } from '@/pages/InfoPages';
import { AreaDetailPage, ServiceAreasPage } from '@/pages/AreaPages';
import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ServiceDetailPage } from '@/pages/ServiceDetailPage';
import { ServiceListPage } from '@/pages/ServiceListPage';
import { findServiceAreaBySlug } from '@/data/areas';
import { SERVICES, findServiceBySlug, servicesWithTag } from '@/data/services';

const LOCATION_SUFFIX = `-${BUSINESS.locationSlug}`;

export function renderRoute(path: string): ReactNode {
  const route = path.length > 1 ? path.replace(/\/+$/, '') : path;

  switch (route) {
    case '/':
      return <HomePage />;
    case '/hvac-services':
      return (
        <ServiceListPage
          path="/hvac-services"
          title={`HVAC Services Lawrenceville GA | ${BUSINESS.name}`}
          description={`Comprehensive HVAC services in Lawrenceville, GA by ${BUSINESS.name}. Trusted HVAC contractor and HVAC service company for repairs, installation, and tune-ups.`}
          eyebrow="HVAC Services"
          heading="HVAC Services in Lawrenceville, GA"
          intro="Browse heating and cooling services from our Lawrenceville HVAC service company. From fast repairs and seasonal tune-ups to full system replacements, our local technicians are ready to help."
          crumbs={[{ label: 'Home', to: '/' }, { label: 'HVAC Services' }]}
          services={SERVICES}
        />
      );
    case '/air-conditioning-services':
      return (
        <ServiceListPage
          path="/air-conditioning-services"
          title={`Air Conditioning Services Lawrenceville GA | ${BUSINESS.name}`}
          description={`Reliable air conditioning services in Lawrenceville, GA. Expert AC repair, energy-efficient AC installation, and seasonal AC maintenance from ${BUSINESS.name}.`}
          eyebrow="Air Conditioning Services"
          heading="Air Conditioning Services in Lawrenceville, GA"
          intro="When your cooling system is not keeping up with Georgia heat, our technicians deliver complete air conditioning services—including diagnostic AC repair, new AC installation, and preventive AC maintenance."
          crumbs={[{ label: 'Home', to: '/' }, { label: 'Air Conditioning' }]}
          services={servicesWithTag('cooling')}
        />
      );
    case '/heating-services':
      return (
        <ServiceListPage
          path="/heating-services"
          title={`Heating Services Lawrenceville GA | ${BUSINESS.name}`}
          description={`Dependable heating services in Lawrenceville, GA. Professional heating repair, gas and electric furnace service, and dual-season heat pump service from ${BUSINESS.name}.`}
          eyebrow="Heating Services"
          heading="Heating Services in Lawrenceville, GA"
          intro="Cold weather demands dependable warmth. Explore our Lawrenceville heating services, from emergency heating repair and furnace service to heat pump troubleshooting and system upgrades."
          crumbs={[{ label: 'Home', to: '/' }, { label: 'Heating' }]}
          services={servicesWithTag('heating')}
        />
      );
    case '/service-areas':
      return <ServiceAreasPage />;
    case '/about':
      return <AboutPage />;
    case '/reviews':
      return <ReviewsPage />;
    case '/contact':
      return <ContactPage />;
  }

  if (route.endsWith(LOCATION_SUFFIX)) {
    const serviceSlug = route.slice(1, route.length - LOCATION_SUFFIX.length);
    const service = findServiceBySlug(serviceSlug);
    if (service) return <ServiceDetailPage service={service} />;
  }

  const cleanRoute = route.slice(1);
  const area = findServiceAreaBySlug(cleanRoute);
  if (area) return <AreaDetailPage area={area} />;

  return <NotFoundPage />;
}
