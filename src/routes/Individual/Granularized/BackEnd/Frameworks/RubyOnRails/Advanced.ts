import { RouteObject } from "react-router-dom";

import API from "@/routes/Individual/Granularized/BackEnd/Frameworks/RubyOnRails/Advanced/API";
import BackgroundAndRealtime from "@/routes/Individual/Granularized/BackEnd/Frameworks/RubyOnRails/Advanced/BackgroundAndRealtime";
import Security from "@/routes/Individual/Granularized/BackEnd/Frameworks/RubyOnRails/Advanced/Security";
import PerformanceAndCaching from "@/routes/Individual/Granularized/BackEnd/Frameworks/RubyOnRails/Advanced/PerformanceAndCaching";
import Observability from "@/routes/Individual/Granularized/BackEnd/Frameworks/RubyOnRails/Advanced/Observability";

const Advanced: RouteObject[] = [
  ...API,
  ...BackgroundAndRealtime,
  ...Security,
  ...PerformanceAndCaching,
  ...Observability,
];

export default Advanced;
