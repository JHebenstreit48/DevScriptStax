import { Subpage } from "@/Navigation/NavigationTypes";

const WhatIsAnAPINavigation: Subpage = {
  name: "What is an API?",
  subpages: [
    { name: "Introduction to APIs", path: "/apis/intro/whatis/overview" }, // Merged definition & purpose
    { name: "Common API Use Cases", path: "/apis/intro/whatis/use-cases" },
    { name: "APIs in Web Development", path: "/apis/intro/whatis/web-development" },
    { name: "Common API Misconceptions", path: "/apis/intro/whatis/misconceptions" },
  ],
};

export default WhatIsAnAPINavigation;
