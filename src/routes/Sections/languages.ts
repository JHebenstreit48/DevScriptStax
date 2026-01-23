import { RouteObject } from "react-router-dom";

import JavaScript from "@/routes/Individual/FullRoutes/Languages/javascript";
import TypeScript from "@/routes/Individual/FullRoutes/Languages/typescript";
import Python from "@/routes/Individual/FullRoutes/Languages/python";
import Ruby from "@/routes/Individual/FullRoutes/Languages/ruby";
import Rust from "@/routes/Individual/FullRoutes/Languages/rust";
import Go from "@/routes/Individual/FullRoutes/Languages/go";
import Dart from "@/routes/Individual/FullRoutes/Languages/dart";
import JavaScript from "@/routes/Individual/FullRoutes/Languages/javaScript";


const languages: RouteObject[] = [
  ...JavaScript,
  ...TypeScript,
  ...Python,
  ...Ruby,
  ...Rust,
  ...Go,
  ...Dart,
  
];

export default languages;