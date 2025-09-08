import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/JavaScriptRoutes/Basics/Fundamentals";
import CoreConcepts from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/JavaScriptRoutes/Basics/CoreConcepts";
import DataTypes from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/JavaScriptRoutes/Basics/DataTypes";
import Arrays from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/JavaScriptRoutes/Basics/Arrays";
import ObjectsAndJSON from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/JavaScriptRoutes/Basics/ObjectsAndJSON";
import Functions from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/JavaScriptRoutes/Basics/Functions";

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...CoreConcepts,
    ...DataTypes,
    ...Arrays,
    ...ObjectsAndJSON,
    ...Functions
];

export default Basics;