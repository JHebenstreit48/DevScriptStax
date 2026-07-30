import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/individual/modularized/BackEnd/Databases/PostgreSQL/Basics/Fundamentals';
import SetupAndConfiguration from '@/routes/individual/modularized/BackEnd/Databases/PostgreSQL/Basics/SetupAndConfiguration';
import CoreSQL from '@/routes/individual/modularized/BackEnd/Databases/PostgreSQL/Basics/CoreSQL';

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...SetupAndConfiguration,
  ...CoreSQL
];

export default Basics;