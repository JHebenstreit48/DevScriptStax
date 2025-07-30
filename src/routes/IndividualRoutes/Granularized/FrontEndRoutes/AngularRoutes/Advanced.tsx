import { RouteObject } from "react-router-dom";

import changeDetection from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/AngularRoutes/Advanced/ChangeDetection";
import performance from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/AngularRoutes/Advanced/Performance";
import RxJSAndReactive from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/AngularRoutes/Advanced/RxJSAndReactive";

const angularAdvanced: RouteObject[] = [
  ...changeDetection,
  ...performance,
  ...RxJSAndReactive,
];

export default angularAdvanced;