import { RouteObject } from "react-router-dom";

import FunctionsAndInterfaces from "@/routes/Individual/Granularized/Languages/TypeScript/Intermediate/FunctionsAndInterfaces";
import ClassesAndInheritance from "@/routes/Individual/Granularized/Languages/TypeScript/Intermediate/ClassesAndInheritance";

const Intermediate: RouteObject[] = [
    ...FunctionsAndInterfaces,
    ...ClassesAndInheritance,
];

export default Intermediate;