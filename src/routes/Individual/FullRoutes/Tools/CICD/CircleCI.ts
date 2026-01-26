import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/Tools/CICD/CircleCI/Basics";
import Advanced from "@/routes/Individual/Granularized/Tools/CICD/CircleCI/Advanced";

const CircleCI: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default CircleCI;