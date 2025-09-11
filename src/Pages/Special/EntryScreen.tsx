import { useState } from "react";
import "@/SCSS/PageStyles/EntryScreen.scss";

interface IntroSplashScreenProps {
  onEnter: () => void;
}

const EntryScreen: React.FC<IntroSplashScreenProps> = ({ onEnter }) => {
  const [isFading, setIsFading] = useState(false);

  const handleClick = () => {
    setIsFading(true);
    setTimeout(() => {
      onEnter();
    }, 500); // match the CSS fade-out duration
  };

  return (
    <div className={`SplashScreen ${isFading ? "fade-out" : ""}`}>
      <img
        src="/Favicon/DevScriptStax.webp"
        srcSet="
          /Favicon/DevScriptStax-16x16.webp 16w,
          /Favicon/DevScriptStax-32x32.webp 32w,
          /Favicon/DevScriptStax-48x48.webp 48w,
          /Favicon/DevScriptStax-96x96.webp 96w,
          /Favicon/DevScriptStax-192x192.webp 192w,
          /Favicon/DevScriptStax-512x512.webp 512w,
          /Favicon/DevScriptStax.webp 1024w
        "
        sizes="(max-width: 390px) 96px,
         (max-width: 768px) 192px,
         256px"
        alt="DevScriptStax Logo"
        className="logo"
      />
      <h1 className="splash-title">Welcome to DevScriptStax</h1>
      <p className="splash-desc">
        Your journey into coding mastery begins here.
      </p>
      <button className="splash-button" onClick={handleClick}>
        Enter
      </button>
    </div>
  );
};

export default EntryScreen;
