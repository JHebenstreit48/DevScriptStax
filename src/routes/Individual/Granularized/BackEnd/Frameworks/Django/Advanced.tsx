import { RouteObject } from "react-router-dom";

import RESTInDjango from "@/routes/Individual/Granularized/BackEnd/Frameworks/Django/Advanced/RESTInDjango";
import Deployment from "@/routes/Individual/Granularized/BackEnd/Frameworks/Django/Advanced/Deployment";

const Advanced: RouteObject[] = [
  ...RESTInDjango,
  ...Deployment,
];

export default Advanced;
