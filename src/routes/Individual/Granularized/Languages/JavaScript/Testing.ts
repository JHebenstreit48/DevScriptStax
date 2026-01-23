import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/Languages/JavaScript/Testing/Basics";
import Advanced from "@/routes/Individual/Granularized/Languages/JavaScript/Testing/Advanced";

const Testing: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default Testing;