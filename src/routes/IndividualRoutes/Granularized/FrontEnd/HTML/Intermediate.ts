import { RouteObject } from "react-router-dom";

import MediaAndEmbeds from "@/routes/IndividualRoutes/Granularized/FrontEnd/HTML/Intermediate/MediaAndEmbeds";
import TabularData from "@/routes/IndividualRoutes/Granularized/FrontEnd/HTML/Intermediate/TabularData";
import HeadAndMeta from "@/routes/IndividualRoutes/Granularized/FrontEnd/HTML/Intermediate/HeadAndMeta";

const Intermediate: RouteObject[] = [
    ...MediaAndEmbeds,
    ...TabularData,
    ...HeadAndMeta
];

export default Intermediate;