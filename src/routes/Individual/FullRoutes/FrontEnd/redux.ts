import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/FrontEnd/Redux/Basics";
import Intermediate from "@/routes/Individual/Granularized/FrontEnd/Redux/Intermediate";
import Advanced from "@/routes/Individual/Granularized/FrontEnd/Redux/Advanced";

const Redux: RouteObject[] = [
  ...Basics,
  ...Intermediate,
  ...Advanced,
];
export default Redux;