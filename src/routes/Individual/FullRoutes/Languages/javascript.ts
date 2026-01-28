import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/Languages/JavaScript/Basics";
import Advanced from "@/routes/Individual/Granularized/Languages/JavaScript/Advanced";
import Testing from "@/routes/Individual/Granularized/Languages/JavaScript/Testing";

const JavaScript: RouteObject[] = [
  ...Basics,
  ...Advanced,
  ...Testing
];
export default JavaScript;