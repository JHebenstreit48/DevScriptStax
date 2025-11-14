import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/Languages/TypeScript/Basics";
import Intermediate from "@/routes/Individual/Granularized/Languages/TypeScript/Intermediate";
// import Advanced from "@/routes/Individual/Granularized/Languages/TypeScript/Advanced";

const TypeScript: RouteObject[] = [
    ...Basics,
    ...Intermediate,
    // ...Advanced
];

export default TypeScript;