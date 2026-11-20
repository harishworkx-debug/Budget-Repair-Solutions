import { Layout } from '@/components/Layout';
import { renderRoute } from '@/routes';
import { usePathname } from '@/lib/router';
import { USE_LANDING_PAGE_AS_HOME } from '@/siteMode';
import { StandaloneLandingPage } from '@/standalone-landing/StandaloneLandingPage';

function App() {
  const pathname = usePathname();
  const normalizedPath = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;

  // Standalone landing page is active at root if switcher is enabled,
  // or on standby at /home-page and /hvac-lawrenceville-ga at any time.
  const isLandingRoute =
    normalizedPath === '/home-page' ||
    normalizedPath === '/hvac-lawrenceville-ga' ||
    (USE_LANDING_PAGE_AS_HOME && normalizedPath === '/');

  if (isLandingRoute) {
    return <StandaloneLandingPage />;
  }

  return <Layout>{renderRoute(pathname)}</Layout>;
}

export default App;
