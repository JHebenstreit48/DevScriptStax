import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/FrontEnd/Vue/Basics/Fundamentals";
import CoreConcepts from "@/routes/Individual/Granularized/FrontEnd/Vue/Basics/CoreConcepts";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...CoreConcepts,
];

export default Basics;