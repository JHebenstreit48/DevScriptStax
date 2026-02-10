import { RouteObject } from "react-router-dom";

import TypesAndGuards from "@/routes/Individual/Granularized/Languages/TypeScript/Advanced/TypesAndGuards";
import GenericsAndUtilityTypes from "@/routes/Individual/Granularized/Languages/TypeScript/Advanced/GenericsAndUtilityTypes";
import BestPractices from "@/routes/Individual/Granularized/Languages/TypeScript/Advanced/BestPractices";

const Advanced: RouteObject[] = [
  ...TypesAndGuards,
  ...GenericsAndUtilityTypes,
  ...BestPractices
];

export default Advanced;