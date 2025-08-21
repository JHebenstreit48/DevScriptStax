import { RouteObject } from "react-router-dom";

import changeDetection from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/AngularRoutes/Advanced/ChangeDetection";
import performance from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/AngularRoutes/Advanced/Performance";
import rxJSAndReactive from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/AngularRoutes/Advanced/RxJSAndReactive";
// import animations from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/AngularRoutes/Advanced/Animations";
import tsIntegration from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/AngularRoutes/Advanced/TSIntegration";

const angularAdvanced: RouteObject[] = [
  ...changeDetection,
  ...performance,
  ...rxJSAndReactive,
  // ...animations,
  ...tsIntegration,
  // ...security
];

export default angularAdvanced;