import { RouteObject } from "react-router-dom";

import Basics from "@/routes/IndividualRoutes/Granularized/FrontEnd/Angular/Basics";
import Advanced from "@/routes/IndividualRoutes/Granularized/FrontEnd/Angular/Advanced";
import Testing from "@/routes/IndividualRoutes/Granularized/FrontEnd/Angular/Testing";

const Angular: RouteObject[] = [
    ...Basics,
    ...Advanced,
    ...Testing
];
export default Angular;