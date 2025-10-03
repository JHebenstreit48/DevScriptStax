import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import pages from "@/Navigation/Combined/Core/Pages";
import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";
import { flattenNavigation } from "@/Components/NavigationUI/Search/Utils/flattenNavigation";
import { SearchMatch } from "@/Components/NavigationUI/Search/Utils/types";
import SearchIcon from "@/Components/NavigationUI/Search/SearchIcon";
import SearchModal from "@/Components/NavigationUI/Search/Modal";

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<Set<string>>(new Set());
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [searchMode, setSearchMode] = useState<"instant" | "manual">(
    () => (localStorage.getItem("searchMode") as "instant" | "manual") || "instant"
  );

  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const savedTerm = localStorage.getItem("lastSearchTerm") || "";
    if (savedTerm) setSearchTerm(savedTerm);
  }, []);

  useEffect(() => {
    localStorage.setItem("searchMode", searchMode);
  }, [searchMode]);

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
      const isTopLevel = key.startsWith("page-");
      const isOpen = updated.has(key);
  
      // Get root key (e.g. "page-0") from any key like "page-0-1-2"
      const rootKey = key.split("-").slice(0, 2).join("-");
  
      if (isTopLevel) {
        // Clicking a top-level tab should clear all other top-level trees
        for (const k of Array.from(updated)) {
          if (k.startsWith("page-") && !k.startsWith(rootKey)) {
            updated.delete(k);
          }
        }
      }
  
      // Toggle this specific key
      if (isOpen) {
        // Also close all children of this key
        for (const k of Array.from(updated)) {
          if (k === key || k.startsWith(`${key}-`)) {
            updated.delete(k);
          }
        }
      } else {
        updated.add(key);
      }
  
      return updated;
    });
  };
  
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const renderSubpages = (
    subpages: Subpage[],
    parentKey: string,
    level = 1
  ): React.ReactNode[] => {
    return subpages.map((sp, index) => {
      const key = `${parentKey}-${index}`;
      const isActive = activeDropdown.has(key);

      return (
        <div key={key} className={`dropdownItem level-${level}`}>
          {sp.path ? (
            <Link to={sp.path} className={`dropdownButton level-${level}`}>
              {sp.name}
            </Link>
          ) : (
            <>
              <div
                className={`dropdownButton level-${level} ${
                  isActive ? "active" : ""
                }`}
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

  const allPages: SearchMatch[] = flattenNavigation(pages);

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
            allPages={allPages}
            searchMode={searchMode}
            setSearchMode={setSearchMode}
            onClose={() => {
              setSearchTerm("");
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
                {!page.subpages || page.subpages.length === 0 ? (
                  <Link to="/" className="dropdownButton level-1">
                    {page.name}
                  </Link>
                ) : (
                  <>
                    <button
                      className={`dropdownButton level-1 ${
                        isActive ? "active" : ""
                      }`}
                      onClick={() => toggleDropdown(pageKey)}
                    >
                      {page.name}
                    </button>
                    {isActive && (
                      <div className="dropdownContent active">
                        {page.subpages && renderSubpages(page.subpages, pageKey, 2)}
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