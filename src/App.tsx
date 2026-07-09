import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/Components/Shared/Header/Header';
import Footer from '@/Components/Shared/Footer';
import RouteTracker from '@/Components/Shared/analytics/RouteTracker';
import BackToTopGate from '@/Components/Shared/BackToTop/Gate';

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