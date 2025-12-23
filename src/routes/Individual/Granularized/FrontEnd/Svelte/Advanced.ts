import { RouteObject } from "react-router-dom";

import BestPractices from "@/routes/Individual/Granularized/FrontEnd/Svelte/Advanced/BestPractices";
import Concepts from "@/routes/Individual/Granularized/FrontEnd/Svelte/Advanced/Concepts";

const Advanced: RouteObject[] = [
    ...BestPractices,
    ...Concepts,
];

export default Advanced;