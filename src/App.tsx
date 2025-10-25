import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "@/Components/Shared/Footer";
import RouteTracker from "@/Components/Shared/analytics/RouteTracker";

import "@/SCSS/PageStyles/Page.scss";
import "@/SCSS/PageStyles/Header/Header.scss";
import "@/SCSS/PageStyles/Footer.scss";
import "@/SCSS/NavigationStyles/Navigation.scss";
import "@/SCSS/NavigationStyles/SearchModal.scss";
import "@/SCSS/PageStyles/Error.scss";

export default function App() {
  return (
    <div className="appContainer">
      {/* Mount before any page renders to ensure event capture */}
      <RouteTracker />

      <div className="contentWrapper">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>

      <Footer />
    </div>
  );
}