import { RouteObject } from "react-router-dom";

import Basics from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/AngularRoutes/Basics";
import Advanced from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/AngularRoutes/Advanced";
import Testing from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/AngularRoutes/Testing";

const Angular: RouteObject[] = [
    ...Basics,
    ...Advanced,
    ...Testing
];
export default Angular;