import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/individual/modularized/Languages/Go/Basics/Fundamentals';
import CoreConcepts from '@/routes/individual/modularized/Languages/Go/Basics/CoreConcepts';
import Collections from '@/routes/individual/modularized/Languages/Go/Basics/Collections';

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...CoreConcepts,
  ...Collections,
];

export default Basics;
