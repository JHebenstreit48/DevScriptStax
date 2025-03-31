import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import pages from "@/Navigation/Pages";
import { Subpage } from "@/Navigation/NavigationTypes";
import SearchIcon from "@/Components/Navigation/SearchIcon";
import SearchModal from "@/Components/Navigation/SearchResultModal";

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<
    { name: string; path: string; breadcrumbs: string[] }[]
  >([]);
  const [showModal, setShowModal] = useState(false);
  const [searchMode, setSearchMode] = useState<"instant" | "manual">(
    () => (localStorage.getItem("searchMode") as "instant" | "manual") || "instant"
  );

  // Load saved term/results on mount
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
    if (searchMode === "instant" && searchTerm) {
      performSearch(searchTerm);
    }
  }, [searchTerm, searchMode]);

  const toggleDropdown = (key: string) => {
    setActiveDropdown((prev) => {
      const updated = new Set(prev);
      updated.has(key) ? updated.delete(key) : updated.add(key);
      return updated;
    });
  };

  const searchSubpages = (
    subpages: Subpage[],
    term: string,
    breadcrumbs: string[] = []
  ): { name: string; path: string; breadcrumbs: string[] }[] => {
    const lowerTerm = term.toLowerCase().trim();

    return subpages.flatMap((sp): { name: string; path: string; breadcrumbs: string[] }[] => {
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

  return (
    <div className="navigationMenu">
      <div className="navigationContent">
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
                  <Link to="/" className="dropdownButton homeButton">
                    {page.name}
                  </Link>
                ) : (
                  <>
                    <button
                      className={`dropdownButton ${isActive ? "active" : ""}`}
                      onClick={() => toggleDropdown(pageKey)}
                    >
                      {page.name}
                    </button>
                    {isActive && (
                      <div className="dropdownContent active">
                        {page.subpages.map((sp, i) =>
                          sp.path ? (
                            <Link key={i} to={sp.path} className="dropdownButton level-4">
                              {sp.name}
                            </Link>
                          ) : (
                            <div key={i} className="dropdownItem level-1">
                              {sp.name}
                            </div>
                          )
                        )}
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
