import { RouteObject } from "react-router-dom";

import ExtendedSyntax from "@/routes/Individual/Granularized/FrontEnd/Markdown/Intermediate/ExtendedSyntax";
import InteractiveFeatures from "@/routes/Individual/Granularized/FrontEnd/Markdown/Intermediate/InteractiveFeatures";

const Intermediate: RouteObject[] = [
    ...ExtendedSyntax,
    ...InteractiveFeatures,
];

export default Intermediate;