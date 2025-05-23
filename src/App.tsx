import { Outlet } from 'react-router-dom';
import { useState, useEffect } from "react";

// ==========================
//     Component Imports
// ==========================

import Footer from '@/Components/Shared/Footer';
import EntryScreen from "@/Pages/Special/EntryScreen";
import SplashScreen from '@/Pages/Special/SplashScreen';

// ==========================
//        SCSS Imports
// ==========================

// ----- Page Styles Start -----
import '@/SCSS/PageStyles/Page.scss';
import '@/SCSS/PageStyles/Header.scss';
import '@/SCSS/PageStyles/Footer.scss';
// ----- Page Styles End -----

// ----- Navigation Styles Start -----
import '@/SCSS/NavigationStyles/Navigation.scss';
import '@/SCSS/NavigationStyles/SearchModal.scss';
// ----- Navigation Styles End -----

// ----- Special Page Styles Start -----
import '@/SCSS/PageStyles/Error.scss';
import '@/SCSS/PageStyles/EntryScreen.scss';
import '@/SCSS/PageStyles/SplashScreen.scss';
// ----- Special Page Styles End -----

// ==========================
//         App Logic
// ==========================

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulated load
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const entered = sessionStorage.getItem("hasEntered");
    if (entered === "true") setHasEntered(true);
  }, []);

  const handleEnter = () => {
    sessionStorage.setItem("hasEntered", "true");
    setHasEntered(true);
  };

  // ==========================
  //      Conditional Renders
  // ==========================

  if (isLoading) return <SplashScreen />;
  if (!hasEntered) return <EntryScreen onEnter={handleEnter} />;

  return (
    <div className="appContainer">
      <div className="contentWrapper">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
