import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/individual/modularized/Languages/Python/Basics/Fundamentals';
import CoreConcepts from '@/routes/individual/modularized/Languages/Python/Basics/CoreConcepts';

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...CoreConcepts,
];

export default Basics;