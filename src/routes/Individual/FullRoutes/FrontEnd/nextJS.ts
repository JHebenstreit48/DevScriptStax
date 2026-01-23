import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/FrontEnd/NextJs/Basics";
import Advanced from "@/routes/Individual/Granularized/FrontEnd/NextJs/Advanced";

const NextJs: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default NextJs;