import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/BackEnd/Databases/MongoDB/Basics/Fundamentals";
import Mongoose from "@/routes/Individual/Granularized/BackEnd/Databases/MongoDB/Basics/Mongoose";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...Mongoose,
];

export default Basics;