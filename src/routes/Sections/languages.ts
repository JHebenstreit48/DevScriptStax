import { RouteObject } from "react-router-dom";

import JavaScript from "@/routes/Individual/FullRoutes/Languages/javascript";
import TypeScript from "@/routes/Individual/FullRoutes/Languages/typescript";
import Python from "@/routes/Individual/FullRoutes/Languages/python";
// import Rust from "@/routes/Individual/FullRoutes/Languages/rust";
// import Go from "@/routes/Individual/FullRoutes/Languages/go";
import Dart from "@/routes/Individual/FullRoutes/Languages/dart";

const languages: RouteObject[] = [
  ...JavaScript,
  ...TypeScript,
  ...Python,
  // ...Rust,
  // ...Go,
  ...Dart,
];

export default languages;