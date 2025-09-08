import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/AngularRoutes/Basics/Fundamentals";
import Structure from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/AngularRoutes/Basics/Structure";
import CoreConcepts from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/AngularRoutes/Basics/CoreConcepts";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...Structure,
  ...CoreConcepts
];

export default Basics;