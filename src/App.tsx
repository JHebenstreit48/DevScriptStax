import { Outlet } from 'react-router-dom';
import { useState, useEffect } from "react";
import Footer from '@/Components/Footer';
import SplashScreen from '@/Pages/ErrorHomeSplash/SplashScreen';

import '@/SCSS/HomeErrorPage/Page.scss';
import '@/SCSS/HeaderFooterNav/Header.scss';
import '@/SCSS/HeaderFooterNav/Navigation.scss';
import '@/SCSS/HeaderFooterNav/Footer.scss';
import '@/SCSS/HomeErrorPage/Error.scss';
import '@/SCSS/BackToTop.scss';
import '@/SCSS/Notes.scss';
import '@/SCSS/SplashScreen.scss';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="appContainer">
      {showSplash ? (
        <SplashScreen />
      ) : (
        <>
          <div className="contentWrapper">
            <Outlet />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}
