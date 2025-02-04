import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import pages from "@/Navigation/Pages";
import { Page, Subpage } from "@/Navigation/NavigationTypes";

type DropdownDirection = "up" | "down" | "start" | "end";

const navigationPages: Page[] = pages;

interface NavigationProps {
  dropdownDirection?: DropdownDirection;
}

const Navigation: React.FC<NavigationProps> = ({ dropdownDirection = "down" }) => {
  const [activeDropdown, setActiveDropdown] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [expandedKeys, setExpandedKeys] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!searchTerm) {
      setExpandedKeys(new Set());
    }
  }, [searchTerm]);

  const toggleDropdown = (key: string) => {
    setActiveDropdown((prev) => {
      const newDropdowns = new Set(prev);
      if (newDropdowns.has(key)) {
        newDropdowns.delete(key);
      } else {
        newDropdowns.add(key);
      }
      return newDropdowns;
    });
  };

  const searchSubpages = (subpages: Subpage[], filterText: string): Subpage[] => {
    const lowerFilter = filterText.toLowerCase().trim();

    return subpages.flatMap((subpage) => {
      const matches = subpage.name.toLowerCase() === lowerFilter;
      const matchingChildren = subpage.subpages
        ? searchSubpages(subpage.subpages, filterText)
        : [];

      if (matches || matchingChildren.length > 0) {
        return [{ ...subpage, subpages: matchingChildren }];
      }

      return [];
    });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (!value) {
      setExpandedKeys(new Set());
      return;
    }

    const newExpandedKeys = new Set<string>();

    navigationPages.forEach((page, pageIndex) => {
      const pageKey = `page-${pageIndex}`;
      const results = searchSubpages(page.subpages, value);

      if (results.length > 0) {
        newExpandedKeys.add(pageKey); // Expand only matching dropdowns
      }

      results.forEach((result, resultIndex) => {
        const resultKey = `${pageKey}-${resultIndex}`;
        newExpandedKeys.add(resultKey);
      });
    });

    setExpandedKeys(newExpandedKeys);
  };

  const renderSubpages = (subpages: Subpage[], parentKey: string, level: number = 1): React.ReactNode[] => {
    const filteredSubpages = searchTerm ? searchSubpages(subpages, searchTerm) : subpages;

    return filteredSubpages.map((subpage, index) => {
      const key = `${parentKey}-${index}`;
      const isActive = expandedKeys.has(key) || activeDropdown.has(key);
      const hasChildren = subpage.subpages && subpage.subpages.length > 0;

      return (
        <div key={key} className={`dropdownItem level-${level}`} data-level={level}>
          {subpage.path ? (
            <Link to={subpage.path} className={`dropdownButton level-4`}>
              {subpage.name}
            </Link>
          ) : (
            <>
              <div
                className={`dropdownButton level-${level} ${isActive ? "active" : ""}`}
                onClick={() => toggleDropdown(key)}
              >
                {subpage.name}
              </div>
              {isActive && hasChildren && (
                <div className={`dropdownMenu level-${level} active`}>
                  {renderSubpages(subpage.subpages ?? [], key, level + 1)}
                </div>
              )}
            </>
          )}
        </div>
      );
    });
  };

  return (
    <div className="navigationMenu">
      <div className="navigationContent">
        <Navbar variant="dark" bg="dark" expand="lg">
          <Container fluid>
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example">
              <Nav className="me-auto">
                <div className="searchContainer">
                  <Form.Control
                    className="filterInput"
                    placeholder="Type to filter..."
                    onChange={handleSearch}
                    value={searchTerm}
                  />
                </div>
                {navigationPages.map((page, index) => {
                  const pageKey = `page-${index}`;
                  const isActive = expandedKeys.has(pageKey) || activeDropdown.has(pageKey);

                  if (page.name === "Home" && page.subpages.length === 0) {
                    return (
                      <Nav.Link key={pageKey} as={Link} to="/" className="dropdownButton homeButton">
                        {page.name}
                      </Nav.Link>
                    );
                  }

                  return (
                    <Dropdown
                      key={pageKey}
                      show={isActive}
                      onToggle={() => toggleDropdown(pageKey)}
                      className="dropdown"
                      drop={dropdownDirection}
                    >
                      <Dropdown.Toggle
                        as="button"
                        id={`dropdown-toggle-${pageKey}`}
                        className={`dropdownButton ${isActive ? "active" : ""}`}
                      >
                        {page.name}
                      </Dropdown.Toggle>

                      {page.subpages.length > 0 && (
                        <Dropdown.Menu className={`dropdownContent ${isActive ? "active" : ""}`}>
                          {renderSubpages(page.subpages ?? [], pageKey)}
                        </Dropdown.Menu>
                      )}
                    </Dropdown>
                  );
                })}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Navigation;
