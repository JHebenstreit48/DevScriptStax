import { Link } from "react-router-dom";
import { useState } from "react";
// Define an array of page objects with subpages

type Subpage = {
  name: string;
  path?: string;
  subpages?: Subpage[];
};

type Page = {
  name: string;
  subpages: Subpage[];
};

const pages: Page[] = [
  {
    name: "Home",
    subpages: [],
  },
  {
    name: "Front-End",
    subpages: [
      {
        name: "Angular",
        subpages: [
          { name: "Angular Notes", path: "/angular" },
          { name: "Angular Code Notes", path: "/angular/angularcode" },
        ],
      },
      {
        name: "CSS",
        subpages: [
          {
            name: "CSS",
            subpages: [
              { name: "CSS Notes", path: "/css" },
              { name: "CSS Code Notes", path: "/css/csscode" },
            ],
          },
          {
            name: "LESS",
            subpages: [
              { name: "LESS Notes", path: "/css/less" },
              { name: "LESS Code Notes", path: "/css/less/lesscode" },
            ],
          },
          {
            name: "PostCSS",
            subpages: [
              { name: "PostCSS Notes", path: "/css/postcss" },
              { name: "PostCSS Code Notes", path: "/css/postcss/postcsscode" },
            ],
          },
          {
            name: "SASS",
            subpages: [
              { name: "SASS Notes", path: "/sass" },
              { name: "SASS Code Notes", path: "/sass/sasscode" },
            ],
          },
          {
            name: "SCSS",
            subpages: [
              { name: "SCSS Notes", path: "/scss" },
              { name: "SCSS Code Notes", path: "/scss/scsscode" },
            ],
          },
          {
            name: "Tailwind CSS",
            subpages: [
              { name: "Tailwind CSS Notes", path: "/tailwindcss" },
              {
                name: "Tailwind CSS Code Notes",
                path: "/tailwindcss/tailwindcsscode",
              },
            ],
          },
        ],
      },
      {
        name: "Gatsby",
        subpages: [
          { name: "Gatsby Notes", path: "/gatsby" },
          { name: "Gatsby Code Notes", path: "/gatsby/gatsbycode" },
        ],
      },
      {
        name: "HTML",
        subpages: [
          { name: "HTML Notes", path: "/html" },
          { name: "HTML Code Notes", path: "/html/htmlcode" },
        ],
      },
      {
        name: "JavaScript",
        subpages: [
          { name: "JavaScript Notes", path: "/javascript" },
          { name: "JavaScript Code Notes", path: "/javascript/javascriptcode" },
        ],
      },
      {
        name: "Markdown",
        subpages: [
          { name: "Markdown Notes", path: "/markdown" },
          { name: "Markdown Code Notes", path: "/markdown/markdowncode" },
        ],
      },
      {
        name: "Next.js",
        subpages: [
          { name: "Next.js Notes", path: "/nextjs" },
          { name: "Next.js Code Notes", path: "/nextjs/nextjscode" },
        ],
      },
      {
        name: "React",
        subpages: [
          {
            name: "React",
            subpages: [
              { name: "React Notes", path: "/react" },
              { name: "React Code Notes", path: "/react/reactcode" },
            ],
          },
          {
            name: "React + TypeScript",
            subpages: [
              {
                name: "React and TypeScript Notes",
                path: "/react/reactandtypescript",
              },
              {
                name: "React and TypeScript Code",
                path: "/react/reactandtypescriptcode",
              },
            ],
          },
          {
            name: "React Full Stack",
            subpages: [
              { name: "React Full Stack Notes", path: "/react/reactfullstack" },
              {
                name: "React Full Stack Code",
                path: "/react/reactfullstackcode",
              },
            ],
          },
          {
            name: "React Native",
            subpages: [
              { name: "React Native Notes", path: "/react/reactnative" },
              {
                name: "React Native Code Notes",
                path: "/react/reactnativecode",
              },
            ],
          },
        ],
      },
      {
        name: "Redux",
        subpages: [
          { name: "Redux Notes", path: "/redux" },
          { name: "Redux Code Notes", path: "/redux/reduxcode" },
        ],
      },
      {
        name: "Vue",
        subpages: [
          { name: "Vue Notes", path: "/vue" },
          { name: "Vue Code Notes", path: "/vue/vuecode" },
        ],
      },
    ],
  },
  {
    name: "Back-End",
    subpages: [
      {
        name: "APIs",
        subpages: [
          { name: "APIs Notes", path: "/apis" },
          { name: "APIs Code Notes", path: "/apis/apicode" },
        ],
      },
      {
        name: "MERN",
        subpages: [
          { name: "MERN Notes", path: "/mern" },
          { name: "MERN Code Notes", path: "/mern/merncode" },
        ],
      },
      {
        name: "Node JS",
        subpages: [
          { name: "Node JS Notes", path: "/node" },
          { name: "Node JS Code Notes", path: "/node/nodecode" },
        ],
      },
      {
        name: "Servers",
        subpages: [
          { name: "General Server Notes", path: "/servers" },
          { name: "General Server Code Notes", path: "/servers/servercode" },
        ],
      },
    ],
  },
  {
    name: "Databases",
    subpages: [
      {
        name: "MongoDB",
        subpages: [
          { name: "MongoDB Notes", path: "/mongodb" },
          { name: "MongoDB Code Notes", path: "/mongodb/mongodbcode" },
        ],
      },
      {
        name: "PostgreSQL",
        subpages: [
          { name: "PostgreSQL Notes", path: "/postgresql" },
          { name: "PostgreSQL Code Notes", path: "/postgresql/postgresqlcode" },
        ],
      },
    ],
  },
  {
    name: "Tools & Testing",
    subpages: [
      {
        name: "CI/CD Ops",
        subpages: [
          { name: "CI/CD Ops Notes", path: "/cicdops" },
          { name: "CI/CD Ops Code Notes", path: "/cicdops/cicdopscode" },
        ],
      },
      {
        name: "Git",
        subpages: [
          { name: "Git Notes", path: "/git" },
          { name: "Git Code Notes", path: "/git/gitcode" },
        ],
      },
      {
        name: "Testing",
        subpages: [
          {
            name: "Testing",
            subpages: [
              { name: "Testing Notes", path: "/testing" },
              { name: "Testing Code Notes", path: "/testing/testingcode" },
            ],
          },
          {
            name: "Cypress Testing",
            subpages: [
              {
                name: "Cypress Testing Notes",
                path: "/testing/cypresstesting",
              },
              {
                name: "Cypress Testing Code Notes",
                path: "/testing/cypresstestingcode",
              },
            ],
          },
          {
            name: "Vitest Testing",
            subpages: [
              { name: "Vitest Testing Notes", path: "/testing/vitesttesting" },
              {
                name: "Vitest Testing Code Notes",
                path: "/testing/vitesttestingcode",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Programming Languages",
    subpages: [
      {
        name: "Python",
        subpages: [
          { name: "Python Notes", path: "/python" },
          { name: "Python Code Notes", path: "/python/pythoncode" },
        ],
      },
      {
        name: "TypeScript",
        subpages: [
          { name: "TypeScript Notes", path: "/typescript" },
          { name: "TypeScript Code Notes", path: "/typescript/typescriptcode" },
        ],
      },
    ],
  },
  {
    name: "GraphQL & Apollo",
    subpages: [
      {
        name: "GraphQL",
        subpages: [
          { name: "GraphQL Notes", path: "/graphql" },
          { name: "GraphQL Code Notes", path: "/graphql/graphqlcode" },
        ],
      },
      {
        name: "Apollo Server",
        subpages: [
          { name: "Apollo Server Notes", path: "/apolloserver" },
          {
            name: "Apollo Server Code Notes",
            path: "/apolloserver/apolloservercode",
          },
        ],
      },
    ],
  },
];

const Navigation = () => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Toggle expanded state for sections
  const toggleSection = (key: string) => {
    setExpandedSections((prev) => {
      const newSections = new Set(prev);
      if (newSections.has(key)) {
        newSections.delete(key);
      } else {
        newSections.add(key);
      }
      return newSections;
    });
  };

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  // Recursive rendering of subpages with arrows
  const renderSubpages = (
    subpages: Subpage[],
    parentKey: string,
    level: number = 1
  ) =>
    subpages.map((subpage, index) => {
      const key = `${parentKey}-${index}`;
      const isExpanded = expandedSections.has(key);

      return (
        <div key={key}>
          {subpage.path ? (
            <p>
              {" "}
              <Link
                to={subpage.path}
                className={`navLink ${level > 1 ? "nestedLink" : ""}`}
              >
                {" "}
                {subpage.name.trim()}{" "}
              </Link>{" "}
            </p>
          ) : (
            <>
              {" "}
              <button
                className={`subpageHeading ${
                  level > 1 ? "nestedSubpageHeading" : ""
                }`}
                onClick={() => toggleSection(key)}
                aria-expanded={isExpanded ? "true" : "false"}
              >
                {" "}
                {subpage.name.trim()}{" "}
                {/* Render arrows only if there are nested subpages */}{" "}
                {subpage.subpages && subpage.subpages.length > 0 && (
                  <span
                    className={`dropdownArrow ${isExpanded ? "up" : "down"}`}
                  ></span>
                )}{" "}
              </button>{" "}
              {isExpanded && subpage.subpages && (
                <div className="nestedSubpages">
                  {" "}
                  {renderSubpages(subpage.subpages, key, level + 1)}{" "}
                </div>
              )}{" "}
            </>
          )}{" "}
        </div>
      );
    });

  return (
    <div className={`navigationMenu ${isCollapsed ? "collapsed" : ""}`}>
      <button className="toggleButton" onClick={toggleSidebar}>
        {isCollapsed ? (
          <i className="menuIcon fas fa-bars"></i>
        ) : (
          <i className="closeIcon fas fa-times"></i>
        )}
      </button>

      {!isCollapsed && (
        <div className="navigationContent">
          {/* Accordion for Pages */}
          <div className="accordion">
            {pages.map((page, index) => {
              const pageKey = `page-${index}`;
              const isExpanded = expandedSections.has(pageKey);

              return (
                <div key={pageKey} className="accordionItem">
                  <h2 className="accordionHeader">
                    {/* Show arrows if the page has subpages */}
                    {page.subpages.length === 0 ? (
                      <Link
                        to="/"
                        className="accordionButton noDropdown"
                        id="homeButton"
                      >
                        {page.name}
                      </Link>
                    ) : (
                      <button
                        className="accordionButton"
                        type="button"
                        onClick={() => toggleSection(pageKey)}
                        aria-expanded={isExpanded ? "true" : "false"}
                      >
                        {page.name}
                        <span
                          className={`dropdownArrow ${
                            isExpanded ? "up" : "down"
                          }`}
                        ></span>
                      </button>
                    )}
                  </h2>

                  {/* Only render subpages if they exist */}
                  {isExpanded && (
                    <div className="accordionCollapse">
                      <div className="accordionBody">
                        {renderSubpages(page.subpages, pageKey)}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
