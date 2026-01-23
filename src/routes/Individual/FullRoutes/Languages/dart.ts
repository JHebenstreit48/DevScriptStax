import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/Languages/Dart/Basics";
import Advanced from "@/routes/Individual/Granularized/Languages/Dart/Advanced";
import Testing from "@/routes/Individual/Granularized/Languages/Dart/Testing";
import Tools from "@/routes/Individual/Granularized/Languages/Dart/Tools";

const Dart: RouteObject[] = [
  ...Basics,
  ...Advanced,
  ...Testing,
  ...Tools,
];
export default Dart;