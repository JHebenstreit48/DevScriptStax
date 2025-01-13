import { Subpage } from "@/Navigation/NavigationTypes";

const SQLiteNavigation: Subpage = {
  name: "SQLite",
  subpages: [
    { name: "Introduction to SQLite", path: "/databases/sqlite/intro" },
    { name: "SQLite Features", path: "/databases/sqlite/features" },
    {
      name: "Using SQLite in Applications",
      path: "/databases/sqlite/usage",
    },
    {
      name: "Performance Considerations",
      path: "/databases/sqlite/performance",
    },
    { name: "Common SQLite Use Cases", path: "/databases/sqlite/usecases" },
  ],
};

export default SQLiteNavigation;
