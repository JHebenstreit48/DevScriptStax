import { RouteObject } from "react-router-dom";

import changeDetection from "@/routes/Individual/Granularized/FrontEnd/Angular/Advanced/ChangeDetection";
import performance from "@/routes/Individual/Granularized/FrontEnd/Angular/Advanced/Performance";
import rxJSAndReactive from "@/routes/Individual/Granularized/FrontEnd/Angular/Advanced/RxJSAndReactive";
// import animations from "@/routes/Individual/Granularized/FrontEnd/Angular/Advanced/Animations";
import tsIntegration from "@/routes/Individual/Granularized/FrontEnd/Angular/Advanced/TSIntegration";

const Advanced: RouteObject[] = [
  ...changeDetection,
  ...performance,
  ...rxJSAndReactive,
  // ...animations,
  ...tsIntegration,
  // ...security
];

export default Advanced;