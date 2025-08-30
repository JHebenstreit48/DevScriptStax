import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/AngularRoutes/Basics/Fundamentals";
import StructureRoutes from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/AngularRoutes/Basics/Structure";
import CoreConcepts from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/AngularRoutes/Basics/CoreConcepts";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...StructureRoutes,
  ...CoreConcepts
];

export default Basics;