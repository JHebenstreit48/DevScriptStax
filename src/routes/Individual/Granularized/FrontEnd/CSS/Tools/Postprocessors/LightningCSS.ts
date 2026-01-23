import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Basics";
import Advanced from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Advanced";

const LightningCSS: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default LightningCSS;
