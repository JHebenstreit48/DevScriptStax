import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/FrontEnd/Gatsby/Basics";
import Advanced from "@/routes/Individual/Granularized/FrontEnd/Gatsby/Advanced";

const Gatsby: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default Gatsby;
