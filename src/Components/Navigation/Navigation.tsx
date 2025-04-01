import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import pages from "@/Navigation/Pages";
import { Subpage } from "@/Navigation/NavigationTypes";
import SearchIcon from "@/Components/Navigation/SearchIcon";
import SearchModal from "@/Components/Navigation/SearchModal";

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<Set<string>>(new Set());
  const [isMenuOpen, setIsMenuOpen] = useState(false); // NEW STATE
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<
    { name: string; path: string; breadcrumbs: string[] }[]
  >([]);
  const [showModal, setShowModal] = useState(false);
  const [searchMode, setSearchMode] = useState<"instant" | "manual">(
    () => (localStorage.getItem("searchMode") as "instant" | "manual") || "instant"
  );

  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const savedTerm = localStorage.getItem("lastSearchTerm") || "";
    const savedResults = localStorage.getItem("lastSearchResults");
    if (savedTerm) setSearchTerm(savedTerm);
    if (savedResults) setSearchResults(JSON.parse(savedResults));
  }, []);

  useEffect(() => {
    localStorage.setItem("searchMode", searchMode);
  }, [searchMode]);

  useEffect(() => {
    if (searchMode === "instant" && searchTerm.trim()) {
      performSearch(searchTerm);
    }
  }, [searchTerm, searchMode]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(new Set());
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (key: string) => {
    setActiveDropdown((prev) => {
      const updated = new Set(prev);
      updated.has(key) ? updated.delete(key) : updated.add(key);
      return updated;
    });
  };

  const toggleMenu = () => setIsMenuOpen((prev) => !prev); // NEW TOGGLE

  const searchSubpages = (
    subpages: Subpage[],
    term: string,
    breadcrumbs: string[] = []
  ): { name: string; path: string; breadcrumbs: string[] }[] => {
    const lowerTerm = term.toLowerCase().trim();

    return subpages.flatMap((sp) => {
      const currentTrail = [...breadcrumbs, sp.name];
      const matches =
        sp.name.toLowerCase().includes(lowerTerm) && sp.path !== undefined;

      const childMatches = sp.subpages
        ? searchSubpages(sp.subpages, term, currentTrail)
        : [];

      return [
        ...(matches && sp.path
          ? [{ name: sp.name, path: sp.path, breadcrumbs }]
          : []),
        ...childMatches,
      ];
    });
  };

  const performSearch = (value: string) => {
    const results: { name: string; path: string; breadcrumbs: string[] }[] = [];

    pages.forEach((page) => {
      results.push(...searchSubpages(page.subpages, value, [page.name]));
    });

    setSearchResults(results);
    localStorage.setItem("lastSearchTerm", value);
    localStorage.setItem("lastSearchResults", JSON.stringify(results));
  };

  const renderSubpages = (subpages: Subpage[], parentKey: string, level = 1): React.ReactNode[] => {
    return subpages.map((sp, index) => {
      const key = `${parentKey}-${index}`;
      const isActive = activeDropdown.has(key);
      const hasChildren = sp.subpages && sp.subpages.length > 0;

      return (
        <div key={key} className={`dropdownItem level-${level}`}>
          {sp.path ? (
            <Link to={sp.path} className={`dropdownButton level-${level}`}>
              {sp.name}
            </Link>
          ) : (
            <>
              <div
                className={`dropdownButton level-${level} ${isActive ? "active" : ""}`}
                onClick={() => toggleDropdown(key)}
              >
                {sp.name}
              </div>
              {isActive && sp.subpages && (
                <div className="dropdownMenu active">
                  {renderSubpages(sp.subpages, key, level + 1)}
                </div>
              )}
            </>
          )}
        </div>
      );
    });
  };

  return (
    <div className="navigationMenu" ref={navRef}>
      <button className="hamburgerButton" onClick={toggleMenu}>
        ☰
      </button>

      <div className={`navigationContent ${isMenuOpen ? "open" : ""}`}>
        <SearchIcon onClick={() => setShowModal(true)} />
        {showModal && (
          <SearchModal
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            results={searchResults}
            searchMode={searchMode}
            setSearchMode={setSearchMode}
            onSearch={performSearch}
            onClose={() => {
              setSearchTerm("");
              setSearchResults([]);
              setShowModal(false);
            }}
          />
        )}

        <nav className="mainNav">
          {pages.map((page, index) => {
            const pageKey = `page-${index}`;
            const isActive = activeDropdown.has(pageKey);

            return (
              <div key={pageKey} className="dropdown">
                {page.subpages.length === 0 ? (
                  <Link to="/" className="dropdownButton level-1">
                    {page.name}
                  </Link>
                ) : (
                  <>
                    <button
                      className={`dropdownButton level-1 ${isActive ? "active" : ""}`}
                      onClick={() => toggleDropdown(pageKey)}
                    >
                      {page.name}
                    </button>
                    {isActive && (
                      <div className="dropdownContent active">
                        {renderSubpages(page.subpages, pageKey)}
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
