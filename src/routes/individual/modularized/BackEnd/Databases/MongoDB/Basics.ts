import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/individual/modularized/BackEnd/Databases/MongoDB/Basics/Fundamentals';
import CRUDOperations from '@/routes/individual/modularized/BackEnd/Databases/MongoDB/Basics/CRUDOperations';
import Mongoose from '@/routes/individual/modularized/BackEnd/Databases/MongoDB/Basics/Mongoose';

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...CRUDOperations,
  ...Mongoose,
];

export default Basics;