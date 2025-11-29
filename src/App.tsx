import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '@/Components/Shared/Footer';
import RouteTracker from '@/Components/Shared/analytics/RouteTracker';
import BackToTopGate from '@/Components/Shared/BackToTop/Gate';

import '@/SCSS/Page/Page.scss';
import '@/SCSS/Page/Header/Header.scss';
import '@/SCSS/Page/Footer.scss';
import '@/SCSS/Navigation/Navigation.scss';
import '@/SCSS/Navigation/SearchModal.scss';
import '@/SCSS/Page/Error.scss';

export default function App() {
  return (
    <div className="appContainer">
      <RouteTracker />
      <BackToTopGate />

      <div className="contentWrapper">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>

      <Footer />
    </div>
  );
}