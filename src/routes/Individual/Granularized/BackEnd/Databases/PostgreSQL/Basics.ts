import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/Individual/Granularized/BackEnd/Databases/PostgreSQL/Basics/Fundamentals';
import SetupAndConfiguration from '@/routes/Individual/Granularized/BackEnd/Databases/PostgreSQL/Basics/SetupAndConfiguration';
import CoreSQL from '@/routes/Individual/Granularized/BackEnd/Databases/PostgreSQL/Basics/CoreSQL';

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...SetupAndConfiguration,
  ...CoreSQL
];

export default Basics;