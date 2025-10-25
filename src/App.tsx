import { Outlet, useLocation } from "react-router-dom";
import { Suspense } from "react";
import Footer from "@/Components/Shared/Footer";

import "@/SCSS/PageStyles/Page.scss";
import "@/SCSS/PageStyles/Header/Header.scss";
import "@/SCSS/PageStyles/Footer.scss";
import "@/SCSS/NavigationStyles/Navigation.scss";
import "@/SCSS/NavigationStyles/SearchModal.scss";
import "@/SCSS/PageStyles/Error.scss";

import { useVisitTracker } from "@/Components/Shared/hooks/useVisitTracker";

export default function App() {
  const { pathname } = useLocation();
  useVisitTracker(pathname);

  return (
    <div className="appContainer">
      <div className="contentWrapper">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}