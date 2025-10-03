import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/FrontEnd/HTML/Basics";
import Intermediate from "@/routes/Individual/Granularized/FrontEnd/HTML/Intermediate";
import Advanced from "@/routes/Individual/Granularized/FrontEnd/HTML/Advanced";

const HTML: RouteObject[] = [
  ...Basics,
  ...Intermediate,
  ...Advanced,
];

export default HTML;