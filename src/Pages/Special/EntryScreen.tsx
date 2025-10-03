import { useState, useCallback } from "react";
import "@/SCSS/PageStyles/EntryScreen.scss";

interface EntryScreenProps {
  onEnter: () => void;
}

const EntryScreen: React.FC<EntryScreenProps> = ({ onEnter }) => {
  const [exiting, setExiting] = useState(false);

  const handleClick = useCallback(() => {
    setExiting(true); // triggers the overlay swipe-down
  }, []);

  const handleTransitionEnd = useCallback<React.TransitionEventHandler<HTMLDivElement>>(
    (e) => {
      // Only when the overlay itself finishes the transform transition:
      if (e.currentTarget !== e.target) return;
      if (exiting) onEnter();
    },
    [exiting, onEnter]
  );

  return (
    <div
      className={`EntryScreenOverlay${exiting ? " exiting" : ""}`}
      onTransitionEnd={handleTransitionEnd}
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to DevScriptStax"
    >
      <div className="EntryScreen">
        <picture>
          <source srcSet="/Favicon/DevScriptStax.webp" type="image/webp" />
          <img
            src="/Favicon/apple-touch-icon.png"
            alt="DevScriptStax Logo"
            className="logo"
            width={180}
            height={180}
            loading="eager"
            decoding="async"
          />
        </picture>

        <h1 className="entry-title">Welcome to DevScriptStax</h1>
        <p className="entry-desc">Your journey into coding mastery begins here.</p>

        <button className="entry-button" onClick={handleClick}>
          Enter
        </button>
      </div>
    </div>
  );
};

export default EntryScreen;