import { useState } from "react";
import "@/SCSS/PageStyles/EntryScreen.scss";

interface IntroSplashScreenProps {
  onEnter: () => void;
}

const EntryScreen: React.FC<IntroSplashScreenProps> = ({ onEnter }) => {
  const [isFading, setIsFading] = useState(false);

  const handleClick = () => {
    setIsFading(true);
    setTimeout(() => onEnter(), 500); // match your CSS fade-out
  };

  return (
    <div className={`SplashScreen ${isFading ? "fade-out" : ""}`}>
      {/* WebP first; PNG fallback for iOS/Safari */}
      <picture>
        <source srcSet="/Favicon/DevScriptStax.webp" type="image/webp" />
        <img
          src="/Favicon/apple-touch-icon.png"
          alt="DevScriptStax Logo"
          className="logo"
          width={180}
          height={180}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </picture>

      <h1 className="splash-title">Welcome to DevScriptStax</h1>
      <p className="splash-desc">Your journey into coding mastery begins here.</p>

      <button className="splash-button" onClick={handleClick}>
        Enter
      </button>
    </div>
  );
};

export default EntryScreen;