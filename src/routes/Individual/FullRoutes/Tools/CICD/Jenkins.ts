import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/Tools/CICD/Jenkins/Basics";
import Advanced from "@/routes/Individual/Granularized/Tools/CICD/Jenkins/Advanced";

const Jenkins: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default Jenkins;
