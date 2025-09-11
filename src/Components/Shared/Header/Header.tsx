import Navigation from '@/Components/NavigationUI/Navigation';
import HeaderTitle from '@/Components/Shared/Header/HeaderTitle';

export default function Header() {
  return (
    <header className="HeaderBar">
      <div className="HeaderLeft">
        {/* Site title/logo acts as Home */}
        <HeaderTitle text="DevScriptStax" asLink to="/" ariaLabel="Home" />
      </div>
      <div className="HeaderRight">
        <Navigation />
      </div>
    </header>
  );
}