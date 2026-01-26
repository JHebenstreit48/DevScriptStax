import { RouteObject } from "react-router-dom";

import APIPatterns from "@/routes/Individual/Granularized/BackEnd/Frameworks/ExpressJs/Advanced/APIPatterns";
import Auth from "@/routes/Individual/Granularized/BackEnd/Frameworks/ExpressJs/Advanced/Auth";
import Security from "@/routes/Individual/Granularized/BackEnd/Frameworks/ExpressJs/Advanced/Security";
import Performance from "@/routes/Individual/Granularized/BackEnd/Frameworks/ExpressJs/Advanced/Performance";
import Production from "@/routes/Individual/Granularized/BackEnd/Frameworks/ExpressJs/Advanced/Production";
import Observability from "@/routes/Individual/Granularized/BackEnd/Frameworks/ExpressJs/Advanced/Observability";

const Advanced: RouteObject[] = [
  ...APIPatterns,
  ...Auth,
  ...Security,
  ...Performance,
  ...Production,
  ...Observability,
];

export default Advanced;
