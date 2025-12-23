import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/FrontEnd/Gatsby/Basics/Fundamentals";
import CoreConcepts from "@/routes/Individual/Granularized/FrontEnd/Gatsby/Basics/CoreConcepts";
import AssetsAndStyling from "@/routes/Individual/Granularized/FrontEnd/Gatsby/Basics/AssetsAndStyling";
import ConfigAndPlugins from "@/routes/Individual/Granularized/FrontEnd/Gatsby/Basics/ConfigAndPlugins";

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...CoreConcepts,
    ...AssetsAndStyling,
    ...ConfigAndPlugins,
];

export default Basics;