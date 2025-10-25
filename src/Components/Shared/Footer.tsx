import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="siteFooter" role="contentinfo">
      <div className="footerInner pageContainer">
        <div className="footerLeft">
          <nav aria-label="Footer">
            <ul className="footerLinks">
              <li><Link to="/about">About</Link></li>
              {/* add more internal links later if you like */}
            </ul>
          </nav>
        </div>

        <div className="footerRight">
          <ul className="socialLinks" aria-label="Social links">
            <li>
              <a
                href="https://github.com/JHebenstreit48"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/justin-hebenstreit-6ba22920/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            {/* Portfolio placeholder — update href when ready */}
            <li className="portfolioLink">
              <a
                href="https://portfolio-react-version.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Portfolio"
                title="Portfolio"
              >
                <FontAwesomeIcon icon={faGlobe} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footerMeta">
        <div className="metaInner pageContainer">
          <span>© {new Date().getFullYear()} DevScriptStax</span>
          <span className="dot">•</span>
          <span>Built as a learning reference</span>
        </div>
      </div>
    </footer>
  );
}