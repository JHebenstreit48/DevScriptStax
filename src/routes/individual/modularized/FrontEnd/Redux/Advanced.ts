import { RouteObject } from "react-router-dom";

import ArchitectureAndPatterns from '@/routes/individual/modularized/FrontEnd/Redux/Advanced/ArchitectureAndPatterns';
import Performance from '@/routes/individual/modularized/FrontEnd/Redux/Advanced/Performance';
import PersistenceAndSync from '@/routes/individual/modularized/FrontEnd/Redux/Advanced/PersistenceAndSync';
import BestPractices from '@/routes/individual/modularized/FrontEnd/Redux/Advanced/BestPractices';

const Advanced: RouteObject[] = [
  ...ArchitectureAndPatterns,
  ...Performance,
  ...PersistenceAndSync,
  ...BestPractices,
];

export default Advanced;
