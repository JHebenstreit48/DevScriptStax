import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/individual/modularized/FrontEnd/HTML/Basics/Fundamentals';
import Structure from '@/routes/individual/modularized/FrontEnd/HTML/Basics/Structure';
import FormsSemantics from '@/routes/individual/modularized/FrontEnd/HTML/Basics/FormsSemantics';

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...Structure,
  ...FormsSemantics,
];

export default Basics;