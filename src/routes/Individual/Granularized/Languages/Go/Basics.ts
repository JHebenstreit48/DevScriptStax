import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/Languages/Go/Basics/Fundamentals";
import CoreConcepts from "@/routes/Individual/Granularized/Languages/Go/Basics/CoreConcepts";
import Collections from "@/routes/Individual/Granularized/Languages/Go/Basics/Collections";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...CoreConcepts,
  ...Collections,
];

export default Basics;
