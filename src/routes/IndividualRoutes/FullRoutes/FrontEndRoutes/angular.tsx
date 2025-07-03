import { RouteObject } from "react-router-dom";

import angularBasics from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/AngularRoutes/Basics";
import angularAdvanced from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/AngularRoutes/Advanced";
import AngularTesting from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/AngularRoutes/Testing";

const angularRoutes: RouteObject[] = [
    ...angularBasics,
    ...angularAdvanced,
    ...AngularTesting
];
export default angularRoutes;