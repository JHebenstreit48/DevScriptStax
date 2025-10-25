import Navigation from "@/Components/NavigationUI/Navigation";
import HeaderTitle from "@/Components/Shared/Header/HeaderTitle";
import { SITE_NAME } from "@/Components/Shared/dynamicSiteName";

export default function Header() {
  return (
    <header className="HeaderBar">
      <div className="HeaderLeft">
        <HeaderTitle text={SITE_NAME} asLink to="/" ariaLabel="Home" />
      </div>
      <div className="HeaderRight">
        <Navigation />
      </div>
    </header>
  );
}