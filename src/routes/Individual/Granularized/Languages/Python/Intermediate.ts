import { RouteObject } from "react-router-dom";

import FileAndData from "@/routes/Individual/Granularized/Languages/Python/Intermediate/FileAndData";
import Async from "@/routes/Individual/Granularized/Languages/Python/Intermediate/Async";

const Intermediate: RouteObject[] = [
  ...FileAndData,
  ...Async,
];

export default Intermediate;