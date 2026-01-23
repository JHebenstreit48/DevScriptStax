import { RouteObject } from "react-router-dom";

import WebAPIs from "@/routes/Individual/Granularized/Languages/Go/Intermediate/WebAPIs";
import DataAndIO from "@/routes/Individual/Granularized/Languages/Go/Intermediate/DataAndIO";
import Database from "@/routes/Individual/Granularized/Languages/Go/Intermediate/Database";
import Config from "@/routes/Individual/Granularized/Languages/Go/Intermediate/Config";

const Intermediate: RouteObject[] = [
  ...WebAPIs,
  ...DataAndIO,
  ...Database,
  ...Config,
];

export default Intermediate;
