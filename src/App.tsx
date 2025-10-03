import { Outlet } from "react-router-dom";
import { useState, Suspense } from "react";

// Components
import Footer from "@/Components/Shared/Footer";
import EntryScreen from "@/Pages/Special/EntryScreen";

// Styles
import "@/SCSS/PageStyles/Page.scss";
import "@/SCSS/PageStyles/Header/Header.scss";
import "@/SCSS/PageStyles/Footer.scss";
import "@/SCSS/NavigationStyles/Navigation.scss";
import "@/SCSS/NavigationStyles/SearchModal.scss";
import "@/SCSS/PageStyles/Error.scss";
import "@/SCSS/PageStyles/EntryScreen.scss";

const KEY = "hasEntered";

function getHasEnteredFromSession(): boolean {
  try {
    return sessionStorage.getItem(KEY) === "true";
  } catch (err) {
    console.warn("[Entry] sessionStorage.getItem failed:", err);
    return false;
  }
}

function setHasEnteredInSession(): void {
  try {
    sessionStorage.setItem(KEY, "true");
  } catch (err) {
    console.warn("[Entry] sessionStorage.setItem failed:", err);
  }
}

export default function App() {
  // “once per tab/session” behavior. For “every visit”, init to false and remove storage helpers.
  const [hasEntered, setHasEntered] = useState<boolean>(() => getHasEnteredFromSession());

  const handleEntered = () => {
    setHasEnteredInSession();
    setHasEntered(true);
  };

  return (
    <div className="appContainer">
      <div className="contentWrapper">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />

      {/* Render the full-screen overlay component when not entered */}
      {!hasEntered && <EntryScreen onEnter={handleEntered} />}
    </div>
  );
}