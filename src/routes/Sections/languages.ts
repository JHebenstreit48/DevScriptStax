import { RouteObject } from "react-router-dom";

import JavaScript from "@/routes/Individual/FullRoutes/Languages/javascript";
import TypeScript from "@/routes/Individual/FullRoutes/Languages/typescript";
import Python from "@/routes/Individual/FullRoutes/Languages/python";

const languages: RouteObject[] = [
    ...JavaScript,
    ...TypeScript,
    ...Python,
    
];

export default languages;