import { RouteObject } from "react-router-dom";

import Concepts from "@/routes/Individual/Granularized/FrontEnd/Svelte/Advanced/Concepts";
import BestPractices from "@/routes/Individual/Granularized/FrontEnd/Svelte/Advanced/BestPractices";

const Advanced: RouteObject[] = [
  ...Concepts,
  ...BestPractices,
];

export default Advanced;