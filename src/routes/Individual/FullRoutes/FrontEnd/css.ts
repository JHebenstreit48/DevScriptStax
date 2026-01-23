import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/FrontEnd/CSS/Basics";
import Advanced from "@/routes/Individual/Granularized/FrontEnd/CSS/Advanced";
import Tools from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools";

const CSS: RouteObject[] = [
  ...Basics,
  ...Advanced,
  ...Tools,
];
export default CSS;