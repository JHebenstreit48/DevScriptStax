import { RouteObject } from "react-router-dom";

import APIPatterns from "@/routes/Individual/Granularized/BackEnd/Frameworks/KoaJs/Advanced/APIPatterns";
import Auth from "@/routes/Individual/Granularized/BackEnd/Frameworks/KoaJs/Advanced/Auth";
import Security from "@/routes/Individual/Granularized/BackEnd/Frameworks/KoaJs/Advanced/Security";
import Performance from "@/routes/Individual/Granularized/BackEnd/Frameworks/KoaJs/Advanced/Performance";
import Production from "@/routes/Individual/Granularized/BackEnd/Frameworks/KoaJs/Advanced/Production";
import Observability from "@/routes/Individual/Granularized/BackEnd/Frameworks/KoaJs/Advanced/Observability";

const Advanced: RouteObject[] = [
  ...APIPatterns,
  ...Auth,
  ...Security,
  ...Performance,
  ...Production,
  ...Observability,
];

export default Advanced;
