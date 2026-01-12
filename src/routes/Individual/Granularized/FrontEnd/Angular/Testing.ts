import { RouteObject } from "react-router-dom";

import Unit from "@/routes/Individual/Granularized/FrontEnd/Angular/Testing/Unit";
import E2E from "@/routes/Individual/Granularized/FrontEnd/Angular/Testing/E2E";


const Testing: RouteObject[] = [
    ...Unit,
    ...E2E,
];

export default Testing;