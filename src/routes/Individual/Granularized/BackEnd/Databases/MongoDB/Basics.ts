import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/BackEnd/Databases/MongoDB/Basics/Fundamentals";
import CRUDOperations from "@/routes/Individual/Granularized/BackEnd/Databases/MongoDB/Basics/CRUDOperations";
import Mongoose from "@/routes/Individual/Granularized/BackEnd/Databases/MongoDB/Basics/Mongoose";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...CRUDOperations,
  ...Mongoose,
];

export default Basics;