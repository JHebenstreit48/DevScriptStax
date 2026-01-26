import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/Tools/CICD/Jenkins/Basics/Fundamentals";
import Setup from "@/routes/Individual/Granularized/Tools/CICD/Jenkins/Basics/Setup";
import Pipelines from "@/routes/Individual/Granularized/Tools/CICD/Jenkins/Basics/Pipelines";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...Setup,
  ...Pipelines,
];

export default Basics;