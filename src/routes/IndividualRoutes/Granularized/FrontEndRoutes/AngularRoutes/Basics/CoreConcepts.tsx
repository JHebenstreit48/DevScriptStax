import { RouteObject } from "react-router-dom";

import Components from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/AngularRoutes/Basics/CoreConcepts/Components";
import Modules from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/AngularRoutes/Basics/CoreConcepts/Modules";
import Services from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/AngularRoutes/Basics/CoreConcepts/Services";
import Routing from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/AngularRoutes/Basics/CoreConcepts/Routing";

const CoreConcepts: RouteObject[] = [
    ...Components,
    ...Modules,
    ...Services,
    ...Routing,
];

export default CoreConcepts;