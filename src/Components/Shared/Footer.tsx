import { Link } from "react-router-dom";
import { useFooterBuildInfo } from "@/hooks/footer/useFooterBuildInfo";

export default function Footer() {
  const { year, lastUpdatedText } = useFooterBuildInfo();

  return (
    <footer className="siteFooter" role="contentinfo">
      <div className="footerInner pageContainer">
        <div className="footerLeft">
          <nav aria-label="Footer">
            <ul className="footerLinks">
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footerRight">
          <nav aria-label="Site links">
            <ul className="utilityLinks">
              <li>
                <Link to="/updates">Updates</Link>
              </li>
              <li>
                <Link to="/disclaimer">Disclaimer</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="footerMeta">
        <div className="metaInner pageContainer">
          <div className="metaLeft">
            <span>© {year} AppFoundry</span>
            <span className="dot">•</span>
            <span>Built as a learning reference</span>
          </div>

          <div className="metaRight">
            <span>{lastUpdatedText}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}