import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/IndividualRoutes/Granularized/FrontEnd/Angular/Basics/Fundamentals";
import Structure from "@/routes/IndividualRoutes/Granularized/FrontEnd/Angular/Basics/Structure";
import CoreConcepts from "@/routes/IndividualRoutes/Granularized/FrontEnd/Angular/Basics/CoreConcepts";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...Structure,
  ...CoreConcepts
];

export default Basics;