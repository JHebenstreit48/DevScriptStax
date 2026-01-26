import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/BackEnd/Frameworks/Spring/SpringMain/Basics/Fundamentals";
import DIAndAOP from "@/routes/Individual/Granularized/BackEnd/Frameworks/Spring/SpringMain/Basics/DIAndAOP";
import Data from "@/routes/Individual/Granularized/BackEnd/Frameworks/Spring/SpringMain/Basics/Data";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...DIAndAOP,
  ...Data,
];

export default Basics;
