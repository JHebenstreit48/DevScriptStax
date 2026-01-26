import { RouteObject } from "react-router-dom";

import ConcurrencyAndProcesses from "@/routes/Individual/Granularized/BackEnd/Frameworks/NodeJs/Advanced/ConcurrencyAndProcesses";
import Performance from "@/routes/Individual/Granularized/BackEnd/Frameworks/NodeJs/Advanced/Performance";
import Observability from "@/routes/Individual/Granularized/BackEnd/Frameworks/NodeJs/Advanced/Observability";
import Production from "@/routes/Individual/Granularized/BackEnd/Frameworks/NodeJs/Advanced/Production";
import Security from "@/routes/Individual/Granularized/BackEnd/Frameworks/NodeJs/Advanced/Security";

const Advanced: RouteObject[] = [
  ...ConcurrencyAndProcesses,
  ...Performance,
  ...Observability,
  ...Production,
  ...Security,
];

export default Advanced;
