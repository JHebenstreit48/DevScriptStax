import { RouteObject } from "react-router-dom";

import OrbsAndReuse from "@/routes/Individual/Granularized/Tools/CICD/CircleCI/Advanced/OrbsAndReuse";
import RunnersAndExecutors from "@/routes/Individual/Granularized/Tools/CICD/CircleCI/Advanced/RunnersAndExecutors";
import PerformanceAndScale from "@/routes/Individual/Granularized/Tools/CICD/CircleCI/Advanced/PerformanceAndScale";
import Security from "@/routes/Individual/Granularized/Tools/CICD/CircleCI/Advanced/Security";

const Advanced: RouteObject[] = [
  ...OrbsAndReuse,
  ...RunnersAndExecutors,
  ...PerformanceAndScale,
  ...Security,
];

export default Advanced;