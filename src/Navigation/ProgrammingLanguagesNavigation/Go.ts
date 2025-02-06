import { Subpage } from "@/Navigation/NavigationTypes";

const GoNavigation: Subpage = {
  name: "Go",
  subpages: [
    {
      name: "Go Fundamentals",
      subpages: [
        { name: "Go Basics & Syntax", path: "/go/fundamentals/basics" },
        { name: "Variables, Data Types & Operators", path: "/go/fundamentals/data-types" },
        { name: "Control Flow (If, Loops, Errors)", path: "/go/fundamentals/control-flow" },
        { name: "Functions & Packages", path: "/go/fundamentals/functions" },
        { name: "Structs & Interfaces", path: "/go/fundamentals/structs-interfaces" },
      ],
    },
    {
      name: "Go for Web Development",
      subpages: [
        { name: "Building APIs with Go", path: "/go/webdev/apis" },
        { name: "Gorilla Mux & Chi Routing", path: "/go/webdev/routing" },
        { name: "Middleware in Go", path: "/go/webdev/middleware" },
        { name: "Working with JSON in Go", path: "/go/webdev/json" },
      ],
    },
    {
      name: "Go Concurrency & Performance",
      subpages: [
        { name: "Goroutines & Channels", path: "/go/concurrency/goroutines" },
        { name: "WaitGroups & Mutex", path: "/go/concurrency/waitgroups-mutex" },
        { name: "Optimizing Go Web Applications", path: "/go/concurrency/optimization" },
      ],
    },
    {
      name: "Go & Databases",
      subpages: [
        { name: "Connecting to Databases", path: "/go/databases/connecting" },
        { name: "Using SQL with Go", path: "/go/databases/sql" },
        { name: "Working with NoSQL Databases", path: "/go/databases/nosql" },
      ],
    },
  ],
};

export default GoNavigation;
