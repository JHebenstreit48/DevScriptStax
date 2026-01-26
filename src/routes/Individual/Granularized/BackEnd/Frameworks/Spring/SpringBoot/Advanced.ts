import { RouteObject } from "react-router-dom";

import API from "@/routes/Individual/Granularized/BackEnd/Frameworks/Spring/SpringBoot/Advanced/API";
import Security from "@/routes/Individual/Granularized/BackEnd/Frameworks/Spring/SpringBoot/Advanced/Security";
import Data from "@/routes/Individual/Granularized/BackEnd/Frameworks/Spring/SpringBoot/Advanced/Data";
import Observability from "@/routes/Individual/Granularized/BackEnd/Frameworks/Spring/SpringBoot/Advanced/Observability";
import Production from "@/routes/Individual/Granularized/BackEnd/Frameworks/Spring/SpringBoot/Advanced/Production";
import AsyncAndScheduling from "@/routes/Individual/Granularized/BackEnd/Frameworks/Spring/SpringBoot/Advanced/AsyncAndScheduling";

const Advanced: RouteObject[] = [
  ...API,
  ...Security,
  ...Data,
  ...Observability,
  ...Production,
  ...AsyncAndScheduling,
];

export default Advanced;
