import { Link } from "react-router-dom";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import pages from "@/Navigation/Pages";
import { Page, Subpage } from "@/Navigation/NavigationTypes";

type DropdownDirection = "up" | "down" | "start" | "end";

// Prepare the navigation data for rendering
const navigationPages: Page[] = pages;

interface NavigationProps {
  dropdownDirection?: DropdownDirection; // Define the dropdownDirection prop
}

const Navigation: React.FC<NavigationProps> = ({
  dropdownDirection = "down",
}) => {
  const [activeDropdown, setActiveDropdown] = useState<Set<string>>(new Set());
  const [filterValues, setFilterValues] = useState<{ [key: string]: string }>(
    {}
  );

  const toggleDropdown = (key: string) => {
    setActiveDropdown((prev) => {
      const newDropdowns = new Set(prev);
      if (newDropdowns.has(key)) {
        newDropdowns.delete(key); // Close the dropdown if it's already active
      } else {
        newDropdowns.add(key); // Open the dropdown
      }
      return newDropdowns;
    });
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilterValues((prev) => ({ ...prev, [key]: value }));
  };

  const searchSubpages = (subpages: Subpage[], filterText: string): Subpage[] => {
    const lowerFilter = filterText.toLowerCase();

    return subpages.flatMap((subpage) => {
      const matches = subpage.name.toLowerCase().includes(lowerFilter);
      const matchingChildren = subpage.subpages
        ? searchSubpages(subpage.subpages, filterText)
        : [];

      if (matches) {
        return [{ ...subpage, subpages: matchingChildren }];
      }

      return matchingChildren;
    });
  };

  const renderSubpages = (
    subpages: Subpage[],
    parentKey: string,
    level: number = 1
  ): React.ReactNode[] => {
    const filterText = filterValues[parentKey] || "";

    const filteredSubpages = filterText
      ? searchSubpages(subpages, filterText)
      : subpages;

    return filteredSubpages.map((subpage, index) => {
      const key = `${parentKey}-${index}`;
      const isActive = activeDropdown.has(key);

      return (
        <div
          key={key}
          className={`dropdownItem level-${level}`} // Keeps the level-based CSS classes
        >
          {subpage.path ? (
            <Dropdown.Item
              as={Link}
              to={subpage.path}
              className="dropdownLink" // Keeps the clickable link style
            >
              {subpage.name}
            </Dropdown.Item>
          ) : (
            <>
              <Dropdown.ItemText
                className={`dropdownButton level-${level}`} // Keeps the hierarchical button styling
                onClick={() => toggleDropdown(key)}
              >
                {subpage.name}
              </Dropdown.ItemText>
              {isActive && subpage.subpages && (
                <div className={`dropdownMenu level-${level} active`}>
                  {renderSubpages(subpage.subpages, key, level + 1)}
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
                {navigationPages.map((page, index) => {
                  const pageKey = `page-${index}`;
                  const isActive = activeDropdown.has(pageKey);

                  // Special handling for Home: no dropdown
                  if (page.name === "Home" && page.subpages.length === 0) {
                    return (
                      <Nav.Link
                        key={pageKey}
                        as={Link}
                        to="/"
                        className="dropdownButton homeButton" // Applies Home-specific CSS
                      >
                        {page.name}
                      </Nav.Link>
                    );
                  }

                  // Render other pages with subpages
                  return (
                    <Dropdown
                      key={pageKey}
                      show={isActive}
                      onToggle={(isOpen) => toggleDropdown(pageKey)}
                      className="dropdown" // Keeps the dropdown styling
                      drop={dropdownDirection}
                    >
                      <Dropdown.Toggle
                        as="button"
                        id={`dropdown-toggle-${pageKey}`}
                        className={`dropdownButton ${isActive ? "active" : ""}`} // Keeps toggle button style
                      >
                        {page.name}
                        {page.subpages.length > 0 && (
                          <span
                            className={`dropdownArrow ${
                              isActive ? "up" : "down"
                            }`} // Keeps the arrow styling
                          />
                        )}
                      </Dropdown.Toggle>

                      {page.subpages.length > 0 && (
                        <Dropdown.Menu
                          className={`dropdownContent ${
                            isActive ? "active" : ""
                          }`} // Keeps dropdown content styling
                        >
                          <Form.Control
                            autoFocus
                            className="mx-3 my-2 w-auto filterInput" // Keeps search bar styling
                            placeholder="Type to filter..."
                            onChange={(e) =>
                              handleFilterChange(pageKey, e.target.value)
                            }
                            value={filterValues[pageKey] || ""}
                          />
                          {renderSubpages(page.subpages, pageKey)}
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
