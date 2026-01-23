import { RouteObject } from "react-router-dom";

import Topics from "@/routes/Individual/Granularized/FrontEnd/HTML/Advanced/Topics";
import BestPractices from "@/routes/Individual/Granularized/FrontEnd/HTML/Advanced/BestPractices";

const Advanced: RouteObject[] = [
  ...Topics,
  ...BestPractices,
];

export default Advanced;