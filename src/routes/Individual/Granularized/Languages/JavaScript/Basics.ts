import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/Languages/JavaScript/Basics/Fundamentals";
import CoreConcepts from "@/routes/Individual/Granularized/Languages/JavaScript/Basics/CoreConcepts";
import DataTypes from "@/routes/Individual/Granularized/Languages/JavaScript/Basics/DataTypes";
import Arrays from "@/routes/Individual/Granularized/Languages/JavaScript/Basics/Arrays";
import ObjectsJSON from "@/routes/Individual/Granularized/Languages/JavaScript/Basics/ObjectsAndJSON";
import Functions from "@/routes/Individual/Granularized/Languages/JavaScript/Basics/Functions";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...CoreConcepts,
  ...DataTypes,
  ...Arrays,
  ...ObjectsJSON,
  ...Functions,
];

export default Basics;