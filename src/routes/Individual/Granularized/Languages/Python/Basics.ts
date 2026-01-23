import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/Languages/Python/Basics/Fundamentals";
import CoreConcepts from "@/routes/Individual/Granularized/Languages/Python/Basics/CoreConcepts";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...CoreConcepts,
];

export default Basics;