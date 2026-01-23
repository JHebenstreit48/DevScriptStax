import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Postprocessors/PostCSS/Basics/Fundamentals";
import Configuration from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Postprocessors/PostCSS/Basics/Configuration";
import CorePlugins from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Postprocessors/PostCSS/Basics/CorePlugins";
import Workflow from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Postprocessors/PostCSS/Basics/Workflow";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...Configuration,
  ...CorePlugins,
  ...Workflow,
];

export default Basics;
