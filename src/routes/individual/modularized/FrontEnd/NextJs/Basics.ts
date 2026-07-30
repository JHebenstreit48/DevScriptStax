import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/individual/modularized/FrontEnd/NextJs/Basics/Fundamentals';
import CoreConcepts from '@/routes/individual/modularized/FrontEnd/NextJs/Basics/CoreConcepts';

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...CoreConcepts,
];

export default Basics;