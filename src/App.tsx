import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '@/Components/Shared/Footer';
import RouteTracker from '@/Components/Shared/analytics/RouteTracker';
import BackToTopGate from '@/Components/Shared/BackToTop/Gate';

import '@/scss/Page/Page.scss';
import '@/scss/Page/Header.scss';
import '@/scss/Page/Footer.scss';
import '@/scss/Navigation/index.scss';
import '@/scss/Page/Error.scss';

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