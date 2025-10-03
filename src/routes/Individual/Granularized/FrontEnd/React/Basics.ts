import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/Individual/Granularized/FrontEnd/React/Basics/Fundamentals';
import CoreConcepts from '@/routes/Individual/Granularized/FrontEnd/React/Basics/CoreConcepts';

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...CoreConcepts,
];

export default Basics;