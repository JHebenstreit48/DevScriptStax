import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/IndividualRoutes/Granularized/BackEnd/Databases/MongoDB/Basics/Fundamentals";
import Mongoose from "@/routes/IndividualRoutes/Granularized/BackEnd/Databases/MongoDB/Basics/Mongoose";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...Mongoose,
];

export default Basics;