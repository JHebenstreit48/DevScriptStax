import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/individual/modularized/BackEnd/Frameworks/Spring/SpringMain/Basics/Fundamentals';
import DIAndAOP from '@/routes/individual/modularized/BackEnd/Frameworks/Spring/SpringMain/Basics/DIAndAOP';
import Data from '@/routes/individual/modularized/BackEnd/Frameworks/Spring/SpringMain/Basics/Data';

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...DIAndAOP,
  ...Data,
];

export default Basics;
