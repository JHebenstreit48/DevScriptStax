import { Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from "react";

// Component Imports
import Footer from '@/Components/Shared/Footer';
import EntryScreen from "@/Pages/Special/EntryScreen";
import SplashScreen from '@/Pages/Special/SplashScreen';

// SCSS Imports
import '@/SCSS/PageStyles/Page.scss';
import '@/SCSS/PageStyles/Header.scss';
import '@/SCSS/PageStyles/Footer.scss';
import '@/SCSS/NavigationStyles/Navigation.scss';
import '@/SCSS/NavigationStyles/SearchModal.scss';
import '@/SCSS/PageStyles/Error.scss';
import '@/SCSS/PageStyles/EntryScreen.scss';
import '@/SCSS/PageStyles/SplashScreen.scss';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  
  useEffect(() => {
    const entered = sessionStorage.getItem("hasEntered");
    if (entered === "true") setHasEntered(true);
  }, []);

  const handleEnter = () => {
    sessionStorage.setItem("hasEntered", "true");
    setHasEntered(true);
  };

  if (isLoading) return <SplashScreen />;
  if (!hasEntered) return <EntryScreen onEnter={handleEnter} />;

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
