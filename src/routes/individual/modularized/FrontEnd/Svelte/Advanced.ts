import { RouteObject } from "react-router-dom";

import Concepts from '@/routes/individual/modularized/FrontEnd/Svelte/Advanced/Concepts';
import BestPractices from '@/routes/individual/modularized/FrontEnd/Svelte/Advanced/BestPractices';

const Advanced: RouteObject[] = [
  ...Concepts,
  ...BestPractices,
];

export default Advanced;