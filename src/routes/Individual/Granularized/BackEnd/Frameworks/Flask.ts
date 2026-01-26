import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/BackEnd/Frameworks/Flask/Basics";
import Advanced from "@/routes/Individual/Granularized/BackEnd/Frameworks/Flask/Advanced";

const Flask: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default Flask;
