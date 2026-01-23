import { RouteObject } from "react-router-dom";

import AdvancedFeatures from "@/routes/Individual/Granularized/FrontEnd/NextJs/Advanced/AdvancedFeatures";
import Deployment from "@/routes/Individual/Granularized/FrontEnd/NextJs/Advanced/Deployment";

const Advanced: RouteObject[] = [
  ...AdvancedFeatures,
  ...Deployment,
];

export default Advanced;