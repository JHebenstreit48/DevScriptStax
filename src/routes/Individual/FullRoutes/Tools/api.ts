import { RouteObject } from "react-router-dom";

import Insomnia from "@/routes/Individual/Granularized/Tools/API/Insomnia";
import Postman from "@/routes/Individual/Granularized/Tools/API/Postman";

const API: RouteObject[] = [
  ...Insomnia,
  ...Postman,
];
export default API;