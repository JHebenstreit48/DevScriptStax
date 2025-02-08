import { Subpage } from "@/Navigation/NavigationTypes";

const JavaScriptBestPracticesNavigation: Subpage = {
  name: "JavaScript Best Practices",
  subpages: [
    { name: "Coding Standards", path: "/javascript/best-practices/standards" },
    { name: "Debugging", path: "/javascript/best-practices/debugging" }, // Debugging tips
    { name: "Security", path: "/javascript/best-practices/security" }, // Preventing XSS, CSRF, etc.
    { name: "Scalability", path: "/javascript/best-practices/scalability" }, // Writing scalable JS
  ],
};

export default JavaScriptBestPracticesNavigation;
