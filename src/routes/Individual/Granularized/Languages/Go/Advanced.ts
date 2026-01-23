import { RouteObject } from "react-router-dom";

import Errors from "@/routes/Individual/Granularized/Languages/Go/Advanced/Errors";
import Modules from "@/routes/Individual/Granularized/Languages/Go/Advanced/Modules";
import Concurrency from "@/routes/Individual/Granularized/Languages/Go/Advanced/Concurrency";
import PerformanceAndMemory from "@/routes/Individual/Granularized/Languages/Go/Advanced/PerformanceAndMemory";

const Advanced: RouteObject[] = [
  ...Errors,
  ...Modules,
  ...Concurrency,
  ...PerformanceAndMemory,
];

export default Advanced;
