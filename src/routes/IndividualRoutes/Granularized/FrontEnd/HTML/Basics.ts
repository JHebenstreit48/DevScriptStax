import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/IndividualRoutes/Granularized/FrontEnd/HTML/Basics/Fundamentals";
import Structures from "@/routes/IndividualRoutes/Granularized/FrontEnd/HTML/Basics/Structure";
import FormsSemantics from "@/routes/IndividualRoutes/Granularized/FrontEnd/HTML/Basics/FormsSemantics";

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...Structures,
    ...FormsSemantics,
];

export default Basics;