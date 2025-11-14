import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/Individual/Granularized/FrontEnd/React/Basics/Fundamentals';
import CoreConcepts from '@/routes/Individual/Granularized/FrontEnd/React/Basics/CoreConcepts';
import SetupAndStructure from "@/routes/Individual/Granularized/FrontEnd/React/Basics/SetupAndStructure";

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...CoreConcepts,
    ...SetupAndStructure
];

export default Basics;