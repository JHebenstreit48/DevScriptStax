import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/Languages/Ruby/Basics";
import Advanced from "@/routes/Individual/Granularized/Languages/Ruby/Advanced";

const Ruby: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default Ruby;
