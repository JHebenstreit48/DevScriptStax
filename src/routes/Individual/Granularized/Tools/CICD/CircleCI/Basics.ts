import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/Tools/CICD/CircleCI/Basics/Fundamentals";
import CircleCISetup from "@/routes/Individual/Granularized/Tools/CICD/CircleCI/Basics/Setup";
import JobsAndWorkflows from "@/routes/Individual/Granularized/Tools/CICD/CircleCI/Basics/JobsAndWorkflows";
import Pipelines from "@/routes/Individual/Granularized/Tools/CICD/CircleCI/Basics/Pipelines";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...CircleCISetup,
  ...JobsAndWorkflows,
  ...Pipelines,
];

export default Basics;
