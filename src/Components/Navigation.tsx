import { Link } from "react-router-dom";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import pages from "@/Navigation/Pages";
import { Page, Subpage } from "@/Navigation/NavigationTypes";
// Define an array of page objects with subpages

type DropdownDirection = "up" | "down" | "start" | "end";

// Prepare the navigation data for rendering
const navigationPages: Page[] = pages;

//     name: "Tools",
//     subpages: [
//       {
//         name: "API Tools",
//         subpages: [
//           {
//             name: "Insomnia",
//             subpages: [
//               { name: "Insomnia Notes", path: "/tools/api/insomnia" },
//               { name: "Insomnia Code Notes", path: "/tools/api/insomnia/insomniacode" },
//             ],
//           },
//           {
//             name: "Postman",
//             subpages: [
//               { name: "Postman Notes", path: "/tools/api/postman" },
//               { name: "Postman Code Notes", path: "/tools/api/postman/postmancode" },
//             ],
//           },
//         ],
//       },
//       {
//         name: "CI/CD Tools",
//         subpages: [
//           {
//             name: "CircleCI",
//             subpages: [
//               { name: "CircleCI Notes", path: "/tools/cicd/circleci" },
//               { name: "CircleCI Code Notes", path: "/tools/cicd/circleci/circlecicode" },
//             ],
//           },
//           {
//             name: "Jenkins",
//             subpages: [
//               { name: "Jenkins Notes", path: "/tools/cicd/jenkins" },
//               { name: "Jenkins Code Notes", path: "/tools/cicd/jenkins/jenkinscode" },
//             ],
//           },
//         ],
//       },
//       {
//         name: "Code Quality",
//         subpages: [
//           {
//             name: "ESLint",
//             subpages: [
//               { name: "ESLint Notes", path: "/tools/codequality/eslint" },
//               { name: "ESLint Code Notes", path: "/tools/codequality/eslintcode" },
//             ],
//           },
//           {
//             name: "Prettier",
//             subpages: [
//               { name: "Prettier Notes", path: "/tools/codequality/prettier" },
//               { name: "Prettier Code Notes", path: "/tools/codequality/prettiercode" },
//             ],
//           },
//         ],
//       },
//       {
//         name: "Package Management & Bundling",
//         subpages: [
//           {
//             name: "Babel",
//             subpages: [
//               { name: "Babel Notes", path: "/tools/packaging/babel" },
//               { name: "Babel Code Notes", path: "/tools/packaging/babel/babelcode" },
//             ],
//           },
//           {
//             name: "Webpack",
//             subpages: [
//               { name: "Webpack Notes", path: "/tools/packaging/webpack" },
//               { name: "Webpack Code Notes", path: "/tools/packaging/webpack/webpackcode" },
//             ],
//           },
//         ],
//       },
//       {
//         name: "Containerization",
//         subpages: [
//           {
//             name: "Docker",
//             subpages: [
//               { name: "Docker Notes", path: "/tools/containerization/docker" },
//               { name: "Docker Code Notes", path: "/tools/containerization/docker/dockercode" },
//             ],
//           },
//         ],
//       },
//       {
//         name: "Git",
//         subpages: [
//           { name: "Git Notes", path: "/git" },
//           { name: "Git Code Notes", path: "/git/gitcode" },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Testing",
//     subpages: [
//       {
//         name: "End-to-End Testing",
//         subpages: [
//           {
//             name: "Cypress Testing",
//             subpages: [
//               { name: "Cypress Testing Notes", path: "/testing/e2e/cypress" },
//               { name: "Cypress Testing Code Notes", path: "/testing/e2e/cypresscode" },
//             ],
//           },
//           {
//             name: "Playwright",
//             subpages: [
//               { name: "Playwright Notes", path: "/testing/e2e/playwright" },
//               { name: "Playwright Code Notes", path: "/testing/e2e/playwrightcode" },
//             ],
//           },
//         ],
//       },
//       {
//         name: "Framework Testing",
//         subpages: [
//           {
//             name: "Jest",
//             subpages: [
//               { name: "Jest Notes", path: "/testing/framework/jest" },
//               { name: "Jest Code Notes", path: "/testing/framework/jestcode" },
//             ],
//           },
//           {
//             name: "Vitest",
//             subpages: [
//               { name: "Vitest Notes", path: "/testing/framework/vitest" },
//               { name: "Vitest Code Notes", path: "/testing/framework/vitestcode" },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Programming Languages",
//     subpages: [
//       {
//         name: "Python",
//         subpages: [
//           { name: "Python Notes", path: "/python" },
//           { name: "Python Code Notes", path: "/python/pythoncode" },
//         ],
//       },
//       {
//         name: "Rust",
//         subpages: [
//           { name: "Rust Notes", path: "/rust" },
//           { name: "Rust Code Notes", path: "/rust/rustcode" },
//         ],
//       },
//       {
//         name: "TypeScript",
//         subpages: [
//           { name: "TypeScript Notes", path: "/typescript" },
//           { name: "TypeScript Code Notes", path: "/typescript/typescriptcode" },
//         ],
//       },
//     ],
//   },
// ];

interface NavigationProps {
  dropdownDirection?: DropdownDirection; // Define the dropdownDirection prop
}

const Navigation: React.FC<NavigationProps> = ({ dropdownDirection = "down" }) => {
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

  const renderSubpages = (
    subpages: Subpage[],
    parentKey: string,
    level: number = 1
  ) => {
    return subpages
      .filter((subpage) =>
        filterValues[parentKey]
          ? subpage.name.toLowerCase().includes(filterValues[parentKey].toLowerCase())
          : true
      )
      .map((subpage, index) => {
        const key = `${parentKey}-${index}`;
        const isActive = activeDropdown.has(key);

        return (
          <div key={key} className={`dropdownItem level-${level}`}>
            {subpage.path ? (
              <Dropdown.Item
                as={Link}
                to={subpage.path}
                className="dropdownLink"
              >
                {subpage.name}
              </Dropdown.Item>
            ) : (
              <>
                <Dropdown.ItemText
                  className={`dropdownButton level-${level}`}
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
                        className="dropdownButton homeButton"
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
                      className="dropdown"
                      drop={dropdownDirection} // Pass dropdown direction here
                    >
                      <Dropdown.Toggle
                        as="button"
                        id={`dropdown-toggle-${pageKey}`}
                        className={`dropdownButton ${isActive ? "active" : ""}`}
                      >
                        {page.name}
                        {page.subpages.length > 0 && (
                          <span
                            className={`dropdownArrow ${isActive ? "up" : "down"}`}
                          />
                        )}
                      </Dropdown.Toggle>

                      {page.subpages.length > 0 && (
                        <Dropdown.Menu
                          className={`dropdownContent ${isActive ? "active" : ""}`}
                        >
                          <Form.Control
                            autoFocus
                            className="mx-3 my-2 w-auto filterInput"
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
