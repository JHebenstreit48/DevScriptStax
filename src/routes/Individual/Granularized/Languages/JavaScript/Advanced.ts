import { RouteObject } from "react-router-dom";

import Functions from "@/routes/Individual/Granularized/Languages/JavaScript/Advanced/Functions";
import ObjectOrientedProgramming from "@/routes/Individual/Granularized/Languages/JavaScript/Advanced/ObjectOrientedProgramming";
import Modules from "@/routes/Individual/Granularized/Languages/JavaScript/Advanced/Modules";
import PerformanceAndScalability from "@/routes/Individual/Granularized/Languages/JavaScript/Advanced/PerformanceAndScalability";
import BestPractices from "@/routes/Individual/Granularized/Languages/JavaScript/Advanced/BestPractices";
import Security from "@/routes/Individual/Granularized/Languages/JavaScript/Advanced/Security";

const Advanced: RouteObject[] = [
  ...Functions,
  ...ObjectOrientedProgramming,
  ...Modules,
  ...PerformanceAndScalability,
  ...BestPractices,
  ...Security,
];

export default Advanced;