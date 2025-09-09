import { RouteObject } from "react-router-dom";

import Basics from "@/routes/IndividualRoutes/Granularized/FrontEnd/HTML/Basics";
import Intermediate from "@/routes/IndividualRoutes/Granularized/FrontEnd/HTML/Intermediate";
import Advanced from "@/routes/IndividualRoutes/Granularized/FrontEnd/HTML/Advanced";

const HTML: RouteObject[] = [
  ...Basics,
  ...Intermediate,
  ...Advanced,
];

export default HTML;