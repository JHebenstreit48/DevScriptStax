import { RouteObject } from "react-router-dom";

import Basics from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/CSSRoutes/Basics";
import Advanced from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/CSSRoutes/Advanced";
import Tools from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/CSSRoutes/Tools";

const CSS: RouteObject[] = [
    ...Basics,
    ...Advanced,
    ...Tools
];

export default CSS;