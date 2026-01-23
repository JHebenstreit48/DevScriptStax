import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/FrontEnd/HTML/Basics/Fundamentals";
import Structure from "@/routes/Individual/Granularized/FrontEnd/HTML/Basics/Structure";
import FormsSemantics from "@/routes/Individual/Granularized/FrontEnd/HTML/Basics/FormsSemantics";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...Structure,
  ...FormsSemantics,
];

export default Basics;