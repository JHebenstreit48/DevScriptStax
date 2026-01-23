import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Postprocessors/Basics";
import PostCSS from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Postprocessors/PostCSS";
import LightningCSS from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Postprocessors/LightningCSS";
import Advanced from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Postprocessors/Advanced";

const Postprocessors: RouteObject[] = [
  ...Basics,
  ...PostCSS,
  ...LightningCSS,
  ...Advanced,
];

export default Postprocessors;
