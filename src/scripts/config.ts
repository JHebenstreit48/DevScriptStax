export const config = {
  // Where to import the navigation root from (Subpage[])
  navEntryModule: "@/Navigation/Combined/Core/Pages",

  // Output roots
  pagesRoot: "src/Pages/MainTabs",
  routesSectionsRoot: "src/routes/Sections",

  // Map nav “Main Tab” display names -> folder names you actually use
  // Add/adjust per repo as needed.
  sectionNameMap: {
    "Front End": "FrontEnd",
    "Back End": "BackEnd",
    "GraphQL And Apollo": "GraphQLAndApollo",
    "Cloud and Deployment": "CloudAndDeployment",
    "Languages": "Languages",
    "Testing": "Testing",
    "Tools": "Tools",
    "Stacks": "Stacks",
  } as Record<string, string>,

  // If the leaf name is “generic”, make the H1 slightly richer:
  // “Fundamentals: Introduction”
  genericLeafNames: new Set([
    "Introduction",
    "Overview",
    "Basics",
    "Fundamentals",
    "Getting Started",
    "Setup",
  ]),

  // Optional safety cap default (can be overridden by CLI --limit)
  defaultLimit: 10_000,
};
