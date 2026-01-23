import { RouteObject } from "react-router-dom";

import Performance from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Advanced/Performance";
import Compatibility from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Advanced/Compatibility";
import Transforms from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Advanced/Transforms";
import Migration from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Advanced/Migration";

const Advanced: RouteObject[] = [
  ...Performance,
  ...Compatibility,
  ...Transforms,
  ...Migration,
];

export default Advanced;
