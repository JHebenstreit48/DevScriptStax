// src/App.tsx
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

// Components
import Footer from "@/Components/Shared/Footer";

// Styles (unchanged except EntryScreen.scss removed)
import "@/SCSS/PageStyles/Page.scss";
import "@/SCSS/PageStyles/Header/Header.scss";
import "@/SCSS/PageStyles/Footer.scss";
import "@/SCSS/NavigationStyles/Navigation.scss";
import "@/SCSS/NavigationStyles/SearchModal.scss";
import "@/SCSS/PageStyles/Error.scss";

export default function App() {
  return (
    <div className="appContainer">
      <div className="contentWrapper">
        {/* Keep a route-level Suspense so lazy routes don't complain */}
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}