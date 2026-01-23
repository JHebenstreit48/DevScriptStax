import { RouteObject } from "react-router-dom";

import StabilityAndData from "@/routes/Individual/Granularized/Languages/JavaScript/Testing/Advanced/StabilityAndData";
import Environment from "@/routes/Individual/Granularized/Languages/JavaScript/Testing/Advanced/Environment";
import CoverageAndQuality from "@/routes/Individual/Granularized/Languages/JavaScript/Testing/Advanced/CoverageAndQuality";
import Runners from "@/routes/Individual/Granularized/Languages/JavaScript/Testing/Advanced/Runners";
import CIAndDebug from "@/routes/Individual/Granularized/Languages/JavaScript/Testing/Advanced/CIAndDebug";

const Advanced: RouteObject[] = [
  ...StabilityAndData,
  ...Environment,
  ...CoverageAndQuality,
  ...Runners,
  ...CIAndDebug,
];

export default Advanced;
