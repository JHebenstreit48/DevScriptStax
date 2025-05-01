import { Outlet } from 'react-router-dom';
import { useState, useEffect } from "react";
import Footer from '@/Components/PageComponents/Footer';
import SplashScreen from '@/Pages/ErrorHomeSplash/SplashScreen';
import '@/SCSS/SharedStyles/PageStyles/Page.scss';
import '@/SCSS/SharedStyles/PageStyles/Header.scss';
import '@/SCSS/SharedStyles/NavigationStyles/Navigation.scss';
import '@/SCSS/SharedStyles/PageStyles/Footer.scss';
import '@/SCSS/SharedStyles/PageStyles/Error.scss';
import '@/SCSS/SharedStyles/PageStyles/SplashScreen.scss';

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
