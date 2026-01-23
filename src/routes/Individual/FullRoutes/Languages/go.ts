import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/Languages/Go/Basics";
import Intermediate from "@/routes/Individual/Granularized/Languages/Go/Intermediate";
import Advanced from "@/routes/Individual/Granularized/Languages/Go/Advanced";

const Go: RouteObject[] = [
  ...Basics,
  ...Intermediate,
  ...Advanced,
];
export default Go;