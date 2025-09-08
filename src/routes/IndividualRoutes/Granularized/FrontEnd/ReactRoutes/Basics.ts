import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/IndividualRoutes/Granularized/FrontEndRoutes/ReactRoutes/Basics/Fundamentals';
import CoreConcepts from '@/routes/IndividualRoutes/Granularized/FrontEndRoutes/ReactRoutes/Basics/CoreConcepts';

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...CoreConcepts,
];

export default Basics;