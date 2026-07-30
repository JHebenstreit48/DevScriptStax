import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/individual/modularized/FrontEnd/Angular/Basics/Fundamentals';
import Structure from '@/routes/individual/modularized/FrontEnd/Angular/Basics/Structure';
import CoreConcepts from '@/routes/individual/modularized/FrontEnd/Angular/Basics/CoreConcepts';

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...Structure,
  ...CoreConcepts
];

export default Basics;