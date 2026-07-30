import { RouteObject } from "react-router-dom";

import TypesAndGuards from '@/routes/individual/modularized/Languages/TypeScript/Advanced/TypesAndGuards';
import GenericsAndUtilityTypes from '@/routes/individual/modularized/Languages/TypeScript/Advanced/GenericsAndUtilityTypes';
import BestPractices from '@/routes/individual/modularized/Languages/TypeScript/Advanced/BestPractices';

const Advanced: RouteObject[] = [
  ...TypesAndGuards,
  ...GenericsAndUtilityTypes,
  ...BestPractices
];

export default Advanced;