import { RouteObject } from "react-router-dom";

import Components from "@/routes/IndividualRoutes/Granularized/FrontEnd/Angular/Basics/CoreConcepts/Components";
import Modules from "@/routes/IndividualRoutes/Granularized/FrontEnd/Angular/Basics/CoreConcepts/Modules";
import Services from "@/routes/IndividualRoutes/Granularized/FrontEnd/Angular/Basics/CoreConcepts/Services";
import Routing from "@/routes/IndividualRoutes/Granularized/FrontEnd/Angular/Basics/CoreConcepts/Routing";

const CoreConcepts: RouteObject[] = [
    ...Components,
    ...Modules,
    ...Services,
    ...Routing,
];

export default CoreConcepts;