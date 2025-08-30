import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/HTMLRoutes/Basics/Fundamentals";
import Structures from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/HTMLRoutes/Basics/Structure";
import FormsSemantics from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/HTMLRoutes/Basics/FormsSemantics";

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...Structures,
    ...FormsSemantics,
];

export default Basics;