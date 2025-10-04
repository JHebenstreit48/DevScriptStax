import { useState, useCallback, useRef, useEffect } from "react";
import "@/SCSS/PageStyles/EntryScreen.scss";

interface EntryScreenProps { onEnter: () => void; }

const EntryScreen: React.FC<EntryScreenProps> = ({ onEnter }) => {
  const [exiting, setExiting] = useState(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const handleClick = useCallback(() => {
    setExiting(true); // kick off the CSS transform on the overlay
  }, []);

  useEffect(() => {
    if (!exiting) return;
    const el = overlayRef.current;
    if (!el) return;

    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      onEnter();
    };

    // Fire when the overlay's own transition ends
    const onEnd = (e: TransitionEvent) => {
      if (e.target === el) finish();
    };
    el.addEventListener("transitionend", onEnd);

    // Fallback in case transitionend never fires
    const T = window.setTimeout(finish, 800); // slide-duration (0.6s) + buffer

    return () => {
      el.removeEventListener("transitionend", onEnd);
      clearTimeout(T);
    };
  }, [exiting, onEnter]);

  return (
    <div
      ref={overlayRef}
      className={`EntryScreenOverlay${exiting ? " exiting" : ""}`}
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