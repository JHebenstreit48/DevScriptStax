import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/BackEnd/Frameworks/ExpressJs/Basics";
import Advanced from "@/routes/Individual/Granularized/BackEnd/Frameworks/ExpressJs/Advanced";

const ExpressJs: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default ExpressJs;
