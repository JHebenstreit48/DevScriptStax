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
            name: "Frameworks",
            subpages: [
              {
                name: "Bootstrap",
                subpages: [
                  { name: "Bootstrap Notes", path: "/css/frameworks/bootstrap" },
                  { name: "Bootstrap Code Notes", path: "/css/frameworks/bootstrap/bootstrapcode" },
                ],
              },
              {
                name: "React Bootstrap",
                subpages: [
                  { name: "React Bootstrap Notes", path: "/css/frameworks/reactbootstrap" },
                  { name: "React Bootstrap Code Notes", path: "/css/frameworks/reactbootstrap/reactbootstrapcode" },
                ],
              },
              {
                name: "Tailwind CSS",
                subpages: [
                  { name: "Tailwind CSS Notes", path: "/css/frameworks/tailwind" },
                  { name: "Tailwind CSS Code Notes", path: "/css/frameworks/tailwind/tailwindcode" },
                ],
              },
            ],
          },
          {
            name: "Preprocessors",
            subpages: [
              {
                name: "LESS",
                subpages: [
                  { name: "LESS Notes", path: "/css/preprocessors/less" },
                  { name: "LESS Code Notes", path: "/css/preprocessors/lesscode" },
                ],
              },
              {
                name: "SASS",
                subpages: [
                  { name: "SASS Notes", path: "/css/preprocessors/sass" },
                  { name: "SASS Code Notes", path: "/css/preprocessors/sasscode" },
                ],
              },
              {
                name: "SCSS",
                subpages: [
                  { name: "SCSS Notes", path: "/css/preprocessors/scss" },
                  { name: "SCSS Code Notes", path: "/css/preprocessors/scsscode" },
                ],
              },
            ],
          },
          {
            name: "Post-Processors",
            subpages: [
              {
                name: "PostCSS",
                subpages: [
                  { name: "PostCSS Notes", path: "/css/postprocessors/postcss" },
                  { name: "PostCSS Code Notes", path: "/css/postprocessors/postcsscode" },
                ],
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
        name: "Svelte",
        subpages: [
          { name: "Svelte Notes", path: "/svelte" },
          { name: "Svelte Code Notes", path: "/svelte/sveltecode" },
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
        name: "Authentication and Authorization",
        subpages: [
          { name: "Auth Notes", path: "/auth" },
          { name: "Auth Code Notes", path: "/auth/authcode" },
        ],
      },
      {
        name: "Frameworks",
        subpages: [
          {
            name: "Django",
            subpages: [
              { name: "Django Notes", path: "/django" },
              { name: "Django Code Notes", path: "/django/djangocode" },
            ],
          },
          {
            name: "Express.js",
            subpages: [
              { name: "Express.js Notes", path: "/express" },
              { name: "Express.js Code Notes", path: "/express/expresscode" },
            ],
          },
          {
            name: "Flask",
            subpages: [
              { name: "Flask Notes", path: "/flask" },
              { name: "Flask Code Notes", path: "/flask/flaskcode" },
            ],
          },
          {
            name: "Koa.js",
            subpages: [
              { name: "Koa.js Notes", path: "/koa" },
              { name: "Koa.js Code Notes", path: "/koa/koacode" },
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
            name: "Node.js",
            subpages: [
              { name: "Node.js Notes", path: "/node" },
              { name: "Node.js Code Notes", path: "/node/nodecode" },
            ],
          },
          {
            name: "Ruby",
            subpages: [
              { name: "Ruby Notes", path: "/ruby" },
              { name: "Ruby Code Notes", path: "/ruby/rubycode" },
              {
                name: "Ruby on Rails",
                subpages: [
                  { name: "Ruby on Rails Notes", path: "/ruby/rubyonrails" },
                  { name: "Ruby on Rails Code Notes", path: "/ruby/rubyonrails/rubyonrailscode" },
                ],
              },
            ],
          },
          {
            name: "Spring Boot",
            subpages: [
              { name: "Spring Boot Notes", path: "/springboot" },
              { name: "Spring Boot Code Notes", path: "/springboot/springbootcode" },
            ],
          },
          {
            name: "WebSockets",
            subpages: [
              { name: "WebSockets Notes", path: "/websockets" },
              { name: "WebSockets Code Notes", path: "/websockets/websocketscode" },
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
              { name: "Apollo Server Code Notes", path: "/apolloserver/apolloservercode" },
            ],
          },
        ],
      },
      {
        name: "Servers",
        subpages: [
          {
            name: "General Server Concepts",
            subpages: [
              { name: "General Server Notes", path: "/servers/general" },
              { name: "General Server Code Notes", path: "/servers/general/servercode" },
            ],
          },
          {
            name: "Nginx",
            subpages: [
              { name: "Nginx Notes", path: "/servers/nginx" },
              { name: "Nginx Code Notes", path: "/servers/nginx/nginxcode" },
            ],
          },
          {
            name: "Apache",
            subpages: [
              { name: "Apache Notes", path: "/servers/apache" },
              { name: "Apache Code Notes", path: "/servers/apache/apachecode" },
            ],
          },
        ],
      },
      {
        name: "Databases",
        subpages: [
          {
            name: "Firebase",
            subpages: [
              { name: "Firebase Notes", path: "/databases/firebase" },
              { name: "Firebase Code Notes", path: "/databases/firebase/firebasecode" },
            ],
          },
          {
            name: "MongoDB",
            subpages: [
              { name: "MongoDB Notes", path: "/databases/mongodb" },
              { name: "MongoDB Code Notes", path: "/databases/mongodb/mongodbcode" },
            ],
          },
          {
            name: "MySQL",
            subpages: [
              { name: "MySQL Notes", path: "/databases/mysql" },
              { name: "MySQL Code Notes", path: "/databases/mysql/mysqlcode" },
            ],
          },
          {
            name: "PostgreSQL",
            subpages: [
              { name: "PostgreSQL Notes", path: "/databases/postgresql" },
              { name: "PostgreSQL Code Notes", path: "/databases/postgresql/postgresqlcode" },
            ],
          },
          {
            name: "Redis",
            subpages: [
              { name: "Redis Notes", path: "/databases/redis" },
              { name: "Redis Code Notes", path: "/databases/redis/rediscode" },
            ],
          },
          {
            name: "SQLite",
            subpages: [
              { name: "SQLite Notes", path: "/databases/sqlite" },
              { name: "SQLite Code Notes", path: "/databases/sqlite/sqlitecode" },
            ],
          },
        ],
      },
    ],
  },  
  {
    name: "Tools",
    subpages: [
      {
        name: "API Tools",
        subpages: [
          {
            name: "Insomnia",
            subpages: [
              { name: "Insomnia Notes", path: "/tools/api/insomnia" },
              { name: "Insomnia Code Notes", path: "/tools/api/insomnia/insomniacode" },
            ],
          },
          {
            name: "Postman",
            subpages: [
              { name: "Postman Notes", path: "/tools/api/postman" },
              { name: "Postman Code Notes", path: "/tools/api/postman/postmancode" },
            ],
          },
        ],
      },
      {
        name: "CI/CD Tools",
        subpages: [
          {
            name: "CircleCI",
            subpages: [
              { name: "CircleCI Notes", path: "/tools/cicd/circleci" },
              { name: "CircleCI Code Notes", path: "/tools/cicd/circleci/circlecicode" },
            ],
          },
          {
            name: "Jenkins",
            subpages: [
              { name: "Jenkins Notes", path: "/tools/cicd/jenkins" },
              { name: "Jenkins Code Notes", path: "/tools/cicd/jenkins/jenkinscode" },
            ],
          },
        ],
      },
      {
        name: "Code Quality",
        subpages: [
          {
            name: "ESLint",
            subpages: [
              { name: "ESLint Notes", path: "/tools/codequality/eslint" },
              { name: "ESLint Code Notes", path: "/tools/codequality/eslintcode" },
            ],
          },
          {
            name: "Prettier",
            subpages: [
              { name: "Prettier Notes", path: "/tools/codequality/prettier" },
              { name: "Prettier Code Notes", path: "/tools/codequality/prettiercode" },
            ],
          },
        ],
      },
      {
        name: "Package Management & Bundling",
        subpages: [
          {
            name: "Babel",
            subpages: [
              { name: "Babel Notes", path: "/tools/packaging/babel" },
              { name: "Babel Code Notes", path: "/tools/packaging/babel/babelcode" },
            ],
          },
          {
            name: "Webpack",
            subpages: [
              { name: "Webpack Notes", path: "/tools/packaging/webpack" },
              { name: "Webpack Code Notes", path: "/tools/packaging/webpack/webpackcode" },
            ],
          },
        ],
      },
      {
        name: "Containerization",
        subpages: [
          {
            name: "Docker",
            subpages: [
              { name: "Docker Notes", path: "/tools/containerization/docker" },
              { name: "Docker Code Notes", path: "/tools/containerization/docker/dockercode" },
            ],
          },
        ],
      },
      {
        name: "Git",
        subpages: [
          { name: "Git Notes", path: "/git" },
          { name: "Git Code Notes", path: "/git/gitcode" },
        ],
      },
    ],
  },
  {
    name: "Testing",
    subpages: [
      {
        name: "End-to-End Testing",
        subpages: [
          {
            name: "Cypress Testing",
            subpages: [
              { name: "Cypress Testing Notes", path: "/testing/e2e/cypress" },
              { name: "Cypress Testing Code Notes", path: "/testing/e2e/cypresscode" },
            ],
          },
          {
            name: "Playwright",
            subpages: [
              { name: "Playwright Notes", path: "/testing/e2e/playwright" },
              { name: "Playwright Code Notes", path: "/testing/e2e/playwrightcode" },
            ],
          },
        ],
      },
      {
        name: "Framework Testing",
        subpages: [
          {
            name: "Jest",
            subpages: [
              { name: "Jest Notes", path: "/testing/framework/jest" },
              { name: "Jest Code Notes", path: "/testing/framework/jestcode" },
            ],
          },
          {
            name: "Vitest",
            subpages: [
              { name: "Vitest Notes", path: "/testing/framework/vitest" },
              { name: "Vitest Code Notes", path: "/testing/framework/vitestcode" },
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
        name: "Rust",
        subpages: [
          { name: "Rust Notes", path: "/rust" },
          { name: "Rust Code Notes", path: "/rust/rustcode" },
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
