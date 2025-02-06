import { Subpage } from "@/Navigation/NavigationTypes";

const DartNavigation: Subpage = {
  name: "Dart",
  subpages: [
    {
      name: "Dart Fundamentals",
      subpages: [
        { name: "Dart Basics & Syntax", path: "/dart/fundamentals/basics" },
        { name: "Data Types, Variables & Operators", path: "/dart/fundamentals/data-types" },
        { name: "Control Flow (If, Loops, Exceptions)", path: "/dart/fundamentals/control-flow" },
        { name: "Functions & Scope", path: "/dart/fundamentals/functions" },
        { name: "Object-Oriented Programming (OOP)", path: "/dart/fundamentals/oop" },
      ],
    },
    {
      name: "Dart for Web Development",
      subpages: [
        { name: "Dart & Web Frameworks", path: "/dart/webdev/frameworks" },
        { name: "Building APIs with Dart", path: "/dart/webdev/apis" },
        { name: "Dart Backend with Shelf", path: "/dart/webdev/shelf" },
        { name: "WebSockets & Real-Time Communication", path: "/dart/webdev/websockets" },
      ],
    },
    {
      name: "Asynchronous Programming in Dart",
      subpages: [
        { name: "Async & Await in Dart", path: "/dart/async/async-await" },
        { name: "Working with Streams", path: "/dart/async/streams" },
        { name: "Isolates & Concurrency", path: "/dart/async/isolates" },
      ],
    },
    {
      name: "Performance & Optimization",
      subpages: [
        { name: "Optimizing Dart Code", path: "/dart/performance/optimization" },
        { name: "Memory Management in Dart", path: "/dart/performance/memory" },
        { name: "Handling Large Data in Dart", path: "/dart/performance/large-data" },
      ],
    },
  ],
};

export default DartNavigation;
