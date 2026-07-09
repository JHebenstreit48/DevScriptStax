import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/components/shared/header/header';
import Footer from '@/components/shared/footer';
import RouteTracker from '@/components/shared/analytics/routeTracker';
import BackToTopGate from '@/components/shared/backToTop/gate';

import '@/scss/page/page.scss';
import '@/scss/shared/header/index.scss';
import '@/scss/shared/footer.scss';
import '@/scss/navigation/index.scss';
import '@/scss/shared/error.scss';

function RouteFallback() {
  return <div className="routeFallback">Loading…</div>;
}

export default function App() {
  return (
    <div className="appContainer">
      <RouteTracker />
      <BackToTopGate />
      <Header />

      <div className="contentWrapper">
        <Suspense fallback={<RouteFallback />}>
          <Outlet />
        </Suspense>
      </div>

      <Footer />
    </div>
  );
}