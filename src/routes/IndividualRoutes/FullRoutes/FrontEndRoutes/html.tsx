import { RouteObject } from "react-router-dom";

import htmlBasics from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/HTMLRoutes/Basics";
import htmlIntermediate from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/HTMLRoutes/Intermediate";
import htmlAdvanced from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/HTMLRoutes/Advanced";

const htmlRoutes: RouteObject[] = [
  ...htmlBasics,
  ...htmlIntermediate,
  ...htmlAdvanced,
];

export default htmlRoutes;