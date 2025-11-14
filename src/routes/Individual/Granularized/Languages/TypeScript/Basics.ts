import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/Languages/TypeScript/Basics/Fundamentals";
import Types from "@/routes/Individual/Granularized/Languages/TypeScript/Basics/Types";

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...Types,
];

export default Basics;