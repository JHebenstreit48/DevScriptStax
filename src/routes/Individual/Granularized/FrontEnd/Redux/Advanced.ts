import { RouteObject } from "react-router-dom";

import ArchitectureAndPatterns from "@/routes/Individual/Granularized/FrontEnd/Redux/Advanced/ArchitectureAndPatterns";
import Performance from "@/routes/Individual/Granularized/FrontEnd/Redux/Advanced/Performance";
import PersistenceAndSync from "@/routes/Individual/Granularized/FrontEnd/Redux/Advanced/PersistenceAndSync";
import BestPractices from "@/routes/Individual/Granularized/FrontEnd/Redux/Advanced/BestPractices";

const Advanced: RouteObject[] = [
  ...ArchitectureAndPatterns,
  ...Performance,
  ...PersistenceAndSync,
  ...BestPractices,
];

export default Advanced;
