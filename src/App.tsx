import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '@/Components/Shared/Footer';
import RouteTracker from '@/Components/Shared/analytics/RouteTracker';
import BackToTopGate from '@/Components/Shared/BackToTop/Gate';

import '@/scss/page//Page.scss';
import '@/scss/shared/Header/index.scss';
import '@/scss/shared/Footer.scss';
import '@/scss/navigation/index.scss';
import '@/scss/shared/Error.scss';

function RouteFallback() {
  return <div className="routeFallback">Loading…</div>;
}

export default function App() {
  return (
    <div className="appContainer">
      <RouteTracker />
      <BackToTopGate />

      <div className="contentWrapper">
        <Suspense fallback={<RouteFallback />}>
          <Outlet />
        </Suspense>
      </div>

      <Footer />
    </div>
  );
}