import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/FrontEnd/Vue/Basics";
import Advanced from "@/routes/Individual/Granularized/FrontEnd/Vue/Advanced";

const Vue: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default Vue;