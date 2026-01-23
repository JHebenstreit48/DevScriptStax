import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Postprocessors/Basics/Fundamentals";
import Ecosystem from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Postprocessors/Basics/Ecosystem";
import Integration from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Postprocessors/Basics/Integration";
import CoreTasks from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Postprocessors/Basics/CoreTasks";
import Optimization from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Postprocessors/Basics/Optimization";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...Ecosystem,
  ...Integration,
  ...CoreTasks,
  ...Optimization,
];

export default Basics;
