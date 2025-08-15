import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/JavaScriptRoutes/Basics/Fundamentals";
import ObjectsAndJSON from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/JavaScriptRoutes/Basics/ObjectsAndJSON";

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...ObjectsAndJSON,
];

export default Basics;