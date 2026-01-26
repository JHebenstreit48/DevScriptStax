import { RouteObject } from "react-router-dom";

import CircleCI from "@/routes/Individual/FullRoutes/Tools/CICD/CircleCI";
import Jenkins from "@/routes/Individual/FullRoutes/Tools/CICD/Jenkins";

const CICD: RouteObject[] = [
  ...CircleCI,
  ...Jenkins,
];
export default CICD;