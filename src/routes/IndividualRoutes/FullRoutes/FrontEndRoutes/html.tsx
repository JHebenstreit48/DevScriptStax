import { RouteObject } from "react-router-dom";

import Basics from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/HTMLRoutes/Basics";
import Intermediate from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/HTMLRoutes/Intermediate";
import Advanced from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/HTMLRoutes/Advanced";

const HTML: RouteObject[] = [
  ...Basics,
  ...Intermediate,
  ...Advanced,
];

export default HTML;