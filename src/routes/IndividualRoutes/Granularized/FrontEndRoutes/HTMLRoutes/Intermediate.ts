import { RouteObject } from "react-router-dom";

import MediaAndEmbeds from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/HTMLRoutes/Intermediate/MediaAndEmbeds";
import TabularData from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/HTMLRoutes/Intermediate/TabularData";
import HeadAndMeta from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/HTMLRoutes/Intermediate/HeadAndMeta";

const Intermediate: RouteObject[] = [
    ...MediaAndEmbeds,
    ...TabularData,
    ...HeadAndMeta
];

export default Intermediate;