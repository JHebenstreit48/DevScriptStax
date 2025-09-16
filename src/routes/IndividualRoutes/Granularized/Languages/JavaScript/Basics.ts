import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/IndividualRoutes/Granularized/Languages/JavaScript/Basics/Fundamentals";
import CoreConcepts from "@/routes/IndividualRoutes/Granularized/Languages/JavaScript/Basics/CoreConcepts";
import DataTypes from "@/routes/IndividualRoutes/Granularized/Languages/JavaScript/Basics/DataTypes";
import Arrays from "@/routes/IndividualRoutes/Granularized/Languages/JavaScript/Basics/Arrays";
import ObjectsAndJSON from "@/routes/IndividualRoutes/Granularized/Languages/JavaScript/Basics/ObjectsAndJSON";
import Functions from "@/routes/IndividualRoutes/Granularized/Languages/JavaScript/Basics/Functions";

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...CoreConcepts,
    ...DataTypes,
    ...Arrays,
    ...ObjectsAndJSON,
    ...Functions
];

export default Basics;