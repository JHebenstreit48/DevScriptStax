import { RouteObject } from "react-router-dom";

import changeDetection from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/AngularRoutes/Advanced/ChangeDetection";
import performance from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/AngularRoutes/Advanced/Performance";
import rxJSAndReactive from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/AngularRoutes/Advanced/RxJSAndReactive";
// import animations from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/AngularRoutes/Advanced/Animations";
import typeScriptIntegration from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/AngularRoutes/Advanced/TypeScriptIntegration";

const angularAdvanced: RouteObject[] = [
  ...changeDetection,
  ...performance,
  ...rxJSAndReactive,
  // ...animations,
  ...typeScriptIntegration,
  // ...security
];

export default angularAdvanced;