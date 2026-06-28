import Navigation from "@/Components/NavigationUI/Navigation";
import HeaderTitle from "@/Components/Shared/Header/HeaderTitle";
import { SITE_NAME } from "@/Components/Shared/dynamicSiteName";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="HeaderBar">
      <div className="HeaderLeft">
        <Link to="/" className="SiteLogo" aria-label="Home">
          <img
            src="/favicon/DevScriptStax.webp"
            alt="DevScriptStax logo"
            className="SiteLogoImg"
          />
        </Link>
        <HeaderTitle text={SITE_NAME} asLink to="/" ariaLabel="Home" />
      </div>
      <div className="HeaderRight">
        <Navigation />
      </div>
    </header>
  );
}