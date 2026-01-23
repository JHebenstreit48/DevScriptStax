import { RouteObject } from "react-router-dom";

import MiddlewareAndAsync from "@/routes/Individual/Granularized/FrontEnd/Redux/Intermediate/MiddlewareAndAsync";
import RTKQuery from "@/routes/Individual/Granularized/FrontEnd/Redux/Intermediate/RTKQuery";
import Selectors from "@/routes/Individual/Granularized/FrontEnd/Redux/Intermediate/Selectors";
import TypeScript from "@/routes/Individual/Granularized/FrontEnd/Redux/Intermediate/TypeScript";

const Intermediate: RouteObject[] = [
  ...MiddlewareAndAsync,
  ...RTKQuery,
  ...Selectors,
  ...TypeScript,
];

export default Intermediate;
