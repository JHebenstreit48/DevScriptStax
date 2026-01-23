import { RouteObject } from "react-router-dom";

import FrameworkFeatures from "@/routes/Individual/Granularized/FrontEnd/Vue/Advanced/FrameworkFeatures";
import BestPractices from "@/routes/Individual/Granularized/FrontEnd/Vue/Advanced/BestPractices";

const Advanced: RouteObject[] = [
  ...FrameworkFeatures,
  ...BestPractices,
];

export default Advanced;
