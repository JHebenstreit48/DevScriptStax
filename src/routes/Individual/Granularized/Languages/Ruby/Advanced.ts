import { RouteObject } from "react-router-dom";

import Language from "@/routes/Individual/Granularized/Languages/Ruby/Advanced/Language";
import Concurrency from "@/routes/Individual/Granularized/Languages/Ruby/Advanced/Concurrency";
import PerfAndTooling from "@/routes/Individual/Granularized/Languages/Ruby/Advanced/PerfAndTooling";

const Advanced: RouteObject[] = [
  ...Language,
  ...Concurrency,
  ...PerfAndTooling,
];

export default Advanced;
