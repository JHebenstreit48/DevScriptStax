import { useState } from 'react';
import '@/SCSS/PageStyles/EntryScreen.scss';

interface IntroSplashScreenProps {
  onEnter: () => void;
}

const EntryScreen: React.FC<IntroSplashScreenProps> = ({
  onEnter
}) => {
  const [isFading, setIsFading] = useState(false);

  const handleClick = () => {
    setIsFading(true);
    setTimeout(() => {
      onEnter();
    }, 500); // match the CSS fade-out duration
  };

  return (
    <div
      className={`SplashScreen ${isFading ? 'fade-out' : ''}`}
    >
      <img
        src="/Favicon/CodeQuest.webp"
        alt="CodeQuest Logo"
        className="logo"
      />
      <h1 className="splash-title">
        Welcome to DevScriptStax
      </h1>
      <p className="splash-desc">
        Your journey into coding mastery begins here.
      </p>
      <button
        className="splash-button"
        onClick={handleClick}
      >
        Enter
      </button>
    </div>
  );
};

export default EntryScreen;